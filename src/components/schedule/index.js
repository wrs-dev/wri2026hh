'use client';

import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { BackgroundImage } from '@/components/background-image';
import { ScheduleContainer } from '@/components/schedule-container';

const schedule = [
  {
    date: 'Tuesday, May 21, 2024 - Rail Transit Seminar',
    timeSlots: [
      {
        description: 'On-Site Registration',
        start: '7:00am',
        end: '6:30pm',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Breakfast in the ExpoZone',
        start: '7:00am',
        end: '7:50am',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Welcome and Introductory Remarks',
        start: '7:55am',
        end: '8:10am',
        name: 'Gordon Bachinsky',
        title: 'Founder',
        company: 'Wheel Rail Seminars',
      },
      {
        description: 'A Technical Analysis of Rail Grinding and Milling',
        start: '8:20am',
        end: '8:40am',
        name: 'Richard Stock',
        title: 'Global Head of Rail Solutions',
        company: 'Plasser & Theurer',
      },
      {
        description: 'Wheel-Rail Dynamics and Performance of Vehicles with Steerable Bogies at Vancouver Skytrain',
        start: '8:45am',
        end: '9:15am',
        name: 'Teodor Pirvoaica',
        title: 'Senior Mechanical Engineer, Engineering Assets',
        company: 'BC Rapid Transit Company',
        name2: 'Lei Chen',
        title2: 'Principal Engineer, Mechanical',
        company2: 'BC Rapid Transit Company',
        name3: 'Alexandre Woelfle',
        title3: 'Project Engineer',
        company3: 'National Research Council of Canada',
        session: 'S - 8',
      },
      {
        description: 'Corrective Rail Grinding on Cleveland RTA’s Red Line',
        start: '9:30am',
        end: '10:00am',
        name: 'Brad Kerchof',
        title: 'Senior Track Engineer',
        company: 'Advanced Rail Management/Global Rail Group',
      },
      {
        description: 'Presentation of the annual Worth Award',
        start: '10:45am',
        end: '11:15am',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Studs and Squats: The Current Status',
        start: '11:20am',
        end: '11:50am',
        name: 'Stuart Grassie',
        title: 'Consultant',
        company: '',
      },
      {
        description: 'Lunch in the ExpoZone',
        start: '12:00pm',
        end: '12:50pm',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Practical Issues Relating to the Implementation of Friction Management Systems',
        start: '1:00pm',
        end: '1:30pm',
        name: 'Davey Mitchell',
        title: 'Commercial Manager, Friction Management',
        company: 'L.B. Foster Rail Technologies',
      },
      {
        description: 'Focus topic: Wheel/Rail Interaction and Vehicle Design',
        start: '1:45pm',
        end: '5:10pm',
        name: 'Rail Transit Focus Topic moderated by Briony Croft',
        title: '',
        company: 'Director, Sahaya Consulting (Canada) and Acoustic Studio (Australia)',
      },
      {
        description: 'Developing Wheel/Rail Interaction Study requirements for a new Light Rail Vehicle Contract in North America',
        start: '1:55pm',
        end: '2:25pm',
        name: 'Shankar Rajaram',
        title: 'Executive Project Director, Revenue Vehicles - Operations Department',
        company: 'Sound Transit',
      },
      {
        description: 'Vehicle Design — Simulation Methods Using Measured Track Datasets',
        start: '2:40pm',
        end: '3:10pm',
        name: 'Kevin McClain',
        title: 'Director of Mechanical System Engineering',
        company: 'Siemens Mobility Inc.',
      },
      {
        description: 'In-Service Monitoring of Wheel Wear to Determine Critical Factors and Optimize Maintenance Strategies',
        start: '3:55pm',
        end: '4:25pm',
        name: 'Beñat Sarasola',
        title: 'Vehicle-Track Dynamics Engineer',
        company: 'CAF/Spain',
      },
      {
        description: 'A Case Study: Analysis of Ground Vibrations Produced by LRVs',
        start: '4:40pm',
        end: '5:10pm',
        name: 'Sergio Perez',
        title: 'Manager of Carbody & Calculation in the Truck Engineering and Development Department',
        company: 'Stadler Valencia',
      },
      {
        description: 'Closing Remarks',
        start: '5:25pm',
        end: '5:35pm',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Rail Transit Reception in the ExpoZone',
        start: '6:00pm',
        end: '7:30pm',
        name: '',
        title: '',
        company: '',
      },
    ],
  },
  {
    date: 'Wednesday, May 22, 2024 - Principles of Wheel/Rail Interaction',
    timeSlots: [
      {
        description: "On-Site Registration - Loews Chicago O'Hare Hotel",
        start: '7:00am',
        end: '6:30pm',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Breakfast in the ExpoZone',
        start: '7:00am',
        end: '7:50AM',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Welcome and Introductory Remarks',
        start: '7:55am',
        end: '8:10am',
        name: 'Gordon Bachinsky',
        title: 'Founder',
        company: 'Wheel Rail Seminars',
      },
      {
        description: 'Introduction to the Principles of Wheel/Rail Interaction',
        start: '8:15am',
        end: '8:25am',
        name: 'Kevin Oldknow',
        title: 'Associate Professor and Director - Vehicle Track Interaction Program',
        company: 'Simon Fraser University',
        session: 'S - 1',
      },
      {
        description: 'Introduction to Wheel/Rail Contact Mechanics',
        start: '8:25am',
        end: '9:00am',
        name: 'Eric Magel',
        title: 'Principal Consultant',
        company: 'Advanced Rail Management / Global Rail Group',
        session: 'S - 2',
      },
      {
        description: 'Track Structures and Components',
        start: '9:15am',
        end: '9:50am',
        name: 'Gary Wolf',
        title: 'President',
        company: 'Wolf Railway Consulting, LLC.',
        session: 'S - 3',
      },
      {
        description: 'Vehicle Types, Suspensions and Components',
        start: '10:30am',
        end: '11:05am',
        name: 'Elton Toma',
        title: 'Senior Engineer',
        company: 'National Research Council of Canada',
        session: 'S - 4',
      },
      {
        description: 'Vehicle/Track Interaction and Dynamics',
        start: '11:20am',
        end: '11:55am',
        name: 'Alexandre Woelfle',
        title: 'Engineer, Transportation Engineering Centre',
        company: 'National Research Council of Canada',
        session: 'S - 5',
      },
      {
        description: 'Lunch in the ExpoZone',
        start: '12:05pm',
        end: '1:05pm',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Fundamentals of Wheel/Rail Noise and Vibration',
        start: '1:10pm',
        end: '1:45pm',
        name: 'Briony Croft',
        title: 'Director',
        company: 'Sahaya Consulting (Canada) and Acoustic Studio (Australia)',
        session: 'S - 6',
      },
      {
        description: 'Wheel/Rail Damage Mechanisms',
        start: '2:00pm',
        end: '2:35pm',
        name: 'Richard Stock',
        title: 'Global Head of Rail Solutions',
        company: 'Plasser & Theurer',
        session: 'S - 7',
      },
      {
        description: 'Principles of Wheel/Rail Friction Management',
        start: '3:25pm',
        end: '4:00pm',
        name: 'Louisa Stanlake',
        title: 'Global Product Manager - Consumable Products',
        company: 'L.B. Foster Technologies',
        name2: 'Andrew Little',
        title2: 'Friction Management Applications Specialist',
        company2: 'L.B. Foster Technologies',
        session: 'S - 8',
      },
      {
        description: 'Vehicle/Track Measurement Technologies',
        start: '4:15pm',
        end: '4:50pm',
        name: 'Matthew Dick',
        title: 'Chief of Strategy & Development',
        company: 'ENSCO, Inc.',
        session: 'S - 9',
      },
      {
        description: 'Principles Course Recap',
        start: '5:05pm',
        end: '5:15pm',
        name: 'Kevin Oldknow',
        title: '',
        company: '',
        session: 'S - 10',
      },
      {
        description: 'Closing Remarks',
        start: '5:15pm',
        end: '5:30pm',
        name: 'Gordon Bachinsky',
        title: '',
        company: '',
        session: '',
      },
      {
        description: 'Heavy Haul Welcome Reception',
        start: '6:00pm',
        end: '7:30pm',
        name: '',
        title: '',
        company: '',
        session: '',
      },
    ],
  },
  {
    date: 'Thursday, May 23, 2024 - Heavy Haul Seminar Day 1',
    timeSlots: [
      {
        description: "On-Site Registration - Loews Chicago O'Hare Hotel",
        start: '7:00am',
        end: '5:30pm',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Breakfast in the ExpoZone',
        start: '7:00am',
        end: '7:50am',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Welcome and Introductory Remarks',
        start: '7:55am',
        end: '8:10am',
        name: 'Gordon Bachinsky',
        title: 'Founder',
        company: 'Wheel Rail Seminars',
      },
      {
        description: 'Introduction: Recipient of the annual Worth Award',
        start: '8:10am',
        end: '8:20am',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Longitudinal Forces Directed into the Wheel Rail Interface',
        start: '8:30am',
        end: '9:00am',
        name: 'Jonathan Sunde',
        title: 'Chief Engineer and Site Director',
        company: 'Strato, Inc.',
        session: 'S-1',
      },
      {
        description: 'InfoZone Session 1',
        start: '9:20am',
        end: '9:50am',
        name: '',
        title: '',
        company: '',
        session: 'S-2-IZ',
      },
      {
        description: 'InfoZone Session 2',
        start: '9:55am',
        end: '10:25am',
        name: '',
        title: '',
        company: '',
        session: 'S-3-IZ',
      },
      {
        description: 'Track Geometry: Quality vs. Performance?',
        start: '11:05am',
        end: '11:35am',
        name: 'Fabian Hansmann',
        title: 'Head of Marketing',
        company: 'Plasser & Theurer',
        session: 'S-4',
      },
      {
        description: 'The Intersection of Culture and Technology Implementation',
        start: '11:50am',
        end: '12:20pm',
        name: 'Corina Moore',
        title: 'Executive-Vice President of Transportation and Infrastructure',
        company: 'WSP in Canada',
        session: 'S-5',
      },
      {
        description: 'Lunch in the ExpoZone',
        start: '12:30pm',
        end: '1:30pm',
        name: '',
        title: '',
        company: '',
      },
      {
        description: 'Case study: A Derailment Investigation — Was the Right Cause Found?',
        start: '1:35pm',
        end: '2:05pm',
        name: 'Brad Kerchof',
        title: 'Senior Track Engineer',
        company: 'Advanced Rail Management/Global Rail Group',
        session: 'S-6',
      },
      {
        description: 'InfoZone Session 3',
        start: '2:25pm',
        end: '2:55pm',
        name: '',
        title: '',
        company: '',
        session: 'S-7-IZ',
      },
      {
        description: 'InfoZone Session 4',
        start: '3:00pm',
        end: '3:30pm',
        name: '',
        title: '',
        company: '',
        session: 'S-8-IZ',
      },
      {
        description: 'Examining the Role of Wheel/Rail Interaction in a Unit Train Derailment',
        start: '4:05pm',
        end: '4:35pm',
        name: 'George Fowler',
        title: '',
        company: 'Transportation Safety Board of Canada (Retired)',
        session: 'S-9',
      },
      {
        description: 'Current Status and Trends in Track Caused Derailments with Emphasis on Causes Related to the Wheel/Rail Interface',
        start: '4:55pm',
        end: '5:25pm',
        name: 'Gary Wolf',
        title: 'President',
        company: 'Wolf Railway Consulting, LLC',
        session: 'S-10',
      },
      {
        description: 'Closing Remarks',
        start: '5:35pm',
        end: '5:45pm',
        name: 'Gordon Bachinsky',
        title: 'Founder',
        company: 'Wheel Rail Seminars',
      },
      {
        description: 'Grand Buffet Reception',
        start: '6:00pm',
        end: '8:30pm',
        name: '',
        title: '',
        company: '',
      },
    ],
  },
  {
    date: 'Friday, May 24, 2024 - Heavy Haul Seminar Day 2',
    timeSlots: [
      {
        name: '',
        description: "On-Site Registration - Loews Chicago O'Hare Hotel",
        start: '7:00am',
        end: '5:00pm',
      },
      {
        name: '',
        description: 'Breakfast in the ExpoZone',
        start: '7:00am',
        end: '7:50am',
      },
      {
        name: 'Gordon Bachinsky',
        description: 'Welcome and Introductory Remarks',
        start: '7:55am',
        end: '8:15am',
        title: 'Founder',
        company: 'Wheel Rail Seminars',
      },
      {
        name: 'Cory Hogan',
        description: 'Derailment Modeling & Simulation',
        start: '8:20am',
        end: '8:50am',
        title: 'Director - Vehicle Dynamics Studies',
        company: 'ENSCO, Inc.',
        session: 'S-11',
      },
      {
        name: '',
        description: 'InfoZone Session 5',
        start: '9:10am',
        end: '9:40am',
        session: 'S-12-IZ',
      },
      {
        name: '',
        description: 'InfoZone - Open House',
        start: '9:45am',
        end: '10:15am',
        session: 'S--IZ',
      },
      {
        name: 'Mark Montoya',
        description: 'Latest Developments in Understanding Track Alignment & Rate of Change',
        start: '10:55am',
        end: '11:25am',
        title: 'Manager of Track Maintenance & Engineering',
        company: 'Union Pacific Railroad',
        name2: 'Blake Smith',
        title2: 'Manager 1 Track Compliance, Southern Region',
        company2: 'Union Pacific Railroad',
        name3: 'Yi Wang',
        title3: 'PhD Candidate',
        company3: 'Simon Fraser University',
        session: 'S-13',
      },
      {
        name: 'Dan Hampton',
        description: 'Reducing The Number of Non-Testable Surface-Initiated Rail Defects Through Dedicated Rail Grinding',
        start: '11:40am',
        end: '12:10pm',
        title: 'Director of Contract Services',
        company: 'CSX Transportation',
        name2: 'Frank Stillman',
        title2: 'Vice President of Service Excellence',
        company2: 'Sperry Rail Service',
        session: 'S-14',
      },
      {
        description: 'Lunch in the ExpoZone',
        start: '12:20pm',
        end: '1:20pm',
        name: '',
        title: '',
        company: '',
      },
      {
        name: 'Eric Magel',
        description: 'Overview: Observations on the effectiveness of various grinding programs',
        start: '1:25pm',
        end: '1:55pm',
        title: 'Principal Consultant',
        company: 'Advanced Rail Management / Global Rail Group',
        session: 'S-15',
      },
      {
        name: 'Marco Santoro',
        description: 'Implementing, Sustaining and Validating Effective Friction Management in Heavy Haul',
        start: '2:15pm',
        end: '2:45pm',
        title: 'Global Fiction Management Applications Manager',
        company: 'LB Foster Company',
        session: 'S-16',
      },
      {
        name: '',
        description: 'Closing Remarks',
        start: '3:00pm',
        end: '3:10pm',
      },
      {
        name: '',
        description: 'InfoZone raffle',
        start: '3:15pm',
        end: '',
      },
      {
        name: '',
        description: 'End of the Line Reception',
        start: '3:30pm',
        end: '5:00pm',
      },
    ],
  },
];

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)');

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(smMediaQuery);
    smMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <Tab.Group
      as="div"
      className="grid max-w-2xl grid-cols-1 mx-auto gap-y-6 sm:grid-cols-2 lg:hidden"
      orientation={tabOrientation}
    >
      <Tab.List className="flex pb-4 pl-4 -mx-4 overflow-x-auto gap-x-4 gap-y-10 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {schedule.map((day, dayIndex) => (
          <Tab as="div" key={day.date} className="ui-not-focus-visible:outline-none">
            {({ selected }) => (
              <div
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  !selected && 'opacity-70'
                )}
              >
                <DaySummary day={day} />
              </div>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel key={day.date} className="ui-not-focus-visible:outline-none">
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="mt-20 text-2xl font-semibold tracking-tight text-wri-dark-blue">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-wri-dark-blue">
        {day.summary}
      </p>
    </>
  );
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'rounded-3xl space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-wri-dark-blue/5',
        'sm:backdrop-blur' // Apply blur only on sm and larger screens
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => {
        const uniqueKey = `${day.date}-${timeSlot.start || timeSlotIndex}-${timeSlot.end || timeSlotIndex}`;
        return (
          <li
            key={uniqueKey}
            aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start || 'N/A'} - ${timeSlot.end || 'N/A'} CDT`}
          >
            {timeSlotIndex > 0 && (
              <div className="w-48 h-px mx-auto mb-8 bg-slate-800/10" />
            )}
            <h4 className="text-lg font-semibold tracking-tight text-wri-green">
              {timeSlot.name}
            </h4>
            <h5 className="tracking-tight text-small text-wri-gray">
              {timeSlot.title}
            </h5>
            <h5 className="tracking-tight text-small text-wri-gray">
              {timeSlot.company}
            </h5>
            <h4 className="text-lg font-semibold tracking-tight text-wri-green">
              {timeSlot.name2}
            </h4>
            <h5 className="tracking-tight text-small text-wri-gray">
              {timeSlot.title2}
            </h5>
            <h5 className="tracking-tight text-small text-wri-gray">
              {timeSlot.company2}
            </h5>
            <h4 className="text-lg font-semibold tracking-tight text-wri-green">
              {timeSlot.name3}
            </h4>
            <h5 className="tracking-tight text-small text-wri-gray">
              {timeSlot.title3}
            </h5>
            <h5 className="tracking-tight text-small text-wri-gray">
              {timeSlot.company3}
            </h5>
            {timeSlot.description && (
              <p className="mt-1 text-xl font-semibold tracking-tight text-wri-dark-blue">
                {timeSlot.description}
              </p>
            )}
            <p className="mt-1 font-mono text-sm text-wri-red">
              <time dateTime={`${day.dateTime}T${timeSlot.start || '00:00'}-08:00`}>
                {timeSlot.start || 'N/A'}
              </time>{' '}
              -{' '}
              <time dateTime={`${day.dateTime}T${timeSlot.end || '00:00'}-08:00`}>
                {timeSlot.end || 'N/A'}
              </time>{' '}
              CDT
            </p>
          </li>
        );
      })}
    </ol>
  );
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.date}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <ScheduleContainer className="relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="text-4xl font-medium tracking-tighter text-wri-gray font-display sm:text-5xl">
            WRI 2024 Schedule at a Glance
          </h2>
          <h3 className="mt-4 text-xl tracking-tighter text-wri-gray font-display sm:text-2xl">
            Conference Location:
          </h3>
          <h3 className="mt-4 text-xl tracking-tighter text-wri-gray font-display sm:text-2xl">
          Loews Chicago O'Hare
          </h3>
          <h3 className="mt-4 text-xl tracking-tighter text-wri-gray font-display sm:text-2xl">
          5300 N. River Road, Rosemont, IL 60018
          </h3>
          <p className="mt-4 text-2xl tracking-tight text-wri-green font-display">
            Attend one, two or all three seminars.
          </p>
        </div>
      </ScheduleContainer>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <div className="relative z-10 max-w-2xl mx-auto">
          {' '}
          <h2 className="mx-8 mt-20 text-2xl font-semibold tracking-tight text-wri-dark-blue">
            Monday, May 20, 2024 - CTA Tour (Full - at capacity)
          </h2>
          <div className="px-10 py-6 mx-4 mt-10 space-y-8 text-left shadow-xl rounded-3xl bg-white/60 shadow-wri-dark-blue/5 sm:backdrop-blur">
            <div className="flex items-center py-2">
              <p className="w-24 text-wri-red">12:30pm</p>
              <span className="text-xl font-bold text-wri-dark-blue">
                Depart Chicago Loews O'Hare Hotel
              </span>
            </div>
            <div className="flex items-center py-2">
              <p className="w-24 text-wri-red">1:00pm</p>
              <span className="text-xl font-bold text-wri-dark-blue">
                Arrive at Skokie Shops
              </span>
            </div>
            <div className="flex items-center py-2">
              <p className="w-24 text-wri-red">2:00pm</p>
              <span className="text-xl font-bold text-wri-dark-blue">
                Leave Skokie Shops
              </span>
            </div>
            <div className="flex items-center py-2">
              <p className="w-24 text-wri-red">2:30pm</p>
              <span className="text-xl font-bold text-wri-dark-blue">
                Arrive at Ardmore for RPM tour
              </span>
            </div>
            <div className="flex items-center py-2">
              <p className="w-24 text-wri-red">4:00pm - 6:00pm</p>
              <span className="text-xl font-bold text-wri-dark-blue">
                On-Site registration at Chicago Loews O'Hare Hotel
              </span>
            </div>
            <div className="flex items-center py-2">
              <p className="w-24 text-wri-red">4:30pm</p>
              <span className="text-xl font-bold text-wri-dark-blue">
                Depart for return ride to Chicago Loews O'Hare Hotels
              </span>
            </div>
          </div>
        </div>
        <ScheduleContainer className="relative z-10">
          <ScheduleTabbed />
          <ScheduleStatic />
        </ScheduleContainer>
      </div>
    </section>
  );
}
