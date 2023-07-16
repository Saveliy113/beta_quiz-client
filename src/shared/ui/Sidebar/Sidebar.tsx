'use client';

import { FC, useState } from 'react';
import styles from './Sidebar.module.scss';
import SidebarLink from '../SidebarLink/SidebarLink';
import { AlignJustify } from 'lucide-react';
import { BookOpen, Users, ClipboardList, HelpCircle } from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  return (
    <div className={clsx(styles.sidebar, !isOpened && styles.closed)}>
      <button
        className={styles.menu__btn}
        onClick={() => setIsOpened((isOpened) => !isOpened)}
      >
        <AlignJustify />
      </button>
      <SidebarLink href="/lessons" text="Уроки" icon={<BookOpen />} />
      <SidebarLink href="/mygroups" text="Мои группы" icon={<Users />} />
      <SidebarLink href="/results" text="Результаты" icon={<ClipboardList />} />
      <SidebarLink href="/quizes" text="Квизы" icon={<HelpCircle />} />
    </div>
  );
};

export default Sidebar;
