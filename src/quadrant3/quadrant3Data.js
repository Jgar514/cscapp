import modelPaths from '../data/modelPaths';
import { broadneckImage, bhslibraryImage, bhsathleticsImage, standrewsImage, lakeclaireImage, boatrampImage } from '../data/images';


const quadrant3Data = [
  {
    name: "Broadneck High School",
    imageSrc: broadneckImage,
    position: [-0.75, 0.09, 1.0],
    cameraPosition: [-1, .5, 2],
    orbitTarget: [-0.75, 0.09, 1.0],
    fov: 30,
    color: '#8b0000',
    secondaryColor: '#ff6347',
    modelPath: modelPaths.broadneckHighSchool,
    website: 'https://www.broadneck.org/',
    description: `In the 1970s, Severna Park High School was becoming overcrowded and was the only high school serving students on the Broadneck Peninsula. To alleviate the overcrowding, Anne Arundel County Public Schools built Broadneck High School, which opened in January 1982 for students in grade 10, with a total of 310 students. The first principal was Lawrence E. Knight.

In 1984, the school chose the Bruins as its mascot and adopted maroon, grey, and white as its colors. The football stadium was named in honor of Principal Lawrence E. Knight. By 1987, Broadneck began to experience overcrowding, leading to the addition of portable classrooms on the side of the school. An auditorium was also added, and a gravel pit was created near the softball fields to expand student parking. Broadneck Athletics joined the Anne Arundel County league during this time. A fire in the English Department resulted in the hospitalization of a teacher, and the school became smoke-free in 1987.

In 1996, a large construction and expansion project began to accommodate 9th graders at the school. The project was completed in 1998, and Broadneck welcomed its first freshman class. In 2010, a two-story wing was added to the building.`,
  },
  {
    name: "Building",
    position: [-0.9, 0.1, 0.8],
  },
  {
    name: "Broadneck Athletics",
    imageSrc: bhsathleticsImage,
    position: [-0.75, 0.09, 1.0],
    cameraPosition: [-.7, .5, 2],
    orbitTarget: [-0.5, 0.09, 1.0],
    fov: 30,
    color: '#000000',
    secondaryColor: '#ff6347',
    // modelPath: modelPaths.broadneckHighSchool,
    website: 'https://www.broadneck.org/',

    description: 'add description from allLocationsData'
  },
  {
    name: "Broadneck Library",
    imageSrc: bhslibraryImage,
    position: [-0.75, 0.09, 1.0],
    cameraPosition: [-1.2, .5, 2],
    orbitTarget: [-0.5, 0.09, 1.0],
    fov: 30,
    color: '#8b0000',
    secondaryColor: '#ff6347',
    // modelPath: modelPaths.broadneckHighSchool,
    website: 'https://www.broadneck.org/',
    description: 'add description from allLocationsData'
  },
  // {
  //   name: "Broadneck Park",
  //   imageSrc: '',
  //   position: [/* Position not specified */],
  //   description: 'add description from allLocationsData'
  // },
  {
    name: "St. Andrews By the Bay Church",
    imageSrc: standrewsImage,
    position: [-0.3, 0.1, 2.2],
    cameraPosition: [-1, .5, 2],
    orbitTarget: [-0.3, 0.1, 2.2],
    fov: 20,
    color: '#FFFFC5',
    secondaryColor: '#7b68ee',
    modelPath: modelPaths.stAndrewsChurch,
    website: ' https://www.standrewbythebay.org/ ',
    description: 'St Andrews Church is a historic landmark with a rich history, known for its beautiful architecture and spiritual significance.'
  },
];

export default quadrant3Data;
