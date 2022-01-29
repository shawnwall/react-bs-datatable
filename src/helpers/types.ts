import { CSSProperties } from 'react';
import { FilterGroupFunctionComponent } from '../Filter';
import { PaginationOptsGroupFunctionComponent } from '../PaginationOpts';

export type SortType = {
  prop?: string;
  isAscending?: boolean;
};

export type HeaderType = {
  prop: string;
  title?: string;
  headerCell?: (icon: React.ReactNode, sortedProp: SortType) => React.ReactNode;
  cell?: (row: any) => React.ReactNode;
  cellProps?: {
    className?: string | ((row: any) => string);
    style?: CSSProperties | ((row: any) => CSSProperties);
  };
  filterable?: boolean;
  sortable?: boolean;
};

export type LabelType = {
  /** This is the labels related to the pagination. */
  pagination?: {
    /** Change the label of the button that if clicked, the paging will go to first page. */
    firstPage?: string;
    /** Change the label of the button that if clicked, the paging will go to last page. */
    lastPage?: string;
    /** Change the label of the button that if clicked, the paging will go to previous page. */
    prevPage?: string;
    /** Change the label of the button that if clicked, the paging will go to next page. */
    nextPage?: string;
  };
  paginationOptions?: {
    /** Change the label that is shown before the select input. */
    beforeSelect?: string;
    /** Change the label that is shown after the select input. */
    afterSelect?: string;
  };
  /** This is the labels related to filters. */
  filter?: {
    /** Change the label when there are no results from the filter text. */
    noResults?: string;
    /** Change the placeholder label of the filter text input. */
    filterPlaceholder?: string;
  };
};

export type TableClasses = {
  controlRow?: string;
  // Filter.
  filterCol?: string;
  filterInputGroup?: string;
  filterFormControl?: string;
  filterClearButton?: string;
  // Pagination options.
  paginationOptsCol?: string;
  paginationOptsForm?: string;
  paginationOptsFormGroup?: string;
  paginationOptsFormText?: string;
  paginationOptsFormControl?: string;
  // Pagination.
  paginationCol?: string;
  paginationButtonGroup?: string;
  paginationButton?: string;
  // Table.
  table?: string;
  thead?: string;
  theadRow?: string;
  theadCol?: string;
  tbody?: string;
  tbodyRow?: string;
  tbodyCol?: string;
};

type TableComponentType = React.ElementType<any>;
export type TableComponents = {
  [index: string]:
    | TableComponentType
    | FilterGroupFunctionComponent
    | PaginationOptsGroupFunctionComponent
    | undefined;
  // Global.
  Row: TableComponentType;
  Col: TableComponentType;
  Button: TableComponentType;
  // Table.
  Table: TableComponentType;
  TableHead: TableComponentType;
  TableBody: TableComponentType;
  TableRow: TableComponentType;
  TableCell: TableComponentType;
  // Filter.
  FilterGroup?: FilterGroupFunctionComponent;
  // Pagination.
  ButtonGroup: TableComponentType;
  // Pagination options.
  PaginationOptsGroup?: PaginationOptsGroupFunctionComponent;
  // Icons.
  SortIcon: TableComponentType;
};

export type AsyncProps = {
  filterText: string;
  sortedProp: SortType;
  rowsPerPage: number;
  currentPage: number;
  maxPage: number;
  onSort: (nextProp: string) => void;
  onPaginate: (nextPage: number) => void;
  onFilter: (text: string) => void;
  onRowsPerPageChange: (numOfPage: number) => void;
};

export type DatatableProps = {
  /** Initial sort of the table. */
  tableHeaders: HeaderType[];
  /** Table data. */
  tableBody: any[];
  /** Initial sort of the table. */
  initialSort?: SortType;
  /** Custom onSort data modifier. */
  onSort?: any;
  /** Custom onFilter data modifier. */
  onFilter?: any;
  /** Custom classes of the table components. */
  classes?: TableClasses;
  /** Handler for asynchronous filter, sort, and pagination. */
  async?: AsyncProps;
  /** Initial rows per page. */
  rowsPerPage?: number;
  /** Rows per page option. */
  rowsPerPageOption?: number[];
  /** Labels/placeholders of the table components. */
  labels?: LabelType;
  /** Custom table components. */
  Components?: TableComponents;
  /** On row click event. */
  onRowClick?: (value: any) => void;
};

export type DatatableState = {
  filterable: boolean;
  sortedProp: SortType;
  rowsPerPage?: number;
  currentPage: number;
  filterText: string;
};

export type Dictionary<DictionaryValue = string> = {
  [index: string]: DictionaryValue;
};
