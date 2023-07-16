'use client';

import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './SidebarLink.module.scss';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface SidebarLinkProps {
  text: string;
  href: string;
  icon: ReactNode;
}

const SidebarLink: FC<SidebarLinkProps> = ({ text, icon, href }) => {
  const currentRoute = usePathname();
  console.log(currentRoute);
  return (
    <Link
      href={href}
      className={clsx(
        styles.sidebar__link,
        href === currentRoute && styles.active
      )}
    >
      {icon}
      {text}
    </Link>
  );
};

export default SidebarLink;
