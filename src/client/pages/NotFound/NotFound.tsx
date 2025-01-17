import { Helmet } from 'react-helmet';
import * as styles from './NotFound.styles';
import type { FC } from 'react';

export const NotFound: FC = () => {
  return (
    <>
      <Helmet>
        <title>ページが見つかりませんでした</title>
      </Helmet>
      <div className={styles.container()}>
        <div className={styles.inner()}>
          <p className={styles.mainParagraph()}>ページが存在しません</p>
          <p className={styles.subParagraph()}>Not Found</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
