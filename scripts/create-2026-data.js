const fs = require('fs');
const path = require('path');

// 2026 Principles Course speaker list (confirmed speakers + TBA placeholders)
const PC_2026_SPEAKERS = [
  'David Casaceli',
  'J. Riley Edwards',
  'TBA_Session_3',
  'Kevin Oldknow',
  'TBA_Session_5',
  'Richard Stock',
  'Matthew Dick'
];

// Updated bios from uploaded documents
const UPDATED_BIOS = {
  'Kevin Oldknow': {
    bio1: "Dr. Kevin Oldknow is an Associate Professor at Simon Fraser University, and Principal Investigator in the Vehicle Track Interaction Research Group. Kevin has researched and published in the areas of dynamics and controls, wheel-rail and vehicle-track interaction, tribology and friction control, and engineering education. He also has more than 20 years of industrial experience, primarily in railway systems.",
    bio2: "Kevin first attended WRI in 2005, and has enjoyed being involved in the conference in a variety of capacities since then."
  },
  'Matthew Dick': {
    bio1: "Matthew Dick is the Head of Rail Strategy & Development at Engineering Systems, Inc. (ESi). In the current role, Matthew is leading ESi's development of expanded service and solution offerings supporting railway organizations in the areas of investigations, testing, modeling, training, research, and engineering. Matthew earned both his B.S and M.S. in Mechanical Engineering from the University of Nebraska - Lincoln and holds a professional engineering license. He has been actively involved with railroad research and technology for over 25 years, specializing in vehicle/track interaction, derailments, metallurgy, railcar bearing research, and automated technology.",
    bio2: "Throughout his career, Matthew has investigated approximately 250 derailments and train collisions, including serving as a railroad representative onsite subject matter expert during the 2008 Chatsworth Collision NTSB investigation. His contribution to railway safety improvements includes leading the delivery of North America's first Autonomous Track Geometry Measurement System (ATGMS) and deploying the V/TI Clusters Artificial Intelligence algorithm, which both have significantly reduced track-caused derailments. Matthew served as Chair of AREMA Committee Two \"Track Measurement and Assessment Systems\" and the ASME Rail Transportation Division."
  }
};

// Session information for PC 2026
const PC_SESSION_INFO = {
  'David Casaceli': {
    sessions: ['SESSION 1', 'SESSION 8'],
    topics: ['Case Study Introduction and Principles Course Overview', 'Case Study Wrap Up and Discussion'],
    title: 'Railroad Accident Investigator',
    company: 'National Transportation Safety Board',
    role: 'Moderator'
  },
  'J. Riley Edwards': {
    sessions: ['SESSION 2'],
    topics: ['Track Structures and Components'],
    title: 'Assistant Professor',
    company: 'University of Illinois Urbana-Champaign'
  },
  'TBA_Session_3': {
    name: 'To be announced',
    sessions: ['SESSION 3'],
    topics: ['Vehicle Types, Suspensions and Components'],
    title: '',
    company: '',
    imageSrc: '/placeholder-male.jpg'
  },
  'Kevin Oldknow': {
    sessions: ['SESSION 4'],
    topics: ['Wheel-Rail Contact: an Introduction'],
    title: 'Associate Professor',
    company: 'Simon Fraser University'
  },
  'TBA_Session_5': {
    name: 'To be announced',
    sessions: ['SESSION 5'],
    topics: ['Vehicle-Track Interaction & Dynamics'],
    title: '',
    company: '',
    imageSrc: '/placeholder-male.jpg'
  },
  'Richard Stock': {
    sessions: ['SESSION 6'],
    topics: ['Wheel-Rail Damage Mechanisms'],
    title: 'Global Head of Rail Solutions',
    company: 'Plasser & Theurer'
  },
  'Matthew Dick': {
    sessions: ['SESSION 7'],
    topics: ['Vehicle-Track Measurement Technologies'],
    title: 'Head of Rail Strategy & Development',
    company: 'Engineering Systems, Inc. (ESi)',
    imageSrc: '/matthew-dick.jpg'
  }
};

function loadJSON(filename) {
  const filepath = path.join(__dirname, '..', 'storyblok-exports-2025', filename);
  return JSON.parse(fs.readFileSync(filepath, 'utf8'));
}

function saveData(filename, data, varName) {
  const outputDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const output = `// Auto-generated for WRI 2026
// Generated on: ${new Date().toISOString()}

export const ${varName} = ${JSON.stringify(data, null, 2)};
`;

  const filepath = path.join(outputDir, filename);
  fs.writeFileSync(filepath, output);
  console.log(`✓ Created ${filename}`);
}

function normalizeImagePath(imageSrc) {
  if (!imageSrc) return '/placeholder-male.jpg';
  // If already a path starting with /, return as-is
  if (imageSrc.startsWith('/')) return imageSrc;
  // If it's a full URL, extract filename
  if (imageSrc.startsWith('http')) {
    const filename = imageSrc.split('/').pop();
    return `/${filename}`;
  }
  // Otherwise, assume it's just a filename - images are in /public/ directly
  return `/${imageSrc}`;
}

function findSpeakerByName(data, searchName) {
  return data.find(item => {
    const name = item.content?.name || item.name || '';
    return name.toLowerCase().includes(searchName.toLowerCase()) ||
      searchName.toLowerCase().includes(name.toLowerCase());
  });
}

// Process Heavy Haul (use all 2025 data as-is for 2026)
function processHeavyHaul() {
  console.log('\nProcessing Heavy Haul speakers...');

  const speakersData = loadJSON('speakers-hh-2025.json');
  const biosData = loadJSON('bios-abstracts-hh-2025.json');

  // Extract content only
  const speakers = speakersData.map(item => ({
    name: item.content.name,
    company: item.content.company,
    topic: item.content.topic,
    imageSrc: normalizeImagePath(item.content.imageSrc),
    pdfFileName: item.content.pdfFileName || ''
  }));

  const bios = biosData.map(item => ({
    name: item.content.name,
    company: item.content.company,
    title: item.content.title || '',
    topic: item.content.topic,
    imageSrc: normalizeImagePath(item.content.imageSrc),
    bio1: item.content.bio1 || '',
    bio2: item.content.bio2 || '',
    abstract1: item.content.abstract1 || '',
    abstract2: item.content.abstract2 || ''
  }));

  saveData('speakers-hh-2026.js', speakers, 'speakersHH2026');
  saveData('bios-abstracts-hh-2026.js', bios, 'biosAbstractsHH2026');

  console.log(`✓ Heavy Haul: ${speakers.length} speakers, ${bios.length} bios`);
}

// Process Principles Course (filter to 2026 list)
function processPrinciplesCourse() {
  console.log('\nProcessing Principles Course speakers...');

  const speakersData = loadJSON('speakers-pc-2025.json');
  const biosData = loadJSON('bios-abstracts-pc-2025.json');

  const speakers = [];
  const bios = [];

  PC_2026_SPEAKERS.forEach(speakerName => {
    // Find speaker in 2025 data
    const speakerItem = findSpeakerByName(speakersData, speakerName);
    const bioItem = findSpeakerByName(biosData, speakerName);

    const sessionInfo = PC_SESSION_INFO[speakerName] || {};
    const updatedBio = UPDATED_BIOS[speakerName] || {};

    if (speakerItem || sessionInfo.name || sessionInfo.company) {
      // Determine image path - prefer sessionInfo override, then 2025 data, then placeholder
      const imagePath = sessionInfo.imageSrc ||
        (speakerItem ? normalizeImagePath(speakerItem.content.imageSrc) : '/placeholder-male.jpg');

      // Use display name from sessionInfo if available (for TBA entries)
      const displayName = sessionInfo.name || speakerName;

      // Create speaker entry - use sessionInfo to override stale 2025 data
      speakers.push({
        name: displayName,
        company: sessionInfo.company || speakerItem?.content?.company || '',
        title: sessionInfo.title || speakerItem?.content?.title || '',
        imageSrc: imagePath,
        topic: sessionInfo.topics ? sessionInfo.topics[0] : (speakerItem?.content?.topic || ''),
        session: sessionInfo.sessions ? sessionInfo.sessions[0] : '',
        role: sessionInfo.role || ''
      });

      // Create bio entry (combine all sessions for speakers with multiple sessions)
      bios.push({
        name: displayName,
        company: sessionInfo.company || bioItem?.content?.company || '',
        title: sessionInfo.title || bioItem?.content?.title || '',
        imageSrc: imagePath,
        bio1: updatedBio.bio1 || bioItem?.content?.bio1 || '',
        bio2: updatedBio.bio2 || bioItem?.content?.bio2 || '',
        topic: sessionInfo.topics ? sessionInfo.topics.join(' / ') : (bioItem?.content?.topic || ''),
        sessions: sessionInfo.sessions || []
      });
    } else {
      console.warn(`⚠ Speaker not found in 2025 data: ${speakerName}`);

      // Create placeholder with session info
      if (sessionInfo.company) {
        speakers.push({
          name: speakerName,
          company: sessionInfo.company,
          title: sessionInfo.title || '',
          imageSrc: '/placeholder-male.jpg',
          topic: sessionInfo.topics ? sessionInfo.topics[0] : '',
          session: sessionInfo.sessions ? sessionInfo.sessions[0] : '',
          role: sessionInfo.role || ''
        });

        bios.push({
          name: speakerName,
          company: sessionInfo.company,
          title: sessionInfo.title || '',
          imageSrc: '/placeholder-male.jpg',
          bio1: updatedBio.bio1 || '',
          bio2: updatedBio.bio2 || '',
          topic: sessionInfo.topics ? sessionInfo.topics.join(' / ') : '',
          sessions: sessionInfo.sessions || []
        });
      }
    }
  });

  saveData('speakers-pc-2026.js', speakers, 'speakersPC2026');
  saveData('bios-abstracts-pc-2026.js', bios, 'biosAbstractsPC2026');

  console.log(`✓ Principles Course: ${speakers.length} speakers, ${bios.length} bios`);
}

// Run processing
console.log('Creating 2026 static data files...');
processHeavyHaul();
processPrinciplesCourse();
console.log('\n✓ All 2026 data files created in /src/data/');
