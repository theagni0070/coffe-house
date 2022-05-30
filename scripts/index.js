// Add the coffee to local storage with key "coffee"
var i = 0
cofee_Data()
async function cofee_Data(){
    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`

    try{
        let re = await fetch(url)
        let data = await re.json()

        Display_data(data.menu.data)
    }catch(error){
        console.log(error)
    }
}

function Display_data(data){
    data.forEach(function(elem){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = elem.image

        let title = document.createElement("h4")
        title.innerText = elem.title

        let price = document.createElement("p")
        price.innerText = elem.price

        let btn = document.createElement("button")
        btn.innerText = "Add to Bucket"
        btn.addEventListener("click", function(){
            cofee_Bucket(elem)
        })

        div.append(img,title,price,btn)
        document.getElementById("menu").append(div)
    })
}

function cofee_Bucket(elem){
    var cofee = JSON.parse(localStorage.getItem("coffee")) || []
    cofee.push(elem)

    localStorage.setItem("coffee", JSON.stringify(cofee))

    let count = document.getElementById("coffee_count")
    count.innerText = `${cofee.length}`

}
