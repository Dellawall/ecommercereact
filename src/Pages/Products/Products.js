import React from "react"
import Search from "../../components/Search/Search"
import ProductList from "./ProductList"
import './Products.scss'

const Products = () => {
  return (
    <div className="products">
    <Search />
    <ProductList />
       

    </div>
  )
}

export default Products