import { ISortHeaderField } from '@types'
import { sortData } from 'utils/data-helpers'

export const carsSortFields: Array<ISortHeaderField> = [
  {
    key: 'brand',
    title: 'Brand',
    sorter: ({ item1, item2, sortOrder }) => sortData({
      item1,
      item2,
      attr: 'brand',
      sortOrder,
    }),
  },
  {
    key: 'model',
    title: 'Model',
    sorter: ({ item1, item2, sortOrder }) => sortData({
      item1,
      item2,
      attr: 'model',
      sortOrder,
    }),
  },
  {
    key: 'color',
    title: 'Color',
    sorter: ({ item1, item2, sortOrder }) => sortData({
      item1,
      item2,
      attr: 'color',
      sortOrder,
    }),
  },
  {
    key: 'date',
    title: 'Acquisition Date',
    sorter: ({ item1, item2, sortOrder }) => sortData({
      item1,
      item2,
      attr: 'date',
      sortOrder,
    }),
  },
  {
    key: 'mileage',
    title: 'Mileage',
    sorter: ({ item1, item2, sortOrder }) => sortData({
      item1,
      item2,
      attr: 'mileage',
      sortOrder,
    }),
  },
]