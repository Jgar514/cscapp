import { useState, useEffect } from 'react';

const useResponsiveFov = () => {
  const [fov, setFov] = useState(40); // Default FOV

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setFov(40); // Large screens
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setFov(50); // Medium screens
      } else {
        setFov(60); // Small screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return fov;
};

export default useResponsiveFov;
