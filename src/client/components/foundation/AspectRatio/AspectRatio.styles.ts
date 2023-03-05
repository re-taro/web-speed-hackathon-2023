import { css } from '@emotion/css';

export const container = ({ h, w }: { h: number | undefined, w: number | undefined }) => css`
  aspect-ratio: ${w} / ${h};
  position: relative;
  width: 100%;
`;
