
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
        let orderedPieces = $("input#numbers").val()
        let toPickUp = $("input#pick-up").val()

        let orderedPizza = new Pizza(pizzaType, pizzaSize, pizzaCrust, pizzaTopping)   
       

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
        let toppingPrice = plainPizzaPrice * .3

        //total cost of pizza
        let pizzaCost = plainPizzaPrice + crustPrize + toppingPrice        

        let deliveryFee = 350                 

        function askDelivery(){
            if($("#pick-up").is("checked", true)){
                document.getElementById("pizza-output").innerHTML = `hello, you are paying Ksh.${pizzaCost}, your order will be ready in half an hour. Thank You!`
            } else {
                pizzaCost = plainPizzaPrice + crustPrize + toppingPrice + deliveryFee
                let dropLocation = prompt("Enter drop location...")
                document.getElementById("pizza-output").innerHTML = `hello, your total amount is Ksh.${pizzaCost}, your delivery will be dropped off at ${dropLocation}. You'll get a call from our delivery guy.Thank You!`
          
            }
        }

        askDelivery()      
      
    })

})