import { useMemo } from 'react';
import { FaPlay } from 'react-icons/fa';
import { getMediaType } from '../../../../utils/get_media_type';
import { Icon } from '../../../foundation/Icon/Icon';
import { Image } from '../../../foundation/Image/Image';
import * as styles from './MediaItem.styles';
import type { MediaFileFragmentResponse } from '../../../../graphql/fragments';
import type { FC } from 'react';

interface Props {
  file: MediaFileFragmentResponse
}

export const MediaItem: FC<Props> = ({ file }) => {
  const mediaType = getMediaType(file.filename);
  const imageSrc = useMemo(() => {
    switch (mediaType) {
      case 'video':
        return `${file.filename}.jpg`;
      case 'image':
        return file.filename.replace(/\.jpg$/, '_square.webp');
    }
  }, [file.filename, mediaType]);

  return (
    <div className={styles.container()}>
      <Image fill src={imageSrc} />
      {mediaType === 'video' && (
        <div className={styles.playIcon()}>
          <Icon color="#ffffff" height={16} icon={FaPlay} width={16} />
        </div>
      )}
    </div>
  );
};
