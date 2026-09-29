// Data Mockup
const products = [
    {
        id: 'smartphone-pro',
        categoryId: 'celular',
        name: 'Smartphone Pro Max 256GB',
        image: 'images/smartphone_product.png',
        rating: '★★★★☆',
        description: 'El teléfono más avanzado con un sistema de cámaras revolucionario y batería para todo el día.',
        features: {
            'Almacenamiento': '256 GB',
            'Memoria RAM': '8 GB',
            'Tamaño de pantalla': '6.7 pulgadas',
            'Cámara principal': '48 MP',
            'Batería': '4323 mAh',
            'Sistema operativo': 'iOS 17'
        },
        stores: [
            { name: 'Mercado Libre', price: 850000, shipping: 0, tag: 'Envío gratis' },
            { name: 'Frávega', price: 875000, shipping: 5000, tag: '' },
            { name: 'Musimundo', price: 890000, shipping: 0, tag: 'Envío gratis' },
            { name: 'Garbarino', price: 895000, shipping: 3000, tag: '' }
        ]
    },
    {
        id: 'smartphone-lite',
        categoryId: 'celular',
        name: 'Smartphone Lite 5G',
        image: 'images/smartphone_product.png',
        rating: '★★★☆☆',
        description: 'Velocidad 5G y excelente rendimiento a un precio accesible.',
        features: {
            'Almacenamiento': '128 GB',
            'Memoria RAM': '6 GB',
            'Tamaño de pantalla': '6.4 pulgadas',
            'Cámara principal': '64 MP',
            'Batería': '5000 mAh',
            'Sistema operativo': 'Android 14'
        },
        stores: [
            { name: 'Garbarino', price: 350000, shipping: 4000, tag: '' },
            { name: 'Mercado Libre', price: 360000, shipping: 0, tag: 'Envío gratis' },
            { name: 'Frávega', price: 380000, shipping: 0, tag: 'Envío gratis' }
        ]
    },
    {
        id: 'smartphone-ultra',
        categoryId: 'celular',
        name: 'Smartphone Ultra 1TB',
        image: 'images/smartphone_product.png',
        rating: '★★★★★',
        description: 'Rendimiento extremo para los más exigentes. Pantalla de 120Hz.',
        features: {
            'Almacenamiento': '1 TB',
            'Memoria RAM': '12 GB',
            'Tamaño de pantalla': '6.8 pulgadas',
            'Cámara principal': '200 MP',
            'Batería': '5000 mAh',
            'Sistema operativo': 'Android 14'
        },
        stores: [
            { name: 'Musimundo', price: 1200000, shipping: 0, tag: 'Envío gratis' },
            { name: 'Mercado Libre', price: 1250000, shipping: 0, tag: 'Envío gratis' }
        ]
    },
    {
        id: 'tv-4k',
        categoryId: 'tv',
        name: 'Smart TV 4K 55" Ultra HD',
        image: 'images/smart_tv_product.png',
        rating: '★★★★☆',
        description: 'Colores vibrantes y resolución 4K para disfrutar del mejor cine en casa.',
        features: {
            'Tamaño de pantalla': '55 pulgadas',
            'Resolución': '4K Ultra HD',
            'Tecnología': 'OLED',
            'Tasa de refresco': '120Hz',
            'Sistema Operativo': 'WebOS'
        },
        stores: [
            { name: 'Frávega', price: 540000, shipping: 0, tag: 'Envío gratis' },
            { name: 'Mercado Libre', price: 555000, shipping: 12000, tag: '' },
            { name: 'Garbarino', price: 560000, shipping: 0, tag: 'Envío gratis' }
        ]
    },
    {
        id: 'tv-hd',
        categoryId: 'tv',
        name: 'Smart TV 32" HD',
        image: 'images/smart_tv_product.png',
        rating: '★★★☆☆',
        description: 'Ideal para habitaciones y espacios pequeños.',
        features: {
            'Tamaño de pantalla': '32 pulgadas',
            'Resolución': 'HD',
            'Tecnología': 'LED',
            'Tasa de refresco': '60Hz',
            'Sistema Operativo': 'Android TV'
        },
        stores: [
            { name: 'Garbarino', price: 180000, shipping: 3000, tag: '' },
            { name: 'Musimundo', price: 185000, shipping: 0, tag: 'Envío gratis' }
        ]
    }
];
const bestSellers = [
    { id: 'headphones-pro', name: 'Auriculares Inalámbricos', price: '$ 45.000', img: 'images/headphones_product.png' },
    { id: 'sneakers-run', name: 'Zapatillas Running', price: '$ 89.000', img: 'images/sneakers_product.png' },
    { id: 'laptop-15', name: 'Notebook 15.6"', price: '$ 720.000', img: 'images/laptop_product.png' },
    { id: 'smartphone-pro', name: 'Smartphone Pro Max', price: '$ 850.000', img: 'images/smartphone_product.png' },
    { id: 'tv-4k', name: 'Smart TV 55"', price: '$ 540.000', img: 'images/smart_tv_product.png' }
];
// App State
const state = {
    cart: [], 
    warranty: { type: 'fabricante', name: 'Garantía del fabricante', price: 0 },
    delivery: { type: 'casa', address: '' },
    payment: { type: 'debito', last4: null },
    orderNumber: null,
    currentCategory: null,
    currentProductDetail: null
};
// Utils
const formatPrice = (price) => '$ ' + price.toLocaleString('es-AR');
const showNotification = (message) => {
    const notif = document.getElementById('notification');
    notif.textContent = message;
    notif.classList.remove('hidden');
    setTimeout(() => notif.classList.add('hidden'), 3000);
};
const updateCartBadge = () => {
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(b => {
        b.textContent = state.cart.length;
        b.style.display = state.cart.length > 0 ? 'flex' : 'none';
    });
};
const getLowestPrice = (product) => {
    return Math.min(...product.stores.map(s => s.price));
};
const hasFreeShipping = (product) => {
    return product.stores.some(s => s.shipping === 0);
};
// Main App Object
const app = {
    init: () => {
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('app-header').classList.remove('hidden');
            document.getElementById('bottom-nav').classList.remove('hidden');
            app.goTo('principal');
        });
        // Setup Best Sellers
        const bestSellersList = document.getElementById('best-sellers-list');
        bestSellersList.innerHTML = bestSellers.map(item => `
            <div class="product-card" onclick="app.showProductDetail('${item.id}')">
                <img src="${item.img}" alt="${item.name}">
                <h4>${item.name}</h4>
                <span class="price">${item.price}</span>
            </div>
        `).join('');
        // Listen for format inputs
        document.getElementById('cc-number').addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        document.getElementById('cc-exp').addEventListener('input', function(e) {
            let v = this.value.replace(/[^0-9]/g, '');
            if (v.length > 2) {
                v = v.substring(0,2) + '/' + v.substring(2);
            }
            this.value = v;
        });
        updateCartBadge();
    },
    goTo: (screenId) => {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        window.scrollTo(0, 0);
        if(screenId === 'carrito') app.renderCart();
    },
    doSearch: () => {
        const query = document.getElementById('main-search').value.toLowerCase();
        let cat = 'celular';
        if (query.includes('tv')) cat = 'tv';
        app.searchCategory(cat);
    },
    searchCategory: (categoryId) => {
        state.currentCategory = categoryId;
        const catName = categoryId === 'celular' ? 'Celulares' : 'Smart TVs';
        document.getElementById('active-search').value = catName;
        app.renderSearchResults();
        app.goTo('busqueda');
    },
    renderSearchResults: () => {
        const resultsContainer = document.getElementById('search-results-list');
        let filteredProducts = products.filter(p => p.categoryId === state.currentCategory);
        
        const sortBy = document.getElementById('sort-select').value;
        const onlyFreeShipping = document.getElementById('free-shipping-cb').checked;
        if (onlyFreeShipping) {
            filteredProducts = filteredProducts.filter(p => hasFreeShipping(p));
        }
        if (sortBy === 'menor-precio') {
            filteredProducts.sort((a,b) => getLowestPrice(a) - getLowestPrice(b));
        } else if (sortBy === 'mayor-precio') {
            filteredProducts.sort((a,b) => getLowestPrice(b) - getLowestPrice(a));
        }
        if (filteredProducts.length === 0) {
            resultsContainer.innerHTML = '<p>No se encontraron productos.</p>';
            return;
        }
        resultsContainer.innerHTML = filteredProducts.map(product => {
            const lowestPrice = getLowestPrice(product);
            const freeShip = hasFreeShipping(product);
            return `
            <div class="result-item" onclick="app.showProductDetail('${product.id}')" style="cursor:pointer;">
                <img src="${product.image}" alt="${product.name}" class="result-item-img">
                <div class="result-item-info">
                    <h3>${product.name}</h3>
                    <div class="rating">${product.rating}</div>
                    <span class="price-desde">Desde <strong>${formatPrice(lowestPrice)}</strong></span>
                    ${freeShip ? `<br><span class="tag" style="background:#e0f2f1; color:var(--success); font-size:0.7rem; padding:2px 6px; border-radius:4px;">Envío gratis</span>` : ''}
                </div>
            </div>
            `;
        }).join('');
    },
    showProductDetail: (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) {
            showNotification("Producto no disponible temporalmente.");
            return;
        }
        state.currentProductDetail = product;
        const container = document.getElementById('product-detail-content');
        
        const sortedStores = [...product.stores].sort((a,b) => a.price - b.price);
        
        let featuresHtml = Object.entries(product.features).map(([key, value]) => `
            <tr>
                <td>${key}</td>
                <td>${value}</td>
            </tr>
        `).join('');
        const storesHtml = sortedStores.map(store => `
            <div class="store-option">
                <div class="store-info">
                    <h4>${store.name}</h4>
                    ${store.tag ? `<span class="tag">${store.tag}</span>` : ''}
                </div>
                <div class="store-price">
                    <span class="price">${formatPrice(store.price)}</span>
                    <button class="btn-sm" onclick="app.addToCart('${product.id}', '${store.name}')">Agregar al carrito</button>
                </div>
            </div>
        `).join('');
        container.innerHTML = `
            <div class="product-detail-header" style="text-align:center; margin-bottom:20px;">
                <img src="${product.image}" alt="${product.name}" style="width:150px; height:150px; object-fit:contain; margin-bottom: 10px;">
                <h3 style="margin-top:15px; font-size: 1.2rem;">${product.name}</h3>
                <div class="rating" style="font-size:1.1rem; margin-bottom: 10px;">${product.rating}</div>
                <p style="font-size:0.9rem; color:var(--text-light); margin-top:5px; line-height: 1.4;">${product.description}</p>
            </div>
            
            <h4 style="margin-bottom: 10px;">Características</h4>
            <table class="features-table">
                ${featuresHtml}
            </table>
            
            <h4 style="margin-top:25px; margin-bottom:15px;">Opciones de compra</h4>
            <div class="store-list" style="border-top:none; padding-top:0;">
                ${storesHtml}
            </div>
        `;
        app.goTo('detalle');
    },
    addToCart: (productId, storeName) => {
        const product = products.find(p => p.id === productId);
        const store = product.stores.find(s => s.name === storeName);
        
        state.cart.push({ product, store });
        updateCartBadge();
        showNotification('Producto agregado al carrito');
        app.goTo('carrito');
    },
    goBackFromCart: () => {
        if (state.currentProductDetail) {
            app.goTo('detalle');
        } else {
            app.goTo('principal');
        }
    },
    renderCart: () => {
        const cartContent = document.getElementById('cart-content');
        if (state.cart.length === 0) {
            cartContent.innerHTML = `<div style="text-align:center; padding: 40px 0; color: var(--text-light);">Tu carrito está vacío</div>`;
            document.querySelector('#carrito .cart-actions').style.display = 'none';
            return;
        }
        document.querySelector('#carrito .cart-actions').style.display = 'flex';
        
        let itemsHtml = '';
        let subtotal = 0;
        let totalShipping = 0;
        state.cart.forEach((item, index) => {
            const { product, store } = item;
            subtotal += store.price;
            totalShipping += store.shipping;
            
            itemsHtml += `
            <div class="cart-item">
                <button class="remove-item-btn" onclick="app.removeCartItem(${index})" title="Eliminar producto">&minus;</button>
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-details">
                    <h3>${product.name}</h3>
                    <p class="store">Vendido por: <strong>${store.name}</strong></p>
                    <span class="price">${formatPrice(store.price)}</span>
                </div>
            </div>`;
        });
        
        cartContent.innerHTML = itemsHtml + `
            <div class="cart-summary">
                <div class="summary-row">
                    <span>Productos (${state.cart.length})</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div class="summary-row">
                    <span>Envío</span>
                    <span>${totalShipping === 0 ? 'Gratis' : formatPrice(totalShipping)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total Parcial</span>
                    <span>${formatPrice(subtotal + totalShipping)}</span>
                </div>
            </div>
        `;
    },
    cancelOrder: () => {
        state.cart = [];
        updateCartBadge();
        showNotification('Pedido cancelado');
        app.goTo('principal');
    },
    removeCartItem: (index) => {
        state.cart.splice(index, 1);
        updateCartBadge();
        app.renderCart();
    },
    saveGarantia: () => {
        const selected = document.querySelector('input[name="garantia"]:checked').value;
        const prices = {
            'fabricante': 0,
            'extendida12': 15000,
            'extendida24': 25000
        };
        const names = {
            'fabricante': 'Garantía del fabricante',
            'extendida12': 'Extendida 12 meses',
            'extendida24': 'Extendida 24 meses'
        };
        state.warranty = { type: selected, name: names[selected], price: prices[selected] };
        app.goTo('direccion');
    },
    toggleAddressInput: () => {
        const type = document.querySelector('input[name="tipo-entrega"]:checked').value;
        const label = document.getElementById('address-label');
        if (type === 'encuentro') {
            label.textContent = "Lugar de encuentro (dejar vacío para coordinar)";
        } else {
            label.textContent = "Dirección exacta";
        }
    },
    saveDireccion: () => {
        const type = document.querySelector('input[name="tipo-entrega"]:checked').value;
        let addressInput = document.getElementById('direccion-input').value.trim();
        
        if(type === 'casa') {
            state.delivery = { type, address: addressInput || 'Dirección no especificada' };
        } else {
            state.delivery = { type, address: addressInput || 'A coordinar' };
        }
        
        app.goTo('pago');
    },
    togglePaymentForm: () => {
        const type = document.querySelector('input[name="metodo-pago"]:checked').value;
        const form = document.getElementById('card-form');
        if (type === 'efectivo') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    },
    processPayment: () => {
        const type = document.querySelector('input[name="metodo-pago"]:checked').value;
        
        if (type !== 'efectivo') {
            const ccNum = document.getElementById('cc-number').value;
            const ccExp = document.getElementById('cc-exp').value;
            const ccName = document.getElementById('cc-name').value;
            const ccCvv = document.getElementById('cc-cvv').value;
            
            let hasError = false;
            if (ccNum.length !== 16) {
                document.getElementById('cc-error').style.display = 'block';
                hasError = true;
            } else {
                document.getElementById('cc-error').style.display = 'none';
            }
            
            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(ccExp)) {
                document.getElementById('exp-error').style.display = 'block';
                hasError = true;
            } else {
                document.getElementById('exp-error').style.display = 'none';
            }
            if (!ccName.trim() || ccCvv.length < 3) {
                showNotification("Completá todos los datos de la tarjeta.");
                hasError = true;
            }
            if (hasError) return;
            
            // Valid. Guarda solo últimos 4
            state.payment = { type, last4: ccNum.slice(-4) };
            
            // Limpiar campos de la tarjeta por seguridad
            document.getElementById('cc-number').value = '';
            document.getElementById('cc-exp').value = '';
            document.getElementById('cc-name').value = '';
            document.getElementById('cc-cvv').value = '';
            
        } else {
            state.payment = { type, last4: null };
        }
        
        app.generateReceipt();
        app.goTo('comprobante');
    },
    generateReceipt: () => {
        state.orderNumber = Math.floor(Math.random() * 90000) + 10000;
        
        const productNames = state.cart.map(item => item.product.name).join(', ');
        const storeNames = [...new Set(state.cart.map(item => item.store.name))].join(', ');
        
        document.getElementById('receipt-order').textContent = `N° Pedido: #${state.orderNumber}`;
        document.getElementById('receipt-product').textContent = productNames;
        document.getElementById('receipt-store').textContent = storeNames;
        document.getElementById('receipt-warranty').textContent = state.warranty.name;
        
        let paymentText = "Efectivo / Transferencia";
        if (state.payment.type === 'credito') paymentText = "Crédito terminada en *" + state.payment.last4;
        if (state.payment.type === 'debito') paymentText = "Débito terminada en *" + state.payment.last4;
        document.getElementById('receipt-payment').textContent = paymentText;
        let total = state.warranty.price;
        state.cart.forEach(item => {
            total += item.store.price + item.store.shipping;
        });
        
        document.getElementById('receipt-total').textContent = formatPrice(total);
        document.getElementById('tracking-product-name').textContent = state.cart.length > 1 ? `Varios productos (${state.cart.length})` : state.cart[0].product.name;
        document.getElementById('tracking-delivery-addr').textContent = `Entrega en: ${state.delivery.address}`;
        
        state.cart = [];
        updateCartBadge();
    }
};
document.addEventListener('DOMContentLoaded', app.init);

