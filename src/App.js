import React, { useState } from 'react';
import RenderProducts from './components/RenderProducts'
import RenderCart from './components/RenderCart'

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {name: 'Custom Soap 1',
     price: '€9.99', 
     image: '',
    },
    {name: 'Custom Soap 2',
     price: '€8.99', 
     image: '',
    }
  ])

  function addToCart(product) {
    //console.log('addToCart is working')
    setCart([...cart, product]);
  }

  

  function navigateTo(nextPage) {
    setPage(nextPage)
  }

  return (
    <div>
      <header>
        <button onClick={ () => navigateTo(PAGE_CART) }>Go to Cart ({cart.length})</button>
        <button onClick={ () => navigateTo(PAGE_PRODUCTS) }>View products</button>
      </header>
      {page === PAGE_PRODUCTS ? <RenderProducts products={products} addToCart={addToCart}/> : null}
      {page === PAGE_CART ? <RenderCart cart={cart} /> : null}
    </div>
  );
}

export default App;
