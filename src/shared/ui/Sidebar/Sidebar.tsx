import { FC } from 'react';
import styles from './Sidebar.module.scss';
import SidebarLink from '../SidebarLink/SidebarLink';
import { BookOpen, Users, ClipboardList, HelpCircle } from 'lucide-react';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className={styles.sidebar}>
      <SidebarLink href="/lessons" text="Уроки" icon={<BookOpen />} />
      <SidebarLink href="/lessons" text="Мои группы" icon={<Users />} />
      <SidebarLink href="/lessons" text="Результаты" icon={<ClipboardList />} />
      <SidebarLink href="/lessons" text="Квизы" icon={<HelpCircle />} />
    </div>
  );
};

export default Sidebar;
