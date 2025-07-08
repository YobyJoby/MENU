import React, { useState } from 'react';
import './App.css';

const TAX_RATE = 0.13;

const menu = [
  {
    category: 'Bubble Coffee',
    image: '/chicken-wrap.png',
    items: [
      { name: 'Iced', prices: { Medium: 4.5, Large: 5, 'X-Large': 5.5 } },
      { name: 'Iced Decaf', prices: { Medium: 4.5, Large: 5, 'X-Large': 5.5 } },
      { name: 'Warm', prices: { Medium: 4.5, Large: 5, 'X-Large': 5.5 } },
      { name: 'Warm Decaf', prices: { Medium: 4.5, Large: 5, 'X-Large': 5.5 } },
    ],
  },
  {
    category: 'Bubble Tea',
    image: '/chicken-wrap.png',
    items: [
      { name: 'Brown Sugar', prices: { Medium: 5, Large: 5.5, 'X-Large': 6 } },
      { name: 'Mango', prices: { Medium: 5, Large: 5.5, 'X-Large': 6 } },
      { name: 'Avocado', prices: { Medium: 5, Large: 5.5, 'X-Large': 6 } },
      { name: 'Peach', prices: { Medium: 5, Large: 5.5, 'X-Large': 6 } },
      { name: 'Grapefruit', prices: { Medium: 5, Large: 5.5, 'X-Large': 6 } },
      { name: 'Matcha', prices: { Medium: 5, Large: 5.5, 'X-Large': 6 } },
    ],
  },
  {
    category: 'Smoothies',
    image: '/chicken-wrap.png',
    items: [
      { name: 'Banana-Blueberry', prices: { Medium: 6, Large: 6.5, 'X-Large': 7 } },
      { name: 'Avocado-Banana', prices: { Medium: 6, Large: 6.5, 'X-Large': 7 } },
      { name: 'Peanut Butter Berry', prices: { Medium: 6, Large: 6.5, 'X-Large': 7 } },
      { name: 'Mango', prices: { Medium: 6, Large: 6.5, 'X-Large': 7 } },
      { name: 'Orange-Vanilla', prices: { Medium: 6, Large: 6.5, 'X-Large': 7 } },
      { name: 'Detox', prices: { Medium: 6, Large: 6.5, 'X-Large': 7 } },
    ],
  },
  {
    category: 'Iced Drinks',
    image: '/chicken-wrap.png',
    items: [
      { name: 'Iced Tea', prices: { Medium: 3.5, Large: 4, 'X-Large': 4.5 } },
      { name: 'Iced Coffee', prices: { Medium: 3.5, Large: 4, 'X-Large': 4.5 } },
      { name: 'Lemon Slushy', prices: { Medium: 4, Large: 4.5, 'X-Large': 5 } },
      { name: 'Berry Slushy', prices: { Medium: 4, Large: 4.5, 'X-Large': 5 } },
    ],
  },
  {
    category: 'Beverages',
    image: '/chicken-wrap.png',
    items: [
      { name: 'Water', prices: { Medium: 1.5 } },
      { name: 'Gatorade', prices: { Medium: 3 } },
      { name: 'Red Bull', prices: { Medium: 3.5 } },
      { name: 'Monster', prices: { Medium: 3.5 } },
    ],
  },
  {
    category: 'Wraps',
    image: '/chicken-wrap.png',
    items: [
      { name: 'Garden Chicken', basePrice: 7 },
      { name: 'Signature Korean', basePrice: 7 },
      { name: 'Greek', basePrice: 7 },
    ],
    modifiers: {
      'Extra Cheese': 1.5,
      'Extra Chicken Breast': 3,
    },
  },
  {
    category: 'Rolls',
    image: '/chicken-wrap.png',
    items: [
      { name: 'Kimbap', prices: { Medium: 6 } },
      { name: 'California Roll', prices: { Medium: 6 } },
    ],
  },
  {
    category: 'Snacks',
    image: '/chicken-wrap.png',
    items: [
      { name: 'Energy Bar', prices: { Medium: 2.5 } },
      { name: 'Chocolate Bar', prices: { Medium: 2 } },
    ],
  },
  {
    category: 'Breakfast',
    image: '/chicken-wrap.png',
    items: [
      { name: 'Egg Sausage Cheese Croissant', prices: { Medium: 5.5 } },
      { name: 'Yogurt Granola Bowl', prices: { Medium: 5 } },
    ],
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('menu');

  const addToCart = (item, size, price, modifiers = []) => {
    setCart([...cart, { item, size, price, modifiers }]);
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((acc, i) => acc + i.price, 0);
    return {
      subtotal,
      tax: subtotal * TAX_RATE,
      total: subtotal * (1 + TAX_RATE),
    };
  };

  return (
    <div className="App">
      <h1>Yoby Joby Snack Bar</h1>
      {view === 'menu' && (
        <div>
          {menu.map((section) => (
            <div key={section.category}>
              <h2>{section.category}</h2>
              <img src={section.image} alt={section.category} width="200" />
              {section.items.map((item) => (
                <div key={item.name}>
                  <p><strong>{item.name}</strong></p>
                  {item.prices ? (
                    Object.entries(item.prices).map(([size, price]) => (
                      <button
                        key={size}
                        onClick={() => addToCart(item.name, size, price)}
                      >
                        {size} - ${price.toFixed(2)}
                      </button>
                    ))
                  ) : (
                    <div>
                      <button
                        onClick={() =>
                          addToCart(
                            item.name,
                            null,
                            item.basePrice +
                              Object.values(section.modifiers || {}).reduce((a, b) => a + b, 0),
                            Object.entries(section.modifiers || {})
                          )
                        }
                      >
                        {item.name} - ${item.basePrice.toFixed(2)} + Modifiers
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
          <br />
          <button onClick={() => setView('cart')}>See Cart</button>
          <button onClick={() => setView('checkout')}>Checkout</button>
        </div>
      )}
      {view === 'cart' && (
        <div>
          <h2>Your Cart</h2>
          {cart.map((c, i) => (
            <div key={i}>
              {c.item} {c.size && `(${c.size})`} - ${c.price.toFixed(2)}
            </div>
          ))}
          <button onClick={() => setView('menu')}>Back to Menu</button>
          <button onClick={() => setView('checkout')}>Checkout</button>
        </div>
      )}
      {view === 'checkout' && (
        <div>
          <h2>Checkout</h2>
          {cart.map((c, i) => (
            <div key={i}>
              {c.item} {c.size && `(${c.size})`} - ${c.price.toFixed(2)}
            </div>
          ))}
          <hr />
          <p>Subtotal: ${calculateTotal().subtotal.toFixed(2)}</p>
          <p>Tax (13%): ${calculateTotal().tax.toFixed(2)}</p>
          <p><strong>Total: ${calculateTotal().total.toFixed(2)}</strong></p>
          <button onClick={() => alert("Send total to Clover API")}>Checkout</button>
          <button onClick={() => setView('menu')}>Back to Menu</button>
        </div>
      )}
    </div>
  );
}

export default App;
