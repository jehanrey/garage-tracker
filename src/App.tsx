import React from 'react'

import { PageHeader } from 'containers'
import { useSettingsStore } from 'store'
import Routes from './routes'
import './assets/styles/index.scss'

const App: React.FC = () => {
  const dark = useSettingsStore((state) => state.dark)

  return (
    <div className={`App ${dark ? 'dark' : ''}`}>
      <PageHeader />
      <div className="route-container">
        <Routes />
      </div>
    </div>
  )
}

export default App