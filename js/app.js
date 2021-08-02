
//business logic
function Pizza(type, size, crust, topping) {
    this.type = type,
    this.size = size,
    this.crust = crust,
    this.topping = topping
}

//user interface logic
$(document).ready(function(){

    $("#form").submit(function(event){
        event.preventDefault()        

        //get user input
        let pizzaType = $("select#type").val()
        let pizzaSize = $("select#size").val()
        let pizzaCrust = $("select#crust").val()
        let pizzaTopping = $("select#topping").val()
        // let pizzaPieces = $("input#numbers").val()         

        let orderedPizza = new Pizza(pizzaType, pizzaSize, pizzaCrust, pizzaTopping)       
       
        let keySize = orderedPizza.size


        //pizza price 
        let pizzaPrices = {
            large: 2000,
            medium : 1500,
            small : 1000
        } 

        let big = orderedPizza.size
        let plainPizzaPrice = pizzaPrices[big]

        //crust price
        let crustPrize = plainPizzaPrice / 10
        
        //toppings price

        let toppingPrice = plainPizzaPrice * .6

        console.log(toppingPrice)

        console.log(plainPizzaPrice + crustPrize + toppingPrice)    
       
       
      
    })

})