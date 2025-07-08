import React, { useState } from 'react';
import './App.css';

const TAX_RATE = 0.13;
const IMAGE_PATH = '/chicken-wrap.png'; // Your single image

const menu = [
  {
    category: 'Bubble Coffee',
    image: IMAGE_PATH,
    items: [
      { name: 'Iced', prices: { Medium: 4.5, Large: 5, 'X-Large': 5.5 } },
      { name: 'Iced Decaf', prices: { Medium: 4.5, Large: 5, 'X-Large': 5.5 } },
      { name: 'Warm', prices: { Medium: 4.5, Large: 5, 'X-Large': 5.5 } },
      { name: 'Warm Decaf', prices: { Medium: 4.5, Large: 5, 'X-Large': 5.5 } },
    ],
  },
  {
    category: 'Bubble Tea',
    image: IMAGE_PATH,
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
    image: IMAGE_PATH,
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
    image: IMAGE_PATH,
    items: [
      { name: 'Iced Tea', prices: { Medium: 3, Large: 3.5, 'X-Large': 4 } },
      { name: 'Iced Coffee', prices: { Medium: 3.5, Large: 4, 'X-Large': 4.5 } },
      { name: 'Lemon Slushy', prices: { Medium: 4, Large: 4.5, 'X-Large': 5 } },
      { name: 'Berry Slushy', prices: { Medium: 4, Large: 4.5, 'X-Large': 5 } },
    ],
  },
  {
    category: 'Beverages',
    image: IMAGE_PATH,
    items: [
      { name: 'Water', basePrice: 2 },
      { name: 'Gatorade', basePrice: 3 },
      { name: 'Red Bull', basePrice: 4 },
      { name: 'Monster', basePrice: 4 },
    ],
  },
  {
    category: 'Wraps',
    image: IMAGE_PATH,
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
    image: IMAGE_PATH,
    items: [
      { name: 'Kimbap', basePrice: 6 },
      { name: 'California Roll', basePrice: 6 },
    ],
  },
  {
    category: 'Snacks',
    image: IMAGE_PATH,
    items: [
      { name: 'Energy Bar', basePrice: 2.5 },
      { name: 'Chocolate Bar', basePrice: 2.5 },
    ],
  },
  {
    category: 'Breakfast',
    image: IMAGE_PATH,
    items: [
      { name: 'Egg Sausage Cheese Croissant', basePrice: 5.5 },
      { name: 'Yogurt Granola Bowl', basePrice: 5 },
    ],
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('menu');
  const [selectedModifiers, setSelectedModifiers] = useState({}); // For modifiers per item

  // Add item to cart
  const addToCart = (category, item, size = null, basePrice = null, modifiers = []) => {
    let price = 0;

    if (size && item.prices) {
      price = item.prices[size];
    } else if (basePrice !== null) {
      price = basePrice;
    }

    // Add modifiers prices
    if (modifiers.length) {
      modifiers.forEach((mod) => {
        price += mod.price;
      });
    }

    setCart([
      ...cart,
      {
        category,
        name: item.name,
        size,
        modifiers,
        price,
      },
    ]);
  };

  // Toggle modifiers selection UI
  const [currentItemForModifiers, setCurrentItemForModifiers] = useState(null);
  const [currentModifiersSelected, setCurrentModifiersSelected] = useState([]);

  // Open modifiers popup for wraps
  const openModifiers = (category, item) => {
    setCurrentItemForModifiers({ category, item });
    setCurrentModifiersSelected([]);
  };

  // Toggle modifier selection
  const toggleModifier = (modifier) => {
    if (currentModifiersSelected.some((m) => m.name === modifier[0])) {
      setCurrentModifiersSelected(currentModifiersSelected.filter((m) => m.name !== modifier[0]));
    } else {
      setCurrentModifiersSelected([...currentModifiersSelected, { name: modifier[0], price: modifier[1] }]);
    }
  };

  // Add item with modifiers to cart and close popup
  const addWithModifiers = () => {
    if (!currentItemForModifiers) return;
    const { category, item } = currentItemForModifiers;
    addToCart(category, item, null, item.basePrice, currentModifiersSelected);
    setCurrentItemForModifiers(null);
    setCurrentModifiersSelected([]);
  };

  // Calculate totals
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
            <div key={section.category} style={{ marginBottom: 30 }}>
              <h2>{section.category}</h2>
              <img src={section.image} alt={section.category} width="200" />
              {section.items.map((item) => (
                <div key={item.name} style={{ marginTop: 10 }}>
                  <p><strong>{item.name}</strong></p>

                  {/* If item has sizes */}
                  {item.prices ? (
                    Object.entries(item.prices).map(([size, price]) => (
                      <button
                        key={size}
                        onClick={() => addToCart(section.category, item, size)}
                        style={{ marginRight: 10, marginBottom: 5 }}
                      >
                        {size} - ${price.toFixed(2)}
                      </button>
                    ))
                  ) : section.modifiers ? (
                    <>
                      <button onClick={() => openModifiers(section.category, item)}>
                        Select Modifiers - ${item.basePrice.toFixed(2)}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => addToCart(section.category, item, null, item.basePrice)}
                    >
                      ${item.basePrice.toFixed(2)}
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}

          <button onClick={() => setView('cart')} style={{ marginRight: 10 }}>See Cart</button>
          <button onClick={() => setView('checkout')}>Checkout</button>
        </div>
      )}

      {/* Modifiers Popup */}
      {currentItemForModifiers && (
        <div style={{
          position: 'fixed', top: '20%', left: '50%', transform: 'translateX(-50%)',
          backgroundColor: 'white', padding: 20, border: '2px solid black', zIndex: 1000
        }}>
          <h3>Select Modifiers for {currentItemForModifiers.item.name}</h3>
          {Object.entries(menu.find(m => m.category === currentItemForModifiers.category).modifiers).map((mod) => (
            <div key={mod[0]}>
              <label>
                <input
                  type="checkbox"
                  checked={currentModifiersSelected.some(m => m.name === mod[0])}
                  onChange={() => toggleModifier(mod)}
                />
                {mod[0]} (+${mod[1].toFixed(2)})
              </label>
            </div>
          ))}
          <button onClick={addWithModifiers} style={{ marginTop: 10, marginRight: 10 }}>Add to Cart</button>
          <button onClick={() => setCurrentItemForModifiers(null)}>Cancel</button>
        </div>
      )}

      {view === 'cart' && (
        <div>
          <h2>Your Cart</h2>
          {cart.length === 0 && <p>Your cart is empty.</p>}
          {cart.map((c, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <strong>{c.name}</strong> {c.size && `(${c.size})`}
              {c.modifiers.length > 0 && (
                <div>
                  Modifiers:
                  <ul>
                    {c.modifiers.map((mod, idx) => (
                      <li key={idx}>{mod.name} (+${mod.price.toFixed(2)})</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>Price: ${c.price.toFixed(2)}</div>
            </div>
          ))}
          <button onClick={() => setView('menu')} style={{ marginRight: 10 }}>Back to Menu</button>
          <button onClick={() => setView('checkout')}>Checkout</button>
        </div>
      )}

      {view === 'checkout' && (
        <div>
          <h2>Checkout</h2>
          {cart.length === 0 && <p>Your cart is empty.</p>}
          {cart.map((c, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <strong>{c.name}</strong> {c.size && `(${c.size})`}
              {c.modifiers.length > 0 && (
                <div>
                  Modifiers:
                  <ul>
                    {c.modifiers.map((mod, idx) => (
                      <li key={idx}>{mod.name} (+${mod.price.toFixed(2)})</li>
                    ))}
                  </ul>
                </div>
              )}
              <div>Price: ${c.price.toFixed(2)}</div>
            </div>
          ))}
          <hr />
          <p>Subtotal: ${calculateTotal().subtotal.toFixed(2)}</p>
          <p>Tax (13%): ${calculateTotal().tax.toFixed(2)}</p>
          <p><strong>Total: ${calculateTotal().total.toFixed(2)}</strong></p>
          <button onClick={() => alert(`Send $${calculateTotal().total.toFixed(2)} to Clover API`)} style={{ marginRight: 10 }}>
            Checkout
          </button>
          <button onClick={() => setView('menu')}>Back to Menu</button>
        </div>
      )}
    </div>
  );
}

export default App;
