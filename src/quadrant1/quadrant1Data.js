import modelPaths from '../data/modelPaths';
import { mainbeachImage, capeclubhouseImage } from '../data/images';

const quadrant1Data = [
  {
    name: 'Main Beach',
    imageSrc: mainbeachImage,
    position: [1.9, 0.02, -0.4],
    spotlightPosition: [1.9, .5, -0.4],
    cameraPosition: [2.7, .5, -1.0],
    orbitTarget: [1.9, 0.02, -0.4],
    fov: 20,
    mobileCameraPosition: [2.7, .5, -1.0],
    mobileOrbitTarget: [1.9, 0.02, -0.4],
    mobileFov: 50,
    color: '#EFDD6F',
    secondaryColor: '#ff6347',
    modelPath: modelPaths.mainBeach,
    website: "https://cscia.org/cscia-services/beaches/",
    description: 'Main Beach is a popular destination for beachgoers, offering sandy shores and refreshing waters for swimming and sunbathing.',
  },

  {
    name: 'Cape Club House',
    imageSrc: capeclubhouseImage,
    position: [1.65, 0.02, -0.35],
    spotlightPosition: [1.65, 0.52, -0.35],
    mobileCameraPosition: [2, .3, 0],
    mobileOrbitTarget: [1.65, 0.02, -0.35],
    mobileFov: 60,
    color: '#DDE0E6',
    secondaryColor: '#5f9ea0',
    modelPath: modelPaths.capeClubHouse,
    website: 'https://cscia.org/',
    description: 'The Cape St. Claire Improvement Association manages the affairs of the community, administers the Special Community Benefit District, and publishes the community newsletter the Caper.'
  },
  // {
  //   name: 'Bay',
  //   position: [1.45, 0.03, -1.25],
  //   color: '#4682b4',
  //   secondaryColor: '#5f9ea0',
  // }
];

export default quadrant1Data;
