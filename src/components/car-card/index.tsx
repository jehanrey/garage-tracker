import React from 'react'

import { ICar } from '@types'

const CarCard: React.FC<ICar> = ({
  id,
  // image,
  brand,
  model,
  color,
}) => {
  return (
    <div>
      <div>{id}</div>
      <div>Image here</div>
      <div>{`brand: ${brand}`}</div>
      <div>{`model: ${model}`}</div>
      <div>{`color: ${color}`}</div>
    </div>
  )
}

export default CarCard