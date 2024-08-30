// import data from './products.json' assert { type: 'json' };

function load_products() {
    data = "hello"
    console.log(data)
    // fetch("https://github.com/nathaniel-k-green/mwfrc/products.json")
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
            add_to_html(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            // load_products_BAD();
        });
}

// function load_products_BAD(){

// }

function add_to_html(data) {
    for (product of data) {
        // html = `<div class="col">
        
        html = `<div class="card h-100" style="width: 18rem;">
                    <img class="card-img-top" src="images/${product["image"]}" alt="Card image cap">
                    <div class="card-img-overlay">
                        <span class="badge rounded-pill text-bg-light">
                            NEW
                        </span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product["name"]}</h5>
                        <h6 class="card-title">$${product["price"]}</h6>
                        <p class="card-text">${product["desc"]}</p>
                        <a href="https://www.etsy.com/" class="btn btn-primary">View</a>
                    </div>
                </div>`
                {/* </div>` */}
        const product_grid = document.getElementById("product_grid");
        product_grid.innerHTML = '<div class="col">' + html + '</div>';
        // const first = document.getElementById("FIRST");
        // const x = document.createElement("div");
        // x.classList.add("col");
        // x.innerHTML = html;
        // first.appendChild(x);
        console.log(html);
    }

}

load_products();