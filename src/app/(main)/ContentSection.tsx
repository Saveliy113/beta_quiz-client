'use client';

import { FC, ReactNode } from 'react';
import Sidebar from '@/shared/ui/Sidebar/Sidebar';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/appLayer/appStore';
import { toggleIsOpened } from '@/shared/ui/Sidebar/sidebarSlice';
import styles from './mainLayout.module.scss';

interface ContentSectionProps {
  children: ReactNode;
}

const ContentSection: FC<ContentSectionProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector((state) => state.sidebar.isOpened);

  const setIsOpened = () => {
    dispatch(toggleIsOpened());
  };

  return (
    <>
      <Sidebar isOpened={isOpened} setIsOpened={setIsOpened} />
      <div className={clsx(styles.content, !isOpened && styles.fullwidth)}>
        {children}
      </div>
    </>
  );
};

export default ContentSection;
