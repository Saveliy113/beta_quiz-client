import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './SidebarLink.module.scss';

interface SidebarLinkProps {
  text: string;
  href: string;
  icon: ReactNode;
}

const SidebarLink: FC<SidebarLinkProps> = ({ text, icon, href }) => {
  return (
    <Link href={href} className={styles.sidebar__link}>
      {icon}
      {text}
    </Link>
  );
};

export default SidebarLink;
