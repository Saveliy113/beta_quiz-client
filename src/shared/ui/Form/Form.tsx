import { FC } from 'react';
import Link from 'next/link';
import styles from './Form.module.scss';

type FormProps = {
  title?: string;
  subtitle?: string;
  footerText?: string;
  linkText?: string;
  linkUrl?: string;
};

export const Form: FC<FormProps> = ({
  title,
  subtitle,
  footerText,
  linkText,
  linkUrl,
}) => {
  return (
    <div className={styles.form__container}>
      <div className={styles.form__header}>
        <h1>{title}</h1>
        <p className="subtext">{subtitle}</p>
      </div>

      {footerText || (linkText && linkUrl) ? (
        <div className={styles.form__footer}>
          <hr />

          <p className={styles.footer__title}>
            {footerText}{' '}
            {linkUrl && linkText && <Link href={linkUrl}>{linkText}</Link>}
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
