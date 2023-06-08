import React from 'react'

import Home from './pages/Home'
import Nav from './components/Nav'

export default function App(): React.JSX.Element {
  return (
    <div className="app">
      <Nav />
      <main className="Main">
        <Home />
      </main>
    </div>
  )
}
