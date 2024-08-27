import { broadneckImage, shopsImage, firedeptImage, cscelemImage, littlebeachImage, mainbeachImage, lakeclaireImage, boatrampImage, goshenfarmImage, standrewsImage, guardtowerImage } from './images';

const locationsData = [

  {

    name: 'Bay',
    imageSrc: broadneckImage,
    website: 'https://www.example.com',
    description: 'This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content. This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content. This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content. This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content. This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content.',
    hours: [
      'Monday: 9:00 AM - 5:00 PM',
      'Tuesday: 9:00 AM - 5:00 PM',
      'Wednesday: 9:00 AM - 5:00 PM',
      'Thursday: 9:00 AM - 5:00 PM',
      'Friday: 9:00 AM - 5:00 PM',
      'Saturday: Closed',
      'Sunday: Closed',
    ],
    relatedKeywords: ['Business', 'Services', 'History', 'Mission'],
    cameraPosition: [0, 2.5, 5],
    orbitTarget: [0, 0, 0],  // Coordinates for Bay
    fov: 50,
    color: '#1e90ff',
    secondaryColor: '#87ceeb',
  },
  {

    name: 'Boat Ramp',
    imageSrc: boatrampImage, // Replace with your image source
    website: 'https://cscia.org/cscia-services/boat-slips-information/',
    description: 'This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content. This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content. This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content. This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content. This is a detailed description of the business. It goes on for more than three lines and provides extensive information about the services, history, and mission of the business. You can expand this description to show more content.',
    hours: [
      'Monday: 9:00 AM - 5:00 PM',
      'Tuesday: 9:00 AM - 5:00 PM',
      'Wednesday: 9:00 AM - 5:00 PM',
      'Thursday: 9:00 AM - 5:00 PM',
      'Friday: 9:00 AM - 5:00 PM',
      'Saturday: Closed',
      'Sunday: Closed',
    ],
    relatedKeywords: ['Business', 'Services', 'History', 'Mission'],
    cameraPosition: [-2.5, .5, -1],
    orbitTarget: [-1.7, -.04, -.45],  // Coordinates for Boat Ramp
    fov: 30,
    color: '#2e8b57',
    secondaryColor: '#3cb371',

  },
  {
    name: 'Broadneck High School',
    imageSrc: broadneckImage,
    website: 'https://www.broadneck.org/',
    description: 'In the 1970s, nearby Severna Park High School was beginning to become overcrowded and was the only high school that served students on the Broadneck Peninsula at the time. In attempt to solve overcrowding at Severna Park, Anne Arundel County Public Schools built Broadneck High School, which opened in January, 1982 for students in grade 10, and had a total of 310 students. The first principal was Lawrence E. Knight. In 1984, the school chose its mascot as the Bruins and its colors as maroon, grey and white, and the football stadium was named in honor of principal Lawrence E. Knight. In 1987, Broadneck began to experience overcrowding, and as a result, portable classrooms were added to the side of the school. An auditorium was also added to the school, a gravel pit was added near the softball fields to build more room for student parking, and Broadneck Athletics were added to the Anne Arundel County league. A fire also occurred in the English Department, resulting in the hospitalization of a teacher. Broadneck also became a smoke free school in 1987. In 1996, a large construction/expansion project began on the school building to allow room to add 9th graders to the school and in 1998 the project was finished and Broadneck opened its doors to its first freshman class. In 2010, a two story wing was added to the building.',
    hours: [
      'Monday: 9:00 AM - 5:00 PM',
      'Tuesday: 9:00 AM - 5:00 PM',
      'Wednesday: 9:00 AM - 5:00 PM',
      'Thursday: 9:00 AM - 5:00 PM',
      'Friday: 9:00 AM - 5:00 PM',
      'Saturday: Closed',
      'Sunday: Closed',
    ],
    relatedKeywords: ['Business', 'Services', 'History', 'Mission'],

    cameraPosition: [-1, .5, 2],
    orbitTarget: [-.7, 0, .9],  // Coordinates for Broadneck High School
    fov: 30,
    color: '#8b0000',
    secondaryColor: '#ff6347',


  },
  {
    name: 'Broadneck Library',
    imageSrc: broadneckImage,
    cameraPosition: [0, 2.5, 5],
    orbitTarget: [-.7, 0, .9],  // Coordinates for Broadneck Park
    maxDistance: 10,
    color: '#228b22',
    secondaryColor: '#32cd32',
    keywords: ['park', 'recreation', 'outdoors'],
    website: 'https://www.aacpl.net/services/Broadneck',

    description: 'A spacious park that offers plenty of room for recreation and outdoor activities, surrounded by lush greenery.',
    hours: [
      'Monday: 9:00 AM - 5:00 PM',
      'Tuesday: 9:00 AM - 5:00 PM',
      'Wednesday: 9:00 AM - 5:00 PM',
      'Thursday: 9:00 AM - 5:00 PM',
      'Friday: 9:00 AM - 5:00 PM',
      'Saturday: Closed',
      'Sunday: Closed',
    ],
  },
  // {
  //   name: 'Broadneck Park',
  //   cameraPosition: [0, 2.5, 5],
  //   orbitTarget: [-.7, 0, .9],  // Coordinates for Broadneck Park
  //   maxDistance: 10,
  //   color: '#228b22',
  //   secondaryColor: '#32cd32',
  //   keywords: ['park', 'recreation', 'outdoors'],
  //   link: 'https://example.com/broadneck-park',
  //   punchlist: ['', '', ''],
  //   description: 'A spacious park that offers plenty of room for recreation and outdoor activities, surrounded by lush greenery.'
  // },
  {
    name: 'Cape Clubhouse',
    cameraPosition: [.5, 2.5, -1],
    orbitTarget: [1.7, -.055, -.35],  // Coordinates for Cape Clubhouse
    fov: 50,
    color: '#4682b4',
    secondaryColor: '#5f9ea0',
    keywords: ['clubhouse', 'community', 'gathering'],
    link: 'https://cscia.org/',
    description: 'The Cape St. Claire Improvement Association manages the affairs of the community, administers the Special Community Benefit District, and publishes the community newsletter the Caper.'
  },
  {
    name: 'Cape Elementary School',
    imageSrc: cscelemImage,
    cameraPosition: [.5, .5, 0],
    orbitTarget: [.33, .025, 1],  // Coordinates for Cape Elementary School
    fov: 30,
    color: '#4682B4',
    secondaryColor: '#ffa500',
    keywords: ['school', 'elementary', 'education'],
    link: 'https://www.aacps.org/o/capestclairees',
    punchlist: [
      'playground equipment and sand',
      'side path behind smaller building',
      'awning',
      'detail to building'
    ],
    description: 'Cape Elementary School provides a nurturing educational environment for young children, focusing on early childhood education.'
  },
  {
    name: 'Cape Field',
    cameraPosition: [1.5, 1.5, .5],
    orbitTarget: [1.0, -.008, 1],  // Coordinates for Cape Field
    fov: 50,
    color: '#556b2f',
    secondaryColor: '#6b8e23',
    keywords: ['field', 'sports', 'recreation'],
    link: 'https://example.com/cape-field',
    punchlist: ['all brown trees fix', 'hoops?', ''],
    description: 'Cape Field is a popular spot for sports and recreational activities, offering plenty of open space for various sports.'
  },
  {
    name: 'Cape Firehouse',
    imageSrc: firedeptImage,
    cameraPosition: [0, .5, .8],
    orbitTarget: [.8, 0.028, 1.5],
    fov: 10,
    color: '#BC4A3C',
    secondaryColor: '#BC4A3C',

    website: 'https://www.cscvfc.org/',
    punchlist: ['detail - color, flag, sign', 'add a target', ''],
    description: `At a meeting held on March 25, 1955, residents of the Broadneck Peninsula gathered at the Cape St. Claire Clubhouse and voted to organize as the Cape St. Claire Volunteer Fire Association. By May of the same year, the "Association" had changed its name to The Cape St. Claire Volunteer Fire Company, Inc. (CSCVFC), and purchased a 1936 Chevrolet fire engine from the Ferndale Volunteer Fire Department at a cost of $1,800.00.

    By May 1956, a piece of property along Hunt Club/Persimmon Point Road (now Cape St. Claire Road) was presented to the Fire Company by the Cape St. Claire Maintenance Corporation. The property was cleared by the members with help from their neighbors.
    
    The Fire Company's Executive Committee served as the general contractors, and the company members served as the labor force (many of whom were local contractors). These contractors donated their professional skills and considerable materials to the station construction.
    
    When the station was completed in February 1957, it consisted of three engine bays, an office, and a restroom. As the membership grew and activities increased, an addition was built across the back of the existing station in 1960. The addition included larger restrooms, a new office, and a meeting room. In 1962, when the Fire Company purchased a new Brush Unit and Pumper, two additional bays, a larger office, and storage space were added to the building.
    
    Today, the station has five engine bays, a larger meeting/day room, a kitchen, two offices, one bunk room, a small day room for the career firefighters, restrooms, laundry room, and a large storage room. As the community continues to grow and needs increase, the need for a new firehouse has become apparent. We are currently working with the county fire department and an architectural firm to design a new station that will better meet the needs of our community and our first responders.
    
    CSCVFC is located within Cape St. Claire. The community we serve consists of approximately 64 square miles and a residential population of 25,000. This does not include the travelers along Maryland Route 50 or visitors to Sandy Point State Park during the summer months. Cape St. Claire is located about 5 miles west of the Chesapeake Bay Bridge.
    
    We are supported by surrounding fire companies such as Arnold Volunteer Fire Company (Station 17), Jones Station Fire Department (Station 23), and West Annapolis Volunteer Fire Company (Station 40). Our mutual aid companies include Queen Anne's County Station 1 (Kent Island Volunteer Fire Department), Naval Academy Fire Department (housed on the Naval Station), and the Annapolis City Fire Department.
    
    Cape St. Claire Volunteer Fire Company is a combination Fire Department consisting of over 50 volunteers, supplemented by four 24-hour shifts of 5 career personnel per shift (shift begins at 0700 hours). CSCVFC operates with both county owned and volunteer owned equipment to include two engines, a BLS ambulance, a chief's truck, a brush truck, a fire boat, and a utility truck.`,
  },
  {
    name: 'Cape Shopping Center',
    imageSrc: shopsImage,
    cameraPosition: [3, .5, 2],
    orbitTarget: [1.0, -.008, 1],
    fov: 10,
    color: "green",
    secondaryColor: '#9370db',

    description: `
      A bustling shopping center offering a wide variety of retail stores, restaurants, and services for the community.
  
      01 - Rita's Italian Ice  
      02 - Joy Luck  
      03 - Color Nails and Spa  
      04 - Edward Jones - Chad Miller  
      05 - Graul's Market  
      06 - Cape Drugs  
      07 - Houck’s Menswear  
      08 - The Shop  
      09 - Freestate  
      10 - Bellas  
      11 - Della Notte  
      12 - First National Bank  
      13 - Blue Rooster Cafe  
      14 - Vizzini's Pizza  
      15 - Nagoya Asian Bistro II  
      16 - Broadneck Cantina  
      17 - Broadneck Grill  
      18 - The Law Office Of Sean Becker  
      19 - Til Next Time Barber Shop  
      20 - Davy Dance Academy (bigger space)  
      21 - Whimsicality  
      22 - Vape n Tobacco  
      23 - Cape Hair Scene & Barber Shop  
      24 - Dunkin' Donuts  
      25 - Bergman Cleaners & Tailors  
      26 - Nuva Nails & Spa  
      27 - Pizza Hut  
      28 - Subway  
      29 - Primary Care Anne Arundel Medical Group  
      30 - Cape Ace Hardware  
      31 - Shell
    `,
  },

  {
    name: 'Deep Creek',
    cameraPosition: [0, 2.5, 5],
    orbitTarget: [0, 0, 0],  // Coordinates for Deep Creek
    fov: 50,
    color: '#4682b4',
    secondaryColor: '#00bfff',
    keywords: ['creek', 'water', 'scenic'],
    link: 'https://example.com/deep-creek',
    punchlist: ['', '', ''],
    description: 'Deep Creek is a serene waterway surrounded by natural beauty, offering a peaceful escape from the hustle and bustle.'
  },
  {
    name: 'Floor',
    cameraPosition: [0, 2.5, 5],
    orbitTarget: [0, 0, 0],  // Coordinates for Floor
    fov: 50,
    color: '#a9a9a9',
    secondaryColor: '#d3d3d3',
    keywords: ['floor', 'ground', 'surface'],
    link: 'https://example.com/floor',
    punchlist: ['', '', ''],
    description: 'The floor area serves as the foundation for various structures and activities, providing a stable and reliable surface.'
  },
  {
    name: 'Goshen Farm',
    imageSrc: goshenfarmImage,
    description: 'Goshen Farm is a historic landmark, preserving the rich agricultural heritage of the region with its historic structures and landscapes.',
    website: "https://goshenfarm.org/",
    cameraPosition: [0, .5, 2.25],
    orbitTarget: [.37, 0.062, 1.3],  // Coordinates for Goshen Farm
    fov: 8,
    color: '#654321',
    secondaryColor: '#a0522d',


  },
  {
    name: 'Guard Tower',
    imageSrc: guardtowerImage,
    cameraPosition: [.2, .5, 1.3],
    orbitTarget: [.9, 0.04, 1.3],  // Coordinates for Goshen Farm
    fov: 8,
    color: '#654321',
    secondaryColor: '#a0522d',
    keywords: ['farm', 'history', 'landmark'],
    link: 'https://goshenfarm.org/',
    punchlist: [
      'details - add bridge, greenhouse, building, trees',
      '',
      '',
    ],
    description: `
      Cape History - The area that was to become Cape St. Claire was mostly farmland until the 1940s. In the late 18th century, much of the land was operated as farmland by a couple of families. Two houses from this era remain—the “Stinchcomb House” located near the Cape St. Claire clubhouse, and Goshen Farm, located on a hill near the Cape St. Claire Elementary School.
      
      In the early part of the 20th century, Hugh H. Young, a prominent doctor on the staff of Johns Hopkins University, began buying up the farmland with the intention of building a community. Dr. Young’s first attempt, a community called Persimmon Point, was less than successful, with only a few lots being sold. This failure was brought on by the Great Depression, and the project was put on hold. Upon Dr. Young’s death, his children created the River Bay Company to manage the property for development.
      
      The River Bay Company platted the community of Cape St. Claire (incorporating the Persimmon Point property as part of the new community) on June 14, 1949. The community was envisioned and sold as a summer retreat for residents of Washington, D.C., and Baltimore. To manage the affairs of the new community, the River Bay Company created and incorporated the Cape St. Claire Club, governed by a Board of Governors. The first meeting of the Board of Governors of the Cape St. Claire Club (renamed the Cape St. Claire Improvement Association on May 12, 1959) was held on June 30, 1949. The Board consisted of three representatives of the River Bay Company named in the Cape St. Claire Club certificate of incorporation: John G. Rouse, Jr.; James C. Morton, Jr.; and George W. Baker, Jr. James C. Morton was elected Chairman.
      
      In April 1989, the Anne Arundel County Council approved the formation of the Cape St. Claire Special Community Benefits District. The SCBD allows the community to establish a taxing district. The taxes are collected by the county government (as part of the property tax), which are then turned over to the Improvement Association to administer as voted on by the property owners in the community. This special benefits district has allowed the community to purchase additional common property, build a specially-designated fishing/crabbing pier, make improvements to community assets, and hire off-duty county police for additional security.
      
      The covenants are administered on behalf of the community by the Cape St. Claire Improvement Association. Originally designed to be a community of summer cottages, Cape St. Claire is now home to approximately 7,800 year-round residents living in more than 2,300 single-family homes. Homes come in all shapes and sizes (from ranchers to split levels, colonials and contemporaries, all types of homes are found in the Cape), and the diversity of houses has long been a goal for the community.
    `,
  },

  // {
  //   name: 'Island',
  //   cameraPosition: [0, 2.5, 5],
  //   orbitTarget: [0, 0, 0],  // Coordinates for Island
  //   fov: 50,
  //   color: '#2e8b57',
  //   secondaryColor: '#66cdaa',
  //   keywords: ['island', 'nature', 'water'],
  //   link: 'https://example.com/island',
  //   punchlist: ['', '', ''],
  //   description: 'A tranquil island surrounded by water, offering a natural haven for wildlife and a peaceful retreat for visitors.'
  // },
  {
    name: 'Lake Claire',
    imageSrc: lakeclaireImage, // combine with lake claire beach
    cameraPosition: [0, 2.5, 5],
    orbitTarget: [-.4, -.055, -1],  // Coordinates for Lake Claire
    fov: 50,
    color: '#FFFFC5',
    secondaryColor: '#5f9ea0',
    keywords: ['lake', 'scenic', 'nature'],
    link: 'https://example.com/lake-claire',
    punchlist: ['color?', 'detail?', ''],
    description: 'Lake Claire is a picturesque lake offering stunning views and a variety of outdoor activities such as fishing and boating.'
  },
  {
    name: 'Latrobe',  // Change to Lake Claire Beach
    imageSrc: littlebeachImage,
    cameraPosition: [-2, 1, -3],
    orbitTarget: [-.4, -.055, -1],  // Coordinates for Latrobe
    fov: 10,
    color: '#FFFFC5',
    secondaryColor: '#ff8c00',
    keywords: ['latrobe', 'historic', 'site'],
    website: 'https://cscia.org/cscia-services/beaches/',
    linkHeading: "Youth Sailing",
    link: 'https://sites.google.com/site/capeyouthsailing/home?authuser=0',
    description: 'Latrobe is a historic site with significant cultural and architectural importance, preserving the legacy of the region.'
  },
  // {
  //   name: 'Little Magothy',
  //   cameraPosition: [0, 2.5, 5],
  //   orbitTarget: [0, 0, 0],  // Coordinates for Little Magothy
  //   fov: 50,
  //   color: '#b0e0e6',
  //   secondaryColor: '#add8e6',
  //   keywords: ['river', 'scenic', 'water'],
  //   link: 'https://example.com/little-magothy',
  //   punchlist: ['', '', ''],
  //   description: 'Little Magothy is a small, scenic river that flows through the landscape, offering peaceful views and opportunities for water activities.'
  // },
  {
    name: 'Main Beach',
    imageSrc: mainbeachImage,
    website: "https://cscia.org/cscia-services/beaches/",
    cameraPosition: [2.7, .5, -1.0],
    orbitTarget: [1.7, -.055, -.35],  // Coordinates for Main Beach
    fov: 20,
    color: '#EFDD6F',
    secondaryColor: '#ff6347',
    description: 'Main Beach is a popular destination for beachgoers, offering sandy shores and refreshing waters for swimming and sunbathing.'
  },
  {
    name: 'St Andrews Church',
    imageSrc: standrewsImage,
    website: ' https://www.standrewbythebay.org/ ',
    cameraPosition: [-1, .5, 2],
    orbitTarget: [-.27, .02, 2.15],  // Coordinates for St Andrews Church
    fov: 20,
    color: '#ffd700',
    secondaryColor: '#7b68ee',

    description: 'St Andrews Church is a historic landmark with a rich history, known for its beautiful architecture and spiritual significance.'
  },
  // {
  //   name: 'Streets',
  //   cameraPosition: [0, 2.5, 5],
  //   orbitTarget: [0, 0, 0],  // Coordinates for Streets
  //   fov: 50,
  //   color: '#696969',
  //   secondaryColor: '#808080',
  //   keywords: ['streets', 'roads', 'infrastructure'],
  //   link: 'https://example.com/streets',
  //   punchlist: [
  //     'Make them transparent when location is clicked',
  //     'round cul-de-sacs',
  //     'sidewalks? - behind shops and in front of csc elem',
  //     'bike path?',
  //   ],
  //   description: 'The streets provide essential infrastructure for transportation and access throughout the community, connecting various locations.'
  // },
  // {
  //   name: 'Trees',
  //   cameraPosition: [0, 2.5, 5],
  //   orbitTarget: [0, 0, 0],  // Coordinates for Trees
  //   fov: 50,
  //   color: '#228b22',
  //   secondaryColor: '#32cd32',
  //   keywords: ['trees', 'nature', 'forest'],
  //   link: 'https://example.com/trees',
  //   punchlist: ['decide on layout', '', ''],
  //   description: 'The trees add natural beauty and shade to the area, creating a peaceful and serene environment for all to enjoy.'
  // },
];

export default locationsData;
