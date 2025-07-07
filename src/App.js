import React, { useState } from 'react';

// Sample image URL or local import (replace with your image path if local)
const defaultImage = '/your-image.jpg'; // We will add the image file soon

const MENU = {
  "Bubble Coffee": {
    subs: ["Iced", "Iced Decaf", "Warm", "Warm Decaf"],
    modifiers: { "Med": 0, "Large": 0.5, "X-Large": 1.0 },
    basePrice: 4.0,
  },
  "Bubble Tea": {
    subs: ["Brown Sugar", "Mango", "Avocado", "Peach", "Grapefruit", "Matcha"],
    modifiers: { "Med": 0, "Large": 0.5, "X-Large": 1.0 },
    basePrice: 4.5,
  },
  "Smoothies": {
    subs: ["Banana-Blueberry", "Avocado-Banana", "Peanut Butter Berry", "Mango", "Orange-Vanilla", "Detox"],
    modifiers: { "Med": 0, "Large": 0.5, "X-Large": 1.0 },
    basePrice: 5.0,
  },
  "Iced Drinks": {
    subs: ["Iced Tea", "Iced Coffee", "Lemon Slushy", "Berry Slushy"],
    modifiers: { "Med": 0, "Large": 0.5, "X-Large": 1.0 },
    basePrice: 3.5,
  },
  "Beverages": {
    subs: ["Water", "Gatorade", "Red Bull", "Monster"],
    modifiers: {},
    basePrice: 2.5,
  },
  "Wraps": {
    subs: ["Garden Chicken", "Signature Korean", "Greek"],
    modifiers: { "Extra Cheese": 1.0, "Extra Chicken Breast": 2.0 },
    basePrice: 7.0,
  },
  "Rolls": {
    subs: ["Kimbap", "California Roll"],
    modifiers: {},
    basePrice: 6.0,
  },
  "Snacks": {
    subs: ["Energy Bar", "Chocolate Bar"],
    modifiers: {},
    basePrice: 2.0,
  },
  "Breakfast": {
    subs: ["Egg Sausage Cheese Croissant", "Yogurt Granola Bowl"],
    modifiers: {},
    basePrice: 5.5,
  }
};

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('menu'); // menu, cart, checkout

  // Add item to cart helper
  const addToCart = (category, subItem, modifier) => {
    const base = MENU[category].basePrice;
    const modifierCost = MENU[category].modifiers[modifier] || 0;
    const price = base + modifierCost;
    const newItem = { category, subItem, modifier, price };
    setCart([...cart, newItem]);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      {view === 'menu' && (
        <>
          <h1>Snack Bar Menu</h1>
          {Object.keys(MENU).map(category => (
            <div key={category} style={{ marginBottom: 20 }}>
              <h2>{category}</h2>
              {MENU[category].subs.map(subItem => (
                <div key={subItem} style={{ marginLeft: 20 }}>
                  <strong>{subItem}</strong>
                  <div style={{ marginLeft: 20 }}>
                    {(Object.keys(MENU[category].modifiers).length > 0) ? (
                      Object.keys(MENU[category].modifiers).map(mod => (
                        <button
                          key={mod}
                          onClick={() => addToCart(category, subItem, mod)}
                          style={{ margin: 5 }}
                        >
                          {mod} (${(MENU[category].basePrice + MENU[category].modifiers[mod]).toFixed(2)})
                        </button>
                      ))
                    ) : (
                      <button
                        onClick={() => addToCart(category, subItem, '')}
                        style={{ margin: 5 }}
                      >
                        Add (${MENU[category].basePrice.toFixed(2)})
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <button onClick={() => setView('cart')} style={{ marginTop: 20, padding: '10px 20px' }}>
            See Cart ({cart.length})
          </button>
          <button
            onClick={() => setView('checkout')}
            style={{ marginTop: 20, marginLeft: 10, padding: '10px 20px' }}
          >
            Checkout
          </button>
        </>
      )}

      {view === 'cart' && (
        <>
          <h1>Your Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, i) => (
                <li key={i}>
                  {item.category} - {item.subItem} {item.modifier && `(${item.modifier})`} : ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => setView('menu')} style={{ marginTop: 20, padding: '10px 20px' }}>
            Back to Menu
          </button>
          <button onClick={() => setView('checkout')} style={{ marginTop: 20, marginLeft: 10, padding: '10px 20px' }}>
            Checkout
          </button>
        </>
      )}

      {view === 'checkout' && (
        <>
          <h1>Checkout</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cart.map((item, i) => (
                  <li key={i}>
                    {item.category} - {item.subItem} {item.modifier && `(${item.modifier})`} : ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tax (13%): ${tax.toFixed(2)}</p>
              <h3>Total: ${total.toFixed(2)}</h3>
              <button
                onClick={() => alert(`Send $${total.toFixed(2)} to Clover Flex for payment`)}
                style={{ marginTop: 20, padding: '10px 20px' }}
              >
                Checkout
              </button>
            </>
          )}
          <button onClick={() => setView('menu')} style={{ marginTop: 20, padding: '10px 20px' }}>
            Back to Menu
          </button>
        </>
      )}
    </div>
  );
}

export default App;
