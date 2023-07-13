import React, { FC } from 'react';
import styles from './CustomButton.module.scss';

interface CustomButtonProps {
  innerText: string;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  innerText,
  disabled,
  onClick,
  isLoading,
}) => {
  return (
    <button
      onClick={onClick}
      className={styles.customButton}
      disabled={disabled || isLoading}
    >
      {innerText}
    </button>
  );
};

export default CustomButton;
