
import modelPaths from '../data/modelPaths';

const quadrant2Data = [
  {
    name: "Lake Claire Lake, Beach and Fishing Pier",
    position: [-0.4, 0.02, -1],
    cameraPosition: [-2, 1, -3],
    orbitTarget: [-0.4, 0.02, -1],
    fov: 7,
    color: '#fde48e',
    secondaryColor: '#ff8c00',
    modelPath: modelPaths.lakeClaire,
  },
  {
    name: "Boat Ramp",
    position: [-1.7, 0.03, -0.5],
    cameraPosition: [-2.5, .5, -1],
    orbitTarget: [-1.7, 0.03, -0.5],
    fov: 30,
    color: '#aeb6b4',
    secondaryColor: '#3cb371',
    modelPath: modelPaths.boatRamp,
  },
  {
    name: "Deep Creek",
    position: [-1.45, 0.03, -0.75],
  },
];

export default quadrant2Data;
