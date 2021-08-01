let form = document.getElementById("form")

function Pizza(type, size, crust, topping, pieces) {
    this.type = type,
    this.size = size,
    this.crust = crust,
    this.topping = topping,
    this.pieces = pieces
}


$(document).ready(function(){

    $("#form").submit(function(event){
        event.preventDefault()

        let pizzaType = $("select#type").val()
        let pizzaSize = $("select#size").val()
        let pizzaCrust = $("select#crust").val()
        let pizzaTopping = $("select#topping").val()
        let pizzaPieces = $("input#numbers").val()

        
        

        // alert("ready to go")
        console.log(pizzaType, pizzaSize,pizzaCrust,pizzaTopping,pizzaPieces)
    })

})