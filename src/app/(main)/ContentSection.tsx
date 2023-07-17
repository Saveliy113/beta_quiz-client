'use client';

import { FC, useState } from 'react';
import Sidebar from '@/shared/ui/Sidebar/Sidebar';
import styles from './mainLayout.module.scss';
import clsx from 'clsx';

interface ContentSectionProps {}

const ContentSection: FC<ContentSectionProps> = ({}) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  return (
    <div className={styles.content__wrapper}>
      <Sidebar isOpened={isOpened} setIsOpened={setIsOpened} />
      <div
        className={clsx(styles.content, isOpened && styles.content__fullwidth)}
      ></div>
    </div>
  );
};

export default ContentSection;
