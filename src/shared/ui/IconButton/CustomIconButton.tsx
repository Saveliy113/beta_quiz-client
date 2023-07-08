'use client';

import { IconButton } from '@mui/material';
import { FC } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import styles from './CustomIconButton.module.scss';

interface IconButtonProps {}

const CustomIconButton: FC<IconButtonProps> = ({}) => {
  return (
    <IconButton aria-label="open" className={styles.customIconButton}>
      <MenuOutlinedIcon />
    </IconButton>
  );
};

export default CustomIconButton;
