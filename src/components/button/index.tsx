import React from 'react'

import { Spinner } from 'components'

interface Props {
  text: string
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  disabled?: boolean
  onClick?: (props: React.MouseEvent) => any
}

const Button: React.FC<Props> = ({
  text,
  type,
  loading,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <div className="content">{text}</div>
      {loading ? <Spinner size="small" /> : null}
      <span className="overlay" />
    </button>
  )
}

export default Button