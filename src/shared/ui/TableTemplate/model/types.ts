import { GridColDef } from '@mui/x-data-grid';

export type TableRowProps = {
  id: number;
  [key: string]: any;
};

export interface TableTemplateProps {
  columns: GridColDef[];
  rows: TableRowProps[] | [];
  rowsCount: number | undefined;
  isLoading?: boolean;
}
