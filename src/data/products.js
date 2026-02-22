const products = [
  {
    id: 1,
    name: "Ultimate Rice Feast",
    description:
      "Smoky party jollof rice served with juicy chicken, tender beef, and a tasty hot dog. A full plate that satisfies every craving.",
    time: "once you are ready",
    rating: 4.7,
    reviews: 24,
    image: "/images/f1.jpg",
    category: "Rice",
  },
  {
    id: 2,
    name: "Classic Egusi Soup Bowl",
    description:
      "Rich, flavorful egusi soup simmered with assorted meats and vegetables. Perfect with swallow or rice.",
    time: "once you are ready",
    rating: 4.7,
    reviews: 24,
    image: "/images/f2.jpg",
    category: "Soup",
  },
  {
    id: 3,
    name: "Bitter Leaf Supreme Bowl",
    description:
      "A thick, savory blend of washed bitter leaves, palm oil, and assorted protein slow-cooked to perfection.",
    time: "once you are ready",
    rating: 4.7,
    reviews: 24,
    image: "/images/f3.jpg",
    category: "Soup",
  },
  {
    id: 4,
    name: "Spicy Native Pork Pepper Soup",
    description:
      "Freshly cooked pork pepper soup made with aromatic spices, scent leaves, and chili heat for that authentic local taste.",
    time: "once you are ready",
    rating: 4.7,
    reviews: 24,
    image: "/images/f4.jpg",
    category: "Soup",
  },
  {
    id: 5,
    name: "💪 Power Tiger Nut Drink",
    description:
      "A creamy, naturally sweet tiger nut drink blended with dates and coconut for a rich, refreshing, and healthy taste. Served chilled.A healthy energy booster made from real tiger nuts, rich in fiber, vitamins, and flavor.",
    time: "once you are ready",
    rating: 4.7,
    reviews: 24,
    image: "/images/f6.jpeg",
    category: "Drinks",
  },
  {
    id: 6,
    name: "Classic Party Jollof Rice with Chicken",
    description:
      "Smoky Nigerian party-style jollof rice served with a juicy, well-seasoned grilled chicken lap. Rich, flavorful, and satisfying in every bite.",
    time: "once you are ready",
    rating: 4.7,
    reviews: 24,
    image: "/images/f5.jpg",
    category: "Rice",
  },
  {
    id: 7,
    name: "🌶️ Spicy Party Stew",
    description:
      "Thick, tasty tomato sauce prepared with fresh ingredients, tender meat, and traditional Nigerian spices for a comforting homemade flavor.",
    time: "once you are ready",
    rating: 4.7,
    reviews: 24,
    image: "/images/f7.jpeg",
    category: "Stew",
  },
  {
    id: 12,
    name: "Hearty Rice & Plantain with Beef",
    description:
      "A satisfying meal featuring perfectly cooked fragrant rice, golden fried plantains, and tender, flavorful beef. Served with rich spices for a delightful Nigerian taste experience.",
    time: "Ready",
    rating: 4.7,
    reviews: 18,
    image: "/images/f8.jpeg",
    category: "Rice",
  },
  {
    id: 13,
    name: "Fresh Garden Salad",
    description:
      "A crisp and refreshing mix of fresh vegetables, including lettuce, cucumber, tomatoes, and carrots. Tossed with a light dressing for a healthy and delicious side or main dish.",
    time: "Ready",
    rating: 4.8,
    reviews: 12,
    image: "/images/f9.jpeg",
    category: "Salad",
  },
  {
    id: 14,
    name: "White Soup (Ofe Nsala)",
    description:
      "A traditional Nigerian delicacy made with fresh catfish or meat, thickened with pounded yam, and spiced with local herbs and peppers. Served hot, it’s rich, flavorful, and perfect with fufu or yam.",
    time: "once you are ready",
    rating: 4.7,
    reviews: 18,
    image: "/images/f10.jpeg",
    category: "Soup",
  },
  {
    id: 15,
    name: "Okra Soup",
    description:
      "A traditional Nigerian soup made with fresh okra, assorted meats, and fish, seasoned with local spices and palm oil. Thick, hearty, and perfect when served with fufu or pounded yam.",
    time: "once you are ready",
    rating: 4.6,
    reviews: 12,
    image: "/images/f11.jpeg",
    category: "Soup",
  },
  {
    id: 16,
    name: "Ora Soup",
    description:
      "A flavorful Nigerian soup made with fresh ora leaves, assorted meats, and fish, simmered with traditional spices and palm oil. Perfectly thick and rich, best served with fufu, pounded yam, or amala.",
    time: "once you are ready",
    rating: 4.5,
    reviews: 10,
    image: "/images/f12.jpeg",
    category: "Soup",
  },
  {
  id: 17,
  name: "Fried Egg with Pear & Tomato",
  description:
    "A wholesome breakfast dish featuring perfectly fried eggs served with fresh pear slices and juicy tomatoes. Light, nutritious, and bursting with flavor—ideal for a healthy start to your day.",
  time: "Once you are ready",
  rating: 4.6,
  reviews: 8,
  image: "/images/f14.jpeg",
  category: "All"
},
{
  id: 18,
  name: "Avocado Lettuce Wraps",
  description:
    "Fresh and crisp lettuce leaves filled with creamy avocado, diced tomatoes, and crunchy cucumber. A light, refreshing snack or appetizer, perfect for a healthy treat.",
  time: "Once you are ready",
  rating: 4.8,
  reviews: 12,
  image: "/images/f15.jpeg",
  category: "Salad"
},
{
  id: 19,
  name: "Strawberry Banana Smoothie",
  description:
    "A creamy and refreshing blend of ripe strawberries and sweet bananas, perfect for a healthy breakfast or snack. Smooth, naturally sweet, and packed with vitamins.",
  time: "Once you are ready",
  rating: 4.9,
  reviews: 20,
  image: "/images/d6.jpg",
  category: "Drinks"
},
{
  id: 21,
  name: "Minerals",
  description:
    "A chilled bottle of Minerals drink with its signature crisp, refreshing taste and perfect balance of sweetness and fizz. The ultimate companion to any meal.",
  time: "Ready to serve",
  rating: 4.9,
  reviews: 35,  image: "/images/d1.jpg",
  category: "Drinks"
},
{
  id: 22,
  name: "Pepsi",
  description:
    "A chilled bottle of Pepsi with its signature crisp, refreshing taste and perfect balance of sweetness and fizz. The ultimate companion to any meal.",
  time: "Ready to serve",
  rating: 4.9,
  reviews: 35,  image: "/images/d2.jpg",
  category: "Drinks"
},
{
  id: 23,
  name: "Blackberry Smoothie",
  description:
    "A rich and refreshing blend of ripe blackberries, perfectly balanced for a sweet and slightly tangy taste. Smooth, creamy, and packed with antioxidants for a delicious and healthy boost.",
  time: "Once you are ready",
  rating: 4.8,
  reviews: 18,
  image: "/images/d3.jpg",
  category: "Drinks"
},
{
  id: 24,
  name: "Fresh Green Smoothie",
  description:
    "A refreshing blend of spinach, ripe banana, green apple, and pineapple, naturally sweet and packed with nutrients. Smooth, energizing, and perfect for a healthy start to your day.",
  time: "Once you are ready",
  rating: 4.9,
  reviews: 24,
  image: "/images/d5.jpg",
  category: "Drinks"
},
{
  id: 25,
  name: "Ugwu Stew",
  description:
    "A hearty and traditional Nigerian stew made with fresh ugwu (fluted pumpkin) leaves, rich spices, and tender meat. Savory, flavorful, and perfect served with rice, swallow, or your favorite side.",
  time: "Once you are ready",
  rating: 4.8,
  reviews: 15,
  image: "/images/st1.jpg",
  category: "Stew",
},
{
  id: 26,
  name: "Banga Stew",
  description:
    "A rich and aromatic Nigerian stew made from palm nut extract, infused with spices, herbs, and tender meat or fish. Perfectly savory and traditionally served with rice, fufu, or pounded yam.",
  time: "Once you are ready",
  rating: 4.9,
  reviews: 20,
  image: "/images/st2.jpg",
  category: "Stew"
},
{
  id: 27,
  name: "Native Stew",
  description:
    "A traditional Nigerian stew bursting with rich flavors from fresh tomatoes, peppers, onions, and tender meat. Perfectly balanced, aromatic, and best enjoyed with rice, yam, or swallow.",
  time: "Once you are ready",
  rating: 4.8,
  reviews: 18,
  image: "/images/st3.jpg",
  category: "Stew"
},
{
  id: 28,
  name: "Goat Meat Stew",
  description:
    "A savory and hearty Nigerian stew made with tender goat meat, simmered in rich tomato and pepper sauce with traditional spices. Perfect with rice, yam, or your favorite swallow.",
  time: "Once you are ready",
  rating: 4.9,
  reviews: 22,
  image: "/images/st4.jpg",
  category: "Stew"
},
{
  id: 29,
  name: "Gizzard Stew",
  description:
    "A flavorful Nigerian stew made with tender gizzards simmered in a rich tomato and pepper sauce with traditional spices. Perfectly savory and ideal with rice, yam, or swallow.",
  time: "Once you are ready",
  rating: 4.8,
  reviews: 16,
  image: "/images/st5.jpg",
  category: "Stew"
},
{
  id: 30,
  name: "Moi Moi",
  description:
    "A classic Nigerian steamed bean pudding made from blended black-eyed beans, peppers, onions, and spices. Soft, savory, and packed with flavor — perfect as a side or main dish.",
  time: "Once you are ready",
  rating: 4.9,
  reviews: 20,
  image: "/images/m1.jpg",
  category: "Side",
},
{
  id: 31,
  name: "Fresh Fruit Salad",
  description:
    "A colorful and refreshing mix of seasonal fruits, perfectly chopped and lightly sweetened. Naturally healthy, vibrant, and perfect as a snack or dessert.",
  time: "Once you are ready",
  rating: 4.8,
  reviews: 18,
  image: "/images/fruit.jpg",
  category: "Side",
},
{
  id: 32,
  name: "Lighter Coleslaw",
  description:
    "A crisp and refreshing coleslaw made with shredded cabbage, carrots, and a light, tangy dressing. Perfect as a side dish or accompaniment to any main meal.",
  time: "Once you are ready",
  rating: 4.7,
  reviews: 12,
  price: 1800,
  image: "/images/slaw.jpg",
  category: "Side",
}
];

export default products;
