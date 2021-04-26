export interface ICar {
  id: string
  brand: string
  model: string
  color: string
  image?: {
    filename: string
    display: string
  }
  date?: string
  mileage?: number
}

export interface ICarFormFields {
  id?: string
  brand: string
  model: string
  color: string
  image?: {
    filename: string
    display: string
  }
  date?: string
  mileage?: number
}

export type TSortBy = 'brand' | 'model' | 'color' | 'mileage' | 'date' | null

export type TSortOrder = 'asc' | 'desc' | null

export interface ISortProps {
  item1: any
  item2: any
  attr?: string
  sortOrder: string
}

export type TSorter = ((props: ISortProps) => number) | (() => void)

export interface ISortHeaderField {
  title: string
  key: TSortBy
  sorter: TSorter
}