// products class
class itemDetails {
    constructor(itemName){
        this.itemName = itemName
    }

    getItemName(){
        return this.itemName
    }
}


// Grocery class
class Grocery {
    constructor(){
        this.productItems = []
    }

    addProducts(item){
        this.productItems.push({"product": item})
    }

    getProduct(){
        return this.productItems
    }

    editItem(index, itemName){
        if(index >= 0 && index < this.productItems.length){
            this.productItems[index].product = itemName
        }
    }

    deleteItem(index){
        if(index >= 0 && index < this.productItems.length){
            this.productItems.splice(index, 1)
        }
    }
}

// Script start here:

// creating instances here
const store = new Grocery()
const formEl = document.querySelector('form');

formEl.addEventListener('submit', (e) =>{
    e.preventDefault()

    const productName = document.getElementById('itemName').value.trim();
    // console.log(productName);

    // checking the user enter the value?
    if(!productName){
        alert('Must enter product')
        return;
    }
    
    const addedProduct = new itemDetails(productName)

    // adding products to class:
    store.addProducts(addedProduct)
    
    // console.log(store);
    appendProduct()

    // removing the previous products:
    document.getElementById('itemName').value = ''
    
})


function appendProduct(){
    const productsListItem = document.querySelector('#productsListItem');

    // make empty by appending new values
    productsListItem.innerHTML = ''

    store.getProduct().forEach((item, index) => {
        
        // console.log(item.product.getItemName());

        productsListItem.innerHTML += `
        <li>${item.product.getItemName()}</li>
        <button class="editbtn" onclick="edit(${index})">Edit</button>
        <button class="deletebtn" onclick="dele(${index})">Delete</button>
        `
    });
}

function dele(index){  
    console.log(index);
    store.deleteItem(index)
    appendProduct()   
}

function edit(index){
    const currentName = store.getProduct()[index].product.getItemName()
    console.log(currentName);
    let newItem = document.getElementById('itemName').value = currentName;

    if(newItem.trim() == ""){
        alert('Update the name!')
        store.editItem(index,  newItem);
        return
    }
}