import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Footer } from '../../navigators/Footer/Footer';
import { Header } from '../../navigators/Header/Header';
import { Fallback } from '../../../pages/Fallback/Fallback';
import * as styles from './Layout.styles';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main className={styles.container()}>
      <ErrorBoundary fallbackRender={Fallback}>
        <Suspense fallback={<div style={{ height: '100vh' }} />}>{children}</Suspense>
      </ErrorBoundary>
    </main>
    <Footer />
  </>
);
