require('dotenv').config({ path: '.env.local' });
const StoryblokClient = require('storyblok-js-client');
const fs = require('fs');
const path = require('path');

if (!process.env.STORYBLOK_API_TOKEN) {
  console.error('Error: STORYBLOK_API_TOKEN not found in .env.local');
  process.exit(1);
}

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  region: 'us',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

const outputDir = path.join(__dirname, '..', 'storyblok-exports-2025');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function exportContent(pathPrefix, filename) {
  try {
    console.log(`Fetching: ${pathPrefix}...`);
    const response = await Storyblok.get('cdn/stories', {
      starts_with: pathPrefix,
      version: 'published',
      per_page: 100,
    });

    const data = response.data.stories.map(story => ({
      slug: story.slug,
      name: story.name,
      content: story.content,
    }));

    const filepath = path.join(outputDir, filename);
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));

    console.log(`✓ Saved: ${filename} (${data.length} items)`);
    return data;
  } catch (error) {
    console.error(`✗ Error exporting ${pathPrefix}:`, error.message);
    return null;
  }
}

async function exportAll() {
  console.log('Exporting 2025 data from Storyblok...\n');

  // Export Heavy Haul (keep all for 2026)
  await exportContent('wri-conferences/speaker-cards-hh/', 'speakers-hh-2025.json');
  await exportContent('wri-conferences/bios-abstract-hh', 'bios-abstracts-hh-2025.json');

  // Export Principles Course (will filter later)
  await exportContent('wri-conferences/speaker-cards-pc/', 'speakers-pc-2025.json');
  await exportContent('wri-conferences/bios-abstract-pc', 'bios-abstracts-pc-2025.json');

  console.log('\n✓ Export complete!');
}

exportAll().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
