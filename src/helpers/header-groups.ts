import { TableColumnType } from './types';

// TODO(imballinst): for v4, we need to refactor the table and make this mandatory,
// Default the type to `any` so it's not mandatory.
// so that the grouped table headers have stronger typings.
export interface TableHeaderGroups<T extends Record<string, any> = any> {
  [index: string]: (keyof T)[] | TableHeaderGroups;
}

export function processHeaderGroups(
  headers: TableColumnType<any>[],
  headerGroups?: TableHeaderGroups
) {
  const headerPropToIdxMap = getHeaderIdxMap(headers);
}

export function getHeaderIdxMap(headers: TableColumnType<any>[]) {
  const headerPropToIdxMap: Record<string, number> = {};
  for (let i = 0; i < headers.length; i += 1) {
    headerPropToIdxMap[headers[i].prop as string] = i;
  }

  return headerPropToIdxMap;
}

function extractRanges(
  headers: TableColumnType<any>[],
  headerGroups: TableHeaderGroups,
  headerPropToIdxMap: Record<string, number>
) {
  //
}
