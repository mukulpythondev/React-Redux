import React from 'react'
import Users from './components/Users'
import { Link, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Home from './components/Home'

function App() {
  return (
    <div>
      <nav className='flex items-center justify-center p-2 gap-5' >
        <Link to={"/"} >Home  </Link>
        <Link to={"/users"} > Users  </Link>
        <Link to={"/products"} > Products   </Link>
      </nav>
     <Routes>
     <Route path='/' element={<Home/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/products' element={<Products/>} />
     </Routes>
    </div>
  )
}

export default App