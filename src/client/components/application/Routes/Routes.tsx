import * as Router from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from '../Layout/Layout';
import { useScrollToTop } from './hooks/useScrollToTop';
import type { FC } from 'react';

const NotFound = lazy(() => import('../../../pages/NotFound/NotFound'));
const Order = lazy(() => import('../../../pages/Order/Order'));
const OrderComplete = lazy(() => import('../../../pages/OrderComplete/OrderComplete'));
const ProductDetail = lazy(() => import('../../../pages/ProductDetail/ProductDetail'));
const Top = lazy(() => import('../../../pages/Top/Top'));

export const Routes: FC = () => {
  useScrollToTop();

  return (
    <Router.Routes>
      <Router.Route element={<Layout />} path="/">
        <Router.Route element={<Top />} path="" />
        <Router.Route element={<ProductDetail />} path="product/:productId" />
        <Router.Route element={<Order />} path="order" />
        <Router.Route element={<OrderComplete />} path="order/complete" />
        <Router.Route element={<NotFound />} path="*" />
      </Router.Route>
    </Router.Routes>
  );
};
