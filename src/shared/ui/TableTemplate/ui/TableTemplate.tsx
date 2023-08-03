import { FC, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid';
import { TableTemplateProps } from '../model/types';
import styles from './TableTemplate.module.scss';
import { getUrlPage } from '../model/getUrlPage';

const TableTemplate: FC<TableTemplateProps> = ({
  columns,
  rows,
  isLoading,
  rowsCount,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlPageParam = searchParams.get('page');
  const { urlPage } = getUrlPage(urlPageParam);

  const [paginationModel, setPaginationModel] = useState({
    page: urlPage,
    pageSize: 40,
  });
  const [rowCountState, setRowCountState] = useState(rowsCount);

  // Keeping the previous value of rowCount while loading data from server
  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      rowsCount !== undefined ? rowsCount : prevRowCountState
    );
  }, [rowsCount, setRowCountState]);

  const handlePagination = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    // Set page param to url if page is more or equal than 2, otherwise delete page param.
    if (page >= 1) {
      params.set('page', String(page + 1));
      router.push(`${pathname}?${params}`);
    } else router.push(`${pathname}`);
  };

  // Change pagination model if page param was changed in url
  useEffect(() => {
    if (+urlPage - 1 !== paginationModel.page) {
      setPaginationModel({ page: +urlPage - 1, pageSize: 5 });
    }
  }, [+urlPage]);

  // Change page if pagination model was changed
  useEffect(() => {
    handlePagination(paginationModel.page);
  }, [paginationModel]);

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
