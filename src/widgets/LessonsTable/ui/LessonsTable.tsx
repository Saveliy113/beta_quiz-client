'use client';

import { FC, useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const columns: GridColDef[] = [
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

const rows = [
  {
    id: 1,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 2,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 3,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 4,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 5,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 6,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 7,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 8,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 9,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 10,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 11,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 12,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 13,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 14,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 15,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 16,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 17,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 18,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 19,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 20,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 21,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 22,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 23,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 24,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 25,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 26,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 27,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 28,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 29,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 30,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 31,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 32,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 33,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 34,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 35,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 36,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 37,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 38,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 39,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 40,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
  {
    id: 41,
    date: '18.07.2023',
    time: '08:45 — 10:15',
    group: 'ALA_M_6KOY_A(5)',
    lesson: 'Математика',
  },
];

interface LessonsTableProps {}

const LessonsTable: FC<LessonsTableProps> = ({}) => {
  const searchParams = useSearchParams();
  const urlPage = searchParams.get('page') || 0;
  const [paginationModel, setPaginationModel] = useState({
    page: +urlPage,
    pageSize: 5,
  });

  const router = useRouter();
  const pathname = usePathname();

  const handlePagination = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page >= 1) {
      params.set('page', String(page + 1));
      // router.push(`${pathname}?page=${page + 1}`);
      router.push(`${pathname}?${params}`);
    } else router.push(`${pathname}?${params}`);
  };

  useEffect(() => {
    handlePagination(paginationModel.page);
  }, [paginationModel]);

  useEffect(() => {
    if (+urlPage - 1 !== paginationModel.page) {
      setPaginationModel({ page: +urlPage - 1, pageSize: 5 });
    }
  }, [+urlPage]);

  return (
    <div style={{ height: 400, width: '95%', margin: '0 auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel,
          },
        }}
        onPaginationModelChange={setPaginationModel}
        paginationModel={paginationModel}
        pageSizeOptions={[5, 10]}
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        disableColumnFilter
      />
    </div>
  );
};

export default LessonsTable;
