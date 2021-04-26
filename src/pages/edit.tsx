import React from 'react'
import {
  RouteComponentProps,
  useMatch,
  navigate,
} from '@reach/router'

import { CarsForm } from 'containers'
import { useCarsStore } from 'store'

const Edit: React.FC<RouteComponentProps> = () => {
  const match = useMatch('/edit/:id')
  const cars = useCarsStore((state) => state.cars)
  const editCar = useCarsStore((state) => state.editCar)

  const carDetails = cars.find((car) => car.id === match!.id)

  if (!carDetails) navigate('/')

  return (
    <CarsForm
      initialValues={carDetails}
      submitFn={(data) => editCar({ ...data, id: match!.id })}
    />
  )
}

export default Edit