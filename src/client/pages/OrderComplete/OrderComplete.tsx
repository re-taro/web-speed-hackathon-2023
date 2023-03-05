import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { AspectRatio } from '../../components/foundation/AspectRatio/AspectRatio';
import { DeviceT, GetDeviceType } from '../../components/foundation/GetDeviceType/GetDeviceType';
import { PrimaryAnchor } from '../../components/foundation/PrimaryAnchor/PrimaryAnchor';
import { WidthRestriction } from '../../components/foundation/WidthRestriction/WidthRestriction';
import { ProductHeroImage } from '../../components/product/ProductHeroImage/ProductHeroImage';
import { useRecommendation } from '../../hooks/useRecommendation';
import * as styles from './OrderComplete.styles';
import type { FC } from 'react';

export const OrderComplete: FC = () => {
  const { recommendation } = useRecommendation();

  return (
    <>
      <Helmet>
        <title>購入が完了しました</title>
      </Helmet>
      <GetDeviceType>
        {({ deviceType }) => (
          <WidthRestriction>
            <div className={styles.container()}>
              <div className={styles.notice()}>
                <h2 className={styles.noticeHeading()}>購入が完了しました</h2>
                <AspectRatio ratioHeight={1} ratioWidth={2}>
                  <div className={styles.noticeDescriptionWrapper()}>
                    <p
                      className={classNames(styles.noticeDescription(), {
                        [styles.noticeDescription__desktop()]: deviceType === DeviceT.DESKTOP,
                        [styles.noticeDescription__mobile()]: deviceType === DeviceT.MOBILE,
                      })}
                    >
                      このサイトは架空のサイトであり、商品が発送されることはありません
                    </p>
                  </div>
                </AspectRatio>
              </div>
              <div className={styles.recommended()}>
                <h2 className={styles.recommendedHeading()}>こちらの商品もオススメです</h2>
                {/* FIXME: CLS */}
                {recommendation != null && (
                  <ProductHeroImage product={recommendation.product} title={recommendation.product.name} />
                )}
              </div>
              <div className={styles.backToTopButtonWrapper()}>
                <PrimaryAnchor href="/" size="lg">
                  トップへ戻る
                </PrimaryAnchor>
              </div>
            </div>
          </WidthRestriction>
        )}
      </GetDeviceType>
    </>
  );
};

export default OrderComplete;
