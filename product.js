// import data from './products.json' assert { type: 'json' };

function load_products() {
    data = "hello"
    console.log(data)
    fetch("https://github.com/nathaniel-k-green/mwfrc/products.json")
    fetch("https://nathaniel-k-green.github.io/mwfrc/products.json")
    // fetch("https://nathaniel-k-green.github.io/mwfrc/products.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Use the JSON data here
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            // load_products_BAD();
        });
}

// function load_products_BAD(){

// }

// function add_to_html(data) {
//     for (product in data) {
//         html = `<div class="col">
//                     <div class="card h-100" style="width: 18rem;">
//                         <img class="card-img-top" src="images/${"image"}" alt="Card image cap">
//                         <div class="card-body">
//                             <p id="is-new" style="color:coral; font-size: .75em;">NEW</p>
//                             <h5 class="card-title">${product["name"]}</h5>
//                             <h6 class="card-title">$${product["price"]}</h6>
//                             <p class="card-text">${product["desc"]}</p>
//                             <a href="https://www.etsy.com/" class="btn btn-primary">View</a>
//                         </div>
//                     </div>
//                 </div>`
//         first = document.getElementById("FIRST")
//         first.appendChild(html)
//     }
    
// }

load_products()