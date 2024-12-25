const products = [
    { name: "Laptop", price: 1200, isFeatured: true },
    { name: "Smartphone", price: 800, isFeatured: false },
    { name: "Tablet", price: 450, isFeatured: false },
    { name: "Headphones", price: 150, isFeatured: true }
];
const productList = document.getElementById("productList");
const message = document.getElementById("message");
if (products.length > 0) {
    products.forEach(product => {
        const li = document.createElement("li");
        li.className = product.isFeatured ? "featured" : "";
        li.innerHTML = `
            <span class="product-name">${product.name}</span>
            <br>
            <span class="product-price">$${product.price.toFixed(2)}</span>
        `;

        productList.appendChild(li);
    });
} else {
    message.textContent = "No products available at the moment.";
}