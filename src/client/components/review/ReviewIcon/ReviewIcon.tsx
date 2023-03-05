import { useMemo } from 'react';
import { Image } from '../../foundation/Image/Image';
import type { FC } from 'react';

interface Props {
  filename: string
}

export const ReviewIcon: FC<Props> = ({ filename }) => {
  const avatarImage = useMemo(() => {
    return filename.replace(/\.jpg$/, '.webp');
  }, [filename]);

  return (
    <Image height={52} src={avatarImage} width={52} />
  );
};
