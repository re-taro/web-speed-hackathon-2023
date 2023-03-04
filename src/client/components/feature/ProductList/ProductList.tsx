import _ from 'lodash';
import { memo } from 'react';

import { DeviceT, GetDeviceType } from '../../foundation/GetDeviceType/GetDeviceType';
import { ProductGridList } from '../ProductGridList/ProductGridList';
import { ProductListSlider } from '../ProductListSlider/ProductListSlider';
import type { FeatureSectionFragmentResponse } from '../../../graphql/fragments';
import type { FC } from 'react';

interface Props {
  featureSection: FeatureSectionFragmentResponse
}

export const ProductList: FC<Props> = memo(({ featureSection }) => {
  return (
    <GetDeviceType>
      {({ deviceType }) => {
        switch (deviceType) {
          case DeviceT.DESKTOP: {
            return <ProductListSlider featureSection={featureSection} />;
          }
          case DeviceT.MOBILE: {
            return <ProductGridList featureSection={featureSection} />;
          }
        }
      }}
    </GetDeviceType>
  );
}, _.isEqual);

ProductList.displayName = 'ProductList';
