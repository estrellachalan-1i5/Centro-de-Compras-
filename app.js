// Mockup de Datos existentes
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

// Estado de la Aplicación
const state = {
    cart: [],
    checkoutItems: [],
    checkoutMode: 'cart',
    pendingAction: null,
    user: null,
    coupon: null,
    currentTheme: 'system',
    warranty: { type: 'fabricante', name: 'Garantía del fabricante', price: 0 },
    delivery: { type: 'casa', address: '' },
    payment: { type: 'debito', last4: null },
    orderNumber: null,
    currentCategory: null,
    currentProductDetail: null,
    previousScreen: 'principal'
};

// Utilidades
const formatPrice = (price) => '$ ' + Math.round(price).toLocaleString('es-AR');

const showNotification = (message) => {
    const notif = document.getElementById('notification');
    notif.textContent = message;
    notif.classList.remove('hidden');
    setTimeout(() => notif.classList.add('hidden'), 3000);
};

const updateCartBadge = () => {
    const totalCount = state.cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(b => {
        b.textContent = totalCount;
        b.style.display = totalCount > 0 ? 'flex' : 'none';
    });
};

const getLowestPrice = (product) => {
    return Math.min(...product.stores.map(s => s.price));
};

const hasFreeShipping = (product) => {
    return product.stores.some(s => s.shipping === 0);
};

// Objeto Principal de la App
const app = {
    init: () => {
        // Inicializar Tema (Punto 11)
        app.initTheme();

        // Formulario de Login
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email').value.trim();
            const displayName = emailInput.split('@')[0];
            
            state.user = { email: emailInput, name: displayName };
            app.updateAuthUI();
            
            if (state.pendingAction) {
                const action = state.pendingAction;
                state.pendingAction = null;
                
                if (action.type === 'cartCheckout') {
                    showNotification('¡Sesión iniciada! Continuando compra...');
                    state.checkoutMode = 'cart';
                    state.checkoutItems = [...state.cart];
                    app.goTo('garantia');
                    return;
                }
                
                if (action.type === 'buyNow') {
                    showNotification('¡Sesión iniciada! Continuando compra...');
                    state.checkoutMode = 'direct';
                    state.checkoutItems = [{ product: action.product, store: action.store, quantity: 1 }];
                    app.goTo('garantia');
                    return;
                }
                
                if (action.type === 'menu') {
                    app.goTo('menu-usuario');
                    return;
                }
            }
            
            showNotification(`¡Hola de nuevo, ${displayName}!`);
            app.goTo('principal');
        });

        // Configuración de Más Vendidos
        const bestSellersList = document.getElementById('best-sellers-list');
        bestSellersList.innerHTML = bestSellers.map(item => `
            <div class="product-card" onclick="app.showProductDetail('${item.id}')">
                <img src="${item.img}" alt="${item.name}" onerror="if(!this.dataset.t){this.dataset.t=1;this.src='${item.id}.png';}">
                <h4>${item.name}</h4>
                <span class="price">${item.price}</span>
            </div>
        `).join('');

        // Formato para inputs de tarjeta
        const ccNum = document.getElementById('cc-number');
        if (ccNum) {
            ccNum.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        }
        const ccExp = document.getElementById('cc-exp');
        if (ccExp) {
            ccExp.addEventListener('input', function() {
                let v = this.value.replace(/[^0-9]/g, '');
                if (v.length > 2) {
                    v = v.substring(0, 2) + '/' + v.substring(2);
                }
                this.value = v;
            });
        }

        app.updateAuthUI();
        updateCartBadge();

        // Asegurar que la pantalla de inicio sea SIEMPRE la Principal (Punto 1)
        app.goTo('principal');
    },

    // ==========================================
    // GESTIÓN DE TEMAS (PUNTO 11)
    // ==========================================
    initTheme: () => {
        const savedTheme = localStorage.getItem('centro_theme') || 'system';
        app.applyTheme(savedTheme, false);

        // Escuchar cambios del sistema en tiempo real si está en modo "system"
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (state.currentTheme === 'system') {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    },

    setTheme: (themeChoice) => {
        localStorage.setItem('centro_theme', themeChoice);
        app.applyTheme(themeChoice, true);
    },

    applyTheme: (themeChoice, notify = false) => {
        state.currentTheme = themeChoice;

        // Actualizar selector de radio
        const radio = document.getElementById(`theme-radio-${themeChoice}`);
        if (radio) radio.checked = true;

        let activeMode = themeChoice;
        if (themeChoice === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            activeMode = prefersDark ? 'dark' : 'light';
        }

        document.documentElement.setAttribute('data-theme', activeMode);

        if (notify) {
            const names = {
                'light': 'Tema claro activado',
                'dark': 'Tema oscuro activado',
                'system': 'Tema del sistema activado'
            };
            showNotification(names[themeChoice] || 'Tema actualizado');
        }
    },

    updateAuthUI: () => {
        const userLabel = document.getElementById('user-display-name');
        const menuTitle = document.getElementById('menu-user-title');
        const menuSubtitle = document.getElementById('menu-user-subtitle');
        const authArea = document.getElementById('user-auth-action-area');

        if (state.user) {
            if (userLabel) userLabel.textContent = state.user.name;
            if (menuTitle) menuTitle.textContent = state.user.name;
            if (menuSubtitle) menuSubtitle.textContent = state.user.email;
            if (authArea) {
                authArea.innerHTML = `
                    <button class="btn-secondary full-width" onclick="app.logout()">Cerrar sesión</button>
                `;
            }
        } else {
            if (userLabel) userLabel.textContent = 'Ingresar';
            if (menuTitle) menuTitle.textContent = 'Invitado';
            if (menuSubtitle) menuSubtitle.textContent = 'No has iniciado sesión';
            if (authArea) {
                authArea.innerHTML = `
                    <button class="btn-primary full-width" onclick="app.goToLogin('Para gestionar tu cuenta iniciá sesión')">Iniciar sesión</button>
                `;
            }
        }
    },

    goTo: (screenId) => {
        const currentActive = document.querySelector('.screen.active');
        if (currentActive && currentActive.id !== 'login') {
            state.previousScreen = currentActive.id;
        }

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) targetScreen.classList.add('active');
        
        window.scrollTo(0, 0);

        if (screenId === 'carrito') app.renderCart();
        if (screenId === 'menu-usuario') app.updateAuthUI();
        if (screenId === 'configuracion') {
            const r = document.getElementById(`theme-radio-${state.currentTheme}`);
            if (r) r.checked = true;
        }

        // Actualizar barra de navegación inferior activa
        document.querySelectorAll('#bottom-nav .nav-item').forEach(btn => btn.classList.remove('active'));
        if (screenId === 'principal') {
            const h = document.getElementById('nav-btn-home');
            if (h) h.classList.add('active');
        } else if (screenId === 'menu-usuario' || screenId === 'configuracion') {
            const u = document.getElementById('nav-btn-user');
            if (u) u.classList.add('active');
        }
    },

    goToLogin: (reasonMessage = null) => {
        const alertBanner = document.getElementById('login-alert-banner');
        if (reasonMessage) {
            alertBanner.textContent = reasonMessage;
            alertBanner.classList.remove('hidden');
        } else {
            alertBanner.classList.add('hidden');
        }
        app.goTo('login');
    },

    cancelLogin: () => {
        state.pendingAction = null;
        app.goTo(state.previousScreen || 'principal');
    },

    logout: () => {
        state.user = null;
        app.updateAuthUI();
        showNotification('Sesión cerrada correctamente');
        app.goTo('principal');
    },

    userMenuAction: (type) => {
        if (type === 'ayuda') {
            alert("Centro de Ayuda\n\n¿Tenés dudas con tu pedido o pagos?\nEscribinos a: soporte@centrodecompras.com.ar\nAtención telefónica: 0800-333-COMPRAS");
            return;
        }

        if (!state.user) {
            const names = {
                'cuenta': 'tu cuenta',
                'compras': 'tus compras',
                'favoritos': 'tus favoritos'
            };
            state.pendingAction = { type: 'menu', target: type };
            app.goToLogin(`Iniciá sesión para acceder a ${names[type] || 'esta sección'}`);
        } else {
            if (type === 'cuenta') alert(`Datos de tu cuenta:\n\nUsuario: ${state.user.name}\nCorreo: ${state.user.email}`);
            if (type === 'compras') alert("Historial de compras:\nNo tenés compras anteriores registradas.");
            if (type === 'favoritos') alert("Favoritos:\nTu lista de favoritos está vacía.");
        }
    },

    // Búsqueda
    doSearch: () => {
        const query = document.getElementById('main-search').value.toLowerCase().trim();
        app.executeSearch(query);
    },

    doDesktopSearch: () => {
        const query = document.getElementById('desktop-search').value.toLowerCase().trim();
        app.executeSearch(query);
    },

    executeSearch: (query) => {
        if (!query) {
            app.searchCategory('celular');
            return;
        }
        if (query.includes('tv') || query.includes('smart') || query.includes('tele')) {
            app.searchCategory('tv');
        } else {
            app.searchCategory('celular');
        }
        document.getElementById('active-search').value = query;
    },

    searchCategory: (categoryId) => {
        state.currentCategory = categoryId;
        const catName = categoryId === 'celular' ? 'Celulares' : 'Smart TVs';
        document.getElementById('active-search').value = catName;
        app.renderSearchResults();
        app.goTo('busqueda');
    },

    filterOffers: () => {
        state.currentCategory = 'all-offers';
        document.getElementById('active-search').value = 'Ofertas destacadas';
        app.renderSearchResults();
        app.goTo('busqueda');
    },

    showCouponHelp: () => {
        showNotification('¡Usá el cupón CENTRO10 en el carrito para 10% de descuento!');
    },

    renderSearchResults: () => {
        const resultsContainer = document.getElementById('search-results-list');
        let filteredProducts = state.currentCategory === 'all-offers'
            ? [...products]
            : products.filter(p => p.categoryId === state.currentCategory);
        
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
            resultsContainer.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-light);">No se encontraron productos para este filtro.</p>';
            return;
        }

        resultsContainer.innerHTML = filteredProducts.map(product => {
            const lowestPrice = getLowestPrice(product);
            const freeShip = hasFreeShipping(product);
            return `
            <div class="result-item" onclick="app.showProductDetail('${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="result-item-img" onerror="if(!this.dataset.t){this.dataset.t=1;this.src='${product.id}.png';}">
                <div class="result-item-info">
                    <h3>${product.name}</h3>
                    <div class="rating">${product.rating}</div>
                    <span class="price-desde">Desde <strong>${formatPrice(lowestPrice)}</strong></span>
                    ${freeShip ? `<br><span class="tag" style="background:#e6f4ea; color:#059669; font-size:0.7rem; padding:2px 6px; border-radius:4px; font-weight:600;">Envío gratis</span>` : ''}
                </div>
            </div>
            `;
        }).join('');
    },

    // Detalle de Producto con 2 botones diferenciados
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
                <div class="store-top-row">
                    <div class="store-info">
                        <h4>${store.name}</h4>
                        ${store.tag ? `<span class="tag">${store.tag}</span>` : ''}
                    </div>
                    <div class="store-price-val">
                        ${formatPrice(store.price)}
                    </div>
                </div>
                <div class="store-actions-row">
                    <button class="btn-store-cart" onclick="app.addToCart('${product.id}', '${store.name}')">
                        🛒 Agregar al carrito
                    </button>
                    <button class="btn-store-buy" onclick="app.buyNow('${product.id}', '${store.name}')">
                        ⚡ Comprar
                    </button>
                </div>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="product-detail-header" style="text-align:center; margin-bottom:20px;">
                <img src="${product.image}" alt="${product.name}" style="width:140px; height:140px; object-fit:contain; margin-bottom:10px;" onerror="if(!this.dataset.t){this.dataset.t=1;this.src='${product.id}.png';}">
                <h3 style="font-size: 1.2rem; margin-top:10px;">${product.name}</h3>
                <div class="rating" style="font-size:1.1rem; margin-bottom: 8px;">${product.rating}</div>
                <p style="font-size:0.85rem; color:var(--text-light); line-height: 1.4;">${product.description}</p>
            </div>
            
            <h4 style="margin-bottom: 8px;">Características técnicas</h4>
            <table class="features-table">
                ${featuresHtml}
            </table>
            
            <h4 style="margin-top:20px; margin-bottom:12px;">Comparativa de tiendas</h4>
            <div class="store-list">
                ${storesHtml}
            </div>
        `;
        app.goTo('detalle');
    },

    goBackFromDetail: () => {
        if (state.currentCategory) {
            app.goTo('busqueda');
        } else {
            app.goTo('principal');
        }
    },

    // Botón 1: "Agregar al carrito"
    addToCart: (productId, storeName) => {
        const product = products.find(p => p.id === productId);
        const store = product.stores.find(s => s.name === storeName);
        
        const existingItem = state.cart.find(i => i.product.id === productId && i.store.name === storeName);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            state.cart.push({ product, store, quantity: 1 });
        }
        
        updateCartBadge();
        showNotification('✓ Producto agregado al carrito. Podés seguir navegando.');
    },

    // Botón 2: "Comprar" directo
    buyNow: (productId, storeName) => {
        const product = products.find(p => p.id === productId);
        const store = product.stores.find(s => s.name === storeName);

        if (!state.user) {
            state.pendingAction = { type: 'buyNow', product, store };
            app.goToLogin('Iniciá sesión para confirmar tu compra');
            return;
        }

        state.checkoutMode = 'direct';
        state.checkoutItems = [{ product, store, quantity: 1 }];
        app.goTo('garantia');
    },

    goBackFromCart: () => {
        app.goTo(state.previousScreen || 'principal');
    },

    // Cantidades en carrito
    changeCartQty: (index, delta) => {
        if (!state.cart[index]) return;
        state.cart[index].quantity = (state.cart[index].quantity || 1) + delta;
        
        if (state.cart[index].quantity <= 0) {
            state.cart.splice(index, 1);
        }
        updateCartBadge();
        app.renderCart();
    },

    removeCartItem: (index) => {
        state.cart.splice(index, 1);
        updateCartBadge();
        app.renderCart();
    },

    applyCoupon: () => {
        const input = document.getElementById('coupon-input');
        if (!input) return;
        const code = input.value.trim().toUpperCase();

        if (code === 'CENTRO10' || code === 'DESCUENTO10') {
            state.coupon = { code, discountPercent: 10 };
            showNotification('¡Cupón del 10% de descuento aplicado!');
            app.renderCart();
        } else {
            showNotification('Cupón inválido. Probá con CENTRO10');
        }
    },

    renderCart: () => {
        const cartContent = document.getElementById('cart-content');
        if (state.cart.length === 0) {
            cartContent.innerHTML = `
                <div style="text-align:center; padding: 50px 20px; color: var(--text-light);">
                    <p style="font-size:2.5rem; margin-bottom:10px;">🛒</p>
                    <h3>Tu carrito está vacío</h3>
                    <p style="font-size:0.85rem; margin-top:5px;">Agregá productos desde la tienda para verlos acá.</p>
                    <button class="btn-primary mt-20" onclick="app.goTo('principal')">Explorar ofertas</button>
                </div>
            `;
            document.querySelector('#carrito .cart-actions').style.display = 'none';
            return;
        }

        document.querySelector('#carrito .cart-actions').style.display = 'flex';
        
        let itemsHtml = '';
        let subtotal = 0;
        let totalShipping = 0;

        state.cart.forEach((item, index) => {
            const { product, store, quantity = 1 } = item;
            const itemTotal = store.price * quantity;
            subtotal += itemTotal;
            totalShipping += store.shipping;
            
            itemsHtml += `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" onerror="if(!this.dataset.t){this.dataset.t=1;this.src='${product.id}.png';}">
                <div class="cart-item-details">
                    <h3>${product.name}</h3>
                    <p class="store">Tienda: <strong>${store.name}</strong></p>
                    <span class="price">${formatPrice(itemTotal)}</span>
                    <div class="cart-qty-row">
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="app.changeCartQty(${index}, -1)">−</button>
                            <span class="qty-count">${quantity}</span>
                            <button class="qty-btn" onclick="app.changeCartQty(${index}, 1)">+</button>
                        </div>
                        <button class="btn-remove-item" onclick="app.removeCartItem(${index})">Eliminar</button>
                    </div>
                </div>
            </div>`;
        });

        let discountAmount = 0;
        if (state.coupon) {
            discountAmount = Math.round(subtotal * (state.coupon.discountPercent / 100));
        }

        const totalFinal = subtotal + totalShipping - discountAmount;

        cartContent.innerHTML = `
            ${itemsHtml}
            <div class="cart-coupon-box">
                <input type="text" id="coupon-input" placeholder="Código de cupón (ej: CENTRO10)" value="${state.coupon ? state.coupon.code : ''}">
                <button type="button" onclick="app.applyCoupon()">Aplicar</button>
            </div>
            <div class="cart-summary">
                <div class="summary-row">
                    <span>Productos (${state.cart.reduce((a,c) => a + (c.quantity||1), 0)})</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div class="summary-row">
                    <span>Envío</span>
                    <span>${totalShipping === 0 ? 'Gratis' : formatPrice(totalShipping)}</span>
                </div>
                ${state.coupon ? `
                <div class="summary-row" style="color:var(--success); font-weight:600;">
                    <span>Descuento cupón (${state.coupon.code})</span>
                    <span>- ${formatPrice(discountAmount)}</span>
                </div>` : ''}
                <div class="summary-row total">
                    <span>Total parcial</span>
                    <span>${formatPrice(totalFinal)}</span>
                </div>
            </div>
        `;
    },

    cancelOrder: () => {
        state.cart = [];
        state.coupon = null;
        updateCartBadge();
        showNotification('Carrito vaciado');
        app.goTo('principal');
    },

    // Confirmar compra desde Carrito
    checkoutFromCart: () => {
        if (state.cart.length === 0) return;

        if (!state.user) {
            state.pendingAction = { type: 'cartCheckout' };
            app.goToLogin('Iniciá sesión para continuar con tu compra');
            return;
        }

        state.checkoutMode = 'cart';
        state.checkoutItems = [...state.cart];
        app.goTo('garantia');
    },

    goBackFromCheckout: (currentStep) => {
        if (currentStep === 'garantia') {
            if (state.checkoutMode === 'direct') {
                app.goTo('detalle');
            } else {
                app.goTo('carrito');
            }
        }
    },

    // Garantía
    saveGarantia: () => {
        const selected = document.querySelector('input[name="garantia"]:checked').value;
        const prices = { 'fabricante': 0, 'extendida12': 15000, 'extendida24': 25000 };
        const names = {
            'fabricante': 'Garantía del fabricante',
            'extendida12': 'Extendida 12 meses',
            'extendida24': 'Extendida 24 meses'
        };
        state.warranty = { type: selected, name: names[selected], price: prices[selected] };
        app.goTo('direccion');
    },

    // Dirección
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
        
        if (type === 'casa') {
            state.delivery = { type, address: addressInput || 'Dirección de residencia' };
        } else {
            state.delivery = { type, address: addressInput || 'Punto de encuentro a coordinar' };
        }
        
        app.goTo('pago');
    },

    // Pago
    togglePaymentForm: () => {
        const type = document.querySelector('input[name="metodo-pago"]:checked').value;
        const form = document.getElementById('card-form');
        form.style.display = (type === 'efectivo') ? 'none' : 'block';
    },

    processPayment: () => {
        const type = document.querySelector('input[name="metodo-pago"]:checked').value;
        
        if (type !== 'efectivo') {
            const ccNum = document.getElementById('cc-number').value.trim();
            const ccExp = document.getElementById('cc-exp').value.trim();
            const ccName = document.getElementById('cc-name').value.trim();
            const ccCvv = document.getElementById('cc-cvv').value.trim();
            
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

            if (!ccName || ccCvv.length < 3) {
                showNotification("Completá todos los datos de la tarjeta.");
                hasError = true;
            }

            if (hasError) return;
            
            state.payment = { type, last4: ccNum.slice(-4) };
            
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

    // Comprobante y Seguimiento
    generateReceipt: () => {
        state.orderNumber = Math.floor(Math.random() * 90000) + 10000;
        
        const items = state.checkoutItems;
        const productNames = items.map(item => `${item.product.name} (x${item.quantity || 1})`).join(', ');
        const storeNames = [...new Set(items.map(item => item.store.name))].join(', ');
        
        document.getElementById('receipt-order').textContent = `N° Pedido: #${state.orderNumber}`;
        document.getElementById('receipt-product').textContent = productNames;
        document.getElementById('receipt-store').textContent = storeNames;
        document.getElementById('receipt-warranty').textContent = state.warranty.name;
        
        let paymentText = "Efectivo / Transferencia bancaria";
        if (state.payment.type === 'credito') paymentText = "Crédito terminada en *" + state.payment.last4;
        if (state.payment.type === 'debito') paymentText = "Débito terminada en *" + state.payment.last4;
        document.getElementById('receipt-payment').textContent = paymentText;

        let subtotal = 0;
        let shipping = 0;
        items.forEach(item => {
            subtotal += item.store.price * (item.quantity || 1);
            shipping += item.store.shipping;
        });

        let discount = 0;
        if (state.coupon && state.checkoutMode === 'cart') {
            discount = Math.round(subtotal * (state.coupon.discountPercent / 100));
        }

        const total = subtotal + shipping + state.warranty.price - discount;
        document.getElementById('receipt-total').textContent = formatPrice(total);

        document.getElementById('tracking-product-name').textContent = items.length > 1 
            ? `Varios productos (${items.length})` 
            : `${items[0].product.name} (x${items[0].quantity || 1})`;
        document.getElementById('tracking-delivery-addr').textContent = `Entrega en: ${state.delivery.address}`;

        if (state.checkoutMode === 'cart') {
            state.cart = [];
            state.coupon = null;
            updateCartBadge();
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);
