'use client';

import { FC, useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { GetLessonsDto } from '@/entities/lesson/model/types';
import LessonsService from '@/entities/lesson/model/lessons.service';
import { GetGroupsDto } from '../../../widgets/LessonsTable/model/types';
import TableService from '../../../widgets/LessonsTable/model/table.service';
import styles from './LessonsTableBase.module.scss';

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

interface LessonsTableProps {}

const LessonsTable: FC<LessonsTableProps> = ({}) => {
  //---------------------------------DEFAULT----------------------------------------//
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  //-------------------------------------------------------------------------------//

  //---------------------------------STATES----------------------------------------//

  const urlPage = searchParams.get('page') || 0;
  const [rows, setRows] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: +urlPage,
    pageSize: 100,
  });
  const [rowsNumber, setRowsNumber] = useState<number>(0);
  const [groups, setGroups] = useState([]);

  //-------------------------------------------------------------------------------//

  //---------------------------------QUERIES----------------------------------------//

  const {
    isLoading,
    isSuccess,
    data: lessonsResponse,
    mutate: getLessons,
  } = useMutation(['getLessons'], (body: GetLessonsDto) =>
    LessonsService.getLessons(body)
  );

  const {
    isLoading: groupsIsLoading,
    isSuccess: groupsIsSuccess,
    data: groupsResponse,
    mutate: getGroups,
  } = useMutation(['getGroups'], (body: GetGroupsDto) =>
    TableService.getGroups(body)
  );

  //-------------------------------------------------------------------------------//

  //---------------------------------LOGS----------------------------------------//
  // console.log('UseState Groups: ', groups);
  // console.log('ROWS: ', rows);

  //-------------------------------------------------------------------------------//

  useEffect(() => {
    getGroups(
      {
        domain: 'metastudy',
        teacher: 0,
      }
      // {
      //   onSuccess: ({ data }: any) => {
      //     console.log('Groups Data: ', data);
      //     let dataArr: any = [];
      //     data.forEach((item: any) => {
      //       dataArr = dataArr.concat(item.items);
      //     });
      //     setGroups(dataArr);
      //   },
      // }
    );

    getLessons(
      {
        domain: 'metastudy',
        startDate: '2023-08-01',
        endDate: '2023-08-01',
        page: 0,
        teacher: 0,
      }
      // {
      //   onSuccess: ({ data }: any) => {
      //     let rowsArr: any = [];
      //     console.log(data);
      //     data.forEach((element: any) => {
      //       rowsArr = rowsArr.concat(element.items);
      //     });
      //     console.log('ROWS ARR: ', rowsArr);
      //     setRows(
      //       rowsArr.map((row: any, id: any) => ({
      //         id: id + 1,
      //         date: row.date,
      //         time: `${row.time_from} — ${row.time_to}`,
      //         group: row.group_ids[0],
      //         lesson: row.subject_id,
      //       }))
      //     );

      //     setRowsNumber(rowsArr.length);
      //   },
      // }
    );
  }, []);

  useEffect(() => {
    if (isSuccess && groupsIsSuccess) {
      let groupsArr: any = [];
      groupsResponse.data.forEach((group: any) => {
        groupsArr = groupsArr.concat(group.items);
      });
      console.log('GroupsArr1: ', groupsArr);
      console.log(lessonsResponse);

      let lessonsArr: any = [];
      lessonsResponse.data.forEach((branch: any) => {
        lessonsArr = lessonsArr.concat(branch.items);
      });
      console.log('LessonsArr1: ', lessonsArr);

      lessonsArr = lessonsArr.map((lesson: any, id: any) => ({
        id: id + 1,
        date: lesson.date,
        time: `${lesson.time_from} — ${lesson.time_to}`,
        group: groupsArr.find((group: any) => group.id === lesson.group_ids[0])
          ?.name,
        // group: lesson.group_ids[0],
        lesson: lesson.subject_id,
      }));

      console.log('LessonsArr2: ', lessonsArr);
      setRows(lessonsArr);
    }
  }, [isSuccess, groupsIsSuccess]);

  //---------------------------------PAGINATION----------------------------------------//

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

  //-------------------------------------------------------------------------------//

  return (
    <div style={{ height: 400, width: '95%', margin: '0 auto' }}>
      <div className={styles.filter__slot}></div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel,
          },
        }}
        onPaginationModelChange={setPaginationModel}
        paginationModel={{ ...paginationModel, pageSize: 100 }}
        pageSizeOptions={[]}
        // pagination={undefined}
        paginationMode="server"
        rowCount={500}
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        disableColumnFilter
        hideFooterSelectedRowCount
        // hideFooterPagination
        scrollbarSize={20}
      />
    </div>
  );
};

export default LessonsTable;
