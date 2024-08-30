// import data from './products.json' assert { type: 'json' };

function load_products() {
    data = "hello"
    console.log(data)
    fetch("products.json")
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
        });
}

load_products()