import modelPaths from '../data/modelPaths';


const quadrant4 = [
  {
    name: "Cape Shopping Center",
    position: [0.9, 0.05, 1.04],
    cameraPosition: [1.1, .1, 1.09],
    orbitTarget: [0.9, 0.05, 1.04],
    fov: 50,
    color: "#172226",
    secondaryColor: '#9370db',
    modelPath: modelPaths.capeShoppingCenter,
  },
  {
    name: "Cape Field",
    position: [1.05, 0.05, 1.05],
    cameraPosition: [1.3, .2, 1.19],
    orbitTarget: [1.05, 0.05, 1.05],
    fov: 50,
    color: "green",
    secondaryColor: '#9370db',
    modelPath: modelPaths.capeField,
  },
  {
    name: "CSC Elementary",
    position: [0.35, 0.07, 1.0],
    buildingPosition: [0.18, 0.09, 0.9],
    orbitTarget: [0.35, 0.07, 1.0],
    cameraPosition: [.5, .5, 0],
    fov: 30,
    color: '#4682B4',
    color: '#4682B4',
    secondaryColor: '#ffa500',
    modelPath: modelPaths.cscElem,
  },
  {
    name: "Guard House",
    position: [0.9, 0.05, 1.3],
    cameraPosition: [.2, .5, 1.3],
    orbitTarget: [0.9, 0.05, 1.3],
    fov: 8,
    color: '#BC4A3C',
    secondaryColor: '#a0522d',
    modelPath: modelPaths.guardHouse,
  },
  {
    name: "Goshen Farm",
    position: [0.4, 0.09, 1.3],
    cameraPosition: [-1.2, .5, 1.65],
    orbitTarget: [0.4, 0.09, 1.3],
    fov: 7,
    color: '#725438',
    secondaryColor: '2B601E',
    modelPath: modelPaths.goshenFarm,

  },
  {
    name: "Cape Firehouse",
    position: [0.85, 0.05, 1.52],
    buildingPosition: [0.18, 0.09, 0.9],
    orbitTarget: [.8, 0.028, 1.5],
    cameraPosition: [0, .5, .8],
    fov: 30,
    color: '#AD0407',
    secondaryColor: '2B601E',
    modelPath: modelPaths.capeFirehouse,

  },
  {
    name: "Little Magothy Park and Kayak Launch",
    position: [1.6, 0.03, 1.1]
  },
  {
    name: "Little Magothy",
    position: [1.8, 0.03, 0.25]
  }
];

export default quadrant4;


