const store = new Grocery()
const formEl = document.querySelector('form') 
const addItem = document.querySelector('#addItem');

console.log(store);





addItem.addEventListener('click', function(e){
    e.preventDefault()

    const groceryItem = document.querySelector('#grocery').value.trim();
    const groceryPrice = document.querySelector('#price').value.trim();
    console.log(groceryItem);
    console.log(groceryPrice);

    store.addItem({"item":this.groceryItem, "price": this.groceryPrice})
    console.log(store);
    
})



