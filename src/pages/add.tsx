import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { v4 as uuidv4 } from 'uuid'

import { CarsForm } from 'containers'
import { useCarsStore } from 'store'

const Add: React.FC<RouteComponentProps> = () => {
  const addCar = useCarsStore((state) => state.addCar)

  return (
    <CarsForm submitFn={(data) => addCar({
      ...data,
      id: uuidv4(),
    })}/>
  )
}

export default Add