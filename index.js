const products = ["laptop", "phone", "headphones", "monitor"];

function showFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName);
}

function changeProductName(position, newName) {
  products[position] = newName;
}

function removeLastProduct() {
  products.pop();
}
