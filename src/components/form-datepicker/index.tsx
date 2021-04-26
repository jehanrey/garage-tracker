import React, { useEffect } from 'react'
import BaseDatePicker from 'react-datepicker'
import { useFormikContext, useField, FieldHookConfig } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'

type Props = {
  label?: string
  placeholder?: string
  minDate?: Date
  maxDate?: Date
} & FieldHookConfig<string>

const DatePicker: React.FC<Props> = ({
  label,
  placeholder,
  minDate,
  maxDate,
  ...props
}) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(props)

  useEffect(() => {
    if (!field.value) setFieldValue(field.name, new Date())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`form-item ${meta.touched && meta.error ? 'has-error' : ''}`}>
      {label && <div className="label">{label}</div>}
      <BaseDatePicker
        {...field}
        className="date-picker"
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
        placeholderText={placeholder}
        minDate={minDate}
        maxDate={maxDate}
      />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default DatePicker