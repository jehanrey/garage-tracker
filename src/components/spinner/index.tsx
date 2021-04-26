import React from 'react'

interface Props {
  size?: 'small' | 'medium' | 'large'
}

const Spinner: React.FC<Props> = ({ size = 'large' }) => (
  <svg
    className={`loading-spinner ${size}`}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      r="24"
      strokeDasharray="113.09733552923255 39.69911184307752"
    />
  </svg>
)

export default Spinner