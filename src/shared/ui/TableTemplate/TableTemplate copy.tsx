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
  rows: TableRowProps[] | [];
  rowsCount: number | undefined;
  isLoading?: boolean;
}

const TableTemplate: FC<TableTemplateProps> = ({
  columns,
  rows,
  isLoading,
  rowsCount,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlPage = searchParams.get('page') || 0;

  const [paginationModel, setPaginationModel] = useState({
    page: +urlPage,
    pageSize: 40,
  });
  const [rowCountState, setRowCountState] = useState(rowsCount);

  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      rowsCount !== undefined ? rowsCount : prevRowCountState
    );
  }, [rowsCount, setRowCountState]);

  const handlePagination = (page: number) => {
    console.log('PAGE NUMBER: ', page);
    const params = new URLSearchParams(searchParams.toString());
    if (page >= 1) {
      params.set('page', String(page + 1));
      router.push(`${pathname}?${params}`);
    } else router.push(`${pathname}`);
  };

  useEffect(() => {
    console.log();
  }, []);

  useEffect(() => {
    paginationModel.page > 0 && handlePagination(paginationModel.page);
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
        rowCount={rowCountState}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel,
          },
        }}
        pageSizeOptions={[]}
        paginationMode="server"
        paginationModel={{ ...paginationModel, pageSize: 40 }}
        onPaginationModelChange={setPaginationModel}
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        disableColumnFilter
        hideFooterSelectedRowCount
        scrollbarSize={0}
        loading={isLoading}
      />
    </div>
  );
};

export default TableTemplate;
