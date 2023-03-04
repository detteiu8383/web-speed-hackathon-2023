import { css } from '@emotion/css';

export const container = ({ aspectRatio }: { aspectRatio: number }) => css`
  aspect-ratio: ${aspectRatio};
  height: auto;
  position: relative;
  width: 100%;
`;
