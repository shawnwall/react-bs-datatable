import { SortType } from '../../helpers/types';

export interface StoryColumnType {
  name: string;
  username: string;
  date: string;
  score: number;
  status: string;
  location: string;
  // This is only for the headers and not used in the body whatsoever.
  checkbox?: boolean;
}

export interface FetchParams {
  filter: string;
  sortState: SortType;
  currentPage: number;
  rowsPerPage: number;
}

export interface FetchResponse<T> {
  data: T[];
  maxPage: number;
  filteredDataLength: number;
}
