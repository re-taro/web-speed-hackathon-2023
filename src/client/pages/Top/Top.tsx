import { Helmet } from 'react-helmet';
import { ProductList } from '../../components/feature/ProductList/ProductList';
import { ProductHeroImage } from '../../components/product/ProductHeroImage/ProductHeroImage';
import { useFeatures } from '../../hooks/useFeatures';
import { useRecommendation } from '../../hooks/useRecommendation';
import * as styles from './Top.styles';
import type { FC } from 'react';

export const Top: FC = () => {
  const { recommendation } = useRecommendation();
  const { features } = useFeatures();

  return (
    <>
      <Helmet>
        <title>買えるオーガニック</title>
      </Helmet>
      <div>
        <div>
          <ProductHeroImage product={recommendation.product} title="今週のオススメ" />
          <div className={styles.featureList()}>
            {features.map((featureSection) => {
              return (
                <div key={featureSection.id} className={styles.feature()}>
                  <h2 className={styles.featureHeading()}>{featureSection.title}</h2>
                  <ProductList featureSection={featureSection} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
