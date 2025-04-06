// creating instances here
const store = new Grocery();
const formEl = document.querySelector("form");
let submitbutton = document.getElementById("submitbtn");
let editId;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const productName = document.getElementById("itemName").value.trim();
  // console.log(productName);
  // checking the user enter the value?
  if (!productName) {
    alert("Must enter product!");
    return;
  }
  // Edit product name
  if (submitbutton.textContent == "Edit") {
    store.editItem(editId, productName);
    appendProduct();
    submitbutton.textContent = "Add Item";
    document.getElementById("itemName").value = "";
    return;
  }
  // adding productsname to class:
  store.addProducts(productName);
  // console.log(store);
  appendProduct();
  // removing the previous products:
  document.getElementById("itemName").value = "";
});
function appendProduct() {
  const productsListItem = document.querySelector("#productsListItem");
  // make empty by appending new values
  productsListItem.innerHTML = "";
  store.productItems.forEach((item, index) => {
    // console.log(item.productName);
    productsListItem.innerHTML += `
        <li>${item.productName}</li>
        <div class="btn">
        <button class="editbtn" onclick="edit(${index})">Edit</button>
        <button class="deletebtn" onclick="dele(${index})">Delete</button>
        </div>`;
  });
}

function dele(index) {
  // console.log(index);
  store.deleteItem(index);
  appendProduct();
}

function edit(index) {
  submitbutton.textContent = "Edit";
  document.getElementById("itemName").value =
    store.productItems[index].productName;
  editId = index;
  // console.log(store.productItems);
}
