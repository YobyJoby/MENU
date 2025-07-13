const menu = [
  {
    id: 1,
    name: "Bubble Tea",
    image: "/Yoby - Menu - Bubble Tea ICON.png",
    modifiers: [
      { name: "Small", price: 0 },
      { name: "Medium", price: 1 },
      { name: "Large", price: 2 },
      { name: "X-Large", price: 3 },
    ],
    secondModifiers: [
      { name: "Add Protein", price: 1 },
      { name: "Add Collagen", price: 1 },
      { name: "Add Creatine", price: 1 },
    ],
    subMenu: [
      {
        id: 101,
        name: "Brown Sugar Milk Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 1.png",
      },
      {
        id: 102,
        name: "Taro Milk Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 2.png",
      },
      {
        id: 103,
        name: "Winter Melon Milk Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 3.png",
      },
      {
        id: 104,
        name: "Jasmine Milk Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 4.png",
      },
      {
        id: 105,
        name: "Grapefruit Fruit Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 5.png",
      },
      {
        id: 106,
        name: "Mango Fruit Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 6.png",
      },
      {
        id: 107,
        name: "Orange Fruit Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 7.png",
      },
      {
        id: 108,
        name: "Peach Fruit Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 8.png",
      },
      {
        id: 109,
        name: "Grape Fruit Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 9.png",
      },
      {
        id: 110,
        name: "Passion Fruit Tea",
        price: 5.0,
        image: "/Yoby - Menu - Bubble Tea 10.png",
      },
    ],
  },

  {
    id: 2,
    name: "Smoothies",
    image: "/Yoby - Menu - Smoothie ICON.png",
    subMenu: [
      {
        id: 201,
        name: "Strawberry Blossom",
        price: 6.0,
        image: "/Yoby - Menu - Smoothie 1.png",
        effect: "Antioxidant, Vitamin C, Bright Skin",
        ingredients: "Strawberry, Banana, Pineapple",
      },
      {
        id: 202,
        name: "Nutty Date Delight",
        price: 6.0,
        image: "/Yoby - Menu - Smoothie 2.png",
        effect: "Muscle building & recovery",
        ingredients: "Banana, Peanut Butter, Pineapple, Cocoa, dates",
      },
      {
        id: 203,
        name: "Hailey's Glamourous Shimmer",
        price: 6.0,
        image: "/Yoby - Menu - Smoothie 3.png",
        effect: "Antioxidant, Vitamin C, Bright Skin, Hair, and Nails",
        ingredients: "Strawberry, Pineapple, Avocado, Coconut",
      },
      {
        id: 204,
        name: "Mango Island",
        price: 6.0,
        image: "/Yoby - Menu - Smoothie 4.png",
        effect: "Vitamin C, Skin Regeneration, Energy",
        ingredients: "Mango, Banana, Pineapple, Coconut milk",
      },
      {
        id: 205,
        name: "Blueberry Energetic Shower",
        price: 6.0,
        image: "/Yoby - Menu - Smoothie 5.png",
        effect: "Antioxidant, Anti-Aging, Stress Relief",
        ingredients: "Blueberry, Banana, Pineapple",
      },
      {
        id: 206,
        name: "Zesty Green Detox",
        price: 6.0,
        image: "/Yoby - Menu - Smoothie 6.png",
        effect: "Detoxification, Inflammation Relief",
        ingredients: "Avocado, Lemon Juice, Cabbage",
      },
      {
        id: 207,
        name: "Blood Power Detox",
        price: 6.0,
        image: "/Yoby - Menu - Smoothie 7.png",
        effect: "Blood purification, Fat Burning, Blood Vessel Health",
        ingredients: "Beet, Apple, Carrot, Coconut Water",
      },
    ],
  },

  // You can add more menu categories here if needed
];

export default menu;
