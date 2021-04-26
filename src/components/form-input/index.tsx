import React from 'react'
import { useField, FieldHookConfig } from 'formik'

type Props = {
  label?: string,
} & FieldHookConfig<string>

const FormInput: React.FC<Props> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props)

  return (
    <div className={`form-item ${meta.touched && meta.error ? 'has-error' : ''}`}>
      {label && <div className="label">{label}</div>}
      <input
        placeholder={props.placeholder}
        type={props.type}
        {...field}
      />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default FormInput