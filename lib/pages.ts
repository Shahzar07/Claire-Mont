import { site } from './site-config';

export type Action = {
  href: string;
  label: string;
  variant?: 'flame' | 'outline' | 'primary' | 'ghost-light';
  icon?: string;
};

export type ImageRef = { src: string; alt: string; width: number; height: number };

export type Card = {
  href: string;
  title: string;
  text: string;
  icon?: string;
  image?: ImageRef;
};

type Feature = { icon: string; title: string; text: string };
type Step = { title: string; text: string };
type FaqItem = { q: string; a: string };

export type Section =
  | { type: 'prose'; paragraphs: string[] }
  | { type: 'features'; heading?: string; intro?: string; items: Feature[] }
  | { type: 'cards'; heading?: string; intro?: string; columns?: 2 | 3; items: Card[] }
  | { type: 'steps'; heading?: string; intro?: string; items: Step[] }
  | { type: 'checklist'; heading?: string; intro?: string; items: string[] }
  | { type: 'note'; text: string }
  | { type: 'faq'; heading?: string; intro?: string; items: FaqItem[] }
  | { type: 'gallery'; heading?: string; intro?: string; items: (ImageRef & { caption: string })[] }
  | { type: 'reviews'; heading?: string; intro?: string }
  | { type: 'contact' }
  | { type: 'refer' }
  | { type: 'stats'; items: { value: string; unit?: string; label: string }[] }
  | { type: 'split'; heading?: string; image: ImageRef; paragraphs: string[] }
  | { type: 'plans'; heading?: string; intro?: string; items: { name: string; forWho: string; points: string[]; href: string; cta: string; featured?: boolean }[] }
  | { type: 'legal'; blocks: { heading: string; paragraphs: string[] }[] }
  | { type: 'areas' };

export type Crumb = { href?: string; label: string };

export type Page = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  image?: ImageRef;
  crumbs: Crumb[];
  actions?: Action[];
  sections: Section[];
  cta?: { eyebrow?: string; title: string; text: string; actions?: Action[] } | null;
  /** Draft pages stay in the repo but are not built, listed or linked. Remove this flag to publish. */
  draft?: boolean;
};

const phoneLink = `[${site.phone}](${site.phoneHref})`;
const emailLink = `[${site.email}](mailto:${site.email})`;
const whatsAppLink = `[WhatsApp](${site.whatsappUrl})`;

const img = {
  bedroom: { src: '/assets/images/home/hero-bedroom-ac.jpg', alt: 'Calm bedroom with navy walls and a wall-mounted air conditioning unit above the bed', width: 1600, height: 1067 },
  process: { src: '/assets/images/home/process-home.jpg', alt: 'Bright bedroom and study with a slim wall-mounted air conditioning unit', width: 1100, height: 733 },
  install: { src: '/assets/images/home/service-installation.jpg', alt: 'Engineers installing commercial air conditioning condenser units on a rooftop', width: 960, height: 640 },
  repair: { src: '/assets/images/home/service-repairs.jpg', alt: 'Engineer wearing a tool belt arriving for a repair job', width: 960, height: 640 },
  maintain: { src: '/assets/images/home/service-maintenance.jpg', alt: 'Close-up of a wall-mounted air conditioning unit set to 22 degrees', width: 960, height: 640 },
  living: { src: '/assets/images/home/why-residential.jpg', alt: 'Modern living room with a wall-mounted air conditioning unit', width: 800, height: 1107 },
  commercial: { src: '/assets/images/home/why-commercial.jpg', alt: 'Engineer on a platform fitting ceiling services in a commercial building', width: 900, height: 600 },
  panel: { src: '/assets/images/home/faq-thermostat.jpg', alt: 'Hand adjusting a modern wall-mounted climate control panel', width: 900, height: 600 },
  storyHome: { src: '/assets/images/home/video-story-home.jpg', alt: 'Person relaxing on a sofa in a bright living room', width: 1000, height: 667 },
  storyHouse: { src: '/assets/images/home/video-story-business.jpg', alt: 'Modern two-storey house with dark cladding and warm light at dusk', width: 1000, height: 1500 },
  casePhoto: { src: '/assets/images/home/video-case-study.jpg', alt: 'Engineer in a hard hat and orange vest installing a ceiling cassette air conditioner', width: 1200, height: 846 },
  cassetteRoom: { src: '/assets/images/home/bts-installations.jpg', alt: 'Living room with a white ceiling cassette air conditioner', width: 720, height: 480 },
  ladder: { src: '/assets/images/home/bts-repairs.jpg', alt: 'Technician on a ladder servicing a ceiling cassette air conditioner', width: 720, height: 540 },
  officeCeiling: { src: '/assets/images/home/bts-servicing.jpg', alt: 'Office ceiling with long linear air diffusers', width: 720, height: 1081 },
  wallUnit: { src: '/assets/images/home/bts-commercial.jpg', alt: 'White wall-mounted air conditioning unit in a bright room', width: 720, height: 480 },
  outdoor: { src: '/assets/images/home/bts-outdoor-units.jpg', alt: 'Outdoor air conditioning condenser mounted on an exterior wall', width: 720, height: 1080 },
} as const;

const call: Action = { href: site.phoneHref, label: 'Call us', variant: 'outline', icon: 'i-phone' };
const email: Action = { href: `mailto:${site.email}`, label: 'Email us', variant: 'outline', icon: 'i-mail' };

const serviceCards: Card[] = [
  { href: '/services/residential-air-conditioning', title: 'Residential A/C', text: 'Quiet heating and cooling for bedrooms, living rooms and whole homes.', icon: 'i-home', image: img.living },
  { href: '/services/commercial-air-conditioning', title: 'Commercial A/C', text: 'Offices, shops, hospitality and comms rooms, fitted around how you work.', icon: 'i-building', image: img.commercial },
  { href: '/services/air-conditioning-installation', title: 'A/C Installation', text: 'Wall, floor, ducted and cassette systems, sized for the room and fitted neatly.', icon: 'i-install', image: img.install },
  { href: '/services/air-conditioning-replacement', title: 'A/C Replacement', text: 'Swap an old or undersized system for one that heats as well as cools.', icon: 'i-refresh', image: img.outdoor },
  { href: '/services/air-conditioning-repair', title: 'A/C Repair', text: 'Fault finding on most makes, with the price agreed before any work starts.', icon: 'i-wrench', image: img.repair },
  { href: '/services/air-conditioning-maintenance', title: 'A/C Maintenance', text: 'Annual servicing that keeps filters clean, running costs down and the warranty intact.', icon: 'i-calendar', image: img.maintain },
];

const typeCards: Card[] = [
  { href: '/ac-types/wall-mount', title: 'Wall Mount', text: 'The usual choice for bedrooms and living rooms. High on the wall, out of the way.', icon: 'i-wall', image: img.bedroom },
  { href: '/ac-types/floor-standing', title: 'Floor Standing', text: 'Sits low, which suits rooms where a high wall unit will not.', icon: 'i-floor', image: img.process },
  { href: '/ac-types/ducted', title: 'Ducted', text: 'Hidden in the ceiling, with only grilles on show. Needs a ceiling void.', icon: 'i-ducted', image: img.officeCeiling },
  { href: '/ac-types/cassette', title: 'Cassette', text: 'Fits a ceiling grid and throws air in more than one direction.', icon: 'i-cassette', image: img.cassetteRoom },
  { href: '/ac-types/vrv-vrf', title: 'VRV/VRF', text: 'Many indoor units on one outdoor system. Built for whole floors.', icon: 'i-vrv', image: img.install },
  { href: '/ac-types/ceiling-suspended', title: 'Ceiling Suspended', text: 'Hangs below the ceiling when there is no void for a cassette.', icon: 'i-ceiling', image: img.commercial },
];

const brandCards: Card[] = [
  { href: '/brands/daikin-sensira', title: 'Daikin Sensira', text: 'A straightforward wall unit for rooms that need reliable heating and cooling.', icon: 'i-wall', image: img.wallUnit },
  { href: '/brands/daikin-perfera', title: 'Daikin Perfera', text: 'A quieter wall unit for rooms you live and work in all day.', icon: 'i-wall', image: img.living },
  { href: '/brands/daikin-perfera-floor-standing', title: 'Daikin Perfera Floor Standing', text: 'The Perfera comfort range, sat at floor level instead of high on the wall.', icon: 'i-floor', image: img.process },
  { href: '/brands/daikin-stylish', title: 'Daikin Stylish', text: 'A compact, design-led wall unit. Among the quietest models we fit.', icon: 'i-wall', image: img.bedroom },
];

const quietNote = 'The quietest indoor units we fit run at 19 dBA in silent mode, and outdoor units typically run at around 46–49 dBA. The figure for your room is confirmed after the E-Survey, not assumed from a brochure.';

export const pages: Page[] = [
  {
    path: '/services',
    title: 'Air Conditioning Services',
    description: 'Air conditioning installation, replacement, repair and maintenance for homes and businesses, carried out by Claremont Cooling’s own engineers.',
    eyebrow: 'Services',
    heading: 'Air conditioning for **homes and businesses**',
    lead: 'New installations, replacements, repairs and planned maintenance. The same engineers from your first call to your annual service.',
    image: img.install,
    crumbs: [{ label: 'Services' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Claremont Cooling surveys the space, recommends a system that suits it, fits it cleanly and looks after it afterwards. That covers a single bedroom or a whole office floor, and it covers heating as well as cooling.',
        'If you already have a system, we repair most makes and we can put the annual service on a [care plan](/care-plans), with every visit kept on record.',
      ] },
      { type: 'cards', heading: 'What we do', intro: 'Choose a service, or book an E-Survey and we will tell you which one you actually need.', items: serviceCards },
      { type: 'features', heading: 'The same standard on every job', items: [
        { icon: 'i-survey', title: 'Survey first', text: 'We look at the rooms, how you use them and where an outdoor unit can go before we recommend anything.' },
        { icon: 'i-sparkle', title: 'Spotless finish', text: 'A neat install and a proper clean-up, with a full handover before we leave.' },
        { icon: 'i-support', title: 'Aftercare', text: 'Servicing, repairs and a team you can still call once the system is running.' },
      ] },
    ],
  },
  {
    path: '/services/residential-air-conditioning',
    title: 'Residential Air Conditioning',
    description: 'Ultra-quiet air conditioning for homes. Claremont Cooling sizes, installs and maintains systems that heat and cool bedrooms, living rooms and whole houses.',
    eyebrow: 'Residential',
    heading: 'Home cooling that **lets you sleep**',
    lead: 'Ultra-quiet systems for bedrooms, living rooms, studies and garden rooms, fitted neatly and left spotless.',
    image: img.bedroom,
    crumbs: [{ href: '/services', label: 'Services' }, { label: 'Residential A/C' }],
    sections: [
      { type: 'prose', paragraphs: [
        'A home system has to disappear into the day. The indoor unit should be quiet enough to sleep beside, the pipework should be tidy, and the room should look looked-after when we leave.',
        'Modern units heat as well as cool. For every 1 kW of electricity used, a current system provides about 3–4 kW of heating or cooling, which is why many people end up using it through the winter as well as the summer.',
      ] },
      { type: 'stats', items: [
        { value: '19', unit: 'dBA', label: 'Quietest indoor units in silent mode' },
        { value: '3–4', unit: 'kW', label: 'Of heating or cooling per 1 kW used' },
        { value: '2', unit: 'in 1', label: 'One system that heats and cools' },
      ] },
      { type: 'split', heading: 'From one room to the whole house', image: img.living, paragraphs: [
        'A single bedroom is a common place to start. So is a living room that overheats, or a garden room that is too cold in January and too hot in July.',
        'Where several rooms need comfort, one outdoor unit can serve more than one indoor unit. We only suggest that after the E-Survey, once we know the rooms and the fabric of the house.',
        quietNote,
      ] },
      { type: 'features', heading: 'What we fit in homes', items: [
        { icon: 'i-wall', title: 'Wall mounted', text: 'The usual choice. High on the wall, easy to live with. See [wall mount](/ac-types/wall-mount) units.' },
        { icon: 'i-floor', title: 'Floor standing', text: 'Better when a high wall is not available, or when you want heat from low down. See [floor standing](/ac-types/floor-standing).' },
        { icon: 'i-ducted', title: 'Ducted', text: 'Hidden in a ceiling void, with grilles instead of a visible unit. See [ducted](/ac-types/ducted) systems.' },
      ] },
      { type: 'cards', heading: 'Often paired with', columns: 2, items: [serviceCards[2], serviceCards[5], brandCards[3], brandCards[1]] },
    ],
  },
  {
    path: '/services/commercial-air-conditioning',
    title: 'Commercial Air Conditioning',
    description: 'Commercial air conditioning for offices, shops, hospitality, gyms and comms rooms. Claremont Cooling surveys, installs, repairs and services the system.',
    eyebrow: 'Commercial',
    heading: 'Comfort that **keeps the building working**',
    lead: 'Offices, retail, restaurants, gyms, clinics and comms rooms. Planned properly, and fitted around the way you trade.',
    image: img.commercial,
    crumbs: [{ href: '/services', label: 'Services' }, { label: 'Commercial A/C' }],
    sections: [
      { type: 'prose', paragraphs: [
        'A commercial system is sized for the people, the equipment and the hours you are open. An undersized unit in a comms room or a busy shop does not “catch up” on a hot afternoon. It just runs flat out.',
        'We survey the premises, recommend wall, cassette, ceiling-suspended, ducted or [VRV/VRF](/ac-types/vrv-vrf) equipment, and agree how the work sits around your week. Where downtime matters, we say so before we book the job.',
      ] },
      { type: 'checklist', heading: 'Premises we survey', items: [
        'Offices and meeting rooms',
        'Shops and showrooms',
        'Restaurants, cafés and bars',
        'Gyms and studios',
        'Salons and clinics',
        'Server and comms rooms',
        'Warehouses and light industrial spaces',
      ] },
      { type: 'split', heading: 'One team, including the plant', image: img.install, paragraphs: [
        'Indoor units are only half the job. Outdoor plant, pipework, condensate and access all have to be thought through, especially on a roof or a shared building.',
        'After installation we can put the system on a [business care plan](/care-plans), with planned visits and a written note of what was done.',
      ] },
      { type: 'cards', heading: 'Commercial equipment', items: [typeCards[3], typeCards[4], typeCards[5]] },
    ],
  },
  {
    path: '/services/air-conditioning-installation',
    title: 'Air Conditioning Installation',
    description: 'Air conditioning installation for homes and businesses. Claremont Cooling sizes the system, fits it neatly and leaves the space spotless.',
    eyebrow: 'Installation',
    heading: 'Fitted neatly, **left spotless**',
    lead: 'Efficient wall, floor, ducted and cassette systems, sized for the room and installed by our own engineers.',
    image: img.install,
    crumbs: [{ href: '/services', label: 'Services' }, { label: 'Installation' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Installation starts with the [E-Survey](/#survey), not with a unit picked from a list. We need the rooms, how you use them, and a sensible place for the outdoor unit. Then we recommend a system and prepare a quotation.',
        'On the day we protect the work area, run the pipework as discreetly as the building allows, commission the system and show you how heating and cooling both work. The [installation day](/installation-day) page sets out what to expect.',
        'Refrigerant work is carried out by our own engineers, and the warranty terms for your model are written on the quotation.',
      ] },
      { type: 'steps', heading: 'How an install runs', items: [
        { title: 'Tell us about the space', text: 'The short survey covers your postcode, whether it is a home or a business, and the rooms you want cooled.' },
        { title: 'We recommend a system', text: 'Wall, floor, ducted, cassette or a larger commercial system. The quote follows the survey, so it matches the rooms.' },
        { title: 'We fit it and hand it over', text: 'A clean install, a working demonstration, and a team you can call for servicing afterwards.' },
      ] },
      { type: 'cards', heading: 'Choose a system style', items: typeCards.slice(0, 3) },
    ],
  },
  {
    path: '/services/air-conditioning-replacement',
    title: 'Air Conditioning Replacement',
    description: 'Replace an old or undersized air conditioner with a modern system that heats and cools. Claremont Cooling agrees the specification before the old unit comes out.',
    eyebrow: 'Replacement',
    heading: 'A better system **in the same place**',
    lead: 'When the old unit is tired, noisy or simply too small, we replace it with equipment sized for the room you have now.',
    image: img.outdoor,
    crumbs: [{ href: '/services', label: 'Services' }, { label: 'Replacement' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Replacement is not always a like-for-like swap. The old unit may have been undersized, the room may have changed, or you may want heating as well as cooling. We check the pipework, the electrics, the outdoor position and the indoor location before we specify the new system.',
        'You get a quotation after the survey. We do not remove a working unit on the assumption that something better will fit.',
      ] },
      { type: 'features', heading: 'Usual reasons to replace', items: [
        { icon: 'i-thermo', title: 'It cannot keep up', text: 'The room never quite reaches temperature, especially late in the afternoon or when the space is full.' },
        { icon: 'i-quiet', title: 'It is too loud', text: 'Older indoor units are often the reason a bedroom system gets switched off at night.' },
        { icon: 'i-refresh', title: 'You want heating too', text: 'A modern heat-pump system does both jobs. One system, used all year.' },
      ] },
      { type: 'split', heading: 'What we reuse, and what we do not', image: img.outdoor, paragraphs: [
        'Sometimes the outdoor position and the route of the pipework can stay. Sometimes they are the reason the old system struggled. We say which is which on the survey.',
        'If the system is repairable and replacement is not the sensible spend, we will tell you that too. See [repairs](/services/air-conditioning-repair).',
      ] },
      { type: 'cards', heading: 'Brands we often fit in place of older units', columns: 2, items: brandCards },
    ],
  },
  {
    path: '/services/air-conditioning-repair',
    title: 'Air Conditioning Repair',
    description: 'Air conditioning repairs for most makes. Claremont Cooling finds the fault and agrees the price before any work starts.',
    eyebrow: 'Repairs',
    heading: 'The fault found, **the price agreed**',
    lead: 'Fault finding and repairs on most makes. You know the cost before any repair starts.',
    image: img.repair,
    crumbs: [{ href: '/services', label: 'Services' }, { label: 'Repair' }],
    sections: [
      { type: 'prose', paragraphs: [
        'A system that has stopped cooling, started leaking, or begun making a new noise needs a diagnosis before it needs parts. We trace the fault, explain it in plain language and agree the price. Then we repair it.',
        'We work on most makes, not only the Daikin models we install. If a repair is poor value next to a [replacement](/services/air-conditioning-replacement), we say so before you spend the money.',
      ] },
      { type: 'checklist', heading: 'Call us if you notice', items: [
        'Warm air when the unit is set to cool',
        'A leak, or water where it did not used to be',
        'Ice on the indoor unit or the pipework',
        'A noise, smell or error code that is new',
        'A room that used to cope and no longer does',
      ] },
      { type: 'split', heading: 'What happens on a repair visit', image: img.ladder, paragraphs: [
        'We look at the indoor unit, the outdoor unit and the pipework between them. A slow leak at a joint, a failed fan or a blocked drain each looks different and each has a different cost.',
        `The price is agreed before the repair goes ahead. Call ${phoneLink}, email ${emailLink} or message us on ${whatsAppLink}. Response times depend on the day and the postcode, and we confirm when we can attend.`,
      ] },
    ],
  },
  {
    path: '/services/air-conditioning-maintenance',
    title: 'Air Conditioning Maintenance',
    description: 'Annual air conditioning servicing that keeps filters clean, running costs down and the warranty intact. Every visit is kept on record.',
    eyebrow: 'Maintenance',
    heading: 'Serviced once a year, **recorded every time**',
    lead: 'Annual servicing that keeps filters clean, running costs down and the manufacturer’s warranty intact.',
    image: img.maintain,
    crumbs: [{ href: '/services', label: 'Services' }, { label: 'Maintenance' }],
    sections: [
      { type: 'prose', paragraphs: [
        'A system that is never opened slowly costs more to run and is more likely to fail on the hottest or coldest week of the year. An annual service is the ordinary way to avoid that.',
        'We clean filters and coils, check the drain, check operation in the mode you actually use, and leave a record of the visit. If you would rather not remember to book it, a [care plan](/care-plans) puts the visit in the diary for you.',
      ] },
      { type: 'features', heading: 'What a service is for', items: [
        { icon: 'i-wind', title: 'Cleaner air', text: 'Filters and coils collect dust. Cleaning them is part of looking after indoor air quality, not only cooling performance.' },
        { icon: 'i-thermo', title: 'Lower running cost', text: 'A choked coil makes the unit work harder for the same room temperature.' },
        { icon: 'i-calendar', title: 'Warranty and history', text: 'Many warranties expect regular servicing. We keep a note of each visit so the history is not lost.' },
      ] },
      { type: 'split', heading: 'Homes and businesses', image: img.officeCeiling, paragraphs: [
        'A single wall unit and a run of ceiling cassettes are both service visits. The difference is the time on site and the report you need afterwards.',
        'Business customers usually want the visit outside trading hours and a short written note. Say that when you book and we will plan for it.',
      ] },
    ],
  },
  {
    path: '/ac-types',
    title: 'Air Conditioning Types',
    description: 'Wall mount, floor standing, ducted, cassette, VRV/VRF and ceiling suspended air conditioning, explained by Claremont Cooling.',
    eyebrow: 'AC types',
    heading: 'The right unit **for the room**',
    lead: 'Six ways to deliver heating and cooling. The E-Survey is how we choose between them.',
    image: img.cassetteRoom,
    crumbs: [{ label: 'AC types' }],
    sections: [
      { type: 'prose', paragraphs: [
        'The indoor unit is what you live with. It has to move the right amount of air, sit somewhere the building will allow, and stay quiet enough for the way the room is used. Outdoor plant and pipework have to be possible too.',
        'These pages describe the types we install. They are not a catalogue of every model, and they are not a substitute for looking at your rooms.',
      ] },
      { type: 'cards', heading: 'All types', items: typeCards },
    ],
  },
  {
    path: '/ac-types/wall-mount',
    title: 'Wall Mounted Air Conditioning',
    description: 'Wall-mounted air conditioning for bedrooms, living rooms and offices. High on the wall, quiet, and able to heat as well as cool.',
    eyebrow: 'Wall mount',
    heading: 'High on the wall, **out of the way**',
    lead: 'The most common indoor unit for homes and smaller rooms. One neat box, heating and cooling from the same system.',
    image: img.bedroom,
    crumbs: [{ href: '/ac-types', label: 'AC types' }, { label: 'Wall mount' }],
    sections: [
      { type: 'prose', paragraphs: [
        'A wall-mounted unit sits high, blows across the room and keeps the floor clear. It suits bedrooms, living rooms, home offices and many smaller commercial rooms.',
        'The quietest models we fit run at 19 dBA in silent mode, which is why a bedroom is so often the first room people ask us to do. Daikin’s [Stylish](/brands/daikin-stylish), [Perfera](/brands/daikin-perfera) and [Sensira](/brands/daikin-sensira) ranges are the wall units we specify most often.',
      ] },
      { type: 'checklist', heading: 'A wall unit is a good fit when', items: [
        'There is a clear stretch of outside wall, away from the bed or the desk',
        'Pipework can leave discreetly to an outdoor unit',
        'You want something simple to live with and simple to service',
        'The ceiling has no useful void for a hidden system',
      ] },
      { type: 'cards', heading: 'Wall units we fit', items: [brandCards[0], brandCards[1], brandCards[3]] },
    ],
  },
  {
    path: '/ac-types/floor-standing',
    title: 'Floor Standing Air Conditioning',
    description: 'Floor-standing air conditioning for rooms where a high wall unit will not suit. Heating starts at floor level.',
    eyebrow: 'Floor standing',
    heading: 'Comfort from **floor level**',
    lead: 'A tall, compact unit that sits low. Useful under windows, in loft rooms and anywhere a high wall mount will not do.',
    image: img.process,
    crumbs: [{ href: '/ac-types', label: 'AC types' }, { label: 'Floor standing' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Floor-standing units take up a similar footprint to a radiator. They suit rooms with sloping ceilings, limited wall height, or a window exactly where a high unit would have gone.',
        'In heating mode, air that starts low in the room is often more comfortable than air thrown down from the ceiling. The [Daikin Perfera Floor Standing](/brands/daikin-perfera-floor-standing) is the model we fit when that layout is right.',
      ] },
      { type: 'split', heading: 'What we check first', image: img.process, paragraphs: [
        'We look at the floor space you can spare, the route for condensate, and whether the outdoor unit can sit close enough for a tidy pipe run.',
        'If a wall unit would be simpler and just as comfortable, we will say that. The aim is the room, not a particular shape of box.',
      ] },
    ],
  },
  {
    path: '/ac-types/ducted',
    title: 'Ducted Air Conditioning',
    description: 'Ducted and concealed air conditioning for homes and businesses that want grilles rather than a visible indoor unit.',
    eyebrow: 'Ducted',
    heading: 'Hidden in the ceiling, **grilles on show**',
    lead: 'Ducted systems keep the equipment out of sight. They need a ceiling void deep enough to take the unit and the ducts.',
    image: img.officeCeiling,
    crumbs: [{ href: '/ac-types', label: 'AC types' }, { label: 'Ducted' }],
    sections: [
      { type: 'prose', paragraphs: [
        'A ducted indoor unit sits above the ceiling and delivers air through grilles. It is the right answer when the architecture matters and the building has the space to hide it. It is the wrong answer when the void is too shallow, and we would rather say that on the survey than discover it on installation day.',
        'One ducted unit can serve a single large room or, designed properly, more than one space. Zoning, noise and access for future servicing all get decided before anyone orders equipment.',
      ] },
      { type: 'features', heading: 'Worth knowing', items: [
        { icon: 'i-ducted', title: 'You need a void', text: 'We measure the ceiling space. A cassette or a wall unit is often the honest alternative.' },
        { icon: 'i-quiet', title: 'Quiet, if it is designed that way', text: 'Duct design, grille position and fan speed decide whether the room stays peaceful.' },
        { icon: 'i-wrench', title: 'Access panels', text: 'The unit still has to be serviced. We plan a way back to it before the ceiling is closed.' },
      ] },
    ],
  },
  {
    path: '/ac-types/cassette',
    title: 'Cassette Air Conditioning',
    description: 'Ceiling cassette air conditioning for offices, shops and open rooms. Four-way airflow from a unit that sits in the ceiling.',
    eyebrow: 'Cassette',
    heading: 'Air from the ceiling, **in more than one direction**',
    lead: 'A cassette sits in a ceiling grid and throws air outwards. A natural choice for offices, shops and open-plan rooms.',
    image: img.cassetteRoom,
    crumbs: [{ href: '/ac-types', label: 'AC types' }, { label: 'Cassette' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Cassette units are built around a ceiling tile. Conditioned air leaves on more than one side, so a single unit can cover a room that a wall unit would only reach in part.',
        'They suit offices, retail and any room where wall space is taken up by storage, glazing or people. The ceiling has to be able to carry the unit, and there has to be a route for pipework and a drain.',
      ] },
      { type: 'split', heading: 'In a home as well as a shop', image: img.cassetteRoom, paragraphs: [
        'Cassettes are not only commercial. A living room with a suitable ceiling can take one, and the unit reads as part of the ceiling rather than a box on the wall.',
        'We will only recommend one where the structure, the drain and the look of the room all work. Otherwise a wall or floor unit is the better install.',
      ] },
    ],
  },
  {
    path: '/ac-types/vrv-vrf',
    title: 'VRV and VRF Air Conditioning',
    description: 'VRV and VRF air conditioning for buildings with many rooms. One outdoor system, lots of indoor units, individual control.',
    eyebrow: 'VRV / VRF',
    heading: 'One outdoor system, **many rooms**',
    lead: 'Variable refrigerant volume systems for whole floors and whole buildings, where a pile of separate splits would be the wrong design.',
    image: img.install,
    crumbs: [{ href: '/ac-types', label: 'AC types' }, { label: 'VRV/VRF' }],
    sections: [
      { type: 'prose', paragraphs: [
        'VRV and VRF are two names for the same idea. Refrigerant flow varies so lots of indoor units, of different types, can run from one outdoor plant. Rooms can call for heating or cooling on their own schedule.',
        'This is commercial equipment. It earns its place in offices, hotels, clinics and any building where the alternative is a forest of outdoor units. It is rarely the right recommendation for a single bedroom.',
        'Capacity, pipe lengths and manufacturer limits are designed for the building. The survey decides how many rooms one system can serve.',
      ] },
      { type: 'checklist', heading: 'A VRV survey looks at', items: [
        'How many zones need independent control',
        'Where the outdoor plant can live, and whether the roof can take it',
        'Pipe routes, access and the hours we are allowed to work',
        'How the system will be serviced once it is running',
      ] },
    ],
  },
  {
    path: '/ac-types/ceiling-suspended',
    title: 'Ceiling Suspended Air Conditioning',
    description: 'Ceiling suspended air conditioning for rooms with no ceiling void. The unit hangs below the soffit and throws air across the space.',
    eyebrow: 'Ceiling suspended',
    heading: 'Hung below the ceiling **when there is no void**',
    lead: 'A ceiling-suspended unit is the practical choice in shops, restaurants and workshops where a cassette cannot hide in the ceiling.',
    image: img.commercial,
    crumbs: [{ href: '/ac-types', label: 'AC types' }, { label: 'Ceiling suspended' }],
    sections: [
      { type: 'prose', paragraphs: [
        'If the ceiling is solid, or the void is full, a cassette and a ducted unit are both out. A ceiling-suspended unit fixes directly underneath and blows air across the room from one face.',
        'It keeps the walls clear for shelving, glazing and counters. We check the structure it will hang from, the drain fall, and how low the unit will sit relative to heads and signage.',
      ] },
      { type: 'features', heading: 'Compared with the other ceiling options', items: [
        { icon: 'i-ceiling', title: 'No void required', text: 'Unlike [ducted](/ac-types/ducted) or many [cassettes](/ac-types/cassette), it does not need a deep ceiling.' },
        { icon: 'i-building', title: 'Made for open rooms', text: 'Retail, hospitality and light industrial spaces use this layout constantly.' },
        { icon: 'i-wrench', title: 'Easy to service', text: 'The unit stays reachable, which matters on a maintenance visit.' },
      ] },
    ],
  },
  {
    path: '/brands',
    title: 'Brands We Trust',
    description: 'Daikin Sensira, Perfera, Perfera Floor Standing and Stylish. The air conditioning brands Claremont Cooling specifies, and how we choose between them.',
    eyebrow: 'Brands',
    heading: 'Brands we **specify on purpose**',
    lead: 'We fit Daikin wall and floor units where they suit the room. We repair most other makes.',
    image: img.wallUnit,
    crumbs: [{ label: 'Brands' }],
    sections: [
      { type: 'prose', paragraphs: [
        'A brand is not a design. Sensira, Perfera and Stylish are all Daikin wall units, and they are not interchangeable. One is the straightforward choice, one is built for rooms you occupy all day, and one is the compact, quieter unit people usually want in a finished bedroom.',
        'We recommend a model after the E-Survey. Sound level, capacity and warranty are confirmed on the quotation for that model, in that room.',
        quietNote,
      ] },
      { type: 'cards', heading: 'Daikin models we fit', columns: 2, items: brandCards },
      { type: 'prose', paragraphs: [
        'Already have another make? Repair and servicing are not limited to Daikin. See [repairs](/services/air-conditioning-repair) and [maintenance](/services/air-conditioning-maintenance). If you are weighing two quotations, the [quote comparison](/comparing-ac-quotes) guide lists what should be in both.',
      ] },
    ],
  },
  {
    path: '/brands/daikin-sensira',
    title: 'Daikin Sensira',
    description: 'Daikin Sensira wall-mounted air conditioning for homes that want reliable heating and cooling without paying for features the room will not use.',
    eyebrow: 'Daikin Sensira',
    heading: 'A straightforward **wall unit**',
    lead: 'Sensira is the Daikin wall range we fit when the room needs dependable heating and cooling and does not need the extra comfort features of Perfera or Stylish.',
    image: img.wallUnit,
    crumbs: [{ href: '/brands', label: 'Brands' }, { label: 'Sensira' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Sensira heats and cools, which is what most rooms actually need. It is a tidy indoor unit, simple to explain at handover, and a sensible specification for a spare room, a smaller living space or a first system where the budget should stay in the right size of equipment rather than in extras.',
        'We still size it properly. An undersized Sensira is not a bargain. The E-Survey decides the capacity, the position and whether a quieter range would be the better spend.',
      ] },
      { type: 'checklist', heading: 'Sensira tends to suit', items: [
        'Bedrooms and living rooms that need a clean, simple install',
        'Home offices that are used in bursts rather than all day',
        'Projects where more than one room has to be done properly, not one room done extravagantly',
      ] },
      { type: 'cards', heading: 'If the room needs more', columns: 2, items: [brandCards[1], brandCards[3]] },
    ],
  },
  {
    path: '/brands/daikin-perfera',
    title: 'Daikin Perfera',
    description: 'Daikin Perfera wall-mounted air conditioning for rooms you live in all day. Quiet heating and cooling, specified by Claremont Cooling after a survey.',
    eyebrow: 'Daikin Perfera',
    heading: 'For rooms you **actually live in**',
    lead: 'Perfera is the wall unit we move to when the room is used all day and comfort, heating performance and a low noise floor matter more than a lower headline price.',
    image: img.living,
    crumbs: [{ href: '/brands', label: 'Brands' }, { label: 'Perfera' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Living rooms, main bedrooms and studies that are occupied for hours are where Perfera earns its place. It is still a wall-mounted heat pump: one indoor unit, one outdoor unit, heating and cooling from the same system.',
        'People often compare it with Sensira on price alone. The fairer comparison is how the room feels at night and in January. We talk through that on the survey rather than leaving it as a line on a quote.',
        'Perfera also comes as a floor-standing unit. If the wall will not take a high unit, see [Perfera Floor Standing](/brands/daikin-perfera-floor-standing).',
      ] },
      { type: 'features', heading: 'Why we specify it', items: [
        { icon: 'i-quiet', title: 'A lower noise floor', text: 'Among the quieter wall units we fit. The exact figure for the capacity you need is on the quotation.' },
        { icon: 'i-thermo', title: 'Heating that is meant to be used', text: 'A proper heating mode, not an afterthought, for rooms you do not want to heat with a plug-in heater.' },
        { icon: 'i-wind', title: 'Comfort air', text: 'Airflow that can be kept off the people sitting in the room, which matters in a lounge.' },
      ] },
    ],
  },
  {
    path: '/brands/daikin-perfera-floor-standing',
    title: 'Daikin Perfera Floor Standing',
    description: 'Daikin Perfera floor-standing air conditioning. The Perfera range at floor level, for rooms where a high wall unit will not suit.',
    eyebrow: 'Perfera Floor Standing',
    heading: 'Perfera comfort, **sat on the floor**',
    lead: 'The same idea as the wall Perfera, in a unit that stands where a radiator would. Useful when the walls or the ceiling rule a high unit out.',
    image: img.process,
    crumbs: [{ href: '/brands', label: 'Brands' }, { label: 'Perfera Floor Standing' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Loft rooms, bays and anywhere the only solid wall is mostly window are the usual reason we specify a floor-standing Perfera. Warm air starts low, which is a more natural way to heat a room you sit in.',
        'It needs floor space and a considered pipe route. We measure both on the survey. If a [wall Perfera](/brands/daikin-perfera) or a [Stylish](/brands/daikin-stylish) would be simpler, that is what we recommend.',
      ] },
      { type: 'split', heading: 'What changes at floor level', image: img.process, paragraphs: [
        'You will see the unit, so the position has to look deliberate. We avoid blocking doors, radiators you are keeping, and the only bit of wall you wanted clear.',
        'Servicing access is usually easy, which helps on a [care plan](/care-plans). The outdoor unit and the warranty terms are confirmed with the quote, same as any other install.',
      ] },
    ],
  },
  {
    path: '/brands/daikin-stylish',
    title: 'Daikin Stylish',
    description: 'Daikin Stylish wall-mounted air conditioning. A compact, design-led unit and one of the quietest systems Claremont Cooling fits.',
    eyebrow: 'Daikin Stylish',
    heading: 'Compact, quiet, **meant to be seen**',
    lead: 'Stylish is the wall unit we fit when the room is finished and the indoor unit has to be both discreet and genuinely quiet.',
    image: img.bedroom,
    crumbs: [{ href: '/brands', label: 'Brands' }, { label: 'Stylish' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Stylish is a design-led Daikin wall unit: a shallower face, a considered finish, and the sort of noise level people ask for in a bedroom. The quietest indoor units we fit, Stylish among them, run at 19 dBA in silent mode.',
        'It is still sized like any other system. A beautiful unit that is too small for the room is a failed install. The E-Survey comes first, then the model, then the quotation.',
      ] },
      { type: 'stats', items: [
        { value: '19', unit: 'dBA', label: 'Silent-mode floor of the quietest indoor units we fit' },
        { value: '46–49', unit: 'dBA', label: 'Typical outdoor unit, confirmed for the model' },
        { value: '1', unit: 'unit', label: 'Heats and cools, so the room works all year' },
      ] },
      { type: 'cards', heading: 'Compare the wall range', columns: 2, items: [brandCards[0], brandCards[1]] },
    ],
  },
  {
    path: '/locations',
    title: 'Locations and Coverage',
    description: 'Claremont Cooling works across Greater London and the surrounding counties. Find your town, then confirm the postcode with an E-Survey.',
    eyebrow: 'Locations',
    heading: 'Greater London and the **counties around it**',
    lead: 'Homes and businesses across the capital, and in Essex, Hertfordshire, Surrey, Kent, Berkshire, Hampshire and West Sussex. The postcode on the E-Survey is how we confirm the visit.',
    image: img.storyHouse,
    crumbs: [{ label: 'Locations' }],
    sections: [
      { type: 'areas' },
      { type: 'steps', heading: 'How coverage works', items: [
        { title: 'You share the postcode', text: 'The E-Survey asks for it first, because a beautiful specification is useless if we cannot look after the system afterwards.' },
        { title: 'We confirm the area', text: 'If we cover it, we carry on with the rooms and the system. If we do not, we say so straight away.' },
        { title: 'The survey happens from your home or premises', text: 'You speak with a specialist without a sales visit being the first step. The quotation follows that conversation.' },
      ] },
      { type: 'prose', paragraphs: [
        `Phone ${phoneLink}, email ${emailLink} or use ${whatsAppLink}. There are no published opening hours on this site. We usually reply the same day.`,
      ] },
      { type: 'features', heading: 'What we need from you', items: [
        { icon: 'i-pin', title: 'The postcode', text: 'Enough for us to confirm the area. The full address comes when a visit is actually booked.' },
        { icon: 'i-home', title: 'Home or business', text: 'The questions diverge after that, so the recommendation fits the building.' },
        { icon: 'i-survey', title: 'The rooms', text: 'How many, and a rough idea of what they are used for.' },
      ] },
    ],
  },
  {
    path: '/gallery',
    title: 'Gallery',
    description: 'Reference photographs of the rooms and equipment Claremont Cooling designs around: wall units, cassettes, outdoor plant and commercial ceilings.',
    eyebrow: 'Gallery',
    heading: 'Rooms, plant and **the work between them**',
    lead: 'A look at the kinds of spaces and equipment an install, a repair or a service involves.',
    image: img.casePhoto,
    crumbs: [{ label: 'Gallery' }],
    sections: [
      { type: 'gallery', items: [
        { ...img.bedroom, caption: 'A bedroom with a wall-mounted unit above the bed.' },
        { ...img.living, caption: 'A living room where the indoor unit has to stay quiet.' },
        { ...img.process, caption: 'A bright room that could take a wall or floor unit.' },
        { ...img.cassetteRoom, caption: 'A ceiling cassette in an open living space.' },
        { ...img.officeCeiling, caption: 'Linear ceiling diffusers in an office.' },
        { ...img.commercial, caption: 'Ceiling services in a commercial building.' },
        { ...img.install, caption: 'Outdoor condensers on a roof, where commercial plant often lives.' },
        { ...img.outdoor, caption: 'A wall-mounted outdoor unit and its pipework.' },
        { ...img.ladder, caption: 'A ceiling unit being serviced from a ladder.' },
        { ...img.wallUnit, caption: 'A compact wall unit in a finished room.' },
        { ...img.maintain, caption: 'A wall unit set and left to hold a comfortable temperature.' },
        { ...img.casePhoto, caption: 'A cassette install underway, which is the sort of visit we film for case studies.' },
      ] },
      { type: 'cards', heading: 'See the work in words', columns: 2, items: [
        { href: '/case-studies', title: 'Case studies', text: 'How we write up a project, and two illustrated examples while filmed studies are prepared.', icon: 'i-video' },
        { href: '/installation-day', title: 'Installation day', text: 'What happens between arrival and handover.', icon: 'i-install' },
      ] },
    ],
  },
  {
    path: '/reviews',
    title: 'Reviews',
    description: 'Leave a review of work Claremont Cooling has done for you. We publish the words you agree to, under the name you are happy with.',
    eyebrow: 'Reviews',
    heading: 'Tell us **how the job went**',
    lead: 'A few sentences about the survey, the install or a repair is enough. We publish what you agree to, and we use the name you choose.',
    image: img.storyHome,
    crumbs: [{ label: 'Reviews' }],
    actions: [
      { href: `mailto:${site.email}?subject=My%20Claremont%20Cooling%20review`, label: 'Leave a review', variant: 'flame', icon: 'i-arrow' },
      call,
    ],
    sections: [
      { type: 'features', heading: 'What is useful in a review', items: [
        { icon: 'i-home', title: 'The job', text: 'A home install, a repair, a service visit or a commercial system. The type of work is enough.' },
        { icon: 'i-survey', title: 'What happened', text: 'How the survey went, whether the day matched the quote, and how the room feels now.' },
        { icon: 'i-user', title: 'Your name', text: 'Say if we can use a first name, initials, or no name at all. We follow that.' },
      ] },
      { type: 'prose', paragraphs: [
        `Email ${emailLink} with the subject “My Claremont Cooling review”, or call ${phoneLink}.`,
      ] },
    ],
    cta: {
      eyebrow: 'Had work done by us?',
      title: 'Send a few **honest lines**',
      text: 'A short note about the survey, the install or a repair helps the next person choose.',
      actions: [
        { href: `mailto:${site.email}?subject=My%20Claremont%20Cooling%20review`, label: 'Email a review', variant: 'flame', icon: 'i-mail' },
        { href: site.phoneHref, label: 'Call us', variant: 'ghost-light', icon: 'i-phone' },
      ],
    },
  },
  {
    path: '/care-plans',
    title: 'Air Conditioning Care Plans',
    description: 'Claremont Cooling care plans cover planned annual servicing, with every visit kept on record. Prices are quoted for your system.',
    eyebrow: 'Care plans',
    heading: 'The annual service, **already in the diary**',
    lead: 'Planned servicing for systems you already have. Every visit is kept on record.',
    image: img.maintain,
    crumbs: [{ label: 'Care plans' }],
    sections: [
      { type: 'prose', paragraphs: [
        'A care plan is for people who already have air conditioning and would rather not remember to book the service. We visit, clean and check the system, and we keep a note of what we found.',
        'It is not a promise of free repairs, and it is not a price you can read off this page. The cost depends on how many units you have and what they are. We quote it in writing before you join.',
      ] },
      { type: 'plans', heading: 'Three ways to be looked after', intro: 'The visit itself is the point. The difference is how many units, and how quickly you want us back if something fails between services.', items: [
        { name: 'Home', forWho: 'A house with one or more domestic units.', points: ['Planned annual service', 'Filters, coils, drain and operation checked', 'A record of the visit', 'Reminder when the next one is due'], href: '/contact', cta: 'Ask about Home' },
        { name: 'Home Plus', forWho: 'The same domestic service, with priority if it breaks down.', points: ['Everything in Home', 'Priority booking for a breakdown between services', 'The price of any repair still agreed before work starts'], href: '/contact', cta: 'Ask about Home Plus', featured: true },
        { name: 'Business', forWho: 'Offices, shops and any premises with several units.', points: ['Servicing scheduled around how you trade', 'A written note after the visit', 'Several units kept on one record'], href: '/contact', cta: 'Ask about Business' },
      ] },
      { type: 'prose', paragraphs: [
        'Not sure a plan is worth it yet? Book a one-off [maintenance visit](/services/air-conditioning-maintenance) and decide afterwards.',
      ] },
    ],
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'How a modern air conditioner heats a room and cools it. A plain guide from Claremont Cooling.',
    eyebrow: 'Blog',
    heading: 'Guides before you **ask for a quote**',
    lead: 'How a modern system moves heat out of a room, and back in when you want warmth.',
    image: img.panel,
    crumbs: [{ label: 'Blog' }],
    sections: [
      { type: 'cards', items: [
        { href: '/blog/how-air-conditioning-heats-and-cools', title: 'How air conditioning heats as well as cools', text: 'The fridge explanation, and why a heat pump is one of the more efficient ways to heat a room.', icon: 'i-thermo', image: img.panel },
      ] },
    ],
  },
  {
    path: '/blog/how-air-conditioning-heats-and-cools',
    title: 'How Air Conditioning Heats and Cools',
    description: 'How a modern air conditioner cools a room and heats it as well. A plain explanation from Claremont Cooling, including why these systems are called heat pumps.',
    eyebrow: 'Guide',
    heading: 'It moves heat. **That is the whole trick.**',
    lead: 'Cooling and heating are the same machine run in opposite directions. Once that is clear, the rest of the quote makes more sense.',
    image: img.panel,
    crumbs: [{ href: '/blog', label: 'Blog' }, { label: 'Heating and cooling' }],
    sections: [
      { type: 'prose', paragraphs: [
        'An air conditioner does not “make cold”. In cooling mode the indoor unit absorbs heat from the room and the outdoor unit releases that heat outside, much like a fridge. The room feels colder because the heat has left it.',
        'In heating mode the process runs in reverse. The outdoor unit absorbs heat from the air outside, even on a cold day, and the indoor unit releases it into the room. Units that can do this are heat pumps, and they are one of the more efficient ways to heat a single space.',
        'For every 1 kW of electricity used, a current system provides about 3–4 kW of heating or cooling. The electricity is paying for the transfer, not for creating all of that heat from scratch. That is why a garden room or a home office often costs less to heat this way than with an old electric heater.',
        'Not every old unit in a loft has a useful heating mode. If yours was sold as cooling only, or it heats poorly, that is a [replacement](/services/air-conditioning-replacement) conversation rather than a settings conversation.',
      ] },
      { type: 'faq', heading: 'Related questions', items: [
        { q: 'Can one system do both all year?', a: 'Yes. Modern systems we fit are specified to heat and cool. We show you both modes at handover.' },
        { q: 'Does heating wear the unit out?', a: 'Using it as designed does not. Skipping the [annual service](/services/air-conditioning-maintenance) is what shortens the easy years.' },
      ] },
    ],
  },
  {
    /* Draft backup. Not routed, listed or linked. Remove `draft: true` to publish again. */
    path: '/blog/how-quiet-modern-air-conditioning-is',
    draft: true,
    title: 'How Quiet Modern Air Conditioning Is',
    description: 'How loud a modern air conditioner is. Claremont Cooling explains 19 dBA silent mode, typical outdoor units, and what actually matters in a bedroom.',
    eyebrow: 'Guide',
    heading: 'Quiet enough **to sleep beside**',
    lead: 'The number on a brochure only helps if you know what it is measuring, and which fan speed it assumes.',
    image: img.bedroom,
    crumbs: [{ href: '/blog', label: 'Blog' }, { label: 'How quiet' }],
    sections: [
      { type: 'prose', paragraphs: [
        'The quietest indoor units we fit run at 19 dBA in silent mode. That is a whisper, not a conversation, and it is why a bedroom install is a reasonable thing to ask for. It is also a best-case figure: silent mode, the quietest models, not every unit at full fan on a heatwave.',
        'Outdoor units typically run at around 46–49 dBA. That is closer to a quiet conversation than to a road. Where the outdoor unit sits — a side passage, a roof, a wall by a neighbour’s window — matters as much as the decibel number. We look at that on the survey.',
        'If a quote only says “quiet” and does not name a mode or a model, ask which figure they mean. Our [Stylish](/brands/daikin-stylish) and [Perfera](/brands/daikin-perfera) pages explain where those ranges sit, and the quotation names the model we would actually fit.',
      ] },
      { type: 'note', text: quietNote },
    ],
  },
  {
    path: '/blog/what-air-conditioning-costs-to-run',
    draft: true,
    title: 'What Air Conditioning Costs to Run',
    description: 'A plain guide to air conditioning running costs. Claremont Cooling explains the 3–4 kW rule and why a precise bill needs the room, not a slogan.',
    eyebrow: 'Guide',
    heading: 'Efficient, **not a magic number**',
    lead: 'We can tell you the shape of the running cost. We will not invent a precise annual bill for a room we have not seen.',
    image: img.maintain,
    crumbs: [{ href: '/blog', label: 'Blog' }, { label: 'Running costs' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Modern systems are economical because they move heat instead of making all of it. For every 1 kW of electricity, you get roughly 3–4 kW of heating or cooling. As a rough guide, a small-capacity unit can cost around 10–15p an hour to run. That guide moves when energy prices move, and it moves with the size of the unit.',
        'The room changes the figure again. Insulation, glazing, how many people are in it, and whether you want 21 degrees or 18 degrees all show up on the meter. A system that is the wrong size costs more, because it never settles.',
        'Servicing keeps the figure honest. A clogged filter makes the same unit work harder for the same temperature. That is one of the practical reasons a [care plan](/care-plans) exists.',
        'On a quote, compare the capacity and the efficiency of the proposed unit, not only the install price. A cheaper box that is undersized is the expensive one by August.',
      ] },
    ],
  },
  {
    path: '/blog/what-happens-on-installation-day',
    draft: true,
    title: 'What Happens on Installation Day',
    description: 'What an air conditioning installation day looks like with Claremont Cooling, from protection of the room to the handover.',
    eyebrow: 'Guide',
    heading: 'A working system, **and a tidy room**',
    lead: 'Installation day is the visible part. The survey before it is what makes the day short.',
    image: img.casePhoto,
    crumbs: [{ href: '/blog', label: 'Blog' }, { label: 'Installation day' }],
    sections: [
      { type: 'prose', paragraphs: [
        'We arrive with the system that was quoted, not a different one. Floors and furniture on the route are protected. Pipework, power and condensate are run as agreed, the system is commissioned, and we do not leave the mess for you to discover at bedtime.',
        'Handover is part of the job. You should leave the day knowing how to change mode, how to use a quiet setting at night, and who to call if something looks wrong. The longer checklist is on the [installation day](/installation-day) page.',
        'Many single-room and two-room installs are completed in a day. Larger homes and commercial jobs take longer, and we tell you the likely time after the survey rather than promising a universal duration here.',
      ] },
      { type: 'cards', heading: 'Read next', columns: 2, items: [
        { href: '/installation-day', title: 'Installation day, in full', text: 'Before we arrive, while we are there, and what you should know when we leave.', icon: 'i-install' },
        { href: '/services/air-conditioning-installation', title: 'Installation service', text: 'What the service includes, from survey to handover.', icon: 'i-survey' },
      ] },
    ],
  },
  {
    path: '/blog/how-to-compare-air-conditioning-quotes',
    draft: true,
    title: 'How to Compare Air Conditioning Quotes',
    description: 'How to compare air conditioning quotations properly: capacity, noise, what is included on the day, and who looks after the system afterwards.',
    eyebrow: 'Guide',
    heading: 'The cheapest line **is not the quote**',
    lead: 'Two prices are only comparable when they describe the same system, in the same room, with the same making-good.',
    image: img.install,
    crumbs: [{ href: '/blog', label: 'Blog' }, { label: 'Comparing quotes' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Start with capacity. A lower price on a smaller unit is not a saving if the room never reaches temperature. Ask what the unit is sized for, and what happens on a hot afternoon with the doors shut.',
        'Then ask what the price includes. Survey, equipment, installation, electrical connection, making good, commissioning, handover and the first explanation of the controls should not be surprises. Our own quotation is prepared after the [E-Survey](/#survey), so it is tied to the rooms rather than to a guess.',
        'Noise, warranty and who services the unit next year belong on the same page. A quote that goes quiet on all three is incomplete. The full checklist lives on [comparing air conditioning quotes](/comparing-ac-quotes).',
      ] },
    ],
  },
  {
    path: '/blog/why-we-film-projects-before-and-after',
    draft: true,
    title: 'Why We Film Projects Before and After',
    description: 'Why Claremont Cooling films selected installs from the room before we arrive to the system running. What a real case study will show.',
    eyebrow: 'Guide',
    heading: 'The room before, **the room after**',
    lead: 'Selected installs are filmed from the empty “before” to a working system. That is the standard. The filmed studies themselves are still to be published.',
    image: img.casePhoto,
    crumbs: [{ href: '/blog', label: 'Blog' }, { label: 'Before and after' }],
    sections: [
      { type: 'prose', paragraphs: [
        'A case study is useful when you can see the room we were given, the decisions on the day, and the system once it is running. A paragraph of adjectives does not do that. Footage does, which is why we film selected projects from start to finish.',
        'What you should be able to see: where the indoor unit went and why, where the outdoor unit went, how the pipework was hidden, and how the room was left. The homepage describes that standard. It does not yet point at a finished film, because those films are not published on this site.',
        'Until they are, the [case studies](/case-studies) page explains the format and shows two illustrated examples, clearly marked as examples rather than customer projects. We would rather label them than invent a street and a surname.',
      ] },
      { type: 'cards', heading: 'The examples', columns: 2, items: [
        { href: '/case-studies/two-room-home', title: 'Two-room home', text: 'An illustrated example of a bedroom and a study, done in the way the homepage describes.', icon: 'i-home', image: img.bedroom },
        { href: '/case-studies/comms-room', title: 'Comms room', text: 'An illustrated example of a commercial room that could not afford a weekday shutdown.', icon: 'i-building', image: img.commercial },
      ] },
    ],
  },
  {
    path: '/refer-a-friend',
    title: 'Refer a Friend',
    description: 'Refer a friend to Claremont Cooling. We confirm any thank-you in writing before anyone is owed anything.',
    eyebrow: 'Refer a friend',
    heading: 'Introduce someone, **we’ll take it from there**',
    lead: 'If you have had work done by us, or you simply trust the way we explain a system, you can pass on a friend’s name.',
    image: img.storyHome,
    crumbs: [{ label: 'Refer a friend' }],
    sections: [
      { type: 'steps', heading: 'How it works', items: [
        { title: 'You send their name', text: 'Use the form, or email us. We need a way to contact them that they are happy for you to share.' },
        { title: 'They book an E-Survey if they want one', text: 'There is no obligation on them, and no hard sell from us. The survey is the same one everyone else gets.' },
        { title: 'We confirm any thank-you in writing', text: 'Before anyone is owed anything, you will have it in writing. If there is nothing to offer that month, we will say that too.' },
      ] },
      { type: 'refer' },
    ],
    cta: {
      eyebrow: 'They may not be ready',
      title: 'They can **book the survey** themselves',
      text: 'Send them the homepage. The E-Survey is the same form, and it still only takes about 90 seconds to start.',
      actions: [
        { href: '/#survey', label: 'Book Your E-Survey', variant: 'flame', icon: 'i-arrow' },
        { href: site.phoneHref, label: 'Call us', variant: 'ghost-light', icon: 'i-phone' },
      ],
    },
  },
  {
    path: '/team',
    title: 'The Team',
    description: 'Claremont Cooling is the same team from your first call to the annual service: survey, installation, and the visit the year after.',
    eyebrow: 'Team',
    heading: 'The same people, **start to finish**',
    lead: 'Survey, installation and servicing stay inside one team. You are not passed to a different company once the unit is on the wall.',
    image: img.repair,
    crumbs: [{ label: 'Team' }],
    sections: [
      { type: 'features', heading: 'Who does what', items: [
        { icon: 'i-survey', title: 'Survey', text: 'The specialist who takes the E-Survey, checks the postcode and recommends a system you can compare properly.' },
        { icon: 'i-install', title: 'Installation', text: 'Our own engineers fit the system, commission it and hand it over. The room is cleaned before they leave.' },
        { icon: 'i-calendar', title: 'Service and repair', text: 'The same company comes back for the annual service or a breakdown. The visit goes on the record.' },
      ] },
      { type: 'prose', paragraphs: [
        'That is the whole promise of the homepage: one team from the first call to the annual service. It is also why we ask for a postcode before we book anything. A system we cannot return to is not a system we should install.',
        `Reach us on ${phoneLink}, ${emailLink} or ${whatsAppLink}.`,
      ] },
    ],
  },
  {
    path: '/case-studies',
    title: 'Case Studies',
    description: 'Two illustrated Claremont Cooling examples: a two-room home and a comms room. They show the decisions on the job, not a named customer project.',
    eyebrow: 'Case studies',
    heading: 'Real projects, **shown properly**',
    lead: 'Two illustrations of the jobs we are asked to do. They walk through the rooms and the handover. They are not a named customer’s project.',
    image: img.casePhoto,
    crumbs: [{ label: 'Case studies' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Each example follows the same shape: the rooms, the system we would usually recommend, and the handover. The 19 dBA and efficiency figures describe the equipment range on the homepage, not a meter reading from a particular house.',
        'There is a plain explanation of the machine itself in [how air conditioning heats and cools](/blog/how-air-conditioning-heats-and-cools).',
      ] },
      { type: 'cards', heading: 'Examples', columns: 2, items: [
        { href: '/case-studies/two-room-home', title: 'Two-room home', text: 'A bedroom and a study. The sort of domestic install the survey is built around.', icon: 'i-home', image: img.bedroom },
        { href: '/case-studies/comms-room', title: 'Comms room', text: 'A small commercial room that overheats, planned so the business is not shut on a Tuesday.', icon: 'i-building', image: img.install },
      ] },
      { type: 'stats', items: [
        { value: '19', unit: 'dBA', label: 'Quietest indoor units in silent mode' },
        { value: '3–4', unit: 'kW', label: 'Of heating or cooling per 1 kW used' },
        { value: '2', unit: 'in 1', label: 'One system that heats and cools' },
      ] },
    ],
  },
  {
    path: '/case-studies/two-room-home',
    title: 'Example: Two-Room Home',
    description: 'An illustrated Claremont Cooling example of a two-room home installation: bedroom and study, survey first, neat install, full handover. Not a published customer project.',
    eyebrow: 'Illustrated example',
    heading: 'A bedroom and a study, **done in a day like this**',
    lead: 'This is an example of the domestic work we describe on the homepage. It is not a named customer’s project.',
    image: img.bedroom,
    crumbs: [{ href: '/case-studies', label: 'Case studies' }, { label: 'Two-room home' }],
    sections: [
      { type: 'steps', heading: 'How this kind of job runs', items: [
        { title: 'The survey names the rooms', text: 'A bedroom that has to stay quiet at night, and a study that overheats in the afternoon. The E-Survey is where that gets said out loud.' },
        { title: 'Two indoor units, one outdoor unit if the house allows', text: 'Wall units are the usual recommendation. [Stylish](/brands/daikin-stylish) or [Perfera](/brands/daikin-perfera) when the bedroom noise floor matters. The quote names the model.' },
        { title: 'Install, clean, handover', text: 'Pipework kept tidy, the room hoovered, both heating and cooling demonstrated. Many jobs of this size are finished in a day. We confirm the time for the actual house.' },
      ] },
      { type: 'split', heading: 'What you would see in the film', image: img.process, paragraphs: [
        'The rooms before any holes are drilled. The outdoor position we agreed, not the one that was merely convenient. The units in place, and the controls set to a night mode you have already tried.',
        'Until that film exists, the [gallery](/gallery) shows the kinds of rooms, clearly marked as reference photography.',
      ] },
    ],
  },
  {
    path: '/case-studies/comms-room',
    title: 'Example: Comms Room',
    description: 'An illustrated Claremont Cooling example of replacing an undersized unit in a comms room outside working hours. Not a published customer project.',
    eyebrow: 'Illustrated example',
    heading: 'A room that **cannot switch off**',
    lead: 'An example of commercial replacement: a small technical room, an undersized unit, and work planned so the business is not down on a weekday.',
    image: img.install,
    crumbs: [{ href: '/case-studies', label: 'Case studies' }, { label: 'Comms room' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Comms rooms fail in a particular way. The equipment load is steady, the door is shut, and a unit that was “about right” five years ago now runs flat out and still loses the afternoons. Replacing it with another undersized unit wastes the shutdown.',
        'The survey measures the room and the load properly. The quotation says what is coming out, what is going in, and when we can work. Evenings or a weekend are often the point, and we agree that before the date is booked. Afterwards, a [business care plan](/care-plans) keeps the new system on a record instead of waiting for the next alarm.',
      ] },
      { type: 'cards', heading: 'The services behind this example', columns: 2, items: [serviceCards[1], serviceCards[3]] },
    ],
  },
  {
    path: '/comparing-ac-quotes',
    title: 'Comparing Air Conditioning Quotes',
    description: 'How to compare air conditioning quotes: capacity, noise, installation, making good, warranty and aftercare. From Claremont Cooling.',
    eyebrow: 'Quotes',
    heading: 'Compare the job, **not just the price**',
    lead: 'A lower number is only a better quote if it is the same system, properly sized, with the same work included.',
    image: img.panel,
    crumbs: [{ label: 'Comparing quotes' }],
    sections: [
      { type: 'prose', paragraphs: [
        'Our quotation is written after the E-Survey. It should name the rooms, the type of unit, and the model. If you are holding two quotes, put them next to the list below before you decide the cheaper one is cheaper.',
      ] },
      { type: 'checklist', heading: 'Ask both companies', items: [
        'What capacity is being proposed, and for which rooms?',
        'What is the indoor sound level, and in which mode?',
        'Where does the outdoor unit go, and is that location included?',
        'Does the price include electrics, condensate, making good and commissioning?',
        'Who installs it — their own engineers, or a subcontracted crew?',
        'What warranty is on the equipment and on the workmanship, in writing?',
        'Who services it next year, and is that a [care plan](/care-plans) or a hope?',
        'Does the system heat as well as cool?',
      ] },
      { type: 'split', heading: 'How ours is built', image: img.panel, paragraphs: [
        'The E-Survey takes about 90 seconds to start. You tell us the postcode, whether it is a home or a business, the rooms and the unit types you are considering. We recommend a system and prepare the quotation afterwards.',
        'Repair work is priced before it starts. If a quote you have does not say that, ask. The [installation](/services/air-conditioning-installation) and [repair](/services/air-conditioning-repair) pages describe what we include.',
      ] },
    ],
  },
  {
    path: '/installation-day',
    title: 'Installation Day',
    description: 'What to expect on air conditioning installation day with Claremont Cooling: before we arrive, on the day, and at handover.',
    eyebrow: 'Installation day',
    heading: 'We fit it. **You enjoy it.**',
    lead: 'A protected room, a commissioned system, a clean-up and a handover. That is the day the homepage is describing.',
    image: img.casePhoto,
    crumbs: [{ label: 'Installation day' }],
    sections: [
      { type: 'steps', heading: 'Before we arrive', items: [
        { title: 'The survey and the quote are already done', text: 'Installation day is not the moment we decide what to fit. The model, the positions and the price were agreed after the E-Survey.' },
        { title: 'Access is agreed', text: 'We need a way to the rooms and to the outdoor position, and somewhere to park if that affects the job. Tell us about stairs, alarms and pets when you book.' },
        { title: 'You do not need to empty the house', text: 'Clear the wall and the route we will walk. We protect the rest.' },
      ] },
      { type: 'steps', heading: 'While we are there', items: [
        { title: 'Protect, then drill', text: 'Dust sheets go down before any holes. Pipework is run as discreetly as the building allows.' },
        { title: 'Indoor unit, outdoor unit, then commission', text: 'We fit both ends, connect electrics and condensate, and run the system properly rather than just switching it on.' },
        { title: 'Clean as we go', text: 'The homepage promise is a spotless clean-up. The room should not look like a building site when you come back to it.' },
      ] },
      { type: 'checklist', heading: 'At handover you should know', items: [
        'How to switch between heating and cooling',
        'How to use a quiet or night setting',
        'Where the filters are, and that we would rather service them than have you force anything',
        'Who to call, and that a [care plan](/care-plans) can hold the annual visit',
      ] },
      { type: 'prose', paragraphs: [
        'Many single-room and two-room installs finish in a day. Larger homes and commercial jobs take longer. We confirm the likely time for your rooms after the survey.',
      ] },
      { type: 'cards', heading: 'Related', columns: 2, items: [
        { href: '/blog/how-air-conditioning-heats-and-cools', title: 'How the system heats and cools', text: 'What we demonstrate at handover, in a short read you can send to someone else in the house.', icon: 'i-thermo', image: img.panel },
        { href: '/services/air-conditioning-installation', title: 'Installation', text: 'The service itself, from the first survey to the handover.', icon: 'i-install', image: img.install },
      ] },
    ],
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Contact Claremont Cooling by phone, email or WhatsApp, or send a message. The form checks your details and opens your email app so you can press send.',
    eyebrow: 'Contact',
    heading: 'Talk to **our team**',
    lead: 'Questions, quotes or a system that is playing up. Call, email, WhatsApp, or send the form and it will open a message ready for you to send.',
    image: img.panel,
    crumbs: [{ label: 'Contact' }],
    actions: [
      { href: '/#survey', label: 'Book Your E-Survey', variant: 'flame', icon: 'i-arrow' },
      call,
    ],
    sections: [
      { type: 'contact' },
    ],
    cta: {
      eyebrow: 'A system recommendation',
      title: 'The E-Survey is the **faster quote**',
      text: 'About 90 seconds to start. We ask for the postcode, the building and the rooms, then we recommend a system.',
      actions: [
        { href: '/#survey', label: 'Book Your E-Survey', variant: 'flame', icon: 'i-arrow' },
        { href: site.whatsappUrl, label: 'WhatsApp', variant: 'ghost-light', icon: 'i-whatsapp' },
      ],
    },
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions',
    description: 'Answers from Claremont Cooling on what we do, heating and cooling, running costs, noise, the E-Survey, repairs and how to get in touch.',
    eyebrow: 'FAQ',
    heading: 'Common **questions**',
    lead: 'The same answers as the homepage, plus the practical ones people ask before they book.',
    image: img.panel,
    crumbs: [{ label: 'FAQs' }],
    sections: [
      { type: 'faq', items: [
        { q: 'What does Claremont Cooling do?', a: 'Air conditioning installation, repair and maintenance for homes and businesses, alongside heating, indoor air quality and preventative HVAC servicing.' },
        { q: 'How does air conditioning work?', a: 'An air conditioning system absorbs heat from inside the room through the indoor unit and releases it outside through the outdoor unit, much like a fridge. In heating mode the process runs in reverse, like an air source heat pump. There is a longer explanation in [how air conditioning heats and cools](/blog/how-air-conditioning-heats-and-cools).' },
        { q: 'Can air conditioning provide heating?', a: 'Yes. Modern systems can both heat and cool. Units that heat are heat pumps, and they are one of the more efficient ways to heat a room.' },
        { q: 'Is air conditioning expensive to run?', a: 'Modern systems are economical. For every 1 kW of electricity used, a system provides about 3–4 kW of heating or cooling. A small-capacity unit can cost around 10–15p an hour as a rough guide. Exact cost depends on the room, the insulation and energy prices. The same idea is in [how air conditioning heats and cools](/blog/how-air-conditioning-heats-and-cools).' },
        { q: 'Are the systems noisy?', a: 'Modern indoor units are very quiet. The quietest models run as low as 19 dBA in silent mode, and outdoor units typically run at around 46–49 dBA. The figure for your room is confirmed after the E-Survey.' },
        { q: 'What is an E-Survey?', a: 'A short form, about 90 seconds to start, then a conversation with a specialist from your home or premises. We recommend a system and prepare a quotation afterwards. Nothing is booked until you decide to go ahead. Start at the [E-Survey](/#survey).' },
        { q: 'How long does installation take?', a: 'Many single-room and two-room installs are completed in a day. Larger homes and commercial jobs take longer. We tell you the likely time after the survey rather than promising one duration for every building. See [installation day](/installation-day).' },
        { q: 'Do you repair other brands?', a: 'Yes. Fault finding and repairs cover most makes, with the price agreed before any work starts. New installations are usually Daikin, because those are the ranges we specify. See [repairs](/services/air-conditioning-repair) and [brands](/brands).' },
        { q: 'Do you cover my area?', a: 'We work across Greater London and the surrounding counties. The towns are listed on [locations](/locations), and we confirm your postcode before a survey goes ahead.' },
        { q: 'What is included in a care plan?', a: 'Planned annual servicing, with every visit kept on record. The price is quoted in writing for your system. See [care plans](/care-plans).' },
        { q: 'How can I contact you?', a: `Call ${phoneLink}, email ${emailLink} or message us on ${whatsAppLink}. The [contact page](/contact) also has a form. It checks the details, then opens your email app so the message is only sent when you press send.` },
      ] },
    ],
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'How Claremont Cooling uses the details you send by phone, email, WhatsApp or the website forms. Registered company details are not published on this site yet.',
    eyebrow: 'Privacy',
    heading: 'How we use **your details**',
    lead: 'This page describes what this website actually does with your information. It is not a generic policy with a fake company number filled in.',
    crumbs: [{ label: 'Privacy policy' }],
    actions: [email, call],
    sections: [
      { type: 'note', text: 'Placeholder: the registered company name, company number and registered office are not on the homepage, so they are not invented here. Until they are published, Claremont Cooling can be contacted at the phone number and email below.' },
      { type: 'legal', blocks: [
        { heading: 'Who we are', paragraphs: [
          `Claremont Cooling (“we”) provides air conditioning installation, repair and maintenance. For privacy questions, email ${emailLink} or call ${phoneLink}.`,
          'If a registered company name and ICO registration number are later confirmed, this page will be updated to show them. They are not published on the site today.',
        ] },
        { heading: 'What we collect', paragraphs: [
          'If you phone, email or WhatsApp us, we receive whatever you choose to send: usually your name, a phone number or email address, a postcode and a description of the job.',
          'The E-Survey, contact form and refer-a-friend form ask for those same kinds of details. The refer-a-friend form also asks for a friend’s name and email, which you should only send if they are happy for you to pass them on.',
          'The forms do not submit to a database on this website. Sending opens your email app with the answers filled in, addressed to us. Nothing is delivered until you press send in that app.',
        ] },
        { heading: 'Why we use it', paragraphs: [
          'We use the details to answer you, check we cover the postcode, prepare a quotation, arrange a survey or a visit, carry out the work, and keep a service record if you become a customer.',
          'We do not sell your details. We do not use them for unrelated marketing lists. If we ever want to email you about something other than the job you asked about, we will say so at the time and you can refuse.',
        ] },
        { heading: 'How long we keep it', paragraphs: [
          'Enquiry emails are kept long enough to reply and, if you go ahead, for the life of the job and any warranty or service history that depends on them. If you ask us to delete an enquiry we have not acted on, we will.',
          'We do not publish a fixed number of years here, because a warranty record and a one-off question are not the same thing. Ask us about your own record and we will tell you what we still hold.',
        ] },
        { heading: 'Who else sees it', paragraphs: [
          'The engineers doing the work, and the email or phone provider you use to contact us. If a manufacturer has to be involved in a warranty claim, they receive what that claim needs and nothing casual besides.',
          'This website does not run advertising cookies, and it does not embed analytics that we have switched on. If that changes, this page will say so before it happens.',
        ] },
        { heading: 'Your choices', paragraphs: [
          `You can ask what we hold, ask us to correct it, or ask us to delete an enquiry. Email ${emailLink}. If you think we have handled your details badly, you can also contact the Information Commissioner’s Office. We would rather hear from you first.`,
        ] },
      ] },
    ],
    cta: {
      eyebrow: 'Privacy questions',
      title: 'Email us **about your details**',
      text: 'Use the same address as the rest of the site. Put “Privacy” in the subject so it is read as a request, not a quote.',
      actions: [
        { href: `mailto:${site.email}?subject=Privacy`, label: 'Email about privacy', variant: 'flame', icon: 'i-mail' },
        { href: site.phoneHref, label: 'Call us', variant: 'ghost-light', icon: 'i-phone' },
      ],
    },
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions',
    description: 'The terms that apply when you ask Claremont Cooling for a survey, a quotation or work. Job-specific prices and cancellation terms are written on your quotation.',
    eyebrow: 'Terms',
    heading: 'Terms for **surveys, quotes and work**',
    lead: 'The general rules are here. The price, the timing and any deposit for your job are written on the quotation, because they depend on the building.',
    crumbs: [{ label: 'Terms' }],
    actions: [email, call],
    sections: [
      { type: 'legal', blocks: [
        { heading: 'Quotations', paragraphs: [
          'An E-Survey is how we understand the rooms. A quotation follows it. A price mentioned in conversation is not the quotation until it is sent to you in writing.',
          'The quotation names what is included. If something on site turns out to be different from what the survey could see — structure, electrics, access — we stop and agree the change before doing that part. We do not quietly add it.',
          'Repair prices are agreed before the repair starts. You can decline the repair after you have heard the price.',
        ] },
        { heading: 'What we need from you', paragraphs: [
          'Accurate information about the property, access on the day we agree, and a safe way for engineers to reach the indoor and outdoor positions. If parking, alarms, pets or building management affect the visit, tell us when you book.',
          'You are responsible for having permission to alter the building where that permission is required, including from a landlord, freeholder or building manager. Ask us if you are unsure what the install involves and we will describe it before you seek that permission.',
        ] },
        { heading: 'Installation and handover', paragraphs: [
          'We fit the system described in the quotation, commission it, clean up, and show you how it works. The [installation day](/installation-day) page is a description of that visit, not a separate contract.',
          'Timing is confirmed for your job. Many smaller installs finish in a day. That is not a warranty that every job will.',
        ] },
        { heading: 'Warranties and care plans', paragraphs: [
          'Equipment warranty and workmanship warranty are the periods written on your quotation. They are not a single number published here, because they depend on the model and the manufacturer’s terms at the time.',
          'Annual servicing keeps many warranties valid. A [care plan](/care-plans) is optional and is only in force once you have accepted a written price for your system. A plan is not an insurance policy and it does not make repairs free unless the plan wording you accepted says so.',
        ] },
        { heading: 'The website', paragraphs: [
          'The pages are a description of the service. Photographs marked as reference images are not photographs of our projects. Sample review text, where it still appears on the homepage, is not a customer testimonial.',
          'Guides on running costs and noise repeat the figures stated on the homepage. They are general. Your quotation is the document that applies to your rooms.',
        ] },
        { heading: 'Liability', paragraphs: [
          'We carry out the work with reasonable care and skill. Nothing on this page limits liability for death or personal injury caused by negligence, or any other liability that the law of England and Wales does not allow us to limit.',
          'We are not liable for loss that comes from information you gave us that was inaccurate, or from a building constraint you did not have permission for us to alter, provided we told you what we were going to do.',
        ] },
        { heading: 'Law', paragraphs: [
          `These terms are governed by the law of England and Wales. If the business is later confirmed as registered elsewhere in the UK, this sentence will be updated. Contact ${emailLink} or ${phoneLink} about a specific job and we will refer to your quotation.`,
        ] },
      ] },
    ],
    cta: {
      eyebrow: 'A specific job',
      title: 'Your quotation **is the detail**',
      text: 'Deposits, lead times and cancellation terms belong on that document. Ask us to put them in writing before you accept.',
      actions: [
        { href: '/contact', label: 'Contact us', variant: 'flame', icon: 'i-arrow' },
        { href: site.phoneHref, label: 'Call us', variant: 'ghost-light', icon: 'i-phone' },
      ],
    },
  },
];

/** Pages that are built, listed and allowed in the sitemap. Drafts stay in `pages` so they can be published by removing `draft`. */
export const publishedPages = pages.filter((page) => !page.draft);

const byPath = new Map(publishedPages.map((page) => [page.path, page]));

export function getPage(slug: string[]) {
  const path = `/${slug.join('/')}`.replace(/\/+$/, '') || '/';
  return byPath.get(path);
}
