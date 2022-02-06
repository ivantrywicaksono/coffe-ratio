var ratio = document.getElementById("coffeeRatio").value
var material = document.getElementById("material").value
var amount = document.getElementById("amount")
var resultCoffee = amount * ratio
var resultWater = amount / ratio
function coffeeRatio(material) {
    if (material == "coffee") {
        document.getElementById("result").innerHTML = resultCoffee;
    } else {
        document.getElementById("result").innerHTML = resultWater;
    }
}