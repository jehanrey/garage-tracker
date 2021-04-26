import React, { useRef } from 'react'
import {
  useField,
  useFormikContext,
  FieldHookConfig,
} from 'formik'

import { getBase64 } from 'utils/file-helpers'
import { acceptedFileFormats } from './constants'

type Props = {
  label?: string
} & FieldHookConfig<{
  filename: string
  display: string
}>

const FormUpload: React.FC<Props> = ({
  label,
  ...props
}) => {
  const uploadRef = useRef<HTMLInputElement>(null)
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(props)

  const proxyValue = async(value: React.ChangeEvent<HTMLInputElement>) => {
    const hasFile = value.target.files!.length > 0
    setFieldValue(
      field.name,
      hasFile ? {
        filename: value.target.files![0].name,
        display: await getBase64(value?.target?.files![0]),
      } : field.value,
    )
  }

  return (
    <div className={`form-item ${meta.touched && meta.error ? 'has-error' : ''}`}>
      {label && <div className="label">{label}</div>}
      <input
        ref={uploadRef}
        type="file"
        accept={acceptedFileFormats.join()}
        onChange={proxyValue}
      />
      <div
        className="file-input-display"
        onClick={() => uploadRef.current?.click()}
      >
        <input
          type="text"
          value={field.value?.filename}
          disabled={true}
        />
      </div>
      {field.value?.display && <img src={field.value.display}  alt="preview" />}
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default FormUpload