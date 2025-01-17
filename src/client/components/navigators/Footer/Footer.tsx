import { NavLink } from 'react-router-dom';

import { Image } from '../../foundation/Image/Image';

import * as styles from './Footer.styles';
import type { FC } from 'react';

const FOOTER_LINK_ITEMS = ['利用規約', 'お問い合わせ', 'Q&A', '運営会社', 'オーガニックとは'] as const;

export const Footer: FC = () => {
  return (
    <footer className={styles.container()}>
      <ul className={styles.itemList()}>
        {FOOTER_LINK_ITEMS.map(item => (
          <li key={item} className={styles.item()}>
            {item}
          </li>
        ))}
      </ul>
      <NavLink to="/">
        <Image height={32} src="/icons/logo.png" srcSet="/icons/logo.png, /icons/logo@2x.png 2x" width={205} />
      </NavLink>
    </footer>
  );
};
