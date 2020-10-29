import React, { useState } from 'react';
import RenderProducts from './components/RenderProducts'
import RenderCart from './components/RenderCart'
import './styles/cart.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {name: 'Custom Soap 1',
     price: '9.99', 
     image: './assets/soap1.jpg',
     amount: 1,
     id: 1,
    },
    {name: 'Custom Soap 2',
     price: '8.99', 
     image: './assets/soap2.jpg',
     amount: 1,
     id: 2,
    }
  ])

  //DEEP COPY
  function jsonCopy(src) {
    return JSON.parse(JSON.stringify(src));
  }

  function addToCart(product) {
    if(cart.includes(product)){
      console.log('product already exists');
    } else {
      setCart([...cart, product]);
    }
  }

  function removeFromCart(productToRemove) {
    setCart(
      cart.filter((product) => product !== productToRemove)
    )
  }

  function incrementAmount(index) {
    const newItems = jsonCopy([...cart]);

	  newItems[index].amount++;

	  setCart(newItems);
  }

  function decrementAmount(index) {
    const newItems = jsonCopy([...cart]);

	  newItems[index].amount--;

	  setCart(newItems);
  }

  function navigateTo(nextPage) {
    setPage(nextPage)
  }

  let qtyInCart = cart.reduce(function(prev, current) {
    return prev + +current.amount
  }, 0);

  console.log(products);

  return (
    <div>
      <header>
        <button onClick={ () => navigateTo(PAGE_CART) }>Go to Cart ({qtyInCart})</button>
      </header>
      <main>
      {page === PAGE_PRODUCTS ? <RenderProducts products={products} addToCart={addToCart}/> : null}
      {page === PAGE_CART ? <RenderCart products={products} cart={cart} removeFromCart={removeFromCart} incrementAmount={incrementAmount} decrementAmount={decrementAmount} navigateTo={navigateTo} PAGE_PRODUCTS={PAGE_PRODUCTS}/> : null}
      </main>
    </div>
  );
}

export default App;
