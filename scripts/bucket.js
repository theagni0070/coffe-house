// On clicking remove button the item should be removed from DOM as well as localstorage.
let data = JSON.parse(localStorage.getItem("coffee"))

Display_data(data)

function Display_data(data){
    document.getElementById("bucket").innerHTML = null
    let total = 0
    data.forEach(function(elem){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = elem.image

        let title = document.createElement("h4")
        title.innerText = elem.title

        let price = document.createElement("p")
        price.innerText = elem.price

        let remove = document.createElement("button")
        remove.innerText = "REMOVE"
        remove.addEventListener("click", function(){
            REMOVE(elem)
        })

        total += +elem.price
        show_Total(total)


        div.append(img,title,price,remove)
        document.getElementById("bucket").append(div)
    })
}

function show_Total(total){
    let tota = document.getElementById("total_amount")
    tota.innerText = total
}

function REMOVE(elem){
    data = data.filter(function(element){
        return elem!==element
    })
    localStorage.setItem("coffee", JSON.stringify(data))

    Display_data(data)
    console.log(data)
}

function location_change(){
    window.location.href = "checkout.html"
}
