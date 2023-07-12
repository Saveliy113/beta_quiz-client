import React, { FC } from 'react';
import styles from './CustomButton.module.scss';
import ButtonLoader from '../DotsLoader/sLoader/DotsLoader';

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
      // disabled
    >
      {innerText}
    </button>
  );
};

export default CustomButton;
