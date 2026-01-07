import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import './styles/App.css'

function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard')

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <main className="content">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
