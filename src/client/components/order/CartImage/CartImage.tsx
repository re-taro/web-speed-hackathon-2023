import { useMemo } from 'react';
import { Image } from '../../foundation/Image/Image';
import type { FC } from 'react';

interface Props {
  filename: string
}

export const CartImage: FC<Props> = ({ filename }) => {
  const src = useMemo(() => {
    return filename.replace(/\.jpg$/, '_thumb.webp');
  }, [filename]);

  return <Image fill src={src} />;
};
