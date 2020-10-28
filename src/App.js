import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

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

  return (
    <div>
      <header>
        <button>Go to Cart ({cart.length})</button>
      </header>
      <h1>Products</h1>
      {products.map((product, index) => (
        <div key={index}>
        <h3>{ product.name }</h3>
        <h4>{ product.price }</h4>
        <img src={ product.image } alt={ product.name }/>
        <button onClick={ addToCart }>Add to Cart</button>
      </div>
      ))}
      
    </div>
      
  );
}

export default App;
