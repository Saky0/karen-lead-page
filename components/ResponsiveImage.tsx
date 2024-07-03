"use client"

import React from 'react';
import Image from 'next/image';
import useResponsiveImage from '../hooks/useResponsiveImage';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className }) => {
  const isSmallScreen = useResponsiveImage(768);

  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      layout={isSmallScreen ? 'intrinsic' : 'fill'}
      width={isSmallScreen ? 500 : undefined}
      height={isSmallScreen ? 800 : undefined}
      quality={100}
    />
  );
};

export default ResponsiveImage;
