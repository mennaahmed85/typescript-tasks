import { Item } from "./interfaces/interface";

/*
### **Shopping Cart System**

**Concepts**: Array of Objects, Functions, Object Methods, Advanced Array Methods

### **Problem Description**:

Create a **shopping cart system** where you manage a cart of items. Each item in the cart is represented by an object with the following properties: `id`, `name`, `price`, `quantity`, and `category`. You need to implement the following features:

1. **Add an item** to the cart.
2. **Update the quantity** of an item in the cart.
3. **Remove an item** from the cart.
4. **Calculate the total cost** of items in the cart.
5. **Apply a discount** on the cart total if certain conditions are met (e.g., total cost is above a certain threshold).
*/

let shoppingCartSystem: Item[] = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    quantity: 1,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Headphones",
    price: 200,
    quantity: 2,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 150,
    quantity: 1,
    category: "Sportswear",
  },
  {
    id: 4,
    name: "T-shirt",
    price: 25,
    quantity: 3,
    category: "Clothing",
  },
  {
    id: 5,
    name: "Coffee Mug",
    price: 15,
    quantity: 4,
    category: "Kitchenware",
  },
];

//Add an item to the cart.
function addItem(item: Item) {
  const checkItem = shoppingCartSystem.find((el) => el.id === item.id);
  if (checkItem) {
    return `this item already in the cart.`;
  }
  shoppingCartSystem.push(item);
  return `Item added successfully.`;
}

//Update the quantity of an item in the cart.
function updateQuantity(id: number, quantity: number): void {
  const item = shoppingCartSystem.find((el) => el.id === id);
  if (item) {
    item.quantity = quantity;
  } else {
    console.log("there's no item with this id");
  }
}

//Remove an item from the cart.
function removeItem(id: number): Item[] {
  const tempArr: Item[] = shoppingCartSystem.filter((el) => el.id !== id);
  shoppingCartSystem = tempArr;
  return shoppingCartSystem;
}

//Calculate the total cost of items in the cart.
function calculateTotalCost() {
  return shoppingCartSystem.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
}

//Apply a discount on the cart total if certain conditions are met (e.g., total cost is above a certain threshold).
function Discount(threshold: number, discountRate: number): number {
  const totalCost = calculateTotalCost();
  if (totalCost >= threshold) {
    return totalCost * (1 - discountRate);
  }
  console.log("No discount applied.");
  return totalCost;
}
