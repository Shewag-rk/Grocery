// Grocery class
class Grocery {
    constructor(){
        this.productItems = []
    }

    addProducts(item){
        this.productItems.push({"productName": item})
    }

    editItem(index, changedItem){
        if(index >= 0 && index < this.productItems.length){
            this.productItems[index].productName = changedItem
        }
    }

    deleteItem(index){
        if(index >= 0 && index < this.productItems.length){
            this.productItems.splice(index, 1)
        }
    }
}