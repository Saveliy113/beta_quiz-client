'use client';

import { FC } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './CustomAccordion.module.scss';
import { BookOpen } from 'lucide-react';

interface CustomAccordionProps {}

const CustomAccordion: FC<CustomAccordionProps> = ({}) => {
  return (
    <Accordion className={styles.customAccordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{width: '50px', height: '50px'}} />}
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
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
