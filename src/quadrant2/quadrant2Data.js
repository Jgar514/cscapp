
import modelPaths from '../data/modelPaths';
import { cscelemImage, littlebeachImage, lakeclaireImage, boatrampImage } from '../data/images';

const quadrant2Data = [
  {
    name: "Lake Claire Lake, Beach and Fishing Pier",
    imageSrc: lakeclaireImage,
    position: [-0.4, 0.02, -1],
    cameraPosition: [-2, 1, -3],
    orbitTarget: [-0.4, 0.02, -1],
    fov: 7,
    mobileCameraPosition: [-2, 1, -3],
    mobileOrbitTarget: [-0.4, 0.02, -1],
    mobileFov: 30,
    color: '#fde48e',
    secondaryColor: '#ff8c00',
    modelPath: modelPaths.lakeClaire,
    description: 'Lake Claire is a picturesque lake offering stunning views and a variety of outdoor activities such as fishing and boating.',
    website: 'https://cscia.org/cscia-services/beaches/'
  },
  {
    name: "Boat Ramp",
    imageSrc: boatrampImage,
    position: [-1.7, 0.03, -0.5],
    cameraPosition: [-2.5, .5, -1],
    orbitTarget: [-1.7, 0.03, -0.5],
    fov: 20,
    mobileCameraPosition: [-2.5, .5, -1],
    mobileOrbitTarget: [-1.7, 0.03, -0.5],
    mobileFov: 50,
    color: '#aeb6b4',
    secondaryColor: '#3cb371',
    modelPath: modelPaths.boatRamp,
    website: 'https://cscia.org/cscia-services/boat-slips-information/',
    description: `Don't know what to write yet`,

  },
  // {
  //   name: "Deep Creek",
  //   position: [-1.45, 0.03, -0.75],
  // },
];

export default quadrant2Data;
