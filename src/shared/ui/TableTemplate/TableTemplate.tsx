import { FC, ReactNode, useEffect, useState } from 'react';
import styles from './TableTemplate.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type TableRowProps = {
  id: number;
  [key: string]: any;
};

interface TableTemplateProps {
  columns: GridColDef[];
  rows: TableRowProps[];
}

const TableTemplate: FC<TableTemplateProps> = ({ columns, rows }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlPage = searchParams.get('page') || 0;

  const [paginationModel, setPaginationModel] = useState({
    page: +urlPage,
    pageSize: 100,
  });

  const handlePagination = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page >= 1) {
      params.set('page', String(page + 1));
      router.push(`${pathname}?${params}`);
    } else router.push(`${pathname}?${params}`);
  };

  useEffect(() => {
    handlePagination(paginationModel.page);
  }, [paginationModel]);

  // CHANGE PAGE IF PAGE PARAMETER CHANGED IN URL
  useEffect(() => {
    if (+urlPage - 1 !== paginationModel.page) {
      setPaginationModel({ page: +urlPage - 1, pageSize: 5 });
    }
  }, [+urlPage]);

  return (
    <div style={{ height: 400, width: '95%', margin: '0 auto' }}>
      <DataGrid
        rows={rows}
        rowCount={500}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel,
          },
        }}
        pageSizeOptions={[]}
        paginationMode="server"
        paginationModel={{ ...paginationModel, pageSize: 100 }}
        onPaginationModelChange={setPaginationModel}
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        disableColumnFilter
        hideFooterSelectedRowCount
        scrollbarSize={0}
      />
    </div>
  );
};

export default TableTemplate;
