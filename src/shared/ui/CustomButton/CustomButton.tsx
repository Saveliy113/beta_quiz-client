import React, { FC, ReactNode } from 'react';
import styles from './CustomButton.module.scss';
import clsx from 'clsx';

interface CustomButtonProps {
  innerText?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  children?: ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({
  innerText,
  disabled,
  onClick,
  outlined,
  rounded,
  className,
  isLoading,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.customButton,
        className,
        outlined && styles.outlined,
        rounded && styles.rounded
      )}
      disabled={disabled || isLoading}
    >
      {!innerText ? children : innerText}
    </button>
  );
};

export default CustomButton;
