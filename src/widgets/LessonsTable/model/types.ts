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

export type LessonData = {
  id: number;
  date: string;
  time_from: string;
  time_to: string;
  group_ids: number[];
  subject_id: number;
  [key: string]: any;
};

export type GroupData = {
  id: number;
  name: string;
  [key: string]: any;
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

export interface AlfaResponse {
  count: number;
  page: number;
  total: number;
}

export interface AlfaBranchLessons extends AlfaResponse {
  items: LessonData[];
}

export interface AlfaBranchGroups extends AlfaResponse {
  items: GroupData[];
}

export type FormatLessonsResult = {
  lessons: Lesson[];
  totalRows: number;
  totalPages: number;
};
