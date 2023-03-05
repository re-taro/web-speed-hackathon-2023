import { lazy } from 'react';
import * as Router from 'react-router-dom';
import { GetProductDetailsQuery } from '../../../graphql/queries';
import { apolloClient } from '../../../utils/apollo_client';
import { Layout } from '../Layout/Layout';
import type { FC } from 'react';

const NotFound = lazy(() => import('../../../pages/NotFound/NotFound'));
const Order = lazy(() => import('../../../pages/Order/Order'));
const OrderComplete = lazy(() => import('../../../pages/OrderComplete/OrderComplete'));
const ProductDetail = lazy(() => import('../../../pages/ProductDetail/ProductDetail'));
const Top = lazy(() => import('../../../pages/Top/Top'));

const productDetailLoader: Router.LoaderFunction = async({ params }) => {
  await apolloClient.query({
    query: GetProductDetailsQuery,
    variables: {
      productId: parseInt(params.productId ?? ''),
    },
  });
  return null;
};

const router = Router.createBrowserRouter(
  Router.createRoutesFromElements(
    <Router.Route element={<Layout />} path="/">
      <Router.Route element={<Top />} path="" />
      <Router.Route element={<ProductDetail />} loader={productDetailLoader} path="product/:productId" />
      <Router.Route element={<Order />} path="order" />
      <Router.Route element={<OrderComplete />} path="order/complete" />
      <Router.Route element={<NotFound />} path="*" />
    </Router.Route>,
  ),
);

export const Routes: FC = () => {
  return <Router.RouterProvider router={router} />;
};
