import type { FC, ReactNode } from 'react';

import * as styles from './IconWrapper.styles';

type Props = {
  width: number;
  height: number;
  children: ReactNode;
  color: string;
};

export const IconWrapper: FC<Props> = ({ children, color, height, width }) => {
  return <span className={styles.container({ color, height, width })}>{children}</span>;
};
