import React, { useState } from 'react';

const TAX_RATE = 0.13;

const menu = [
  {
    id: 1,
    name: 'Bubble Coffee',
    subMenu: [
      { id: 101, name: 'Iced', price: 4.50 },
      { id: 102, name: 'Iced Decaf', price: 4.50 },
      { id: 103, name: 'Warm', price: 4.00 },
      { id: 104, name: 'Warm Decaf', price: 4.00 },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 0.50 },
      { name: 'X-Large', price: 1.00 },
    ],
  },
  {
    id: 2,
    name: 'Bubble Tea',
    subMenu: [
      { id: 201, name: 'Brown Sugar', price: 5.00 },
      { id: 202, name: 'Mango', price: 5.00 },
      { id: 203, name: 'Avocado', price: 5.00 },
      { id: 204, name: 'Peach', price: 5.00 },
      { id: 205, name: 'Grapefruit', price: 5.00 },
      { id: 206, name: 'Matcha', price: 5.00 },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 0.50 },
      { name: 'X-Large', price: 1.00 },
    ],
  },
  {
    id: 3,
    name: 'Smoothies',
    subMenu: [
      { id: 301, name: 'Banana-Blueberry', price: 6.00 },
      { id: 302, name: 'Avocado-Banana', price: 6.00 },
      { id: 303, name: 'Peanut Butter Berry', price: 6.00 },
      { id: 304, name: 'Mango', price: 6.00 },
      { id: 305, name: 'Orange-Vanilla', price: 6.00 },
      { id: 306, name: 'Detox', price: 6.00 },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 0.50 },
      { name: 'X-Large', price: 1.00 },
    ],
  },
  {
    id: 4,
    name: 'Iced Drinks',
    subMenu: [
      { id: 401, name: 'Iced Tea', price: 3.50 },
      { id: 402, name: 'Iced Coffee', price: 4.00 },
      { id: 403, name: 'Lemon Slushy', price: 4.50 },
      { id: 404, name: 'Berry Slushy', price: 4.50 },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 0.50 },
      { name: 'X-Large', price: 1.00 },
    ],
  },
  {
    id: 5,
    name: 'Beverages',
    subMenu: [
      { id: 501, name: 'Water', price: 2.00 },
      { id: 502, name: 'Gatorade', price: 3.00 },
      { id: 503, name: 'Red Bull', price: 4.50 },
      { id: 504, name: 'Monster', price: 4.50 },
    ],
    modifiers: [],
  },
  {
    id: 6,
    name: 'Wraps',
    subMenu: [
      { id: 601, name: 'Garden Chicken', price: 7.99 },
      { id: 602, name: 'Signature Korean', price: 8.99 },
      { id: 603, name: 'Greek', price: 7.99 },
    ],
    modifiers: [
      { name: 'Extra Cheese', price: 1.00 },
      { name: 'Extra Chicken Breast', price: 2.00 },
    ],
  },
  {
    id: 7,
    name: 'Rolls',
    subMenu: [
      { id: 701, name: 'Kimbap', price: 6.50 },
      { id: 702, name: 'California Roll', price: 7.00 },
    ],
    modifiers: [],
  },
  {
    id: 8,
    name: 'Snacks',
    subMenu: [
      { id: 801, name: 'Energy Bar', price: 2.50 },
      { id: 802, name: 'Chocolate Bar', price: 2.00 },
    ],
    modifiers: [],
  },
  {
    id: 9,
    name: 'Breakfast',
    subMenu: [
      { id: 901, name: 'Egg Sausage Cheese Croissant', price: 5.99 },
      { id: 902, name: 'Yogurt Granola Bowl', price: 4.99 },
    ],
    modifiers: [],
  },
];

function App() {
  const [view, setView] = useState('main'); // main, submenu, cart, checkout
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedModifiers, setSelectedModifiers] = useState([]);
  const [cart, setCart] = useState([]);

  // When user selects main menu item to open submenu
  const openSubMenu = (menuItem) => {
    setSelectedMenu(menuItem);
    setSelectedModifiers([]);
    setView('submenu');
  };

  // Toggle modifiers in submenu
  const toggleModifier = (modifier) => {
    const exists = selectedModifiers.find((m) => m.name === modifier.name);
    if (exists) {
      setSelectedModifiers(selectedModifiers.filter((m) => m.name !== modifier.name));
    } else {
      setSelectedModifiers([...selectedModifiers, modifier]);
    }
  };

  // Add submenu item + modifiers to cart
  const addToCart = (subItem) => {
    const modifiersTotal = selectedModifiers.reduce((sum, m) => sum + m.price, 0);
    const price = subItem.price + modifiersTotal;
    const cartItem = {
      id: subItem.id,
      name: `${subItem.name} (${selectedMenu.name})`,
      modifiers: selectedModifiers.map((m) => m.name),
      price,
    };
    setCart([...cart, cartItem]);
    setView('main');
  };

  // Remove item from cart by index
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Totals
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  // Render functions:

  const renderMainMenu = () => (
    <div style={{ padding: 20 }}>
      <h1>Menu</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {menu.map((item) => (
          <div
            key={item.id}
            onClick={() => openSubMenu(item)}
            style={{
              border: '1px solid #ccc',
              borderRadius: 10,
              padding: 10,
              width: 220,
              cursor: 'pointer',
              userSelect: 'none',
              textAlign: 'center',
            }}
          >
            <img
              src="/chicken-wrap.png"
              alt={item.name}
              style={{ width: '100%', borderRadius: 10 }}
              draggable={false}
            />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setView('cart')}>See Cart ({cart.length})</button>
        <button onClick={() => setView('checkout')} style={{ marginLeft: 10 }}>
          Checkout
        </button>
      </div>
    </div>
  );

  const renderSubMenu = () => (
    <div style={{ padding: 20 }}>
      <h2>{selectedMenu.name}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}>
        {selectedMenu.subMenu.map((subItem) => (
          <div
            key={subItem.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: 10,
              padding: 10,
              width: 200,
              cursor: 'pointer',
              userSelect: 'none',
              textAlign: 'center',
            }}
          >
            <img
              src="/chicken-wrap.png"
              alt={subItem.name}
              style={{ width: '100%', borderRadius: 10 }}
              draggable={false}
            />
            <h4>{subItem.name}</h4>
            <p>${subItem.price.toFixed(2)}</p>
            <button onClick={() => addToCart(subItem)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {selectedMenu.modifiers.length > 0 && (
        <>
          <h3 style={{ marginTop: 20 }}>Modifiers</h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {selectedMenu.modifiers.map((mod) => {
              const selected = selectedModifiers.find((m) => m.name === mod.name);
              return (
                <button
                  key={mod.name}
                  onClick={() => toggleModifier(mod)}
                  style={{
                    padding: '5px 10px',
                    borderRadius: 5,
                    border: selected ? '2px solid green' : '1px solid #ccc',
                    backgroundColor: selected ? '#ccffcc' : 'white',
                    cursor: 'pointer',
                  }}
                >
                  {mod.name} {mod.price > 0 ? `(+ $${mod.price.toFixed(2)})` : ''}
                </button>
              );
            })}
          </div>
        </>
      )}

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setView('main')}>Back to Main Menu</button>
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
          <div
            key={idx}
            style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}
          >
            <span>
              {item.name} {item.modifiers.length > 0 && `- Modifiers: ${item.modifiers.join(', ')}`} - $
              {item.price.toFixed(2)}
            </span>
            <button onClick={() => removeFromCart(idx)}>Remove</button>
          </div>
        ))
      )}
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setView('main')}>Back to Menu</button>
        <button onClick={() => setView('checkout')} style={{ marginLeft: 10 }}>
          Checkout
        </button>
      </div>
    </div>
  );

  const renderCheckout = () => (
    <div style={{ padding: 20 }}>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, idx) => (
          <div
            key={idx}
            style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}
          >
            <span>
              {item.name} {item.modifiers.length > 0 && `- Modifiers: ${item.modifiers.join(', ')}`} - $
              {item.price.toFixed(2)}
            </span>
            <button onClick={() => removeFromCart(idx)}>Remove</button>
          </div>
        ))
      )}
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax (13%): ${tax.toFixed(2)}</p>
      <p>
        <strong>Total: ${total.toFixed(2)}</strong>
      </p>
      <div>
        <button onClick={() => setView('main')}>Back to Menu</button>
        <button style={{ marginLeft: 10 }} disabled>
          Checkout
        </button>
      </div>
    </div>
  );

  if (view === 'main') return renderMainMenu();
  if (view === 'submenu') return renderSubMenu();
  if (view === 'cart') return renderCart();
  if (view === 'checkout') return renderCheckout();

  return null;
}

export default App;
