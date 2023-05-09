let products = [
  ["Apple", 2.4],
  ["Banana", 1.8],
  ["Cherry", 3],
  ["Peach", 1.2],
  ["Watermelon", 0.7],
  ["Melon", 1],
  ["Plum", 3, 2],
];

let filter = document.querySelector("button");
let min = document.querySelector(".min");
let max = document.querySelector(".max");

let filteredArray = [];

filter.addEventListener("click", function () {
  products.filter((product) => {
    if (product[1] > min.value && product[1] < max.value) {
      console.log(product);
      filteredArray.push(product);
    }
  });
  let boxforfiltereddivs = document.createElement("div")
    document.body.appendChild(boxforfiltereddivs)
    boxforfiltereddivs.classList.add("box")
  for(i=0; i < filteredArray.length; i++){
    let filtereddivs = document.createElement("div")
    boxforfiltereddivs.appendChild(filtereddivs)
    filtereddivs.classList.add("filtereddivs")
    let namee = document.createElement("p")
    filtereddivs.appendChild(namee)
    let price = document.createElement("p")
    filtereddivs.appendChild(price)
    namee = filteredArray[0]
    price = filteredArray[1]
    
    filtereddivs.innerHTML = "Product Name: " + namee + " Price: " + price
    // marcxena xeli
  }
});

console.log(filteredArray);