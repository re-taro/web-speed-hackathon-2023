import { Suspense } from 'react';
import { SignInModal } from '../../modal/SignInModal/SignInModal';
import { SignUpModal } from '../../modal/SignUpModal/SignUpModal';
import { Providers } from '../Providers/Providers';
import { Routes } from '../Routes/Routes';
import type { FC } from 'react';

export const App: FC = () => (
  <Suspense fallback={null}>
    <Providers>
      <Routes />
      <SignInModal />
      <SignUpModal />
    </Providers>
  </Suspense>
);
