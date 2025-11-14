'use client';

import Image, { ImageProps } from 'next/image';
import React from 'react';

type Props = Omit<ImageProps, 'fill'> & {
  className?: string;
};

export const OptimizedImage: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Image
      {...props}
      width={props.width ?? 800}
      height={props.height ?? 600}
      className={className}
      loading={props.loading ?? 'lazy'}
      decoding="async"
    />
  );
};

export default OptimizedImage;
