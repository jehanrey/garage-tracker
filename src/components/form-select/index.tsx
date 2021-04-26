import React from 'react'
import { useField, FieldHookConfig } from 'formik'

type Props = {
  options: Array<string>
  placeholder?: string
  label?: string
} & FieldHookConfig<string>

const FormSelect: React.FC<Props> = ({
  options,
  placeholder,
  label,
  ...props
}) => {
  const [field, meta] = useField(props)
  return (
    <div className={`form-item ${meta.touched && meta.error ? 'has-error' : ''}`}>
      {label && <div className="label">{label}</div>}
      <select {...field}>
        <option value="" label={placeholder} />
        {options.map((option) => (
          <option
            key={`select-option-${option}`}
            value={option}
            label={option}
          />
        ))}
      </select>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default FormSelect