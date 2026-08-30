'use client';

import Image, { ImageProps } from 'next/image';
import React from 'react';

type Props = ImageProps & {
  className?: string;
};

/**
 * Thin next/image wrapper. Prefer fill + sizes for responsive slots.
 * Defaults quality to 70 to keep download sizes reasonable.
 */
export const OptimizedImage: React.FC<Props> = ({ className, fill, ...props }) => {
  const quality = props.quality ?? 70;

  if (fill) {
    return (
      <Image
        {...props}
        fill
        quality={quality}
        className={className}
        loading={props.loading ?? 'lazy'}
        decoding="async"
      />
    );
  }

  return (
    <Image
      {...props}
      width={props.width ?? 400}
      height={props.height ?? 400}
      quality={quality}
      className={className}
      loading={props.loading ?? 'lazy'}
      decoding="async"
    />
  );
};

export default OptimizedImage;
