import React from 'react';
import { useState } from 'react';
import Product from './Product';
import './ProductList.scss'
import '../../Assets/images/1e7acc486ec64578bf5dde316aa0dff0.jpg'

    
const ProductList = () => {
    const [items, setItems] = useState(
        [
            {
                 product_image:"https://cdn.pixabay.com/photo/2016/04/08/18/46/shopping-mall-1316787_960_720.jpg",
                product_price:"N5000",
                product_desc:"Range Rover",
                product_category:"Cars",
            },
            {
                 product_image:"https://cdn.pixabay.com/photo/2016/04/08/18/46/shopping-mall-1316787_960_720.jpg",
                 product_price:"N50m",
                product_desc:"Duplex",
                product_category:"House",
            },
            {
                 product_image:"https://cdn.pixabay.com/photo/2016/04/08/18/46/shopping-mall-1316787_960_720.jpg",
                product_price:"N20000",
                product_desc:"Adidas shoe",
                product_category:"Shoe",
            },
            {
                 product_image:"https://cdn.pixabay.com/photo/2016/04/08/18/46/shopping-mall-1316787_960_720.jpg",
                 product_price:"N35,000",
                product_desc:"Balenciaga",
                product_category:"Bag",
            },
            {
                 product_image:"https://cdn.pixabay.com/photo/2015/08/05/09/55/mens-shoes-875950_960_720.jpg",
                product_price:"N35,000",
                product_desc:"Balenc",
                product_category:"Tech",
            },
            {
                product_image:"https://cdn.pixabay.com/photo/2015/08/05/09/55/mens-shoes-875950_960_720.jpg",
                product_price:"N35,000",
                product_desc:"Balenc",
                product_category:"Tech",
            },
            {
                 product_image:"https://cdn.pixabay.com/photo/2015/08/05/09/55/mens-shoes-875950_960_720.jpg",
                product_price:"N35,000",
                product_desc:"Balenc",
                product_category:"Tech",
            },
         ]
    );
  return (
    <div className='mapp'>  
    {items.map((item) =>{
      return   <Product 
        product_image={item.product_image}
        product_price={item.product_price}
        product_desc={item.product_desc}
        product_category={item.product_category}
        />;
    })}
    </div>
 )
}

export default ProductList