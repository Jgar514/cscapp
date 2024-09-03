import modelPaths from '../data/modelPaths';
import { mainbeachImage, } from '../data/images';

const quadrant1Data = [
  {
    name: 'Main Beach',
    imgSrc: mainbeachImage,
    position: [1.9, 0.02, -0.4],
    cameraPosition: [2.7, .5, -1.0],
    orbitTarget: [1.9, 0.02, -0.4],
    fov: 20,
    color: '#EFDD6F',
    secondaryColor: '#ff6347',
    modelPath: modelPaths.mainBeach,
    description: 'Main Beach is a popular destination for beachgoers, offering sandy shores and refreshing waters for swimming and sunbathing.'
  },

  {
    name: 'Cape Club House',
    position: [1.65, 0.02, -0.35],
    cameraPosition: [2, .3, 0],
    orbitTarget: [1.65, 0.02, -0.35],
    fov: 30,
    color: '#DDE0E6',
    secondaryColor: '#5f9ea0',
    modelPath: modelPaths.capeClubHouse,
    link: 'https://cscia.org/',
    description: 'The Cape St. Claire Improvement Association manages the affairs of the community, administers the Special Community Benefit District, and publishes the community newsletter the Caper.'
  },
  {
    name: 'Bay',
    position: [1.45, 0.03, -1.25],
    color: '#4682b4',
    secondaryColor: '#5f9ea0',
  }
];

export default quadrant1Data;
