import { processHeaderGroups, getHeaderIdxMap } from './header-groups';
import { TableColumnType } from './types';

interface Values {
  q1: number;
  q2: number;
  q3: number;
  q4: number;
}

const TABLE_HEADERS: TableColumnType<any>[] = [
  {
    prop: 'q1',
    title: 'Quarter 1'
  },
  {
    prop: 'q2',
    title: 'Quarter 2'
  },
  {
    prop: 'q3',
    title: 'Quarter 3'
  },
  {
    prop: 'q4',
    title: 'Quarter 4'
  }
];

test('getHeaderIdxMap', () => {
  const headerPropIdxMap = getHeaderIdxMap(TABLE_HEADERS);
  expect(headerPropIdxMap).toEqual({
    q1: 0,
    q2: 1,
    q3: 2,
    q4: 3
  });
});

describe('processHeaderGroups', () => {
  const headerPropIdxMap = getHeaderIdxMap(TABLE_HEADERS);

  test('one fold', () => {
    expect(
      processHeaderGroups(TABLE_HEADERS, {
        'First Semester': ['']
      })
    );
  });
});
