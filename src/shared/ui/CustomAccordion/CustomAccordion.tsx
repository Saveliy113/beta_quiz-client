'use client';

import { FC } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BookOpen } from 'lucide-react';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CustomAccordion.module.scss';

interface CustomAccordionProps {}

const CustomAccordion: FC<CustomAccordionProps> = ({}) => {
  return (
    <Accordion className={styles.customAccordion}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon style={{ width: '50px', height: '50px' }} />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={styles.accordion__summary}
      >
        <div className={styles.summary__content}>
          <BookOpen />
          <p>Математика/ 4 класс</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.accordion__item}>
          <p>Quiz 15.03.2023</p>
          <p>Математика, Сложные дроби</p>
          <p>ALA_E_3KOY_Z</p>
        </div>
        <div className={styles.accordion__item}>
          <p>Quiz 15.03.2023</p>
          <p>Математика, Сложные дроби</p>
          <p>ALA_E_3KOY_Z</p>
        </div>
        <div className={styles.accordion__item}>
          <p>Quiz 15.03.2023</p>
          <p>Математика, Сложные дроби</p>
          <p>ALA_E_3KOY_Z</p>
        </div>
        <div className={styles.accordion__item}>
          <p>Quiz 15.03.2023</p>
          <p>Математика, Сложные дроби</p>
          <p>ALA_E_3KOY_Z</p>
        </div>
        <div className={styles.accordion__item}>
          <p>Quiz 15.03.2023</p>
          <p>Математика, Сложные дроби</p>
          <p>ALA_E_3KOY_Z</p>
        </div>

        <div className={styles.accordion__actions}>
          <CustomButton
            innerText="Подробнее"
            outlined
            rounded
            width="fitContent"
            className={styles.accordion__btn}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
