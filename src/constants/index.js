import ice_latte from '../assets/images/ice-latte.avif';
import cocktail from '../assets/images/cocktail.webp';
import ice_americano from '../assets/images/ice-americano.jpg';
import kafe_dosko from "../assets/images/kafe-dos-ko.jpg";
import macha from '../assets/images/macha.webp';
import spar from '../assets/images/Sparkling-Drinks-3.webp';

export const popurlarDishes = [
  {
    id: 1,
    image: ice_latte,
    name: "Ice Latte",
    numberOfOrders: 200,
  },
  {
    id: 2,
    image: ice_americano,
    name: "Ice Americano",
    numberOfOrders: 180,
  },
  {
    id: 3,
    image: macha,
    name: "Matcha Latte",
    numberOfOrders: 150,
  },
  {
    id: 4,
    image: cocktail,
    name: "Fruit Cocktail",
    numberOfOrders: 120,
  },
  {
    id: 5,
    image: spar,
    name: "Sparkling Drink",
    numberOfOrders: 100,
  },
  {
    id: 6,
    image: kafe_dosko,
    name: "Kafe Dos Ko",
    numberOfOrders: 90,
  },
];

export const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
    { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 2 },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 6 },
    { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 2 },
    { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 8 },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 4 },
    { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 6 },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 2 },
    { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 4 },
];


// Hot Coffee Items - 8 items
export const hotCoffeeItems = [
    { id: 1, name: "Espresso", price: 3.50, description: "Strong and bold coffee shot" },
    { id: 2, name: "Double Espresso", price: 4.50, description: "Two shots of espresso" },
    { id: 3, name: "Cappuccino", price: 4.75, description: "Espresso with steamed milk foam" },
    { id: 4, name: "Latte", price: 5.00, description: "Espresso with steamed milk" },
    { id: 5, name: "Americano", price: 3.75, description: "Espresso with hot water" },
    { id: 6, name: "Mocha", price: 5.50, description: "Chocolate coffee with steamed milk" },
    { id: 7, name: "Macchiato", price: 4.25, description: "Espresso with a dollop of foam" },
    { id: 8, name: "Flat White", price: 5.25, description: "Strong coffee with microfoam" }
];

// Cold Coffee Items - 9 items
export const coldCoffeeItems = [
    { id: 1, name: "Iced Coffee", price: 4.00, description: "Chilled coffee over ice" },
    { id: 2, name: "Cold Brew", price: 4.75, description: "Slow-steeped cold coffee" },
    { id: 3, name: "Iced Latte", price: 5.25, description: "Espresso with cold milk and ice" },
    { id: 4, name: "Iced Cappuccino", price: 5.00, description: "Cold espresso with foam" },
    { id: 5, name: "Frappuccino", price: 6.00, description: "Blended ice coffee drink" },
    { id: 6, name: "Iced Mocha", price: 5.75, description: "Chocolate cold coffee" },
    { id: 7, name: "Vanilla Cold Brew", price: 5.25, description: "Cold brew with vanilla syrup" },
    { id: 8, name: "Caramel Iced Coffee", price: 5.50, description: "Iced coffee with caramel" },
    { id: 9, name: "Nitro Cold Brew", price: 6.25, description: "Nitrogen-infused cold brew" }
];

// Tea Items - 5 items
export const teaItems = [
    { id: 1, name: "Green Tea", price: 3.00, description: "Light and refreshing" },
    { id: 2, name: "Black Tea", price: 3.00, description: "Classic English breakfast" },
    { id: 3, name: "Chai Latte", price: 4.50, description: "Spiced tea with milk" },
    { id: 4, name: "Herbal Tea", price: 3.25, description: "Caffeine-free herbal blend" },
    { id: 5, name: "Iced Tea", price: 3.50, description: "Chilled tea with lemon" }
];

// Smoothie Items - 7 items
export const smoothieItems = [
    { id: 1, name: "Berry Blast", price: 6.50, description: "Mixed berries with yogurt" },
    { id: 2, name: "Tropical Paradise", price: 6.75, description: "Mango, pineapple, and banana" },
    { id: 3, name: "Green Detox", price: 7.00, description: "Spinach, kale, and apple" },
    { id: 4, name: "Protein Power", price: 7.50, description: "Protein powder with fruits" },
    { id: 5, name: "Chocolate Banana", price: 6.25, description: "Chocolate with banana" },
    { id: 6, name: "Strawberry Sunrise", price: 6.50, description: "Strawberry and orange blend" },
    { id: 7, name: "Peachy Keen", price: 6.75, description: "Peach and mango smoothie" }
];

// Pastry Items - 11 items
export const pastryItems = [
    { id: 1, name: "Croissant", price: 3.50, description: "Buttery French pastry" },
    { id: 2, name: "Chocolate Croissant", price: 4.00, description: "Croissant with chocolate filling" },
    { id: 3, name: "Blueberry Muffin", price: 3.75, description: "Fresh blueberries in muffin" },
    { id: 4, name: "Chocolate Chip Muffin", price: 3.75, description: "Muffin with chocolate chips" },
    { id: 5, name: "Chocolate Chip Cookie", price: 2.50, description: "Classic cookie with chocolate chips" },
    { id: 6, name: "Oatmeal Raisin Cookie", price: 2.50, description: "Cookie with oats and raisins" },
    { id: 7, name: "Cinnamon Roll", price: 4.50, description: "Sweet cinnamon pastry" },
    { id: 8, name: "Scone", price: 3.25, description: "British tea-time pastry" },
    { id: 9, name: "Apple Turnover", price: 4.00, description: "Flaky pastry with apple filling" },
    { id: 10, name: "Danish Pastry", price: 4.25, description: "Sweet pastry with fruit filling" },
    { id: 11, name: "Bagel", price: 3.00, description: "New York style bagel" }
];

// Sandwich Items - 3 items
export const sandwichItems = [
    { id: 1, name: "Turkey Club", price: 8.50, description: "Turkey, bacon, lettuce, tomato" },
    { id: 2, name: "Caprese Panini", price: 9.00, description: "Mozzarella, tomato, basil" },
    { id: 3, name: "Chicken Avocado", price: 9.50, description: "Grilled chicken with avocado" }
];

// Dessert Items - 7 items
export const dessertItems = [
    { id: 1, name: "Cheesecake", price: 6.50, description: "New York style cheesecake" },
    { id: 2, name: "Chocolate Brownie", price: 4.50, description: "Warm chocolate brownie" },
    { id: 3, name: "Tiramisu", price: 7.00, description: "Classic Italian dessert" },
    { id: 4, name: "Apple Pie", price: 5.50, description: "Warm apple pie slice" },
    { id: 5, name: "Ice Cream Sundae", price: 6.00, description: "Vanilla ice cream with toppings" },
    { id: 6, name: "Chocolate Lava Cake", price: 6.75, description: "Warm cake with molten center" },
    { id: 7, name: "Fruit Tart", price: 5.75, description: "Pastry with fresh fruits" }
];

// Breakfast Items - 13 items
export const breakfastItems = [
    { id: 1, name: "Avocado Toast", price: 9.00, description: "Smashed avocado on artisan bread" },
    { id: 2, name: "Breakfast Burrito", price: 8.50, description: "Eggs, cheese, and sausage in tortilla" },
    { id: 3, name: "Pancakes", price: 8.00, description: "Stack of three fluffy pancakes" },
    { id: 4, name: "Yogurt Parfait", price: 6.50, description: "Greek yogurt with granola and berries" },
    { id: 5, name: "Breakfast Sandwich", price: 7.50, description: "Egg, cheese, and ham on English muffin" },
    { id: 6, name: "Omelette", price: 9.50, description: "Three-egg omelette with choice of fillings" },
    { id: 7, name: "French Toast", price: 8.75, description: "Brioche toast with maple syrup" },
    { id: 8, name: "Breakfast Bowl", price: 10.00, description: "Eggs, potatoes, bacon, and cheese" },
    { id: 9, name: "Bagel with Cream Cheese", price: 5.50, description: "Fresh bagel with cream cheese" },
    { id: 10, name: "Granola Bowl", price: 7.00, description: "Homemade granola with milk/yogurt" },
    { id: 11, name: "Breakfast Quesadilla", price: 8.25, description: "Cheese and eggs in tortilla" },
    { id: 12, name: "Steel Cut Oatmeal", price: 6.00, description: "Hearty oatmeal with toppings" },
    { id: 13, name: "Breakfast Tacos", price: 9.25, description: "Two tacos with eggs and chorizo" }
];

export const menus = [
    { id: 1, name: "Hot Coffee", icon: "☕",bgColor: "#b73e3e", items: hotCoffeeItems },
    { id: 2, name: "Cold Coffee", icon: "🧊",bgColor: "#5b45b0", items: coldCoffeeItems },
    { id: 3, name: "Tea", icon: "🍵",bgColor: "#7f167f", items: teaItems },
    { id: 4, name: "Smoothies", icon: "🥤",bgColor: "#735f32", items: smoothieItems },
    { id: 5, name: "Pastries", icon: "🥐",bgColor: "#1d2569", items: pastryItems },
    { id: 6, name: "Sandwiches", icon: "🥪",bgColor: "#285430", items: sandwichItems },
    { id: 7, name: "Desserts", icon: "🍰",bgColor: "#b73f32", items: dessertItems },
    { id: 8, name: "Breakfast", icon: "🍳",bgColor: "#ab3e3e", items: breakfastItems }
];