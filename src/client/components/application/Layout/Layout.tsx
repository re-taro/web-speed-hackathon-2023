
import { Footer } from '../../navigators/Footer/Footer';
import { Header } from '../../navigators/Header/Header';

import * as styles from './Layout.styles';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main className={styles.container()}>{children}</main>
    <Footer />
  </>
);
