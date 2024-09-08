import modelPaths from '../data/modelPaths';
import { broadneckImage, shopsImage, firedeptImage, cscelemImage, littlebeachImage, mainbeachImage, lakeclaireImage, boatrampImage, goshenfarmImage, standrewsImage, guardhouseImage, capefieldmapImage, littlemagothyparkImage } from '../data/images';


const quadrant4Data = [
  {
    name: "Cape Shopping Center",
    imageSrc: shopsImage,
    position: [0.9, 0.05, 1.04],
    spotlightPosition: [0.9, 0.85, 1.04],
    cameraPosition: [1.1, .1, 1.09],
    orbitTarget: [0.9, 0.05, 1.04],
    fov: 50,
    color: "#172226",
    secondaryColor: '#9370db',
    modelPath: modelPaths.capeShoppingCenter,
  },
  {
    name: "Cape Pool",
    imageSrc: '',
    position: [0.9, 0.05, 1.04],
    spotlightPosition: [0.9, 1.05, 1.04],
    cameraPosition: [1.1, .1, 1.09],
    orbitTarget: [0.9, 0.05, 1.04],
    fov: 50,
    color: "#172226",
    secondaryColor: '#9370db',
    modelPath: modelPaths.capeShoppingCenter,
    website: 'https://capeswim.org/',
    description: 'Incorporated in December of 1967, the Cape St. Claire Swim Club (CSCSC) has delivered summer fun for over 50 years. With over 200 household memberships, CSCSC is stronger and more fun than ever today. The swim season starts Memorial Day weekend and goes through Labor Day weekend. We host food trucks, great events, live music, and swim meets through our own Dolphins swim team.'
  },
  {
    name: "Cape Field",
    imageSrc: capefieldmapImage,
    position: [1.05, 0.05, 1.05],
    spotlightPosition: [1.05, 0.15, 1.05],
    cameraPosition: [1.3, .2, 1.19],
    orbitTarget: [1.05, 0.05, 1.05],
    fov: 50,
    color: "green",
    secondaryColor: '#9370db',
    modelPath: modelPaths.capeField,
    website: 'https://www.aacounty.org/locations/cape-st-claire-park',
    description: `Cape Field is a popular spot for sports and recreational activities, offering plenty of open space for various sports. 
    
    Park is open from dawn to dusk.
    - Baseball 
    - Basketball 
    - Multi-Purpose Field 
    - Restroom 
    - Trails
    `
  },
  {
    name: "CSC Elementary",
    imageSrc: cscelemImage,
    position: [0.35, 0.07, 1.0],
    buildingPosition: [0.18, 0.09, 0.9],
    orbitTarget: [0.35, 0.07, 1.0],
    cameraPosition: [.5, .5, 0],
    fov: 30,
    color: '#4682B4',
    color: '#4682B4',
    secondaryColor: '#ffa500',
    modelPath: modelPaths.cscElem,
    website: 'https://www.aacps.org/o/capestclairees',
    description: 'Cape Elementary School provides a nurturing educational environment for young children, focusing on early childhood education.'
  },
  {
    name: "Guard House",
    imageSrc: guardhouseImage,
    position: [0.9, 0.05, 1.3],
    cameraPosition: [.2, .5, 1.3],
    orbitTarget: [0.9, 0.05, 1.3],
    fov: 8,
    color: '#BC4A3C',
    secondaryColor: '#a0522d',
    modelPath: modelPaths.guardHouse,
    website: 'add',
    description: `
      Cape History - The area that was to become Cape St. Claire was mostly farmland until the 1940s. In the late 18th century, much of the land was operated as farmland by a couple of families. Two houses from this era remain—the “Stinchcomb House” located near the Cape St. Claire clubhouse, and Goshen Farm, located on a hill near the Cape St. Claire Elementary School.
      
      In the early part of the 20th century, Hugh H. Young, a prominent doctor on the staff of Johns Hopkins University, began buying up the farmland with the intention of building a community. Dr. Young’s first attempt, a community called Persimmon Point, was less than successful, with only a few lots being sold. This failure was brought on by the Great Depression, and the project was put on hold. Upon Dr. Young’s death, his children created the River Bay Company to manage the property for development.
      
      The River Bay Company platted the community of Cape St. Claire (incorporating the Persimmon Point property as part of the new community) on June 14, 1949. The community was envisioned and sold as a summer retreat for residents of Washington, D.C., and Baltimore. To manage the affairs of the new community, the River Bay Company created and incorporated the Cape St. Claire Club, governed by a Board of Governors. The first meeting of the Board of Governors of the Cape St. Claire Club (renamed the Cape St. Claire Improvement Association on May 12, 1959) was held on June 30, 1949. The Board consisted of three representatives of the River Bay Company named in the Cape St. Claire Club certificate of incorporation: John G. Rouse, Jr.; James C. Morton, Jr.; and George W. Baker, Jr. James C. Morton was elected Chairman.
      
      In April 1989, the Anne Arundel County Council approved the formation of the Cape St. Claire Special Community Benefits District. The SCBD allows the community to establish a taxing district. The taxes are collected by the county government (as part of the property tax), which are then turned over to the Improvement Association to administer as voted on by the property owners in the community. This special benefits district has allowed the community to purchase additional common property, build a specially-designated fishing/crabbing pier, make improvements to community assets, and hire off-duty county police for additional security.
      
      The covenants are administered on behalf of the community by the Cape St. Claire Improvement Association. Originally designed to be a community of summer cottages, Cape St. Claire is now home to approximately 7,800 year-round residents living in more than 2,300 single-family homes. Homes come in all shapes and sizes (from ranchers to split levels, colonials and contemporaries, all types of homes are found in the Cape), and the diversity of houses has long been a goal for the community.
    `,
  },
  {
    name: "Goshen Farm",
    imageSrc: goshenfarmImage,
    position: [0.4, 0.09, 1.3],
    cameraPosition: [-1.2, .5, 1.65],
    orbitTarget: [0.4, 0.09, 1.3],
    fov: 7,
    color: '#725438',
    secondaryColor: '2B601E',
    modelPath: modelPaths.goshenFarm,
    website: "https://goshenfarm.org/",
    description: 'Goshen Farm is a historic landmark, preserving the rich agricultural heritage of the region with its historic structures and landscapes.',


  },
  {
    name: "Little Magothy Park and Kayak Launch",
    position: [1.6, 0.03, 1.1],
    imageSrc: littlemagothyparkImage,
    cameraPosition: [1.2, 0.25, 1.5],
    orbitTarget: [1.6, 0.03, 1.1],
    fov: 15,

    color: '#E78826',
    secondaryColor: '2B601E',
    modelPath: modelPaths.littleMagothyPark,
    website: "https://sites.google.com/site/capeyouthsailing/registration-information?authuser=0",
    description: 'Access to the little magothy. Good place to launch and store small vessels such as kayaks, canoes, or paddle boards.',
  },
  {
    name: "Cape Firehouse",
    imageSrc: firedeptImage,
    position: [0.85, 0.05, 1.52],
    buildingPosition: [0.18, 0.09, 0.9],
    orbitTarget: [0.85, 0.05, 1.52],
    cameraPosition: [.5, .2, 1.7],
    fov: 20,
    color: '#AD0407',
    secondaryColor: '2B601E',
    modelPath: modelPaths.capeFirehouse,
    website: 'https://www.cscvfc.org/',
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
    name: "Little Magothy",
    position: [1.8, 0.03, 0.25]
  }
];

export default quadrant4Data;


