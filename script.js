// Untuk halaman index.html
function openProductDetail(productId) {
    // Simulasi data produk (ini bisa berasal dari database atau API)
    const products = {
        '1': {
            name: "Sunshine T-shirt - INO 019",
            image: "dist/img/poster 1.png",
            price: "Rp135.000",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
            availability: "In Stock"
        },
        // Tambahkan lebih banyak produk sesuai ID
    };

    // Ambil produk berdasarkan ID
    const product = products[productId];

    // Simpan data produk ke LocalStorage untuk diambil di detail.html
    localStorage.setItem('product', JSON.stringify(product));

    // Arahkan pengguna ke halaman detail
    window.location.href = 'detail.html';
}

// Untuk halaman detail.html
document.addEventListener("DOMContentLoaded", () => {
    // Ambil data produk dari LocalStorage
    const product = JSON.parse(localStorage.getItem('product'));

    if (product) {
        // Perbarui elemen-elemen dengan data produk
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-availability").textContent = product.availability;
    } else {
        // Jika tidak ada data produk (misalnya user langsung mengakses detail.html)
        alert("Product data not found!");
    }
});
