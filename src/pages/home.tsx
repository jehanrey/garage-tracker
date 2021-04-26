import React, { useState, useEffect } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { SortBar } from 'containers'
import { CarCard, Button } from 'components'
import { useCarsStore, useSortStore } from 'store'

const Home: React.FC<RouteComponentProps> = () => {
  const cars = useCarsStore((state) => state.cars)
  const sortBy = useSortStore((state) => state.sortBy)
  const sortOrder = useSortStore((state) => state.sortOrder)
  const [sortedCars, setSortedCars] = useState(cars)

  useEffect(() => {
    setSortedCars(cars.sort())
  }, [
    cars,
    sortBy,
    sortOrder,
  ])

  return (
    <div>
      <Button
        text="Add"
        onClick={() => navigate('/add')}
      />
      <SortBar />
      {cars.map((carDetails, ix) => (
        <CarCard
          key={`car-card-${ix}`}
          {...carDetails}
        />
      ))}
    </div>
  )
}

export default Home