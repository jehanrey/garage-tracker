import create from 'zustand'
import { combine } from 'zustand/middleware'

import { ICar } from '@types'

const useCarsStore = create(
  combine(
    {
      //change this later
      cars: [{
        "id": "1",
        "brand": "Koenigsegg",
        "model": "Agera",
        "color": "Orange",
        "image": {}
      }] as Array<ICar>,
      sortedCars: [] as Array<ICar>,
    },
    (set) => ({
      setCars: (cars: Array<ICar>) => set(() => ({ cars })),
      addCar: (car: ICar) => set((state) => ({ cars: [
        ...state.cars,
        car,
      ] })),
      editCar: (updatedCar: ICar) => set((state) => ({
        cars: state.cars.map((car) => (
          car.id === updatedCar.id ? updatedCar : car
        ))
      })),
      removeCar: (id: string) => set((state) => ({
        cars: state.cars.filter((car) => (
          car.id !== id
        ))
      })),
    })
  )
)

export default useCarsStore