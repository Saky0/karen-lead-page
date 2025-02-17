"use client"

import { useState, useEffect } from 'react';

const useResponsiveImage = (breakpoint = 768) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= breakpoint);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isSmallScreen;
};

export default useResponsiveImage;
