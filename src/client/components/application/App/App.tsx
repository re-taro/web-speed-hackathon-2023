
import { SignInModal } from '../../modal/SignInModal/SignInModal';
import { SignUpModal } from '../../modal/SignUpModal/SignUpModal';
import { Providers } from '../Providers/Providers';
import { Routes } from '../Routes/Routes';
import { Layout } from '../Layout/Layout';
import type { FC } from 'react';

export const App: FC = () => (
  <Providers>
    <Layout>
      <Routes />
    </Layout>
    <SignInModal />
    <SignUpModal />
  </Providers>
);
