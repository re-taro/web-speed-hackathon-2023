import classNames from 'classnames';

import { getMediaType } from '../../../../utils/get_media_type';
import { DeviceT, GetDeviceType } from '../../../foundation/GetDeviceType/GetDeviceType';
import { Image } from '../../../foundation/Image/Image';

import * as styles from './MediaItemPreiewer.styles';
import type { MediaFileFragmentResponse } from '../../../../graphql/fragments';
import type { FC } from 'react';

interface Props {
  file: MediaFileFragmentResponse
}

export const MediaItemPreviewer: FC<Props> = ({ file }) => {
  const type = getMediaType(file.filename);

  return (
    <div className={styles.container()}>
      {type === 'image' && <Image fill src={file.filename} />}
      {type === 'video' && (
        <GetDeviceType>
          {({ deviceType }) => (
            <video
              autoPlay
              controls
              muted
              playsInline
              className={classNames(styles.video(), {
                [styles.video__desktop()]: deviceType === DeviceT.DESKTOP,
                [styles.video__mobile()]: deviceType === DeviceT.MOBILE,
              })}
              src={file.filename}
            />
          )}
        </GetDeviceType>
      )}
    </div>
  );
};
