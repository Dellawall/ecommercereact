import React from 'react'
import './Product.scss'
import '../../Assets/images/1e7acc486ec64578bf5dde316aa0dff0.jpg'

const Product = ({product_image, product_price, product_desc, product_category}) => {
  return (
    <div className='items'>
    <div className='item'>
        <img src={product_image} alt='product_image' />
        <h3>{product_price}</h3>
        <p>{product_desc}</p>
        <p>{product_category}</p>
        <button>Add to Cart</button>

    </div>
    </div>
  )
}

export default Product