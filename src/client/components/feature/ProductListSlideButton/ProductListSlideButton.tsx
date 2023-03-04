import classNames from 'classnames';
import type { FC } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { IconWrapper } from '../../foundation/Icon';

import * as styles from './ProductListSlideButton.styles';

export const ArrowType = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;
export type ArrowType = typeof ArrowType[keyof typeof ArrowType];

type Props = {
  arrowType: ArrowType;
  disabled: boolean;
  onClick: () => void;
};

export const ProductListSlideButton: FC<Props> = ({ arrowType, disabled, onClick }) => {
  return (
    <button
      className={classNames(styles.container(), {
        [styles.container__disabled()]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {arrowType === ArrowType.LEFT ? (
        <IconWrapper color="#222222" height={16} width={16}>
          <FaArrowLeft />
        </IconWrapper>
      ) : (
        <IconWrapper color="#222222" height={16} width={16}>
          <FaArrowRight />
        </IconWrapper>
      )}
    </button>
  );
};
