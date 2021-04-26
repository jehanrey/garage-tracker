import React from 'react'
import { Link } from '@reach/router'

import { Switch } from 'components'
import { useSettingsStore } from 'store'

const PageHeader: React.FC = () => {
  const dark = useSettingsStore((state) => state.dark)
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode)

  return (
    <div className="page-header">
      <Switch
        value={dark}
        onChange={toggleDarkMode}
      />
      <div className="title">Garage Tracker</div>
      <Link to="/">
        <div className="header-image" />
      </Link>
    </div>
  )
}

export default PageHeader