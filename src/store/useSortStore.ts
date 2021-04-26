import create from 'zustand'
import { combine } from 'zustand/middleware'

import {
  TSortBy,
  TSortOrder,
  TSorter,
} from '@types'

const useSortStore = create(
  combine(
    {
      sortBy: null as TSortBy,
      sortOrder: null as TSortOrder,
      sorterFn: () => () => ({}) as TSorter,
    },
    (set) => ({
      setSortBy: (sortBy: TSortBy) => set({ sortBy }),
      setSortOrder: (sortOrder: TSortOrder) => set({ sortOrder }),
    })
  )
)

export default useSortStore