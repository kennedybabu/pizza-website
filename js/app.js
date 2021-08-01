let form = document.getElementById("form")

//business logic
function Pizza(type, size, crust, topping, pieces) {
    this.type = type,
    this.size = size,
    this.crust = crust,
    this.topping = topping
    this.pieces = pieces
}

Pizza.prototype.getTotal = function(pizzaType, pizzaSize){
    if(pizzaType == "pepporoni"){
        return pizzaCost = pepporoniPizza[pizzaSize]
    }
}

//user interface logic
$(document).ready(function(){

    $("#form").submit(function(event){
        event.preventDefault()

        let pepporoniPizza = {
            "large" : 1500,
            "medium" : 1200,
            "small" : 1000
        }

        let pizzaCost = 0    


        //get user input
        let pizzaType = $("select#type").val()
        let pizzaSize = $("select#size").val()
        let pizzaCrust = $("select#crust").val()
        let pizzaTopping = $("select#topping").val()
        let pizzaPieces = $("input#numbers").val()   
        

        let orderedPizza = new Pizza(pizzaType, pizzaSize, pizzaCrust, pizzaTopping)

               
        console.log(orderedPizza.getTotal())
    })

})