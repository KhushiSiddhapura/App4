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
    price: "80.00",
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
];

const mainDiv = document.getElementById("food-items");
let arr = [];

if (mainDiv) {
  info.forEach((food) => {
    let innerDiv = document.createElement("div");
    innerDiv.className = "card";
    let lDiv = document.createElement("div");
    lDiv.className = "details";
    let rDiv = document.createElement("div");
    rDiv.className = "btn-div";
    let p1 = document.createElement("p");
    p1.className = "text";
    p1.innerText = food.name;
    let p2 = document.createElement("p");
    p2.innerText = "Price: ₹" + food.price;
    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    innerDiv.appendChild(lDiv);
    innerDiv.appendChild(rDiv);
    lDiv.appendChild(p1);
    lDiv.appendChild(p2);
    rDiv.appendChild(btn);
    mainDiv.appendChild(innerDiv);
    btn.addEventListener("click", () => {
      btn.innerText = "Added ✔️";
      btn.disabled = true;
      arr.push({
        selName: food.name,
        selPrice: food.price,
      });
    });
  });

  let order = document.getElementById("order");

  if (order) {
    order.addEventListener("click", () => {
      if (arr.length === 0) {
        alert("Please select items to add!");
      } else {
        localStorage.setItem("cart", JSON.stringify(arr));
        window.location.href = "order.html";
      }
    });
  }
}

let bill = document.getElementById("billing");

if (bill) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total_pr = 0;
  cart.forEach((k) => {
    let row = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = k.selName;
    name.className = "left"
    let price = document.createElement("td");
    price.innerText = "₹" + k.selPrice;
    let qty = document.createElement("td");
    qty.innerText = 1;
    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(qty);
    bill.appendChild(row);
    total_pr += parseFloat(k.selPrice);
  });

  document.getElementById("total_pr").innerText = "₹" + " " + total_pr;
}
