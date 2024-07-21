let listProductHTML = document.querySelector('.listProduct');

fetch('product.json')
.then(response => response.json())
.then(data => {
    products = data;
    addDataToHTML();
});

function addDataToHTML() {
    listProductHTML.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button onclick="addCart(${product.id})">Add To Cart</button>`;
        listProductHTML.appendChild(newProduct);
    });
}
