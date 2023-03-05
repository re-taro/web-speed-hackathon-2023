import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../navigators/Footer/Footer';
import { Header } from '../../navigators/Header/Header';
import { Fallback } from '../../../pages/Fallback/Fallback';
import * as styles from './Layout.styles';
import type { FC } from 'react';

export const Layout: FC = () => (
  <>
    <Header />
    <main className={styles.container()}>
      <ErrorBoundary fallbackRender={Fallback}>
        <Suspense fallback={<div style={{ height: '100vh' }} />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </main>
    <Footer />
  </>
);
