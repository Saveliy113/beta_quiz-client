'use client';

import { FC, ReactNode, useState } from 'react';
import Sidebar from '@/shared/ui/Sidebar/Sidebar';
import styles from './mainLayout.module.scss';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/appLayer/appStore';
import { toggleIsOpened } from '@/shared/ui/Sidebar/sidebarSlice';

interface ContentSectionProps {
  children: ReactNode;
}

const ContentSection: FC<ContentSectionProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector((state) => state.sidebar.isOpened);
  // const [isOpened, setIsOpened] = useState<boolean>(sidebarState);
  const setIsOpened = () => {
    dispatch(toggleIsOpened());
  };
  return (
    <div className={styles.content__wrapper}>
      <Sidebar isOpened={isOpened} setIsOpened={setIsOpened} />
      <div
        className={clsx(styles.content, isOpened && styles.content__fullwidth)}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentSection;
