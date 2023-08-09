'use client';

import { FC, SyntheticEvent, useState } from 'react';
import styles from './QuizesFilters.module.scss';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { HomeIcon, List } from 'lucide-react';

interface QuizesFiltersProps {}

const QuizesFilters: FC<QuizesFiltersProps> = ({}) => {
  const [hardness, setHardness] = useState('');
  const [subject, setSubject] = useState('');
  const [group, setGroup] = useState('');

  const [value, setValue] = useState(0);

  const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setHardness(event.target.value as string);
  };

  return (
    <div className={styles.quiz__filters}>
      <div className={styles.tabs__wrapper}>
        <Tabs
          value={value}
          onChange={handleChangeTabs}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="basic tabs example"
          color="red"
          className={styles.tabs}
        >
          <Tab
                    className={styles.tab}

            label={
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <HomeIcon />
                Мои квизы
              </p>
            }
          />
          <Tab
            label={
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <List />
                Все квизы
              </p>
            }
          />
        </Tabs>
      </div>
      <div className={styles.selects__wrapper}>
        <FormControl
          sx={{ m: 1, minWidth: 120, borderRadius: 12 }}
          size="small"
        >
          <Select
            value={hardness}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ borderRadius: '8px' }}
          >
            <MenuItem value="">
              <em>Сложность</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 1, minWidth: 120, borderRadius: 12 }}
          size="small"
        >
          <Select
            value={hardness}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ borderRadius: '8px' }}
          >
            <MenuItem value="">
              <em>Предмет</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 1, minWidth: 120, borderRadius: 12 }}
          size="small"
        >
          <Select
            value={hardness}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ borderRadius: '8px' }}
          >
            <MenuItem value="">
              <em>Класс</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default QuizesFilters;
