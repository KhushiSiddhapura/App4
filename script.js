let info = [
    {
        name: "Aloo Tikki Burger",
        price: "40.00",
    },
    {
        name: "Vegetable Schezwan Burger",
        price: "50.00",
    },
    {
        name: "Veg Burger",
        price: "40.00",
    },
    {
        name: "Cheese Veg Burger",
        price: "50.00",
    },
    {
        name: "Paneer Makhni Burger",
        price: "50.00",
    },
    {
        name: "Margherita Pizza",
        price: "140.00",
    },
    {
        name: "Onion Pizza",
        price: "140.00",
    },
    {
        name: "Corn Delight Pizza",
        price: "150.00",
    },
    {
        name: "4 Pepper Pizza",
        price: "150.00",
    },
    {
        name: "Mashroom Pizza",
        price: "150.00",
    },
    {
        name: "Paneer Makhani Pizza",
        price: "160.00",
    },
    {
        name: "Peri Peri Sandwich",
        price: "80.00",
    },
    {
        name: "BBQ Veg Sandwich",
        price: "80.00",
    },
    {
        name: "Tandoori Veg Sandwich",
        price: "80.00",
    },
    {
        name: "Paneer Makhani Sandwich",
        price: "80.00",
    },
    {
        name: "Paneer Tikka Sandwich",
        price: "80.00"
    },
    {
        name: "French Fries",
        price: "50.00",
    },
    {
        name: "Peri Peri Fries",
        price: "70.00",
    },
    {
        name: "Garlic Bread",
        price: "70.00",
    },
    {
        name: "Fried Cheese Balls (6 pcs)",
        price: "110.00",
    },
    {
        name: "Cheese Chilli",
        price: "200.00",
    },
    {
        name: "Cheese Fingers",
        price: "200.00",
    },
    {
        name: "Mohito",
        price: "80.00",
    },
    {
        name: "Cold Coffee",
        price: "90.00",
    },
] 

const mainDiv = document.getElementById("food-items")
let foodNameEl = document.getElementById("name")
const price = document.getElementById("price")
const total_price = document.getElementById("total_price")

if(mainDiv){
    info.forEach((food,i)=>{
    let innerDiv = document.createElement("div")
    innerDiv.id = "item_" + i
    innerDiv.className = "card"
    let p1 = document.createElement("p")
    p1.innerHTML = food.name
    p1.className = "text"
    let p2 = document.createElement("p")
    p2.innerHTML = "Price: ₹" + food.price
    let rDiv = document.createElement("div")
    rDiv.className = "btn-div" 
    let lDiv = document.createElement("div")
    lDiv.className = "details" 
    let btn = document.createElement("button")
    btn.className = "button"
    btn.innerHTML = "Order Now!"
    mainDiv.appendChild(innerDiv)
    innerDiv.appendChild(lDiv)
    innerDiv.appendChild(rDiv)
    rDiv.appendChild(btn)
    lDiv.appendChild(p1)
    lDiv.appendChild(p2)
    btn.addEventListener("click",()=>{
    localStorage.setItem("foodName", food.name)
    localStorage.setItem("foodPrice", food.price)
    window.location.href = "order.html"
})
})
}

if(foodNameEl && price && total_price){

    let foodName = localStorage.getItem("foodName")
    let foodPrice = localStorage.getItem("foodPrice")

    foodNameEl.innerHTML = foodName
    price.innerHTML = "₹" + foodPrice
    total_price.innerHTML = "₹" + foodPrice
}