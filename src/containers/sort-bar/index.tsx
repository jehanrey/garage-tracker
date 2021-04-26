import React, { useState } from 'react'

import { useSortStore } from 'store'
import { SortHeader } from 'components'
import { TSortBy, TSorter} from '@types'
import { carsSortFields } from './constants'

interface Props {

}

type TTriggerSort = (props: { key: TSortBy, sorter: TSorter }) => any

const SortBar: React.FC<Props> = () => {
  const sortBy = useSortStore((state) => state.sortBy)
  const sortOrder = useSortStore((state) => state.sortOrder)
  const setSortBy = useSortStore((state) => state.setSortBy)
  const setSortOrder = useSortStore((state) => state.setSortOrder)
  const [sorterFn, setSorterFn] = useState(() => () => {})

  const toggleSortOrder = () => {
    if (sortOrder === 'asc') {
      setSortOrder('desc')
    } else if (sortOrder === 'desc') {
      setSortOrder(null)
    } else {
      setSortOrder('asc')
    }
  }

  const triggerSort: TTriggerSort = ({ key, sorter }) => {
    if (key === sortBy) {
      toggleSortOrder()
    } else {
      setSortBy(key)
      setSorterFn(() => sorter)
      setSortOrder('asc')
    }
  }

  return (
    <SortHeader
      fields={carsSortFields}
      onSort={triggerSort}
      sortBy={sortBy}
      sortOrder={sortOrder}
    />
  )
}

export default SortBar