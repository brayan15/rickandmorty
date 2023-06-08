import React from 'react'

import Home from 'src/pages/Home'
import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'

export default function App(): React.JSX.Element {
  return (
    <div className="app">
      <Nav />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </div>
  )
}
