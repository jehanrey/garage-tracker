import * as yup from 'yup'

export const colorOptions = [
  'Red',
  'Blue',
  'Yellow',
]

export const validationSchema = yup.object({
  brand: yup.string()
    .required('Required')
    .min(3, 'Must be between 3-20 characters')
    .max(20, 'Must be between 2-20 characters'),
  model: yup.string()
    .required('Required')
    .min(5, 'Must be between 5-30 characters')
    .max(30, 'Must be between 5-30 characters'),
  color: yup.string().required('Required'),
  date: yup.string(),
  mileage: yup.number().positive(),
})