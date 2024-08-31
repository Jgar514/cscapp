// src/data/modelConfigurations.js

const modelConfigurations = {
  bay: {
    stageProps: {
      adjustCamera: true,
      intensity: 1,
      environment: 'park',
      preset: 'rembrandt',
      shadows: true
    },
    orbitControlsProps: {
      enableZoom: true,
      zoomSpeed: 0.8,
      autoRotate: true
    }
  },
  capeClubHouse: {
    stageProps: {
      adjustCamera: true,
      intensity: 1.5,
      environment: 'sunset',
      preset: 'photographic',
      shadows: true
    },
    orbitControlsProps: {
      enableZoom: true,
      zoomSpeed: 0.7,
      autoRotate: false
    }
  },
  mainBeach: {
    stageProps: {
      adjustCamera: true,
      intensity: 2,
      environment: 'night',
      preset: 'basic',
      shadows: false
    },
    orbitControlsProps: {
      enableZoom: false,
      zoomSpeed: 1,
      autoRotate: true
    }
  },
  // Add configurations for other models here
};

export default modelConfigurations;
