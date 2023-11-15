import React from 'react'
import NavBar from '../features/navbar/Navbar'
import ProductList from '../features/product/components/ProductList'

const Home = () => {
  return (
    <>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </>
  )
}

export default Home
