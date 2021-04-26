import { compareAsc, compareDesc } from 'date-fns'

import { ISortProps } from '@types'

export const sortData = ({ item1, item2, attr, sortOrder } : ISortProps) => {
  const isAsc = sortOrder === 'asc'
  const dateField = attr?.toLowerCase().includes('date')
  const numeric = /^\d+$/.test(item1) && /^\d+$/.test(item2)
  const lowerCaseItem1 = typeof item1[attr!] === 'object' ? item1[attr!][0].toLowerCase() : item1[attr!].toLowerCase()
  const lowerCaseItem2 = typeof item2[attr!] === 'object' ? item2[attr!][0].toLowerCase() : item2[attr!].toLowerCase()
  if (isAsc) {
    if (dateField) return compareAsc(item1[attr!], item2[attr!])
    if (numeric) return item1[attr!] > item2[attr!] ? 1 : item2[attr!] > item1[attr!] ? -1 : 0
    return lowerCaseItem1 > lowerCaseItem2 ? 1 : lowerCaseItem2 > lowerCaseItem1 ? -1 : 0
  } else {
    if (dateField) return compareDesc(item1[attr!], item2[attr!])
    if (numeric) return item1[attr!] < item2[attr!] ? 1 : item2[attr!] < item1[attr!] ? -1 : 0
    return lowerCaseItem2 > lowerCaseItem1 ? 1 : lowerCaseItem1 > lowerCaseItem2 ? -1 : 0
  }
}