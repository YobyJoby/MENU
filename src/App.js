import React, { useState } from 'react';

const TAX_RATE = 0.13;

const menuData = {
  'Bubble Coffee': {
    items: [
      { id: 'bc1', name: 'Iced', basePrice: 4.5, image: 'https://i.imgur.com/qLm2F2F.png' },
      { id: 'bc2', name: 'Iced Decaf', basePrice: 4.5, image: 'https://i.imgur.com/F3LjEDo.png' },
      { id: 'bc3', name: 'Warm', basePrice: 4, image: 'https://i.imgur.com/8DaHsRf.png' },
      { id: 'bc4', name: 'Warm Decaf', basePrice: 4, image: 'https://i.imgur.com/aj3sQHZ.png' },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 0.5 },
      { name: 'X-Large', price: 1.0 },
    ],
  },
  'Bubble Tea': {
    items: [
      { id: 'bt1', name: 'Brown Sugar', basePrice: 5, image: 'https://i.imgur.com/9hvgxXe.png' },
      { id: 'bt2', name: 'Mango', basePrice: 5, image: 'https://i.imgur.com/FYO4IoC.png' },
      { id: 'bt3', name: 'Avocado', basePrice: 5, image: 'https://i.imgur.com/wnTg5rd.png' },
      { id: 'bt4', name: 'Peach', basePrice: 5, image: 'https://i.imgur.com/vBpnHKc.png' },
      { id: 'bt5', name: 'Grapefruit', basePrice: 5, image: 'https://i.imgur.com/6hvDg81.png' },
      { id: 'bt6', name: 'Matcha', basePrice: 5, image: 'https://i.imgur.com/7vQ7kcZ.png' },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 0.5 },
      { name: 'X-Large', price: 1.0 },
    ],
  },
  Smoothies: {
    items: [
      { id: 'sm1', name: 'Banana-Blueberry', basePrice: 6, image: 'https://i.imgur.com/7jkR1Fk.png' },
      { id: 'sm2', name: 'Avocado-Banana', basePrice: 6, image: 'https://i.imgur.com/NXjLJir.png' },
      { id: 'sm3', name: 'Peanut Butter Berry', basePrice: 6, image: 'https://i.imgur.com/WvJQayY.png' },
      { id: 'sm4', name: 'Mango', basePrice: 6, image: 'https://i.imgur.com/y4YfBkA.png' },
      { id: 'sm5', name: 'Orange-Vanilla', basePrice: 6, image: 'https://i.imgur.com/8TX2I41.png' },
      { id: 'sm6', name: 'Detox', basePrice: 6, image: 'https://i.imgur.com/9Q6MYX7.png' },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 0.75 },
      { name: 'X-Large', price: 1.25 },
    ],
  },
  'Iced Drinks': {
    items: [
      { id: 'id1', name: 'Iced Tea', basePrice: 3.5, image: 'https://i.imgur.com/KJxxHj6.png' },
      { id: 'id2', name: 'Iced Coffee', basePrice: 4, image: 'https://i.imgur.com/4QUlDne.png' },
      { id: 'id3', name: 'Lemon Slushy', basePrice: 4, image: 'https://i.imgur.com/pPS4CQa.png' },
      { id: 'id4', name: 'Berry Slushy', basePrice: 4, image: 'https://i.imgur.com/XfK6WhR.png' },
    ],
    modifiers: [
      { name: 'Medium', price: 0 },
      { name: 'Large', price: 0.5 },
      { name: 'X-Large', price: 1.0 },
    ],
  },
  Beverages: {
    items: [
      { id: 'bev1', name: 'Water', basePrice: 1.5, image: 'https://i.imgur.com/tQQnlM2.png' },
      { id: 'bev2', name: 'Gatorade', basePrice: 2.5, image: 'https://i.imgur.com/hVvLlyq.png' },
      { id: 'bev3', name: 'Red Bull', basePrice: 3.5, image: 'https://i.imgur.com/MzFfjWO.png' },
      { id: 'bev4', name: 'Monster', basePrice: 3.5, image: 'https://i.imgur.com/UOSkGeT.png' },
    ],
    modifiers: [], // no modifiers
  },
  Wraps: {
    items: [
      { id: 'wp1', name: 'Garden Chicken', basePrice: 8.5, image: 'https://i.imgur.com/NPZ7Zlv.png' },
      { id: 'wp2', name: 'Signature Korean', basePrice: 9.5, image: 'https://i.imgur.com/nJGgqJH.png' },
      { id: 'wp3', name: 'Greek', basePrice: 9, image: 'https://i.imgur.com/EXWqM6f.png' },
    ],
    modifiers: [
      { name: 'Extra Cheese', price: 1 },
      { name: 'Extra Chicken Breast', price: 2 },
    ],
  },
  Rolls: {
    items: [
      { id: 'rl1', name: 'Kimbap', basePrice: 7.5, image: 'https://i.imgur.com/4DYIDku.png' },
      { id: 'rl2', name: 'California Roll', basePrice: 8, image: 'https://i.imgur.com/xZ8eXgT.png' },
    ],
    modifiers: [], // no modifiers
  },
  Snacks: {
    items: [
      { id: 'sn1', name: 'Energy Bar', basePrice: 2.5, image: 'https://i.imgur.com/wk5EAVj.png' },
      { id: 'sn2', name: 'Chocolate Bar', basePrice: 2.5, image: 'https://i.imgur.com/KjZZaQk.png' },
    ],
    modifiers: [], // no modifiers
  },
  Breakfast: {
    items: [
      { id: 'bf1', name: 'Egg Sausage Cheese Croissant', basePrice: 5.5, image: 'https://i.imgur.com/Ak0jrTU.png' },
      { id: 'bf2', name: 'Yogurt Granola Bowl', basePrice: 6, image: 'https://i.imgur.com/R4g7s6R.png' },
    ],
    modifiers: [], // no modifiers
  },
};

function App() {
  const [category, setCategory] = useState(null); // current main category
  const [selectedItem, setSelectedItem] = useState(null); // current selected submenu item
  const [modifierSelections, setModifierSelections] = useState({}); // selected modifiers for the item
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('menu'); // menu, cart, checkout

  // Calculate price with modifiers
  const calcPrice = (item, modifiersSelected) => {
    let price = item.basePrice;
    if (!modifiersSelected) return price;
    for (const modName in modifiersSelected) {
      if (modifiersSelected[modName]) {
        const modObj = menuData[category]?.modifiers.find(m => m.name === modName);
        if (modObj) price += modObj.price;
      }
    }
    return price;
  };

  const addToCart = () => {
    if (!selectedItem) return;

    // Create cart item with selected modifiers and calculated price
    const finalPrice = calcPrice(selectedItem, modifierSelections);
    const cartItem = {
      id: `${selectedItem.id}-${Date.now()}`, // unique id
      name: selectedItem.name,
      modifiers: Object.keys(modifierSelections).filter(m => modifierSelections[m]),
      price: finalPrice,
      image: selectedItem.image,
    };

    setCart([...cart, cartItem]);
    setSelectedItem(null);
    setModifierSelections({});
    setCategory(null);
  };

  const subtotal = cart.reduce((acc, i) => acc + i.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  // Render main menu categories
  const renderMainMenu = () => (
    <div style={{ padding: 20 }}>
      <h1>Snack Bar Menu</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {Object.keys(menuData).map(cat => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setSelectedItem(null);
              setModifierSelections({});
              setView('menu');
            }}
            style={{
              padding: '12px 20px',
              borderRadius: 8,
              fontWeight: 'bold',
              cursor: 'pointer',
              minWidth: 140,
              background: category === cat ? '#007bff' : '#eee',
              color: category === cat ? '#fff' :
