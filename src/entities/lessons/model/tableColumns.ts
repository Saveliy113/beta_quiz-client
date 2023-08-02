import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'date', headerName: 'Дата', width: 150, sortable: false },
  { field: 'time', headerName: 'Время', width: 150, sortable: false },
  { field: 'group', headerName: 'Группа', width: 150, sortable: false },
  {
    field: 'lesson',
    headerName: 'Урок',
    width: 150,
    sortable: false,
  },
];
