import React from 'react'

interface Props {
  value?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Switch: React.FC<Props> = ({
  value,
  onChange,
}) => (
  <label className="switch">
    <input
      type="checkbox"
      checked={value}
      onChange={onChange}
    />
    <span className="slider round" />
  </label>
)

export default Switch