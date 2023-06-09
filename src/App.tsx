import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from 'src/pages/Home'
import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'
import CharacterDetail from 'src/pages/CharacterDetail'

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
