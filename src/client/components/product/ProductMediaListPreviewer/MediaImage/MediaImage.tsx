import { useMemo } from 'react';
import { Image } from '../../../foundation/Image/Image';
import type { FC } from 'react';

interface Props {
  filename: string
}

export const MediaImage: FC<Props> = ({ filename }) => {
  const imageSrc = useMemo(() => {
    return filename.replace(/\.jpg$/, '_thumb.webp');
  }, [filename]);
  return (
    <Image fill src={imageSrc} />
  );
};
