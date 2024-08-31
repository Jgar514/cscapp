import modelPaths from '../data/modelPaths';

const quadrant1Data = [
  {
    name: 'Main Beach',
    position: [1.9, 0.02, -0.4],
    cameraPosition: [2.7, .5, -1.0],
    orbitTarget: [1.9, 0.02, -0.4],
    fov: 20,
    color: '#EFDD6F',
    secondaryColor: '#ff6347',
    modelPath: modelPaths.mainBeach,
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
  },
  {
    name: 'Bay',
    position: [1.45, 0.03, -1.25],
    color: '#4682b4',
    secondaryColor: '#5f9ea0',
  }
];

export default quadrant1Data;
