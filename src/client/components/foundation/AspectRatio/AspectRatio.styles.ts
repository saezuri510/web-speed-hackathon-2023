import { css } from '@emotion/css';

export const container = ({ ratio }: { ratio: string }) => css`
  aspect-ratio: ${ratio};
  height: 100%;
  position: relative;
  width: 100%;
`;
