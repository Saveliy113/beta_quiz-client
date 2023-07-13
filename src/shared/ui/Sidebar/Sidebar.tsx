import { FC } from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return <div className={styles.sidebar}></div>;
};

export default Sidebar;
