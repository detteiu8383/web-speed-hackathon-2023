import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import * as styles from './AspectRatio.styles';

type Props = {
  ratioWidth: number;
  ratioHeight: number;
  children: ReactNode;
};

export const AspectRatio: FC<Props> = ({ children, ratioHeight, ratioWidth }) => {
  const [aspectRatio, setAspectRatio] = useState<number>(ratioWidth / ratioHeight);

  useEffect(() => {
    setAspectRatio(ratioWidth / ratioHeight);
  }, [ratioHeight, ratioWidth]);

  return <div className={styles.container({ aspectRatio })}>{children}</div>;
};
