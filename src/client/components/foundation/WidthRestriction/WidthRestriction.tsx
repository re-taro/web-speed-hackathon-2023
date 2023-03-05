import * as styles from './WidthRestriction.styles';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export const WidthRestriction: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container()}>
      <div className={styles.inner()}>{children}</div>
    </div>
  );
};
