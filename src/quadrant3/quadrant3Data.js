import modelPaths from '../data/modelPaths';


const quadrant3Data = [
  {
    name: "Broadneck High School",
    position: [-0.75, 0.09, 1.0],
    cameraPosition: [-1, .5, 2],
    orbitTarget: [-0.75, 0.09, 1.0],
    fov: 30,
    color: '#8b0000',
    secondaryColor: '#ff6347',
    modelPath: modelPaths.broadneckHighSchool,
  },
  {
    name: "Building",
    position: [-0.9, 0.1, 0.8],
  },
  {
    name: "Broadneck Athletics",
    position: [-0.6, 0.1, 0.8],
  },
  {
    name: "Broadneck Library",
    position: [-1.0, 0.1, 1.3],
    cameraPosition: [0, 2.5, 5],
    orbitTarget: [-1.0, 0.1, 1.3],
    detailFov: 50,
    color: '#228b22',
    secondaryColor: '#32cd32',
  },
  {
    name: "Broadneck Park",
    position: [/* Position not specified */],
  },
  {
    name: "St. Andrews By the Bay Church",
    position: [-0.3, 0.1, 2.2],
    cameraPosition: [-1, .5, 2],
    orbitTarget: [-0.3, 0.1, 2.2],
    fov: 20,
    color: '#FFFFC5',
    secondaryColor: '#7b68ee',
    modelPath: modelPaths.stAndrewsChurch,
  },
];

export default quadrant3Data;
