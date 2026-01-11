import hpLaptop from "../assets/hp_elitebook_mobile.jpg";
import wireless_mouse from "../assets/wireless_mouse.jpeg";  
import keyboard from "../assets/keyboard.jpg";
import officechair from "../assets/office_chair.webp";
import desklamp from "../assets/Desk Lamp.jpg";
import monitor from "../assets/monitor.jpeg";
import notebook from "../assets/notebook.jpeg";
import penset from "../assets/pen set.jpeg";
import usbcable from "../assets/usb cable.jpeg";
import waterbottle from "../assets/water bottle.jpeg";
import backpack from "../assets/backpack.jpeg";
import headphones from "../assets/headphone.jpg";
import smartphone from "../assets/smartphone.jpeg";
import tablet from "../assets/tablet.jpeg";
import deskorginizer from "../assets/desk orgnaizer.jpeg";
 

export const products = [
  {
    id: 1,
    name: 'Laptop Computer',
    price: 899.99,
    category: 'Electronics',
    image: hpLaptop,
    stock: 15,
    rating: 4.5,
    sales: 234
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 29.99,
    category: 'Electronics',
    image:wireless_mouse,
    stock: 45,
    rating: 4.2,
    sales: 567
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 49.99,
    category: 'Electronics',
    image:keyboard,
    stock: 32,
    rating: 4.7,
    sales: 423
  },
  {
    id: 4,
    name: 'Office Chair',
    price: 199.99,
    category: 'Furniture',
    image: officechair,
    stock: 8,
    rating: 4.3,
    sales: 145
  },
  {
    id: 5,
    name: 'Desk Lamp',
    price: 39.99,
    category: 'Furniture',
    image: desklamp,
    stock: 23,
    rating: 4.0,
    sales: 289
  },
  {
    id: 6,
    name: 'Monitor',
    price: 299.99,
    category: 'Electronics',
    image:monitor,
    stock: 12,
    rating: 4.8,
    sales: 678
  },
  {
    id: 7,
    name: 'Notebook',
    price: 9.99,
    category: 'Stationery',
    image: notebook,
    stock: 100,
    rating: 3.9,
    sales: 891
  },
  {
    id: 8,
    name: 'Pen Set',
    price: 14.99,
    category: 'Stationery',
    image: penset,
    stock: 67,
    rating: 4.1,
    sales: 456
  },
  {
    id: 9,
    name: 'USB Cable',
    price: 12.99,
    category: 'Electronics',
    image: usbcable,
    stock: 89,
    rating: 4.4,
    sales: 723
  },
  {
    id: 10,
    name: 'Water Bottle',
    price: 19.99,
    category: 'Accessories',
    image: waterbottle,
    stock: 54,
    rating: 4.6,
    sales: 534
  },
  {
    id: 11,
    name: 'Backpack',
    price: 59.99,
    category: 'Accessories',
    image: backpack,
    stock: 28,
    rating: 4.5,
    sales: 267
  },
  {
    id: 12,
    name: 'Headphones',
    price: 79.99,
    category: 'Electronics',
    image: headphones,
    stock: 19,
    rating: 4.9,
    sales: 845
  },
  {
    id: 13,
    name: 'Smartphone',
    price: 699.99,
    category: 'Electronics',
    image: smartphone,
    stock: 7,
    rating: 4.7,
    sales: 412
  },
  {
    id: 14,
    name: 'Tablet',
    price: 399.99,
    category: 'Electronics',
    image: tablet,
    stock: 14,
    rating: 4.4,
    sales: 298
  },
  {
    id: 15,
    name: 'Desk Organizer',
    price: 24.99,
    category: 'Stationery',
    image:deskorginizer,
    stock: 42,
    rating: 4.2,
    sales: 356
  }
];

export const categories = [
  'All',
  'Electronics',
  'Furniture',
  'Stationery',
  'Accessories'
];

export const orders = [
  { id: 1001, date: '2024-12-20', customer: 'John Doe', total: 249.98, status: 'Delivered' },
  { id: 1002, date: '2024-12-21', customer: 'Jane Smith', total: 899.99, status: 'Shipped' },
  { id: 1003, date: '2024-12-22', customer: 'Bob Johnson', total: 159.97, status: 'Processing' },
  { id: 1004, date: '2024-12-23', customer: 'Alice Williams', total: 79.99, status: 'Delivered' },
  { id: 1005, date: '2024-12-24', customer: 'Charlie Brown', total: 349.98, status: 'Shipped' },
  { id: 1006, date: '2024-12-25', customer: 'Diana Prince', total: 199.99, status: 'Processing' },
  { id: 1007, date: '2024-12-26', customer: 'Ethan Hunt', total: 89.97, status: 'Pending' }
];

export const salesData = [
  { month: 'Jan', sales: 4200 },
  { month: 'Feb', sales: 3800 },
  { month: 'Mar', sales: 5100 },
  { month: 'Apr', sales: 4600 },
  { month: 'May', sales: 5900 },
  { month: 'Jun', sales: 6200 },
  { month: 'Jul', sales: 5800 },
  { month: 'Aug', sales: 6500 },
  { month: 'Sep', sales: 7100 },
  { month: 'Oct', sales: 6800 },
  { month: 'Nov', sales: 7500 },
  { month: 'Dec', sales: 8200 }
];