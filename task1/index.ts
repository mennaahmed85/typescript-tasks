import { product } from "./interfaces";

/*
**Concepts**: Objects, Object Methods, Array of Objects, Array Methods, Functions

### **Problem Description**:

Create an **inventory management system** where you can manage the stock of products. Each product has the following properties: `id`, `name`, `price`, `quantity`, and `category`. You need to implement the following features using functions:

1. **Add a new product** to the inventory.
2. **Update the quantity** of an existing product by `id`.
3. **Remove a product** from the inventory by `id`.
4. **Display all products** in the inventory.
5. **Filter products** by category.
*/

let inventoryManagementSystem: product[] = [
  {
    id: 1,
    name: "Microwave",
    price: 12300,
    quantity: 3,
    category: "Electrical Products",
  },
  {
    id: 2,
    name: "Refrigerator",
    price: 100000,
    quantity: 1,
    category: "Electrical Products",
  },
  {
    id: 3,
    name: "Toaster",
    price: 4000,
    quantity: 1,
    category: "Electrical Products",
  },
  {
    id: 4,
    name: "Paracetamol",
    price: 100,
    quantity: 2,
    category: "Medical Products",
  },
  {
    id: 5,
    name: "Aspirin",
    price: 2000,
    quantity: 1,
    category: "Medical Products",
  },
  {
    id: 6,
    name: "Ibuprofen",
    price: 400,
    quantity: 5,
    category: "Medical Products",
  },
];

//Adding a new product to the inventory.
function addItem(product: product) {
  const checkItem = inventoryManagementSystem.find(
    (el) => el.id === product.id
  );
  if (checkItem) {
    return `this product already in the cart.`;
  }
  inventoryManagementSystem.push(product);
  return `product added successfully.`;
}

//console.log(inventoryManagementSystem);

//Update the quantity of an existing product by id
const productToUpdate = inventoryManagementSystem.find((el) => el.id === 1);
if (productToUpdate) {
  productToUpdate.quantity = 2;
} else {
  console.log("Product not found");
}
//console.log(inventoryManagementSystem);

//Remove a product from the inventory by id.
const FilteredArr = inventoryManagementSystem.filter((el) => el.id !== 1);
inventoryManagementSystem = FilteredArr;
//console.log(inventoryManagementSystem);

//Display all products in the inventory.
function DisplayProd(products: product[]): void {
  products.forEach((product) => {
    console.log(product);
  });
}

//DisplayProd(inventoryManagementSystem);

//Filter products by category.
const medicalProduct: product[] = inventoryManagementSystem.filter(
  (el) => el.category === "Medical Products"
);
console.log(medicalProduct);
