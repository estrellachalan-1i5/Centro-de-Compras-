// ========================================================
// CENTRO DE COMPRAS - MERCADO DIGITAL
// Lógica de Aplicación, Datos, Comparador y Procesos
// ========================================================

// 1. REPOSITORIO DE VENDEDORES (IDENTIFICACIÓN TIENDA VS VENDEDOR)
const sellers = {
    'giselle': {
        id: 'giselle',
        name: 'Giselle Store',
        avatar: '👩‍💼',
        badge: 'Vendedor Líder',
        isDirect: false,
        platform: 'Mercado Libre',
        rating: '4.9 ★★★★★ (1.240 ventas)',
        description: 'Vendedor verificado en Mercado Libre. Especialista en telefonía libre de fábrica, accesorios premium y soporte postventa personalizado.',
        warrantyInfo: 'Garantía oficial y cambio directo por 30 días.'
    },
    'tech-zone': {
        id: 'tech-zone',
        name: 'TechZone Oficial',
        avatar: '🏬',
        badge: 'Tienda Certificada',
        isDirect: false,
        platform: 'Amazon',
        rating: '4.8 ★★★★☆ (3.890 ventas)',
        description: 'Distribuidor mayorista de tecnología y computación para toda la región. Envíos prioritarios y factura A/B.',
        warrantyInfo: 'Garantía del fabricante con servicio técnico en todo el país.'
    },
    'carrefour-direct': {
        id: 'carrefour-direct',
        name: 'Carrefour (Venta directa)',
        avatar: '🛒',
        badge: 'Venta Directa Oficial',
        isDirect: true,
        platform: 'Carrefour',
        rating: '4.7 ★★★★☆ (Tienda Oficial)',
        description: 'Venta directa por Hipermercados Carrefour Argentina. Productos 100% originales con garantía y retiro en sucursal.',
        warrantyInfo: 'Garantía Carrefour y servicio de atención al cliente.'
    },
    'fravega-direct': {
        id: 'fravega-direct',
        name: 'Frávega (Venta directa)',
        avatar: '🏢',
        badge: 'Tienda Oficial',
        isDirect: true,
        platform: 'Frávega',
        rating: '4.8 ★★★★☆ (Tienda Oficial)',
        description: 'Tienda oficial Frávega. Especialistas en electro, Smart TVs, computación y telefonía con cobertura nacional.',
        warrantyInfo: 'Garantía oficial de fábrica.'
    },
    'garbarino-direct': {
        id: 'garbarino-direct',
        name: 'Garbarino (Venta directa)',
        avatar: '🛍️',
        badge: 'Tienda Oficial',
        isDirect: true,
        platform: 'Garbarino',
        rating: '4.5 ★★★★☆ (Tienda Oficial)',
        description: 'Cadena de electrodomésticos y tecnología con atención y garantía en todo el país.',
        warrantyInfo: 'Garantía oficial del fabricante.'
    },
    'musimundo-direct': {
        id: 'musimundo-direct',
        name: 'Musimundo (Venta directa)',
        avatar: '📻',
        badge: 'Tienda Oficial',
        isDirect: true,
        platform: 'Musimundo',
        rating: '4.7 ★★★★☆ (Tienda Oficial)',
        description: 'Tienda oficial Musimundo. Equipamiento para el hogar, informática y Smart TVs con cuotas y envíos.',
        warrantyInfo: 'Garantía oficial Musimundo.'
    },
    'electro-click': {
        id: 'electro-click',
        name: 'ElectroClick',
        avatar: '⚡',
        badge: 'Vendedor Destacado',
        isDirect: false,
        platform: 'Mercado Libre',
        rating: '4.9 ★★★★★ (920 ventas)',
        description: 'Comercio especializado en audio de alta fidelidad, auriculares y periféricos de última generación.',
        warrantyInfo: '6 meses de garantía con nosotros y 12 meses de fabricante.'
    }
};

// 2. CATÁLOGO COMPLETO DE PRODUCTOS (CON TIENDAS Y VENDEDORES)
let products = [
    {
        id: 'smartphone-pro',
        categoryId: 'celular',
        name: 'Smartphone Pro Max 256GB',
        image: 'Images/smartphone_product.png',
        rating: '★★★★☆',
        description: 'El teléfono más avanzado con un sistema de cámaras revolucionario y batería para todo el día.',
        discount: '15% OFF',
        features: {
            'Almacenamiento': '256 GB',
            'Memoria RAM': '8 GB',
            'Tamaño de pantalla': '6.7 pulgadas',
            'Cámara principal': '48 MP',
            'Batería': '4323 mAh',
            'Sistema operativo': 'iOS 17'
        },
        stores: [
            { name: 'Mercado Libre', sellerId: 'giselle', price: 850000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Frávega', sellerId: 'fravega-direct', price: 875000, shipping: 5000, tag: '', stock: 'Disponible' },
            { name: 'Musimundo', sellerId: 'musimundo-direct', price: 890000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Garbarino', sellerId: 'garbarino-direct', price: 895000, shipping: 3000, tag: '', stock: 'Últimas unidades' }
        ]
    },
    {
        id: 'smartphone-lite',
        categoryId: 'celular',
        name: 'Smartphone Lite 5G',
        image: 'Images/smartphone_product.png',
        rating: '★★★☆☆',
        description: 'Velocidad 5G y excelente rendimiento a un precio accesible.',
        discount: '25% OFF',
        features: {
            'Almacenamiento': '128 GB',
            'Memoria RAM': '6 GB',
            'Tamaño de pantalla': '6.4 pulgadas',
            'Cámara principal': '64 MP',
            'Batería': '5000 mAh',
            'Sistema operativo': 'Android 14'
        },
        stores: [
            { name: 'Garbarino', sellerId: 'garbarino-direct', price: 350000, shipping: 4000, tag: '', stock: 'Disponible' },
            { name: 'Mercado Libre', sellerId: 'giselle', price: 360000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Frávega', sellerId: 'fravega-direct', price: 380000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' }
        ]
    },
    {
        id: 'smartphone-ultra',
        categoryId: 'celular',
        name: 'Smartphone Ultra 1TB',
        image: 'Images/smartphone_product.png',
        rating: '★★★★★',
        description: 'Rendimiento extremo para los más exigentes. Pantalla de 120Hz.',
        discount: null,
        features: {
            'Almacenamiento': '1 TB',
            'Memoria RAM': '12 GB',
            'Tamaño de pantalla': '6.8 pulgadas',
            'Cámara principal': '200 MP',
            'Batería': '5000 mAh',
            'Sistema operativo': 'Android 14'
        },
        stores: [
            { name: 'Musimundo', sellerId: 'musimundo-direct', price: 1200000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Mercado Libre', sellerId: 'tech-zone', price: 1250000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Amazon', sellerId: 'tech-zone', price: 1270000, shipping: 15000, tag: '', stock: 'Disponible' }
        ]
    },
    {
        id: 'tv-4k',
        categoryId: 'tv',
        name: 'Smart TV 4K 55" Ultra HD',
        image: 'Images/smart_tv_product.png',
        rating: '★★★★☆',
        description: 'Colores vibrantes y resolución 4K para disfrutar del mejor cine en casa.',
        discount: '40% OFF',
        features: {
            'Tamaño de pantalla': '55 pulgadas',
            'Resolución': '4K Ultra HD',
            'Tecnología': 'OLED',
            'Tasa de refresco': '120Hz',
            'Sistema Operativo': 'WebOS'
        },
        stores: [
            { name: 'Frávega', sellerId: 'fravega-direct', price: 540000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Mercado Libre', sellerId: 'tech-zone', price: 555000, shipping: 12000, tag: '', stock: 'Disponible' },
            { name: 'Garbarino', sellerId: 'garbarino-direct', price: 560000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Carrefour', sellerId: 'carrefour-direct', price: 570000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' }
        ]
    },
    {
        id: 'tv-hd',
        categoryId: 'tv',
        name: 'Smart TV 32" HD',
        image: 'Images/smart_tv_product.png',
        rating: '★★★☆☆',
        description: 'Ideal para habitaciones y espacios pequeños con conectividad WiFi y aplicaciones integradas.',
        discount: '10% OFF',
        features: {
            'Tamaño de pantalla': '32 pulgadas',
            'Resolución': 'HD',
            'Tecnología': 'LED',
            'Tasa de refresco': '60Hz',
            'Sistema Operativo': 'Android TV'
        },
        stores: [
            { name: 'Garbarino', sellerId: 'garbarino-direct', price: 180000, shipping: 3000, tag: '', stock: 'Disponible' },
            { name: 'Musimundo', sellerId: 'musimundo-direct', price: 185000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Carrefour', sellerId: 'carrefour-direct', price: 189000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' }
        ]
    },
    {
        id: 'headphones-pro',
        categoryId: 'audio',
        name: 'Auriculares Inalámbricos Pro',
        image: 'Images/headphones_product.png',
        rating: '★★★★★',
        description: 'Cancelación activa de ruido, audio espacial y hasta 30 horas de reproducción continua.',
        discount: '20% OFF',
        features: {
            'Conectividad': 'Bluetooth 5.3',
            'Batería': 'Hasta 30 horas',
            'Cancelación de ruido': 'Activa (ANC)',
            'Micrófono': 'Triple con IA',
            'Resistencia al agua': 'IPX4'
        },
        stores: [
            { name: 'Mercado Libre', sellerId: 'electro-click', price: 45000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Frávega', sellerId: 'fravega-direct', price: 48500, shipping: 2500, tag: '', stock: 'Disponible' },
            { name: 'Amazon', sellerId: 'tech-zone', price: 49900, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' }
        ]
    },
    {
        id: 'laptop-15',
        categoryId: 'computacion',
        name: 'Notebook 15.6" Full HD Core i5',
        image: 'Images/laptop_product.png',
        rating: '★★★★☆',
        description: 'Potencia y ligereza para trabajo y estudio. Procesador Intel Core i5 de última generación y SSD ultrarrápido.',
        discount: '12% OFF',
        features: {
            'Procesador': 'Intel Core i5 12va Gen',
            'Memoria RAM': '16 GB DDR4',
            'Almacenamiento': '512 GB SSD NVMe',
            'Pantalla': '15.6" IPS Full HD',
            'Peso': '1.6 kg',
            'Sistema Operativo': 'Windows 11 Home'
        },
        stores: [
            { name: 'Amazon', sellerId: 'tech-zone', price: 720000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Musimundo', sellerId: 'musimundo-direct', price: 745000, shipping: 4000, tag: '', stock: 'Disponible' },
            { name: 'Frávega', sellerId: 'fravega-direct', price: 760000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' }
        ]
    },
    {
        id: 'sneakers-run',
        categoryId: 'calzado',
        name: 'Zapatillas Running Pro Sport',
        image: 'Images/sneakers_product.png',
        rating: '★★★★★',
        description: 'Amortiguación superior y tejido transpirable para entrenamientos de media y larga distancia.',
        discount: '15% OFF',
        features: {
            'Tipo de pisada': 'Neutra',
            'Material exterior': 'Mesh respirable',
            'Suela': 'Goma de alta tracción',
            'Uso recomendado': 'Running / Training',
            'Peso': '240g'
        },
        stores: [
            { name: 'Mercado Libre', sellerId: 'giselle', price: 89000, shipping: 0, tag: 'Envío gratis', stock: 'Disponible' },
            { name: 'Carrefour', sellerId: 'carrefour-direct', price: 92000, shipping: 3000, tag: '', stock: 'Disponible' }
        ]
    }
];

const bestSellers = [
    { id: 'headphones-pro', name: 'Auriculares Inalámbricos', price: '$ 45.000', img: 'Images/headphones_product.png' },
    { id: 'sneakers-run', name: 'Zapatillas Running', price: '$ 89.000', img: 'Images/sneakers_product.png' },
    { id: 'laptop-15', name: 'Notebook 15.6"', price: '$ 720.000', img: 'Images/laptop_product.png' },
    { id: 'smartphone-pro', name: 'Smartphone Pro Max', price: '$ 850.000', img: 'Images/smartphone_product.png' },
    { id: 'tv-4k', name: 'Smart TV 55"', price: '$ 540.000', img: 'Images/smart_tv_product.png' }
];

const novelties = [
    { id: 'smartphone-ultra', name: 'Smartphone Ultra 1TB', price: '$ 1.200.000', tag: 'Nuevo 120Hz', img: 'Images/smartphone_product.png' },
    { id: 'laptop-15', name: 'Notebook 15.6" i5', price: '$ 720.000', tag: '16GB RAM', img: 'Images/laptop_product.png' },
    { id: 'headphones-pro', name: 'Auriculares ANC', price: '$ 45.000', tag: 'Audio espacial', img: 'Images/headphones_product.png' }
];

// 3. ESTADO GLOBAL DE LA APLICACIÓN
const state = {
    cart: [],
    checkoutItems: [],
    checkoutMode: 'cart',
    pendingAction: null,
    user: JSON.parse(localStorage.getItem('centro_user') || 'null'),
    coupon: null,
    currentTheme: 'system',
    warranty: { type: 'fabricante', name: 'Garantía del fabricante', price: 0 },
    delivery: { type: 'casa', address: '' },
    payment: { type: 'debito', last4: null },
    orderNumber: null,
    currentCategory: null,
    currentProductDetail: null,
    previousScreen: 'principal',
    transferChoice: 'mercadopago',
    currentSeller: null,
    // Persistencias locales
    favorites: JSON.parse(localStorage.getItem('centro_favorites') || '[]'),
    recentlyViewed: JSON.parse(localStorage.getItem('centro_recent') || '[]'),
    searchHistory: JSON.parse(localStorage.getItem('centro_search_history') || '[]'),
    purchases: JSON.parse(localStorage.getItem('centro_purchases') || '[]')
};

// 4. UTILIDADES
const formatPrice = (price) => '$ ' + Math.round(price).toLocaleString('es-AR');

const showNotification = (message) => {
    const notif = document.getElementById('notification');
    if (!notif) return;
    notif.textContent = message;
    notif.classList.remove('hidden');
    setTimeout(() => notif.classList.add('hidden'), 3200);
};

const updateCartBadge = () => {
    const totalCount = state.cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(b => {
        b.textContent = totalCount;
        b.style.display = totalCount > 0 ? 'flex' : 'none';
    });
};

const updateFavoritesBadge = () => {
    const count = state.favorites.length;
    const badge = document.getElementById('fav-badge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
};

const getLowestPrice = (product) => {
    return Math.min(...product.stores.map(s => s.price));
};

const hasFreeShipping = (product) => {
    return product.stores.some(s => s.shipping === 0);
};

const getStoreBestSeller = (product) => {
    const sorted = [...product.stores].sort((a,b) => a.price - b.price);
    return sorted[0];
};

// 5. CONTROLADOR PRINCIPAL (APP)
const app = {
    handleImgError: (img) => {
        const step = parseInt(img.dataset.errStep || '0', 10);
        const currentSrc = img.getAttribute('src') || '';
        const filename = currentSrc.split('/').pop();

        if (step === 0) {
            img.dataset.errStep = '1';
            img.src = 'Images/' + filename;
        } else if (step === 1) {
            img.dataset.errStep = '2';
            img.src = 'images/' + filename;
        } else if (step === 2) {
            img.dataset.errStep = '3';
            img.src = '../Images/' + filename;
        } else if (step === 3) {
            img.dataset.errStep = '4';
            if (filename.toLowerCase().includes('logo')) {
                img.src = 'Images/Logo_centro.png';
            } else {
                img.src = filename;
            }
        }
    },

    init: () => {
        // Inicializar Tema y UI
        app.initTheme();
        app.updateAuthUI();
        updateCartBadge();
        updateFavoritesBadge();

        // Renderizado de secciones dinámicas en Home
        app.renderHomeSections();

        // Sincronización con Base de Datos IndexedDB
        if (window.dbManager) {
            window.dbManager.readyPromise.then(async () => {
                try {
                    const dbProds = await window.dbManager.getAll('products');
                    if (dbProds && dbProds.length > 0) {
                        products.length = 0;
                        products.push(...dbProds);
                        app.renderHomeSections();
                    }
                    if (state.user && state.user.email) {
                        const dbUser = await window.dbManager.get('users', state.user.email.toLowerCase());
                        if (dbUser) {
                            state.user = { ...state.user, ...dbUser };
                            localStorage.setItem('centro_user', JSON.stringify(state.user));
                            app.updateAuthUI();
                        }
                    }
                } catch (e) {
                    console.warn('Sync IndexedDB:', e);
                }
            }).catch(err => console.log('IndexedDB fallback:', err));
        }

        // Formulario de Login
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                try {
                    const emailInputEl = document.getElementById('email');
                    const emailRaw = emailInputEl ? emailInputEl.value.trim() : 'usuario@correo.com';
                    const emailKey = emailRaw.toLowerCase();
                    
                    // Buscar si el usuario ya existe en IndexedDB (con timeout de seguridad) o en el registro local
                    let existingUser = null;
                    if (window.dbManager) {
                        try {
                            const dbPromise = window.dbManager.get('users', emailKey);
                            const timeoutPromise = new Promise(res => setTimeout(() => res(null), 350));
                            existingUser = await Promise.race([dbPromise, timeoutPromise]);
                        } catch (err) {
                            console.warn('Error buscando usuario en BD:', err);
                        }
                    }

                    if (!existingUser) {
                        const registry = JSON.parse(localStorage.getItem('centro_users_db') || '{}');
                        existingUser = registry[emailKey];
                    }

                    if (existingUser) {
                        // Restaurar los datos guardados del usuario (nombre, avatar, teléfono, ubicación)
                        state.user = {
                            ...existingUser,
                            email: emailRaw,
                            name: existingUser.name || emailRaw.split('@')[0],
                            avatar: existingUser.avatar || '👤',
                            phone: existingUser.phone || '',
                            location: existingUser.location || ''
                        };
                    } else {
                        // Usuario nuevo: crear perfil inicial
                        const defaultName = emailRaw.split('@')[0];
                        const formattedName = defaultName.charAt(0).toUpperCase() + defaultName.slice(1);
                        state.user = { 
                            email: emailRaw, 
                            name: formattedName,
                            avatar: '👤',
                            phone: '',
                            location: '',
                            role: 'Cliente'
                        };
                        
                        // Guardar nuevo usuario en IndexedDB y registro
                        if (window.dbManager) {
                            window.dbManager.put('users', state.user).catch(err => console.warn(err));
                        }
                        const registry = JSON.parse(localStorage.getItem('centro_users_db') || '{}');
                        registry[emailKey] = state.user;
                        localStorage.setItem('centro_users_db', JSON.stringify(registry));
                    }

                    localStorage.setItem('centro_user', JSON.stringify(state.user));
                    localStorage.setItem('centro_last_email', emailRaw);
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
                            app.userMenuAction(action.target);
                            return;
                        }
                    }
                    
                    showNotification(`¡Hola de nuevo, ${state.user.name}!`);
                    app.goTo('principal');
                } catch (submitErr) {
                    console.error('Error durante el inicio de sesión:', submitErr);
                    const emailRaw = document.getElementById('email')?.value.trim() || 'usuario@correo.com';
                    state.user = { email: emailRaw, name: emailRaw.split('@')[0], avatar: '👤' };
                    localStorage.setItem('centro_user', JSON.stringify(state.user));
                    app.updateAuthUI();
                    app.goTo('principal');
                }
            });
        }

        // Formato para tarjeta en formulario de pago
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

        // Asegurar que la pantalla de inicio sea SIEMPRE la Principal
        app.goTo('principal');
    },

    // ==========================================
    // GESTIÓN DE TEMAS (CLARO, OSCURO, SISTEMA)
    // ==========================================
    initTheme: () => {
        const savedTheme = localStorage.getItem('centro_theme') || 'system';
        app.applyTheme(savedTheme, false);

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
        const avatarMini = document.querySelector('.user-avatar-mini');
        const avatarCircle = document.querySelector('.user-avatar-circle');

        if (state.user) {
            const currentAvatar = state.user.avatar || '👤';
            if (userLabel) userLabel.textContent = state.user.name;
            if (menuTitle) menuTitle.textContent = state.user.name;
            if (menuSubtitle) menuSubtitle.textContent = state.user.email;
            if (avatarMini) avatarMini.textContent = currentAvatar;
            if (avatarCircle) avatarCircle.textContent = currentAvatar;
            if (authArea) {
                authArea.innerHTML = `
                    <button class="btn-secondary full-width" onclick="app.logout()">Cerrar sesión</button>
                `;
            }
        } else {
            if (userLabel) userLabel.textContent = 'Ingresar';
            if (menuTitle) menuTitle.textContent = 'Invitado';
            if (menuSubtitle) menuSubtitle.textContent = 'No has iniciado sesión';
            if (avatarMini) avatarMini.textContent = '👤';
            if (avatarCircle) avatarCircle.textContent = '👤';
            if (authArea) {
                authArea.innerHTML = `
                    <button class="btn-primary full-width" onclick="app.goToLogin('Iniciá sesión para una experiencia personalizada')">Iniciar sesión</button>
                `;
            }
        }
    },

    // ==========================================
    // NAVEGACIÓN GENERAL (SPA)
    // ==========================================
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
        if (screenId === 'favoritos') app.renderFavorites();
        if (screenId === 'mis-compras') {
            if (!state.user) {
                state.pendingAction = { type: 'menu', target: 'compras' };
                app.goToLogin('Iniciá sesión para ver tus compras y pedidos');
                return;
            }
            app.renderPurchases();
        }
        if (screenId === 'principal') app.renderHomeSections();
        if (screenId === 'mi-cuenta') app.openUserProfile();
        if (screenId === 'panel-bd') app.renderDbPanel();

        if (screenId === 'configuracion') {
            const r = document.getElementById(`theme-radio-${state.currentTheme}`);
            if (r) r.checked = true;
        }

        // Actualizar barra de navegación inferior y desktop
        document.querySelectorAll('#bottom-nav .nav-item').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.desktop-nav .nav-item').forEach(btn => btn.classList.remove('active'));

        if (screenId === 'principal') {
            const h = document.getElementById('nav-btn-home');
            if (h) h.classList.add('active');
        } else if (screenId === 'menu-usuario' || screenId === 'configuracion' || screenId === 'mis-compras' || screenId === 'mi-cuenta' || screenId === 'panel-bd') {
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

        const emailInput = document.getElementById('email');
        const lastEmail = localStorage.getItem('centro_last_email');
        if (emailInput && lastEmail) {
            emailInput.value = lastEmail;
        }

        app.goTo('login');
    },

    cancelLogin: () => {
        state.pendingAction = null;
        app.goTo(state.previousScreen || 'principal');
    },

    logout: () => {
        state.user = null;
        localStorage.removeItem('centro_user');

        // Limpiar contenedor de compras si estaba cargado
        const cont = document.getElementById('purchases-content');
        if (cont) {
            cont.innerHTML = `
                <div style="text-align:center; padding: 50px 20px; color: var(--text-light);">
                    <p style="font-size:3rem; margin-bottom:10px;">🔒</p>
                    <h3>Iniciá sesión para ver tus compras</h3>
                    <p style="font-size:0.85rem; margin-top:6px;">Tus pedidos están asociados de forma privada a tu cuenta de usuario.</p>
                    <button class="btn-primary mt-20" onclick="app.goToLogin('Iniciá sesión para ver tus compras')">Iniciar sesión</button>
                </div>
            `;
        }

        app.updateAuthUI();
        showNotification('Sesión cerrada correctamente');
        app.goTo('principal');
    },

    userMenuAction: (type) => {
        if (type === 'ayuda') {
            alert("Centro de Ayuda y Soporte\n\n¿Tenés dudas con tu pedido o pagos?\nEscribinos a: soporte@centrodecompras.com.ar\nTeléfono gratuito: 0800-333-COMPRAS\nHorarios de atención: Lunes a Viernes de 9 a 20hs.");
            return;
        }

        if (type === 'compras') {
            if (!state.user) {
                state.pendingAction = { type: 'menu', target: 'compras' };
                app.goToLogin('Iniciá sesión para ver tus compras y pedidos');
            } else {
                app.goTo('mis-compras');
            }
            return;
        }

        if (type === 'favoritos') {
            app.goTo('favoritos');
            return;
        }

        if (type === 'cuenta') {
            if (!state.user) {
                state.pendingAction = { type: 'menu', target: 'cuenta' };
                app.goToLogin('Iniciá sesión para acceder a tu perfil y editar tus datos');
            } else {
                app.goTo('mi-cuenta');
            }
            return;
        }
    },

    // ==========================================
    // PERFIL Y DATOS DE USUARIO (MI CUENTA)
    // ==========================================
    openUserProfile: () => {
        if (!state.user) {
            app.goToLogin('Iniciá sesión para acceder a tu cuenta');
            return;
        }

        const nameInput = document.getElementById('profile-name');
        const emailInput = document.getElementById('profile-email');
        const phoneInput = document.getElementById('profile-phone');
        const locInput = document.getElementById('profile-location');
        const displayAvatar = document.getElementById('profile-avatar-display');

        if (nameInput) nameInput.value = state.user.name || '';
        if (emailInput) emailInput.value = state.user.email || '';
        if (phoneInput) phoneInput.value = state.user.phone || '';
        if (locInput) locInput.value = state.user.location || '';
        
        const currentAvatar = state.user.avatar || '👤';
        state.selectedAvatar = currentAvatar;
        if (displayAvatar) displayAvatar.textContent = currentAvatar;

        document.querySelectorAll('.avatar-option').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.trim() === currentAvatar);
        });
    },

    selectAvatar: (emoji) => {
        state.selectedAvatar = emoji;
        const displayAvatar = document.getElementById('profile-avatar-display');
        if (displayAvatar) displayAvatar.textContent = emoji;

        document.querySelectorAll('.avatar-option').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.trim() === emoji);
        });
    },

    saveUserProfile: () => {
        const name = document.getElementById('profile-name').value.trim();
        const email = document.getElementById('profile-email').value.trim();
        const phone = document.getElementById('profile-phone').value.trim();
        const location = document.getElementById('profile-location').value.trim();

        if (!name || !email) {
            showNotification('Por favor completá tu nombre y correo.');
            return;
        }

        state.user = {
            ...state.user,
            name,
            email,
            phone,
            location,
            avatar: state.selectedAvatar || (state.user ? state.user.avatar : '👤') || '👤'
        };

        // Guardar sesión activa
        localStorage.setItem('centro_user', JSON.stringify(state.user));
        localStorage.setItem('centro_last_email', email);

        // Guardar en diccionario persistente de usuarios para restaurar en próximos inicios de sesión
        const registry = JSON.parse(localStorage.getItem('centro_users_db') || '{}');
        registry[email.toLowerCase()] = state.user;
        localStorage.setItem('centro_users_db', JSON.stringify(registry));

        // Guardar en tabla users de IndexedDB
        if (window.dbManager) {
            window.dbManager.put('users', state.user).catch(err => console.warn('Error guardando usuario en BD:', err));
        }
        app.updateAuthUI();
        showNotification('✓ Perfil y cuenta actualizados con éxito');
        app.goTo('menu-usuario');
    },

    // ==========================================
    // RENDERIZADO EN PÁGINA PRINCIPAL
    // ==========================================
    renderHomeSections: () => {
        // 1. Recomendados para vos (tarjetas con comparador y botón de favoritos)
        const recList = document.getElementById('recommended-products-list');
        if (recList) {
            recList.innerHTML = products.slice(0, 4).map(p => {
                const best = getStoreBestSeller(p);
                const isFav = app.isFavorite(p.id);
                return `
                <div class="product-card-vertical" onclick="app.showProductDetail('${p.id}')">
                    <button class="card-fav-btn" onclick="event.stopPropagation(); app.toggleFavorite('${p.id}')" title="Guardar en favoritos">
                        ${isFav ? '❤️' : '🤍'}
                    </button>
                    ${p.discount ? `<span class="discount-pill" style="left:8px; right:auto;">${p.discount}</span>` : ''}
                    <img src="${p.image}" alt="${p.name}" onerror="app.handleImgError(this)">
                    <h4>${p.name}</h4>
                    <span class="card-store-name">Vendido por: <strong>${best.name}</strong></span>
                    <span class="card-price">${formatPrice(best.price)}</span>
                </div>
                `;
            }).join('');
        }

        // 2. Novedades
        const novList = document.getElementById('novelties-list');
        if (novList) {
            novList.innerHTML = novelties.map(item => `
                <div class="product-card" onclick="app.showProductDetail('${item.id}')">
                    <img src="${item.img}" alt="${item.name}" onerror="app.handleImgError(this)">
                    <h4>${item.name}</h4>
                    <span class="price">${item.price}</span>
                </div>
            `).join('');
        }

        // 3. Más Vendidos
        const bestList = document.getElementById('best-sellers-list');
        if (bestList) {
            bestList.innerHTML = bestSellers.map(item => `
                <div class="product-card" onclick="app.showProductDetail('${item.id}')">
                    <img src="${item.img}" alt="${item.name}" onerror="app.handleImgError(this)">
                    <h4>${item.name}</h4>
                    <span class="price">${item.price}</span>
                </div>
            `).join('');
        }

        // 4. Vistos Recientemente
        app.renderRecentViews();
    },

    renderRecentViews: () => {
        const sec = document.getElementById('recent-views-section');
        const list = document.getElementById('recent-views-list');
        if (!sec || !list) return;

        if (state.recentlyViewed.length === 0) {
            sec.classList.add('hidden');
            return;
        }

        sec.classList.remove('hidden');
        const recentProds = state.recentlyViewed
            .map(id => products.find(p => p.id === id))
            .filter(Boolean);

        list.innerHTML = recentProds.map(p => {
            const best = getStoreBestSeller(p);
            return `
            <div class="product-card" onclick="app.showProductDetail('${p.id}')">
                <img src="${p.image}" alt="${p.name}" onerror="app.handleImgError(this)">
                <h4>${p.name}</h4>
                <span class="price">${formatPrice(best.price)}</span>
            </div>
            `;
        }).join('');
    },

    recordRecentView: (productId) => {
        state.recentlyViewed = [productId, ...state.recentlyViewed.filter(id => id !== productId)].slice(0, 8);
        localStorage.setItem('centro_recent', JSON.stringify(state.recentlyViewed));
    },

    // ==========================================
    // FAVORITOS (PUNTO 7)
    // ==========================================
    isFavorite: (productId) => {
        return state.favorites.includes(productId);
    },

    toggleFavorite: (productId) => {
        if (state.favorites.includes(productId)) {
            state.favorites = state.favorites.filter(id => id !== productId);
            showNotification('Eliminado de tus favoritos');
        } else {
            state.favorites.push(productId);
            showNotification('❤️ Guardado en tus favoritos');
        }

        localStorage.setItem('centro_favorites', JSON.stringify(state.favorites));
        updateFavoritesBadge();

        // Refrescar vistas activas
        app.renderHomeSections();
        if (document.getElementById('favoritos').classList.contains('active')) {
            app.renderFavorites();
        }
        if (state.currentProductDetail && state.currentProductDetail.id === productId) {
            const btn = document.getElementById('detail-fav-btn');
            if (btn) btn.innerHTML = app.isFavorite(productId) ? '❤️ En favoritos' : '🤍 Agregar a favoritos';
        }
    },

    renderFavorites: () => {
        const cont = document.getElementById('favorites-content');
        if (!cont) return;

        if (state.favorites.length === 0) {
            cont.innerHTML = `
                <div style="text-align:center; padding: 50px 20px; color: var(--text-light);">
                    <p style="font-size:3rem; margin-bottom:10px;">🤍</p>
                    <h3>Tu lista de favoritos está vacía</h3>
                    <p style="font-size:0.85rem; margin-top:6px;">Tocá el corazón en cualquier producto para guardarlo acá y seguirlo de cerca.</p>
                    <button class="btn-primary mt-20" onclick="app.goTo('principal')">Explorar catálogo</button>
                </div>
            `;
            return;
        }

        const favProds = state.favorites.map(id => products.find(p => p.id === id)).filter(Boolean);

        cont.innerHTML = `
            <div class="search-results">
                ${favProds.map(p => {
                    const best = getStoreBestSeller(p);
                    return `
                    <div class="result-item" onclick="app.showProductDetail('${p.id}')">
                        <img src="${p.image}" alt="${p.name}" class="result-item-img" onerror="app.handleImgError(this)">
                        <div class="result-item-info">
                            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                                <h3>${p.name}</h3>
                                <button onclick="event.stopPropagation(); app.toggleFavorite('${p.id}')" style="background:transparent; font-size:1.1rem; padding:0 4px;" title="Quitar de favoritos">🗑️</button>
                            </div>
                            <div class="rating">${p.rating}</div>
                            <span class="price-desde">Mejor precio: <strong>${formatPrice(best.price)}</strong></span>
                            <p style="font-size:0.75rem; color:var(--text-light); margin-top:2px;">En tienda: ${best.name}</p>
                            <div style="display:flex; gap:8px; margin-top:10px;">
                                <button class="btn-store-cart" onclick="event.stopPropagation(); app.addToCart('${p.id}', '${best.name}')">🛒 Agregar</button>
                                <button class="btn-store-buy" onclick="event.stopPropagation(); app.buyNow('${p.id}', '${best.name}')">⚡ Comprar</button>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        `;
    },

    // ==========================================
    // BUSCADOR INTELIGENTE CON HISTORIAL (PUNTO 4)
    // ==========================================
    doSearch: () => {
        const query = document.getElementById('main-search').value.trim();
        app.openSearchWithQuery(query);
    },

    doDesktopSearch: () => {
        const query = document.getElementById('desktop-search').value.trim();
        app.openSearchWithQuery(query);
    },

    openSearchWithQuery: (query = '') => {
        app.goTo('busqueda');
        const input = document.getElementById('active-search');
        if (input) {
            input.value = query;
            input.focus();
        }
        if (query) {
            app.executeSearch(query);
        } else {
            app.showSearchAssist();
        }
    },

    showSearchAssist: () => {
        const assistPanel = document.getElementById('search-assist-panel');
        const resultsArea = document.getElementById('search-results-area');
        if (!assistPanel) return;

        assistPanel.classList.add('active');
        if (resultsArea) resultsArea.style.display = 'none';

        if (state.user) {
            // Usuario con sesión: Historial de búsquedas
            if (state.searchHistory.length === 0) {
                assistPanel.innerHTML = `
                    <div class="assist-title-row">
                        <span>Tus búsquedas recientes</span>
                    </div>
                    <p style="font-size:0.82rem; color:var(--text-light); padding:10px 0;">Aún no tenés búsquedas recientes en tu cuenta.</p>
                    ${app.renderPopularSearchesHtml()}
                `;
            } else {
                assistPanel.innerHTML = `
                    <div class="assist-title-row">
                        <span>Búsquedas recientes de ${state.user.name}</span>
                        <button class="btn-clear-history" onclick="app.clearSearchHistory()">Borrar todo el historial</button>
                    </div>
                    ${state.searchHistory.map((term, index) => `
                        <div class="history-item" onclick="app.selectSearchTerm('${term}')">
                            <div class="history-item-left">
                                <span>🕒</span>
                                <span>${term}</span>
                            </div>
                            <button class="history-delete-btn" onclick="event.stopPropagation(); app.removeSearchHistoryItem(${index})" title="Eliminar búsqueda">✕</button>
                        </div>
                    `).join('')}
                    ${app.renderPopularSearchesHtml()}
                `;
            }
        } else {
            // Invitado: Búsquedas populares y sugerencias relevantes
            assistPanel.innerHTML = `
                <div class="assist-title-row">
                    <span>Búsquedas populares</span>
                </div>
                ${app.renderPopularSearchesHtml()}
                <p style="font-size:0.75rem; color:var(--text-light); margin-top:14px; text-align:center;">
                    Iniciá sesión para guardar automáticamente tu historial de búsquedas.
                </p>
            `;
        }
    },

    renderPopularSearchesHtml: () => {
        const popular = ['Smartphone Pro', 'Smart TV 4K', 'Notebook 15.6', 'Auriculares', 'Envío gratis', 'Celulares', 'Ofertas'];
        return `
            <div style="margin-top:14px;">
                <span style="font-size:0.75rem; color:var(--text-light); font-weight:700; text-transform:uppercase;">Tendencias:</span>
                <div class="popular-tags-row">
                    ${popular.map(p => `
                        <span class="popular-tag" onclick="app.selectSearchTerm('${p}')">${p}</span>
                    `).join('')}
                </div>
            </div>
        `;
    },

    onSearchInput: (value) => {
        const clearBtn = document.getElementById('search-clear-btn');
        if (clearBtn) clearBtn.classList.toggle('hidden', !value.trim());

        const query = value.toLowerCase().trim();
        const assistPanel = document.getElementById('search-assist-panel');
        const resultsArea = document.getElementById('search-results-area');

        if (!query) {
            app.showSearchAssist();
            return;
        }

        assistPanel.classList.add('active');
        if (resultsArea) resultsArea.style.display = 'none';

        // Sugerencias en tiempo real basadas en catálogo real
        const matchingProducts = products.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.categoryId.toLowerCase().includes(query) ||
            p.stores.some(s => s.name.toLowerCase().includes(query))
        );

        if (matchingProducts.length === 0) {
            assistPanel.innerHTML = `
                <div class="assist-title-row">
                    <span>Sugerencias</span>
                </div>
                <p style="font-size:0.82rem; color:var(--text-light); padding:10px 0;">No hay sugerencias exactas. Presioná Enter para buscar en todo el catálogo.</p>
            `;
            return;
        }

        assistPanel.innerHTML = `
            <div class="assist-title-row">
                <span>Sugerencias en catálogo</span>
            </div>
            ${matchingProducts.map(p => `
                <div class="suggestion-item" onclick="app.showProductDetail('${p.id}')">
                    <div class="suggestion-item-left">
                        <span>🔍</span>
                        <span>${p.name}</span>
                    </div>
                    <span style="font-size:0.75rem; color:var(--accent); font-weight:600;">Desde ${formatPrice(getLowestPrice(p))}</span>
                </div>
            `).join('')}
        `;
    },

    clearSearchInput: () => {
        const input = document.getElementById('active-search');
        if (input) {
            input.value = '';
            input.focus();
        }
        const clearBtn = document.getElementById('search-clear-btn');
        if (clearBtn) clearBtn.classList.add('hidden');
        app.showSearchAssist();
    },

    selectSearchTerm: (term) => {
        const input = document.getElementById('active-search');
        if (input) input.value = term;
        app.executeSearch(term);
    },

    doActiveSearch: () => {
        const query = document.getElementById('active-search').value.trim();
        app.executeSearch(query);
    },

    executeSearch: (query) => {
        if (!query) {
            app.searchCategory('celular');
            return;
        }

        // Guardar en historial si el usuario inició sesión
        if (state.user) {
            state.searchHistory = [query, ...state.searchHistory.filter(q => q.toLowerCase() !== query.toLowerCase())].slice(0, 10);
            localStorage.setItem('centro_search_history', JSON.stringify(state.searchHistory));
        }

        const assistPanel = document.getElementById('search-assist-panel');
        const resultsArea = document.getElementById('search-results-area');
        if (assistPanel) assistPanel.classList.remove('active');
        if (resultsArea) resultsArea.style.display = 'block';

        state.currentCategory = 'search:' + query;
        app.renderSearchResults();
        app.goTo('busqueda');
    },

    removeSearchHistoryItem: (index) => {
        state.searchHistory.splice(index, 1);
        localStorage.setItem('centro_search_history', JSON.stringify(state.searchHistory));
        app.showSearchAssist();
        showNotification('Búsqueda eliminada del historial');
    },

    clearSearchHistory: () => {
        if (confirm("¿Querés borrar todo tu historial de búsquedas?")) {
            state.searchHistory = [];
            localStorage.removeItem('centro_search_history');
            app.showSearchAssist();
            showNotification('Historial de búsquedas borrado');
        }
    },

    searchCategory: (categoryId) => {
        state.currentCategory = categoryId;
        const catNames = {
            'celular': 'Celulares',
            'tv': 'Smart TVs',
            'computacion': 'Computación',
            'audio': 'Audio',
            'calzado': 'Calzado'
        };
        const input = document.getElementById('active-search');
        if (input) input.value = catNames[categoryId] || categoryId;

        const assistPanel = document.getElementById('search-assist-panel');
        const resultsArea = document.getElementById('search-results-area');
        if (assistPanel) assistPanel.classList.remove('active');
        if (resultsArea) resultsArea.style.display = 'block';

        app.renderSearchResults();
        app.goTo('busqueda');
    },

    filterOffers: () => {
        state.currentCategory = 'all-offers';
        const input = document.getElementById('active-search');
        if (input) input.value = 'Ofertas destacadas';

        const assistPanel = document.getElementById('search-assist-panel');
        const resultsArea = document.getElementById('search-results-area');
        if (assistPanel) assistPanel.classList.remove('active');
        if (resultsArea) resultsArea.style.display = 'block';

        app.renderSearchResults();
        app.goTo('busqueda');
    },

    showCouponHelp: () => {
        showNotification('¡Usá el cupón CENTRO10 en el carrito para 10% de descuento!');
    },

    renderSearchResults: () => {
        const resultsContainer = document.getElementById('search-results-list');
        if (!resultsContainer) return;

        let filteredProducts = [];
        if (!state.currentCategory || state.currentCategory === 'all-offers') {
            filteredProducts = [...products];
        } else if (state.currentCategory.startsWith('search:')) {
            const q = state.currentCategory.replace('search:', '').toLowerCase();
            filteredProducts = products.filter(p => 
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.categoryId.toLowerCase().includes(q) ||
                p.stores.some(s => s.name.toLowerCase().includes(q))
            );
        } else {
            filteredProducts = products.filter(p => p.categoryId === state.currentCategory);
        }
        
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
            resultsContainer.innerHTML = '<p style="text-align:center; padding:30px 10px; color:var(--text-light);">No se encontraron productos para los filtros seleccionados.</p>';
            return;
        }

        resultsContainer.innerHTML = filteredProducts.map(product => {
            const lowestPrice = getLowestPrice(product);
            const freeShip = hasFreeShipping(product);
            const bestStore = getStoreBestSeller(product);
            const isFav = app.isFavorite(product.id);
            return `
            <div class="result-item" onclick="app.showProductDetail('${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="result-item-img" onerror="app.handleImgError(this)">
                <div class="result-item-info">
                    <div style="display:flex; justify-content:space-between;">
                        <h3>${product.name}</h3>
                        <button onclick="event.stopPropagation(); app.toggleFavorite('${product.id}')" style="background:transparent; font-size:1.1rem; padding:0 4px;">${isFav ? '❤️' : '🤍'}</button>
                    </div>
                    <div class="rating">${product.rating}</div>
                    <span class="price-desde">Desde <strong>${formatPrice(lowestPrice)}</strong></span>
                    <p style="font-size:0.75rem; color:var(--text-light); margin-top:2px;">Mejor precio en: <strong>${bestStore.name}</strong></p>
                    ${freeShip ? `<span class="deal-tag" style="margin-top:4px; display:inline-block;">Envío gratis disponible</span>` : ''}
                </div>
            </div>
            `;
        }).join('');
    },

    // ==========================================
    // DETALLE DE PRODUCTO Y COMPARATIVA (PUNTOS 5 Y 6)
    // ==========================================
    showProductDetail: (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) {
            showNotification("Producto no disponible temporalmente.");
            return;
        }

        state.currentProductDetail = product;
        app.recordRecentView(productId);

        const container = document.getElementById('product-detail-content');
        const sortedStores = [...product.stores].sort((a,b) => a.price - b.price);
        const minPrice = sortedStores[0].price;
        const maxPrice = sortedStores[sortedStores.length - 1].price;
        const savings = maxPrice - minPrice;
        const isFav = app.isFavorite(product.id);
        
        let featuresHtml = Object.entries(product.features).map(([key, value]) => `
            <tr>
                <td>${key}</td>
                <td>${value}</td>
            </tr>
        `).join('');

        const storesHtml = sortedStores.map((store, idx) => {
            const seller = sellers[store.sellerId] || { name: store.name, badge: 'Oficial', isDirect: true };
            const isBestPrice = idx === 0;
            return `
            <div class="store-option ${isBestPrice ? 'best-option-card' : ''}">
                <div class="store-top-row">
                    <div class="store-info">
                        <h4>Plataforma: <strong>${store.name}</strong></h4>
                        <div style="margin-top:3px;">
                            <span class="seller-link" onclick="app.showSellerProfile('${store.sellerId}')" title="Ver perfil del vendedor">
                                ${seller.avatar || '👤'} Vendedor: <strong>${seller.name}</strong> ›
                            </span>
                            <span class="seller-badge ${seller.isDirect ? 'direct' : 'third-party'}">${seller.badge}</span>
                        </div>
                        <div style="margin-top:4px; font-size:0.75rem; color:var(--text-light);">
                            <span>Stock: ${store.stock || 'Disponible'}</span> &bull; 
                            <span>Envío: ${store.shipping === 0 ? '<strong style="color:var(--success);">Gratis</strong>' : formatPrice(store.shipping)}</span>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        <div class="store-price-val">${formatPrice(store.price)}</div>
                        ${isBestPrice ? `<span class="deal-tag">¡Mejor opción!</span>` : ''}
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
            `;
        }).join('');

        // Productos relacionados
        const related = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id);

        container.innerHTML = `
            <div class="product-detail-header" style="text-align:center; margin-bottom:20px;">
                <img src="${product.image}" alt="${product.name}" style="width:140px; height:140px; object-fit:contain; margin-bottom:10px;" onerror="app.handleImgError(this)">
                <h3 style="font-size: 1.25rem; margin-top:10px;">${product.name}</h3>
                <div class="rating" style="font-size:1.1rem; margin-bottom: 6px;">${product.rating}</div>
                <p style="font-size:0.85rem; color:var(--text-light); line-height: 1.4; max-width:440px; margin:0 auto 12px auto;">${product.description}</p>
                <button id="detail-fav-btn" class="btn-secondary" style="padding:6px 14px; font-size:0.82rem;" onclick="app.toggleFavorite('${product.id}')">
                    ${isFav ? '❤️ En favoritos' : '🤍 Agregar a favoritos'}
                </button>
            </div>

            ${savings > 0 ? `
            <div class="comp-savings-note" style="margin-bottom:16px;">
                💡 <strong>Diferencia de precios:</strong> Ahorrás hasta <strong>${formatPrice(savings)}</strong> eligiendo la opción más conveniente entre tiendas.
            </div>` : ''}
            
            <h4 style="margin-bottom: 8px;">Comparativa entre tiendas y vendedores</h4>
            <div class="store-list">
                ${storesHtml}
            </div>

            <h4 style="margin-top:24px; margin-bottom: 8px;">Características técnicas</h4>
            <table class="features-table">
                ${featuresHtml}
            </table>

            ${related.length > 0 ? `
            <h4 style="margin-top:24px; margin-bottom: 12px;">Productos relacionados</h4>
            <div class="horizontal-scroll">
                ${related.map(r => `
                    <div class="product-card" onclick="app.showProductDetail('${r.id}')">
                        <img src="${r.image}" alt="${r.name}" onerror="app.handleImgError(this)">
                        <h4>${r.name}</h4>
                        <span class="price">${formatPrice(getLowestPrice(r))}</span>
                    </div>
                `).join('')}
            </div>` : ''}
        `;
        app.goTo('detalle');
    },

    goBackFromDetail: () => {
        if (state.previousScreen && state.previousScreen !== 'detalle') {
            app.goTo(state.previousScreen);
        } else {
            app.goTo('principal');
        }
    },

    // ==========================================
    // PERFIL DEL VENDEDOR (PUNTO 6)
    // ==========================================
    showSellerProfile: (sellerId) => {
        const seller = sellers[sellerId];
        if (!seller) {
            showNotification("Información del vendedor no disponible.");
            return;
        }

        state.currentSeller = seller;
        const cont = document.getElementById('seller-profile-content');
        if (!cont) return;

        // Buscar productos publicados por este vendedor
        const sellerProducts = products.filter(p => p.stores.some(s => s.sellerId === sellerId));

        cont.innerHTML = `
            <div class="seller-header-card">
                <div class="seller-main-info">
                    <div class="seller-avatar-big">${seller.avatar}</div>
                    <div>
                        <h3 style="font-size:1.2rem; color:var(--text-dark);">${seller.name}</h3>
                        <span class="seller-badge ${seller.isDirect ? 'direct' : 'third-party'}">${seller.badge}</span>
                        <p style="font-size:0.8rem; color:var(--text-light); margin-top:4px;">Plataforma habitual: <strong>${seller.platform}</strong></p>
                    </div>
                </div>
                
                <div class="seller-rep-box">
                    <strong>Reputación y Desempeño:</strong><br>
                    <span style="color:#f59e0b; font-weight:bold;">${seller.rating}</span><br>
                    <span style="font-size:0.78rem; color:var(--text-light);">${seller.warrantyInfo}</span>
                </div>

                <p style="font-size:0.85rem; color:var(--text-dark); line-height:1.4; margin-top:12px;">${seller.description}</p>
                <div class="seller-disclaimer">* Datos organizados para demostración en Centro de Compras.</div>
            </div>

            <h3 style="font-size:1.05rem; margin-bottom:12px;">Productos ofrecidos por ${seller.name}</h3>
            <div class="search-results">
                ${sellerProducts.map(p => {
                    const storeData = p.stores.find(s => s.sellerId === sellerId);
                    return `
                    <div class="result-item" onclick="app.showProductDetail('${p.id}')">
                        <img src="${p.image}" alt="${p.name}" class="result-item-img" onerror="app.handleImgError(this)">
                        <div class="result-item-info">
                            <h3>${p.name}</h3>
                            <div class="rating">${p.rating}</div>
                            <span class="price-desde">Precio: <strong>${formatPrice(storeData.price)}</strong></span>
                            <p style="font-size:0.75rem; color:var(--text-light); margin-top:2px;">Envío: ${storeData.shipping === 0 ? 'Gratis' : formatPrice(storeData.shipping)} &bull; ${storeData.stock}</p>
                            <div style="display:flex; gap:8px; margin-top:10px;">
                                <button class="btn-store-cart" onclick="event.stopPropagation(); app.addToCart('${p.id}', '${storeData.name}')">🛒 Agregar</button>
                                <button class="btn-store-buy" onclick="event.stopPropagation(); app.buyNow('${p.id}', '${storeData.name}')">⚡ Comprar</button>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        `;
        app.goTo('perfil-vendedor');
    },

    goBackFromSellerProfile: () => {
        if (state.currentProductDetail) {
            app.goTo('detalle');
        } else {
            app.goTo('principal');
        }
    },

    // ==========================================
    // CARRITO Y CHECKOUT (PUNTOS 8 Y 9)
    // ==========================================
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
                <img src="${product.image}" alt="${product.name}" onerror="app.handleImgError(this)">
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
                    <span>Total</span>
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
        const cardForm = document.getElementById('card-form');
        const transferForm = document.getElementById('transfer-options-form');
        const payBtn = document.getElementById('btn-pay-action');

        if (type === 'efectivo') {
            cardForm.style.display = 'none';
            transferForm.classList.remove('hidden');
            if (payBtn) payBtn.textContent = (state.transferChoice === 'mercadopago') 
                ? 'Continuar con Mercado Pago ⚡' 
                : 'Finalizar Compra';
        } else {
            cardForm.style.display = 'block';
            transferForm.classList.add('hidden');
            if (payBtn) payBtn.textContent = 'Finalizar Compra';
        }
    },

    setTransferChoice: (choice) => {
        state.transferChoice = choice;
        const payBtn = document.getElementById('btn-pay-action');
        if (payBtn) {
            payBtn.textContent = (choice === 'mercadopago') 
                ? 'Continuar con Mercado Pago ⚡' 
                : 'Finalizar Compra';
        }
    },

    processPayment: () => {
        const type = document.querySelector('input[name="metodo-pago"]:checked').value;
        
        if (type === 'efectivo') {
            if (state.transferChoice === 'mercadopago') {
                app.openMPSimulation();
                return;
            } else {
                state.payment = { type: 'transferencia_bancaria', last4: null };
            }
        } else {
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
        }
        
        app.generateReceipt();
        app.goTo('comprobante');
    },

    // ==========================================
    // SIMULACIÓN MERCADO PAGO (PUNTO 10)
    // ==========================================
    openMPSimulation: () => {
        state.orderNumber = Math.floor(Math.random() * 90000) + 10000;
        
        let subtotal = 0;
        let shipping = 0;
        state.checkoutItems.forEach(item => {
            subtotal += item.store.price * (item.quantity || 1);
            shipping += item.store.shipping;
        });

        let discount = 0;
        if (state.coupon && state.checkoutMode === 'cart') {
            discount = Math.round(subtotal * (state.coupon.discountPercent / 100));
        }

        const totalFinal = subtotal + shipping + state.warranty.price - discount;

        document.getElementById('mp-order-id').textContent = '#' + state.orderNumber;
        document.getElementById('mp-total-amount').textContent = formatPrice(totalFinal);

        app.resetMPSimulation();
        app.goTo('mp-simulation');
    },

    executeMPSimulation: () => {
        document.getElementById('mp-step-confirm').classList.add('hidden');
        document.getElementById('mp-step-processing').classList.remove('hidden');

        setTimeout(() => {
            document.getElementById('mp-step-processing').classList.add('hidden');
            document.getElementById('mp-step-success').classList.remove('hidden');

            const totalTxt = document.getElementById('mp-total-amount').textContent;
            document.getElementById('mp-success-total').textContent = totalTxt;
            document.getElementById('mp-success-date').textContent = new Date().toLocaleDateString('es-AR') + ' ' + new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
            document.getElementById('mp-success-code').textContent = 'MP-' + Math.floor(Math.random() * 89999999 + 10000000);
            
            state.payment = { type: 'mercadopago_demo', last4: null };
        }, 1300);
    },

    simulateMPFailure: () => {
        document.getElementById('mp-step-confirm').classList.add('hidden');
        document.getElementById('mp-step-processing').classList.remove('hidden');

        setTimeout(() => {
            document.getElementById('mp-step-processing').classList.add('hidden');
            document.getElementById('mp-step-failure').classList.remove('hidden');
        }, 900);
    },

    resetMPSimulation: () => {
        document.getElementById('mp-step-confirm').classList.remove('hidden');
        document.getElementById('mp-step-processing').classList.add('hidden');
        document.getElementById('mp-step-success').classList.add('hidden');
        document.getElementById('mp-step-failure').classList.add('hidden');
    },

    cancelMPSimulation: () => {
        app.goTo('pago');
    },

    finishMPCheckout: () => {
        app.generateReceipt();
        app.goTo('comprobante');
    },

    // ==========================================
    // COMPROBANTE Y SEGUIMIENTO
    // ==========================================
    generateReceipt: () => {
        if (!state.orderNumber) {
            state.orderNumber = Math.floor(Math.random() * 90000) + 10000;
        }
        
        const items = state.checkoutItems;
        const productNames = items.map(item => `${item.product.name} (x${item.quantity || 1})`).join(', ');
        const storeNames = [...new Set(items.map(item => item.store.name))].join(', ');
        
        document.getElementById('receipt-order').textContent = `N° Pedido: #${state.orderNumber}`;
        document.getElementById('receipt-product').textContent = productNames;
        document.getElementById('receipt-store').textContent = storeNames;
        document.getElementById('receipt-warranty').textContent = state.warranty.name;
        
        let paymentText = "Transferencia bancaria tradicional";
        if (state.payment.type === 'credito') paymentText = "Tarjeta de crédito *" + state.payment.last4;
        if (state.payment.type === 'debito') paymentText = "Tarjeta de débito *" + state.payment.last4;
        if (state.payment.type === 'mercadopago_demo') paymentText = "Mercado Pago (Demostración interactiva aprobada)";
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

        // Guardar en Mis compras
        const currentEmail = (state.user && state.user.email) ? state.user.email.toLowerCase() : 'invitado';
        const purchaseRecord = {
            orderNumber: state.orderNumber,
            userEmail: currentEmail,
            date: new Date().toLocaleDateString('es-AR'),
            items: items.map(i => ({ name: i.product.name, qty: i.quantity || 1, store: i.store.name })),
            total: formatPrice(total),
            paymentMethod: paymentText,
            status: 'En preparación'
        };
        state.purchases = [purchaseRecord, ...state.purchases];
        localStorage.setItem('centro_purchases', JSON.stringify(state.purchases));
        if (window.dbManager) {
            window.dbManager.put('orders', purchaseRecord).catch(err => console.warn('Error guardando pedido en BD:', err));
        }

        if (state.checkoutMode === 'cart') {
            state.cart = [];
            state.coupon = null;
            updateCartBadge();
        }
    },

    // ==========================================
    // HISTORIAL DE COMPRAS (MIS COMPRAS)
    // ==========================================
    renderPurchases: async () => {
        const cont = document.getElementById('purchases-content');
        if (!cont) return;

        if (!state.user) {
            cont.innerHTML = `
                <div style="text-align:center; padding: 50px 20px; color: var(--text-light);">
                    <p style="font-size:3rem; margin-bottom:10px;">🔒</p>
                    <h3>Iniciá sesión para ver tus compras</h3>
                    <p style="font-size:0.85rem; margin-top:6px;">Tus pedidos están asociados de forma privada y segura a tu cuenta.</p>
                    <button class="btn-primary mt-20" onclick="app.goToLogin('Iniciá sesión para ver tus compras y comprobantes')">Iniciar sesión</button>
                </div>
            `;
            return;
        }

        const currentUserEmail = (state.user.email || '').toLowerCase();

        // Obtener pedidos de memoria o IndexedDB
        let allOrders = [...state.purchases];
        if (window.dbManager) {
            try {
                const dbOrders = await window.dbManager.getAll('orders');
                if (dbOrders && dbOrders.length > 0) {
                    allOrders = dbOrders;
                }
            } catch (e) {
                console.warn(e);
            }
        }

        // Filtrar pedidos que correspondan al usuario logueado
        const userOrders = allOrders.filter(p => !p.userEmail || p.userEmail.toLowerCase() === currentUserEmail);

        if (userOrders.length === 0) {
            cont.innerHTML = `
                <div style="text-align:center; padding: 50px 20px; color: var(--text-light);">
                    <p style="font-size:3rem; margin-bottom:10px;">📦</p>
                    <h3>No tenés compras registradas</h3>
                    <p style="font-size:0.85rem; margin-top:6px;">Hola <strong>${state.user.name}</strong>, cuando realices un pedido acá vas a poder consultar tus comprobantes y estados de entrega.</p>
                    <button class="btn-primary mt-20" onclick="app.goTo('principal')">Empezar a comprar</button>
                </div>
            `;
            return;
        }

        cont.innerHTML = userOrders.map(p => `
            <div class="purchase-card">
                <div class="purchase-card-header">
                    <span><strong>Pedido #${p.orderNumber}</strong> &bull; ${p.date}</span>
                    <span class="purchase-status-badge">${p.status}</span>
                </div>
                <div class="purchase-items-list">
                    ${p.items.map(item => `
                        <div>📦 ${item.name} <strong>x${item.qty}</strong> (Tienda: ${item.store})</div>
                    `).join('')}
                </div>
                <div class="purchase-card-footer">
                    <div>
                        <span style="font-size:0.75rem; color:var(--text-light);">Total:</span>
                        <strong style="color:var(--primary); font-size:1rem; margin-left:4px;">${p.total}</strong>
                    </div>
                    <button class="btn-secondary" style="padding:6px 14px; font-size:0.8rem;" onclick="app.goTo('seguimiento')">Ver seguimiento ›</button>
                </div>
            </div>
        `).join('');
    },

    // ==========================================
    // BASE DE DATOS Y PANEL DE ADMINISTRACIÓN
    // ==========================================
    renderDbPanel: async () => {
        if (!window.dbManager) return;
        try {
            // Contadores estadísticos
            const prodCount = await dbManager.count('products');
            const orderCount = await dbManager.count('orders');
            const userCount = await dbManager.count('users');
            const sellerCount = await dbManager.count('sellers');

            const pEl = document.getElementById('db-stat-products');
            const oEl = document.getElementById('db-stat-orders');
            const uEl = document.getElementById('db-stat-users');
            const sEl = document.getElementById('db-stat-sellers');

            if (pEl) pEl.textContent = prodCount;
            if (oEl) oEl.textContent = orderCount;
            if (uEl) uEl.textContent = userCount;
            if (sEl) sEl.textContent = sellerCount;

            // Renderizar lista de productos
            const prods = await dbManager.getAll('products');
            const prodListEl = document.getElementById('db-products-table-list');
            if (prodListEl) {
                if (!prods || prods.length === 0) {
                    prodListEl.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-light);">No hay productos en la base de datos.</p>';
                } else {
                    prodListEl.innerHTML = prods.map(p => {
                        const best = getStoreBestSeller(p);
                        return `
                        <div class="db-row-card">
                            <img src="${p.image}" alt="${p.name}" onerror="app.handleImgError(this)" style="width:48px; height:48px; object-fit:contain; border-radius:6px; background:#fff; padding:3px; border:1px solid var(--border);">
                            <div class="db-row-info">
                                <strong>${p.name}</strong>
                                <small>ID: ${p.id} &bull; Cat: ${p.categoryId || 'General'} &bull; ${formatPrice(best.price)}</small>
                            </div>
                            <div class="db-row-actions">
                                <button class="btn-db-action" onclick="app.showProductDetail('${p.id}')" title="Ver en tienda">👁️</button>
                                <button class="btn-db-action delete" onclick="app.deleteProductFromDb('${p.id}')" title="Eliminar de BD">🗑️</button>
                            </div>
                        </div>
                        `;
                    }).join('');
                }
            }

            // Renderizar lista de pedidos
            const orders = await dbManager.getAll('orders');
            const orderListEl = document.getElementById('db-orders-table-list');
            if (orderListEl) {
                if (!orders || orders.length === 0) {
                    orderListEl.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-light);">No hay pedidos registrados en la base de datos todavía.</p>';
                } else {
                    orderListEl.innerHTML = orders.map(o => `
                    <div class="db-row-card">
                        <div class="db-row-info">
                            <strong>Pedido #${o.orderNumber}</strong> &bull; <small>${o.date || ''}</small>
                            <p style="font-size:0.8rem; color:var(--text-light); margin:4px 0 0 0;">
                                ${o.items ? o.items.map(i => `${i.name} (x${i.qty})`).join(', ') : 'Detalle de compra'}
                            </p>
                            <small style="color:var(--primary); font-weight:700;">Total: ${o.total} &bull; Método: ${o.paymentMethod || 'Pago'}</small>
                        </div>
                        <div class="db-row-actions">
                            <span style="font-size:0.75rem; background:rgba(30,126,52,0.1); color:var(--success); padding:3px 8px; border-radius:12px; font-weight:600;">${o.status || 'Confirmado'}</span>
                        </div>
                    </div>
                    `).join('');
                }
            }
        } catch (err) {
            console.error('Error cargando panel de BD:', err);
        }
    },

    switchDbTab: (tabName) => {
        ['products', 'orders', 'tools'].forEach(t => {
            const btn = document.getElementById(`db-tab-btn-${t}`);
            const content = document.getElementById(`db-tab-content-${t}`);
            if (btn) btn.classList.toggle('active', t === tabName);
            if (content) content.classList.toggle('hidden', t !== tabName);
        });
    },

    toggleNewProductForm: () => {
        const form = document.getElementById('db-new-product-form');
        if (form) form.classList.toggle('hidden');
    },

    saveNewProductToDb: async () => {
        const nameInput = document.getElementById('new-prod-name');
        const catInput = document.getElementById('new-prod-cat');
        const priceInput = document.getElementById('new-prod-price');
        const sellerInput = document.getElementById('new-prod-seller');
        const descInput = document.getElementById('new-prod-desc');

        const name = nameInput ? nameInput.value.trim() : '';
        const categoryId = catInput ? catInput.value : 'celular';
        const price = priceInput ? parseInt(priceInput.value, 10) : 0;
        const sellerVal = sellerInput ? sellerInput.value : 'Mercado Libre|giselle';
        const desc = descInput ? descInput.value.trim() : '';

        if (!name || isNaN(price) || price <= 0) {
            showNotification('Por favor completá el nombre y un precio válido.');
            return;
        }

        const [platform, sellerId] = sellerVal.split('|');
        const sellerObj = sellers[sellerId] || sellers['giselle'];

        // Asignar imagen representativa según categoría
        let prodImg = 'Images/smartphone_product.png';
        if (categoryId === 'tv') prodImg = 'Images/smart_tv_product.png';
        if (categoryId === 'computacion') prodImg = 'Images/laptop_product.png';
        if (categoryId === 'audio') prodImg = 'Images/headphones_product.png';
        if (categoryId === 'calzado') prodImg = 'Images/sneakers_product.png';

        const newId = 'prod-' + Date.now();
        const newProduct = {
            id: newId,
            categoryId: categoryId,
            name: name,
            image: prodImg,
            rating: '★★★★★',
            description: desc || 'Producto oficial incorporado a la base de datos de Centro de Compras.',
            discount: '10% OFF',
            features: {
                'Garantía': sellerObj.warrantyInfo || 'Garantía oficial',
                'Origen': 'Base de Datos IndexedDB',
                'Envío': 'Despacho prioritario'
            },
            stores: [
                {
                    name: platform,
                    price: price,
                    shipping: 0,
                    delivery: 'Llega en 24 a 48 hs',
                    stock: 25,
                    bestPrice: true,
                    sellerId: sellerId,
                    sellerName: sellerObj.name,
                    isDirectSeller: sellerObj.isDirect,
                    sellerRating: sellerObj.rating
                }
            ]
        };

        try {
            await window.dbManager.put('products', newProduct);
            products.unshift(newProduct);
            app.renderHomeSections();
            app.renderDbPanel();
            app.toggleNewProductForm();
            
            // Limpiar inputs
            if (nameInput) nameInput.value = '';
            if (priceInput) priceInput.value = '';
            if (descInput) descInput.value = '';

            showNotification('✓ Producto guardado con éxito en la Base de Datos');
        } catch (e) {
            console.error('Error guardando producto en BD:', e);
            showNotification('Error al guardar en la base de datos');
        }
    },

    deleteProductFromDb: async (prodId) => {
        if (!confirm('¿Estás seguro de que deseás eliminar este producto de la Base de Datos?')) {
            return;
        }

        try {
            await window.dbManager.delete('products', prodId);
            const idx = products.findIndex(p => p.id === prodId);
            if (idx !== -1) {
                products.splice(idx, 1);
            }
            app.renderHomeSections();
            app.renderDbPanel();
            showNotification('✓ Producto eliminado de la Base de Datos');
        } catch (e) {
            console.error('Error al eliminar producto:', e);
            showNotification('Error al eliminar producto');
        }
    },

    resetDbDefaults: async () => {
        if (!confirm('¿Restaurar todas las tablas a los valores originales de fábrica? Se borrarán los cambios locales.')) {
            return;
        }

        try {
            await window.dbManager.resetToDefaults();
            const freshProds = await window.dbManager.getAll('products');
            products.length = 0;
            products.push(...freshProds);
            app.renderHomeSections();
            app.renderDbPanel();
            showNotification('✓ Base de datos restaurada a valores iniciales');
        } catch (e) {
            console.error('Error restaurando BD:', e);
            showNotification('Error al restaurar base de datos');
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);
