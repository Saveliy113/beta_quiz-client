'use client';

import ContentHeader from '@/shared/ui/ContentHeader/ContentHeader';
import { FC, SyntheticEvent, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface ResultsHeaderProps {}

const ResultsHeader: FC<ResultsHeaderProps> = ({}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ContentHeader text="Результаты">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="basic tabs example"
      >
        <Tab label="По предметам" />
        <Tab label="По группам" />
      </Tabs>
    </ContentHeader>
  );
};

export default ResultsHeader;
