import React from 'react'
import { useNavigate } from '@reach/router'
import { Formik, Form } from 'formik'
import { endOfDay } from 'date-fns'

import {
  FormInput,
  FormSelect,
  FormDatePicker,
  FormUpload,
  Button,
} from 'components'
import { ICarFormFields } from '@types'
import { colorOptions, validationSchema } from './contsants'

interface Props {
  initialValues?: ICarFormFields
  submitFn: (props: ICarFormFields) => void
}

const CarsForm: React.FC<Props> = ({
  initialValues = {},
  submitFn,
}) => {
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        brand: initialValues.brand || '',
        model: initialValues.model || '',
        color: initialValues.color || '',
      }}
      validateOnChange
      validationSchema={validationSchema}
      onSubmit={(data) => {
        submitFn(data)
        navigate('/', { replace: true })
      }}
    >
      {({
        values,
        errors,
        isSubmitting,
      }) => (
        <>
          <Form className="cars-form">
            <FormInput
              label="Brand"
              placeholder="Enter Brand"
              name="brand"
              type="text"
            />
            <FormInput
              label="Model"
              placeholder="Enter Model"
              name="model"
              type="text"
            />
            <FormSelect
              label="Color"
              placeholder="Select Color"
              name="color"
              options={colorOptions}
            />
            <FormDatePicker
              label="Acquisition Date"
              placeholder="Enter Acquisition Date"
              name="date"
              maxDate={endOfDay(new Date())}
            />
            <FormInput
              label="Mileage"
              placeholder="Enter Mileage"
              name="mileage"
              type="number"
            />
            <FormUpload
              label="Image"
              name="image"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              text="Submit"
            />
          </Form>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </>
      )}
    </Formik>
  )
}

export default CarsForm