'use client';

import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './Sidebar.module.scss';
import SidebarLink from '../SidebarLink/SidebarLink';
import { AlignJustify } from 'lucide-react';
import { BookOpen, Users, ClipboardList, HelpCircle } from 'lucide-react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

interface SidebarProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ isOpened, setIsOpened }) => {
  return (
    <>
      <button
        className={styles.menu__btn}
        onClick={() => setIsOpened((isOpened) => !isOpened)}
      >
        <AlignJustify />
      </button>

      <div className={clsx(styles.sidebar, !isOpened && styles.closed)}>
        <SidebarLink href="/lessons" text="Уроки" icon={<BookOpen />} />
        <SidebarLink href="/mygroups" text="Мои группы" icon={<Users />} />
        <SidebarLink
          href="/results"
          text="Результаты"
          icon={<ClipboardList />}
        />
        <SidebarLink href="/quizes" text="Квизы" icon={<HelpCircle />} />
      </div>
    </>
  );
};

export default Sidebar;
