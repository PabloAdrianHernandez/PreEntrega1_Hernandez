import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = {"Bienvenido a tu tienda retro gamer de confianza"}/>
    </div>
  )
}

export default App