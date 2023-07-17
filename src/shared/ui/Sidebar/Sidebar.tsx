'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import styles from './Sidebar.module.scss';
import SidebarLink from '../SidebarLink/SidebarLink';
import { AlignJustify } from 'lucide-react';
import { BookOpen, Users, ClipboardList, HelpCircle } from 'lucide-react';
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

      <AnimatePresence>
        {isOpened && (
          <motion.div
            className={styles.sidebar}
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
              exitState: { left: '-10%', width: 0 },
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
