// Функция для отображения товаров в гриде
function displayProducts(products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        // Создаем карточку товара
        const card = document.createElement('div');
        card.classList.add('product-card');

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productSize = document.createElement('p');
        productSize.textContent = `Размер: ${product.size}`;

        // Добавляем другие параметры товара, если необходимо

        card.appendChild(productName);
        card.appendChild(productSize);

        productGrid.appendChild(card);
    });
}

// Функция для фильтрации товаров по размеру покупателя
function filterProducts() {
    const customerProfile = getProfile();
    if (customerProfile) {
        const customerFootSize = customerProfile.footSize;

        // Замените это на ваш массив товаров с различными параметрами
        const allProducts = [
            { name: 'Товар 1', size: 38 },
            { name: 'Товар 2', size: 40 },
            { name: 'Товар 3', size: 39 },
            // Добавьте другие товары с параметрами
        ];

        // Фильтруем товары по размеру покупателя
        const filteredProducts = allProducts.filter(product => product.size === customerFootSize);

        // Отображаем отфильтрованные товары
        displayProducts(filteredProducts);
    }
}

// При загрузке страницы, попробуем получить профиль из localStorage и отобразить соответствующие товары
window.onload = function () {
    const customerProfile = getProfile();
    if (customerProfile) {
        filterProducts();
    }
};
