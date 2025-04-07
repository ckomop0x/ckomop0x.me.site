import Image from 'next/image';
import { FC } from 'react';

export const PostImage: FC<{ src: string; alt: string; srcSet: string }> = ({
  src,
  alt,
}) => (
  <Image
    src={src}
    alt={alt}
    className="w-full h-full object-cover"
    width={192}
    height={192}
    sizes="100vw"
  />
);
