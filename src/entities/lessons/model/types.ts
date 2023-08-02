import { ReactNode } from 'react';

export type GetLessonsDto = {
  domain: string;
  teacher: number;
  startDate: string;
  endDate: string;
  page: number;
};

export type GetGroupsDto = {
  domain: string;
  teacher: number;
};

export type Lesson = {
  id: number;
  date: string;
  time: string;
  group: string;
  lesson: string;
};

export type LessonsTableProps = {
  rows: Lesson[];
  children?: ReactNode;
};
