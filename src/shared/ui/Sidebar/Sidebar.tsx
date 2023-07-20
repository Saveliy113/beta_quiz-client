'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import SidebarLink from '../SidebarLink/SidebarLink';
import { AlignJustify } from 'lucide-react';
import { BookOpen, Users, ClipboardList, HelpCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Sidebar.module.scss';

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

      <AnimatePresence initial={false}>
        {isOpened && (
          <motion.div
            className={styles.sidebar}
            key="sidebar"
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.2 }}
            variants={{
              initialState: {
                left: '-10%',
                width: 0,
              },
              animateState: { left: 0, width: '18%' },
              exitState: { width: 0, left: '-10%' },
            }}
          >
            <SidebarLink href="/lessons" text="Уроки" icon={<BookOpen />} />
            <SidebarLink href="/mygroups" text="Мои группы" icon={<Users />} />
            <SidebarLink
              href="/results"
              text="Результаты"
              icon={<ClipboardList />}
            />
            <SidebarLink href="/quizes" text="Квизы" icon={<HelpCircle />} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
