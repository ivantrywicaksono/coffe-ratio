function coffeeRatio() {
    let r = document.getElementById("coffeeRatio")
    let ratio = r.options[r.selectedIndex].value
    let m = document.getElementById("material")
    let material = m.options[m.selectedIndex].value
    let amount = document.getElementById("amount").value
    let resultCoffee = amount * ratio
    let resultWater = amount / ratio
    if (material == "coffee") {
        document.getElementById("result").innerHTML = "Put " + resultCoffee + " ml of water";
    } else {
        document.getElementById("result").innerHTML = "Put " + resultWater + " gr of coffee";
    }
}