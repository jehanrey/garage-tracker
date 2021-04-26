import React from 'react'

import {
  ISortHeaderField,
  TSortBy,
  TSortOrder,
  TSorter,
} from '@types'

interface Props {
  fields: Array<ISortHeaderField>
  sortBy: TSortBy
  sortOrder: TSortOrder
  onSort: (props: {
    key: TSortBy
    sorter: TSorter
  }) => any
}

const SortHeader: React.FC<Props> = ({
  fields,
  sortBy,
  sortOrder,
  onSort,
}) => {
  return (
    <div className="sort-header">
      {fields.map((field) => (
        <span
          key={`header-${field.key}`}
          className="item"
          onClick={() => onSort({ key: field.key, sorter: field.sorter })}
        >
          {field.title}
          {sortBy === field.key && !!sortOrder && <span>{sortOrder}</span>}
        </span>
      ))}
    </div>
  )
}

export default SortHeader