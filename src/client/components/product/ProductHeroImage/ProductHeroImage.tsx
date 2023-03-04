import classNames from 'classnames';
import { Anchor } from '../../foundation/Anchor/Anchor';
import { AspectRatio } from '../../foundation/AspectRatio/AspectRatio';
import { DeviceT, GetDeviceType } from '../../foundation/GetDeviceType/GetDeviceType';
import { WidthRestriction } from '../../foundation/WidthRestriction/WidthRestriction';
import * as styles from './ProductHeroImage.styles';
import type { ProductFragmentResponse } from '../../../graphql/fragments';
import type { FC } from 'react';

interface Props {
  product: ProductFragmentResponse
  title: string
}

export const ProductHeroImage: FC<Props> = ({ product, title }) => {
  const thumbnailFile = product.media.find(productMedia => productMedia.isThumbnail)?.file;

  return (
    <GetDeviceType>
      {({ deviceType }) => {
        return (
          <WidthRestriction>
            <Anchor href={`/product/${product.id}`}>
              <div className={styles.container()}>
                <AspectRatio ratioHeight={9} ratioWidth={16}>
                  <img
                    className={styles.image()}
                    height={576}
                    src={
                      thumbnailFile?.filename
                      ?? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
                    }
                    width={1024}
                  />
                </AspectRatio>

                <div className={styles.overlay()}>
                  <p
                    className={classNames(styles.title(), {
                      [styles.title__desktop()]: deviceType === DeviceT.DESKTOP,
                      [styles.title__mobile()]: deviceType === DeviceT.MOBILE,
                    })}
                  >
                    {title}
                  </p>
                  <p
                    className={classNames(styles.description(), {
                      [styles.description__desktop()]: deviceType === DeviceT.DESKTOP,
                      [styles.description__mobile()]: deviceType === DeviceT.MOBILE,
                    })}
                  >
                    {product.name}
                  </p>
                </div>
              </div>
            </Anchor>
          </WidthRestriction>
        );
      }}
    </GetDeviceType>
  );
};
