import React, { FC } from 'react';
import styles from './CustomButton.module.scss';

interface CustomButtonProps {
  innerText: string;
  onClick: () => void;
  disabled?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  innerText,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={styles.customButton}
      disabled={disabled}
    >
      {innerText}
    </button>
  );
};

export default CustomButton;
