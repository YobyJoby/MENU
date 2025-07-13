// Part 1 of 2 — Full App.jsx code with wraps multiple modifiers fix

import React, { useState } from 'react';

const TAX_RATE = 0.13;

const menu = [
  {
    id: 1,
    name: 'Bubble Coffee',
    subMenu: [
      { id: 101, name: 'Iced', price: 4.5, image: '/Yoby - Menu - bubble coffee 1.png' },
      { id: 102, name: 'Iced Decaf', price: 4.5, image: '/Yoby - Menu - bubble coffee 2.png' },
      { id: 103, name: 'Warm', price: 4.0, image: '/Yoby - Menu - bubble coffee 1.png' },
      { id: 104, name: 'Warm Decaf', price: 4.0, image: '/Yoby - Menu - bubble coffee 1.png' },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 1.5 },
      { name: 'X-Large', price: 2.5 },
    ],
    image: '/Yoby - Menu - bubble coffee ICON.png',
  },
  {
    id: 2,
    name: 'Bubble Tea',
    subMenu: [
      { id: 201, name: 'Brown Sugar Milk Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 1.png' },
      { id: 202, name: 'Taro Milk Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 2.png' },
      { id: 203, name: 'Winter Melon Milk Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 3.png' },
      { id: 204, name: 'Jasmine Milk Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 4.png' },
      { id: 205, name: 'Grapefruit Fruit Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 5.png' },
      { id: 206, name: 'Mango Fruit Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 6.png' },
      { id: 207, name: 'Orange Fruit Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 7.png' },
      { id: 208, name: 'Peach Fruit Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 8.png' },
      { id: 209, name: 'Grape Fruit Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 9.png' },
      { id: 210, name: 'Passion Fruit Tea', price: 5.0, image: '/Yoby - Menu - Bubble Tea 10.png' },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 1.5 },
      { name: 'X-Large', price: 2.5 },
    ],
    secondModifiers: [
      { name: 'Add Protein', price: 1 },
      { name: 'Add Collagen', price: 1 },
      { name: 'Add Creatine', price: 1 },
    ],
    image: '/Yoby - Menu - Bubble Tea ICON.png',
  },
  {
    id: 3,
    name: 'Smoothies',
    subMenu: [
      {
        id: 301,
        name: 'Strawberry Blossom',
        price: 6.0,
        effect: 'Antioxidant, Vitamin C, Bright Skin',
        ingredients: 'Strawberry, Banana, Pineapple',
        image: '/Yoby - Menu - Smoothie 1.png',
      },
      {
        id: 302,
        name: 'Nutty Date Delight',
        price: 6.0,
        effect: 'Muscle building & recovery',
        ingredients: 'Banana, Peanut Butter, Pineapple, Cocoa, dates',
        image: '/Yoby - Menu - Smoothie 2.png',
      },
      {
        id: 303,
        name: "Hailey's Glamourous Shimmer",
        price: 6.0,
        effect: 'Antioxidant, Vitamin C, Bright Skin, Hair, and Nails',
        ingredients: 'Strawberry, Pineapple, Avacado, Coconut',
        image: '/Yoby - Menu - Smoothie 3.png',
      },
      {
        id: 304,
        name: 'Mango Island',
        price: 6.0,
        effect: 'Vitamin C, Skin Regeneration, Energy',
        ingredients: 'Mango, Banana, Pinapple, Coconut milk',
        image: '/Yoby - Menu - Smoothie 4.png',
      },
      {
        id: 305,
        name: 'Blueberry Energetic Shower',
        price: 6.0,
        effect: 'Antioxidant, Anti-Aging, Stress Relief',
        ingredients: 'Blueberry, Banana, Pineapple',
        image: '/Yoby - Menu - Smoothie 5.png',
      },
      {
        id: 306,
        name: 'Zesty Green Detox',
        price: 6.0,
        effect: 'Detoxification, Inflammation Relief',
        ingredients: 'Avocado, Lemon Juice, Cabbage',
        image: '/Yoby - Menu - Smoothie 6.png',
      },
      {
        id: 307,
        name: 'Blood Power Detox',
        price: 6.0,
        effect: 'Blood purification, Fat Burning, Blood Vessel Health',
        ingredients: 'Beet, Apple, Carrot, Coconut Water',
        image: '/Yoby - Menu - Smoothie 7.png',
      },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 1.5 },
      { name: 'X-Large', price: 2.5 },
    ],
    secondModifiers: [
      { name: 'Add Protein', price: 1 },
      { name: 'Add Collagen', price: 1 },
      { name: 'Add Creatine', price: 1 },
    ],
    image: '/Yoby - Menu - Smoothie ICON.png',
  },
  {
    id: 4,
    name: 'Iced Drinks',
    subMenu: [
      { id: 401, name: 'Iced Tea', price: 3.5, image: '/Yoby - Menu - iced drinks 1.png' },
      { id: 402, name: 'Iced Coffee', price: 4.0, image: '/Yoby - Menu - iced drinks 2.png' },
      { id: 403, name: 'Lemon Slushy', price: 4.5, image: '/Yoby - Menu - iced drinks 3.png' },
      { id: 404, name: 'Berry Slushy', price: 4.5, image: '/Yoby - Menu - iced drinks 4.png' },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 1.5 },
      { name: 'X-Large', price: 2.5 },
    ],
    image: '/Yoby - Menu - iced drinks ICON.png',
  },
  {
    id: 5,
    name: 'Beverages',
    subMenu: [
      { id: 501, name: 'Water', price: 2.0, image: '/Yoby - Menu - beverages 1.png' },
      { id: 502, name: 'Gatorade', price: 3.0, image: '/Yoby - Menu - beverages 2.png' },
      { id: 503, name: 'Red Bull', price: 4.5, image: '/Yoby - Menu - beverages 3.png' },
      { id: 504, name: 'Monster', price: 4.5, image: '/Yoby - Menu - beverages 1.png' },
    ],
    modifiers: [],
    image: '/Yoby - Menu - beverages ICON.png',
  },
  {
    id: 6,
    name: 'Wraps',
    subMenu: [
      { id: 601, name: 'Garden Chicken', price: 7.99, image: '/Yoby - Menu - wraps 1.png' },
      { id: 602, name: 'Signature Korean', price: 8.99, image: '/Yoby - Menu - wraps 2.png' },
      { id: 603, name: 'Greek', price: 7.99, image: '/Yoby - Menu - wraps 1.png' },
    ],
    modifiers: [
      { name: 'No, thanks', price: 0 },
      { name: 'Extra Cheese', price: 1.5 },
      { name: 'Extra Chicken Breast', price: 2.5 },
    ],
    image: '/Yoby - Menu - wraps ICON.png',
  },
  {
    id: 7,
    name: 'Rolls',
    subMenu: [
      { id: 701, name: 'Kimbap', price: 6.5, image: '/Yoby - Menu - rolls 1.png' },
      { id: 702, name: 'California Roll', price: 7.0, image: '/Yoby - Menu - rolls 2.png' },
    ],
    modifiers: [],
    image: '/Yoby - Menu - rolls ICON.png',
  },
];

// ...continued in Part 2 below
// Part 2 of 2 — Full App.jsx code continued with wraps multiple modifiers fix and full component

function App() {
  const [view, setView] = useState('main'); // main | submenu | checkout | exit
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const [selectedModifiers, setSelectedModifiers] = useState([]);
  const [selectedSecondModifiers, setSelectedSecondModifiers] = useState([]);
  const [cart, setCart] = useState([]);
  const [promptMessage, setPromptMessage] = useState('');

  // Open submenu for selected menu category
  const openSubMenu = (menuItem) => {
    setSelectedMenu(menuItem);
    setSelectedSubItem(null);
    setSelectedModifiers([]);
    setSelectedSecondModifiers([]);
    setPromptMessage('');
    setView('submenu');
  };

  // Toggle modifiers:
  // For wraps (id 6) allow multiple selection (checkbox style)
  // For others, if sizes, single selection (radio style)
  const toggleModifier = (modifier) => {
    if (selectedMenu?.id === 6) {
      // Wraps allow multiple modifiers (checkbox)
      const exists = selectedModifiers.find((m) => m.name === modifier.name);
      if (exists) {
        setSelectedModifiers(selectedModifiers.filter((m) => m.name !== modifier.name));
      } else {
        setSelectedModifiers([...selectedModifiers, modifier]);
      }
    } else {
      // For sizes, radio style toggle
      if (['Medium', 'Large', 'X-Large'].includes(modifier.name)) {
        setSelectedModifiers([modifier]);
      } else {
        // checkbox style for any other case
        const exists = selectedModifiers.find((m) => m.name === modifier.name);
        if (exists) {
          setSelectedModifiers(selectedModifiers.filter((m) => m.name !== modifier.name));
        } else {
          setSelectedModifiers([...selectedModifiers, modifier]);
        }
      }
    }
  };

  const toggleSecondModifier = (modifier) => {
    const exists = selectedSecondModifiers.find((m) => m.name === modifier.name);
    if (exists) {
      setSelectedSecondModifiers(selectedSecondModifiers.filter((m) => m.name !== modifier.name));
    } else {
      setSelectedSecondModifiers([...selectedSecondModifiers, modifier]);
    }
  };

  // When clicking Add to Cart from submenu items
  const addToCartClicked = (subItem) => {
    setSelectedSubItem(subItem);
    setSelectedModifiers([]);
    setSelectedSecondModifiers([]);
    if (selectedMenu?.id === 6) {
      setPromptMessage('Would you like to supe it up?');
    } else if (
      selectedMenu?.modifiers.length > 0 &&
      ![6, 7].includes(selectedMenu.id)
    ) {
      setPromptMessage('What size are you thinking?');
    } else {
      addItemToCart(subItem, [], []);
    }
  };

  // Confirm modifiers selection and add to cart
  const confirmSelection = () => {
    // For menus other than wraps (6) and rolls (7), require size selection if applicable
    if (
      selectedMenu?.modifiers.length > 0 &&
      ![6, 7].includes(selectedMenu.id) &&
      ['Medium', 'Large', 'X-Large'].some(
        (mod) => selectedModifiers.find((m) => m.name === mod) !== undefined
      ) === false
    ) {
      alert('Please select a size before proceeding.');
      return;
    }
    addItemToCart(selectedSubItem, selectedModifiers, selectedSecondModifiers);
    setPromptMessage('');
    setSelectedSubItem(null);
    setSelectedModifiers([]);
    setSelectedSecondModifiers([]);
  };

  // Add item to cart with price calculation
  const addItemToCart = (item, modifiers, secondMods) => {
    let price = item.price;
    modifiers.forEach((mod) => {
      price += mod.price;
    });
    secondMods.forEach((mod) => {
      price += mod.price;
    });

    const cartItem = {
      id: `${item.id}-${Date.now()}`,
      name: item.name,
      basePrice: item.price,
      modifiers: modifiers.map((m) => m.name),
      secondModifiers: secondMods.map((m) => m.name),
      price,
      image: item.image,
    };

    setCart([...cart, cartItem]);
    setView('main');
  };

  // Remove item from cart by id
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Place order, show exit screen for 5 seconds
  const placeOrder = () => {
    setView('exit');
    setTimeout(() => {
      setCart([]);
      setView('main');
    }, 5000);
  };

  // Totals
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="app-container" style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Persistent Cart / Checkout button */}
      {view !== 'checkout' && view !== 'exit' && (
        <button
          onClick={() => setView('checkout')}
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            padding: '10px 20px',
            backgroundColor: '#673ab7',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          View Cart ({cart.length})
        </button>
      )}

      {view === 'main' && (
        <>
          <h1>Yoby Joby Menu</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {menu.map((menuItem) => (
              <div
                key={menuItem.id}
                onClick={() => openSubMenu(menuItem)}
                style={{
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  width: '150px',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                <img
                  src={menuItem.image}
                  alt={menuItem.name}
                  style={{ width: '100%', height: '100px', objectFit: 'contain' }}
                />
                <h3>{menuItem.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {view === 'submenu' && selectedMenu && (
        <>
          <button onClick={() => setView('main')} style={{ marginBottom: '15px' }}>
            &larr; Back to Menu
          </button>
          <h2>{selectedMenu.name}</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            {selectedMenu.subMenu.map((subItem) => (
              <div
                key={subItem.id}
                style={{
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  width: '150px',
                  padding: '10px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '320px', // enough for content + button
                }}
              >
                <div>
                  <img
                    src={subItem.image}
                    alt={subItem.name}
                    style={{ width: '100%', height: '100px', objectFit: 'contain' }}
                  />
                  <h4>{subItem.name}</h4>
                  {subItem.effect && <p><em>{subItem.effect}</em></p>}
                  {subItem.ingredients && <p>{subItem.ingredients}</p>}
                  <p>${subItem.price.toFixed(2)}</p>
                </div>
                <button onClick={() => addToCartClicked(subItem)} style={{ marginTop: 'auto' }}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {promptMessage && (
            <div
              style={{
                marginTop: '20px',
                padding: '15px',
                border: '1px solid #666',
                borderRadius: '8px',
                backgroundColor: '#f0f0f0',
              }}
            >
              <h3>{promptMessage}</h3>
              {selectedMenu.modifiers.length > 0 && (
                <div style={{ marginBottom: '15px' }}>
                  <p>
                    {selectedMenu.id === 6 ? 'Select your modifiers:' : 'Select Size:'}
                  </p>
                  {selectedMenu.modifiers.map((mod) => (
                    <label key={mod.name} style={{ marginRight: '10px' }}>
                      <input
                        type={selectedMenu.id === 6 ? "checkbox" : "radio"}
                        name="modifier"
                        checked={selectedModifiers.find((m) => m.name === mod.name) !== undefined}
                        onChange={() => toggleModifier(mod)}
                      />
                      {mod.name}
                    </label>
                  ))}
                </div>
              )}
              {selectedMenu.secondModifiers && selectedMenu.secondModifiers.length > 0 && (
                <div style={{ marginBottom: '15px' }}>
                  <p>Add-ons:</p>
                  {selectedMenu.secondModifiers.map((mod) => (
                    <label key={mod.name} style={{ marginRight: '10px' }}>
                      <input
                        type="checkbox"
                        checked={selectedSecondModifiers.find((m) => m.name === mod.name) !== undefined}
                        onChange={() => toggleSecondModifier(mod)}
                      />
                      {mod.name}
                    </label>
                  ))}
                </div>
              )}
              <button onClick={confirmSelection} style={{ marginRight: '10px' }}>
                Confirm
              </button>
              <button
                onClick={() => {
                  setPromptMessage('');
                  setSelectedSubItem(null);
                  setSelectedModifiers([]);
                  setSelectedSecondModifiers([]);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </>
      )}

      {view === 'checkout' && (
        <>
          <button onClick={() => setView(selectedMenu ? 'submenu' : 'main')} style={{ marginBottom: '15px' }}>
            &larr; Back to {selectedMenu ? selectedMenu.name : 'Menu'}
          </button>
          <h2>Checkout</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #ccc' }}>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Item</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Modifiers</th>
                    <th style={{ textAlign: 'right', padding: '8px' }}>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '4px' }}
                          />
                        )}
                        <div>
                          <strong>{item.name}</strong>
                        </div>
                      </td>
                      <td style={{ padding: '8px' }}>
                        {item.modifiers.length > 0 && (
                          <div>
                            Size: {item.modifiers.join(', ')}
                          </div>
                        )}
                        {item.secondModifiers.length > 0 && (
                          <div>Add-ons: {item.secondModifiers.join(', ')}</div>
                        )}
                      </td>
                      <td style={{ padding: '8px', textAlign: 'right' }}>${item.price.toFixed(2)}</td>
                      <td style={{ padding: '8px', textAlign: 'center' }}>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            backgroundColor: '#ff4d4f',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '5px 10px',
                            cursor: 'pointer',
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Tax (13%): ${tax.toFixed(2)}</p>
                <h3>Total: ${total.toFixed(2)}</h3>
              </div>

              <button
                onClick={placeOrder}
                style={{
                  marginTop: '20px',
                  backgroundColor: '#673ab7',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Place Order
              </button>
            </>
          )}
        </>
      )}

      {view === 'exit' && (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h2>Thank you for your order!</h2>
          <img
            src="/Yoby Joby - VECTOR (Sticker).png"
            alt="Yoby Joby Sticker"
            style={{ marginTop: '20px', maxWidth: '200px', height: 'auto' }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
