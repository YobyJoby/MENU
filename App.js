import React, { useState } from 'react';

const TAX_RATE = 0.13;

const menuItems = [
  {
    id: 1,
    name: 'Chicken Wrap',
    price: 8.99,
    image: 'https://via.placeholder.com/150',
    modifiers: ['Spicy', 'No Sauce', 'Extra Veggies']
  },
  {
    id: 2,
    name: 'Bubble Tea',
    price: 5.49,
    image: 'https://via.placeholder.com/150',
    modifiers: ['Less Sugar', 'No Ice', 'Extra Tapioca']
  },
  {
    id: 3,
    name: 'Protein Bowl',
    price: 10.99,
    image: 'https://via.placeholder.com/150',
    modifiers: ['Chicken', 'Tofu', 'Beef']
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('menu');

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const renderMenu = () => (
    <div style={{ padding: 20 }}>
      <h1>Menu</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {menuItems.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: 10, padding: 10, width: 200 }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: 10 }} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <p style={{ fontSize: 12 }}>Modifiers: {item.modifiers.join(', ')}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setView('cart')}>See Cart</button>
        <button onClick={() => setView('checkout')} style={{ marginLeft: 10 }}>Checkout</button>
      </div>
    </div>
  );

  const renderCart = () => (
    <div style={{ padding: 20 }}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button onClick={() => removeFromCart(idx)}>Remove</button>
          </div>
        ))
      )}
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setView('menu')}>Back to Menu</button>
        <button onClick={() => setView('checkout')} style={{ marginLeft: 10 }}>Checkout</button>
      </div>
    </div>
  );

  const renderCheckout = () => (
    <div style={{ padding: 20 }}>
      <h1>Checkout</h1>
      {cart.map((item, idx) => (
        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span>{item.name} - ${item.price.toFixed(2)}</span>
          <button onClick={() => removeFromCart(idx)}>Remove</button>
        </div>
      ))}
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax (13%): ${tax.toFixed(2)}</p>
      <p><strong>Total: ${total.toFixed(2)}</strong></p>
      <button onClick={() => setView('menu')}>Back to Menu</button>
      <button style={{ marginLeft: 10 }}>Checkout</button>
    </div>
  );

  return view === 'menu' ? renderMenu() : view === 'cart' ? renderCart() : renderCheckout();
}

export default App;
