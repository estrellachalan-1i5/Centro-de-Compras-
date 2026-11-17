// ========================================================
// CENTRO DE COMPRAS - MOTOR DE BASE DE DATOS (INDEXEDDB)
// Base de datos completa, relacional-documental y fácil de usar
// Funciona 100% en GitHub Pages y navegadores modernos
// ========================================================

const DB_NAME = 'CentroDeComprasDB';
const DB_VERSION = 1;

// Semilla inicial de datos (Seed Data)
const INITIAL_SELLERS = [
    {
        id: 'giselle',
        name: 'Giselle Store',
        avatar: '👩‍💼',
        badge: 'Vendedor Líder',
        isDirect: false,
        platform: 'Mercado Libre',
        rating: '4.9 ★★★★★ (1.240 ventas)',
        description: 'Vendedor verificado en Mercado Libre. Especialista en telefonía libre de fábrica, accesorios premium y soporte postventa.',
        warrantyInfo: 'Garantía oficial y cambio directo por 30 días.'
    },
    {
        id: 'tech-zone',
        name: 'TechZone Oficial',
        avatar: '🏬',
        badge: 'Tienda Certificada',
        isDirect: false,
        platform: 'Amazon',
        rating: '4.8 ★★★★☆ (3.890 ventas)',
        description: 'Distribuidor mayorista de tecnología y computación para toda la región. Factura A o B.',
        warrantyInfo: 'Garantía del fabricante con servicio técnico nacional.'
    },
    {
        id: 'carrefour-direct',
        name: 'Carrefour (Venta directa)',
        avatar: '🛒',
        badge: 'Venta Directa Oficial',
        isDirect: true,
        platform: 'Carrefour',
        rating: '4.7 ★★★★☆ (Tienda Oficial)',
        description: 'Venta directa por Hipermercados Carrefour Argentina. Productos nuevos con retiro en sucursal.',
        warrantyInfo: 'Garantía Carrefour y soporte al cliente.'
    },
    {
        id: 'fravega-direct',
        name: 'Frávega (Venta directa)',
        avatar: '🏢',
        badge: 'Tienda Oficial',
        isDirect: true,
        platform: 'Frávega',
        rating: '4.8 ★★★★☆ (Tienda Oficial)',
        description: 'Tienda oficial Frávega. Especialistas en electrodomésticos, Smart TVs y tecnología.',
        warrantyInfo: 'Garantía oficial de fábrica.'
    },
    {
        id: 'garbarino-direct',
        name: 'Garbarino (Venta directa)',
        avatar: '🛍️',
        badge: 'Tienda Oficial',
        isDirect: true,
        platform: 'Garbarino',
        rating: '4.5 ★★★★☆ (Tienda Oficial)',
        description: 'Cadena de tecnología y electrodomésticos con servicio postventa.',
        warrantyInfo: 'Garantía oficial del fabricante.'
    },
    {
        id: 'musimundo-direct',
        name: 'Musimundo (Venta directa)',
        avatar: '📻',
        badge: 'Tienda Oficial',
        isDirect: true,
        platform: 'Musimundo',
        rating: '4.7 ★★★★☆ (Tienda Oficial)',
        description: 'Tienda oficial Musimundo. Informática, audio y Smart TVs con cuotas y envíos.',
        warrantyInfo: 'Garantía oficial Musimundo.'
    },
    {
        id: 'electro-click',
        name: 'ElectroClick',
        avatar: '⚡',
        badge: 'Vendedor Destacado',
        isDirect: false,
        platform: 'Mercado Libre',
        rating: '4.9 ★★★★★ (920 ventas)',
        description: 'Especialistas en audio premium, auriculares y periféricos.',
        warrantyInfo: 'Garantía de 12 meses.'
    }
];

const INITIAL_PRODUCTS = [
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

class DatabaseManager {
    constructor() {
        this.db = null;
        this.isReady = false;
        this.readyPromise = this.init();
    }

    init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // 1. Tabla de Productos
                if (!db.objectStoreNames.contains('products')) {
                    const productStore = db.createObjectStore('products', { keyPath: 'id' });
                    productStore.createIndex('categoryId', 'categoryId', { unique: false });
                    productStore.createIndex('name', 'name', { unique: false });
                }

                // 2. Tabla de Vendedores
                if (!db.objectStoreNames.contains('sellers')) {
                    db.createObjectStore('sellers', { keyPath: 'id' });
                }

                // 3. Tabla de Pedidos / Compras
                if (!db.objectStoreNames.contains('orders')) {
                    const orderStore = db.createObjectStore('orders', { keyPath: 'orderNumber' });
                    orderStore.createIndex('date', 'date', { unique: false });
                }

                // 4. Tabla de Usuarios
                if (!db.objectStoreNames.contains('users')) {
                    const userStore = db.createObjectStore('users', { keyPath: 'email' });
                    userStore.createIndex('name', 'name', { unique: false });
                }

                // 5. Tabla de Configuración y Metadatos
                if (!db.objectStoreNames.contains('settings')) {
                    db.createObjectStore('settings', { keyPath: 'key' });
                }
            };

            request.onsuccess = async (event) => {
                this.db = event.target.result;
                this.isReady = true;
                resolve(this.db);

                // Cargar datos iniciales una vez resuelta la conexión
                try {
                    await this.seedInitialData();
                } catch (e) {
                    console.warn("Error en seedInitialData:", e);
                }
            };

            request.onerror = (event) => {
                console.error("Error al inicializar IndexedDB:", event.target.error);
                reject(event.target.error);
            };
        });
    }

    // Inicializar semillas si es la primera vez
    async seedInitialData() {
        if (!this.db) return;
        return new Promise((resolve) => {
            try {
                const tx = this.db.transaction('products', 'readonly');
                const store = tx.objectStore('products');
                const req = store.count();
                req.onsuccess = async () => {
                    if (req.result === 0) {
                        console.log("Poblando Base de Datos con catálogo inicial...");
                        for (const p of INITIAL_PRODUCTS) {
                            await this.put('products', p);
                        }
                        for (const s of INITIAL_SELLERS) {
                            await this.put('sellers', s);
                        }
                        // Usuario administrador de prueba
                        await this.put('users', {
                            email: 'usuario@correo.com',
                            name: 'Usuario Demo',
                            avatar: '👤',
                            phone: '+54 9 11 4455-6677',
                            location: 'Buenos Aires, Argentina',
                            role: 'Cliente'
                        });
                        await this.put('settings', { key: 'db_initialized_at', value: new Date().toISOString() });
                    }
                    resolve();
                };
                req.onerror = () => resolve();
            } catch (err) {
                console.warn('Error comprobando productos iniciales:', err);
                resolve();
            }
        });
    }

    // ==========================================
    // OPERACIONES CRUD BÁSICAS (PROMESAS ASYNC)
    // ==========================================
    async get(storeName, key) {
        await this.readyPromise;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const req = store.get(key);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    async getAll(storeName) {
        await this.readyPromise;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = () => reject(req.error);
        });
    }

    async put(storeName, item) {
        await this.readyPromise;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            const req = store.put(item);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    async delete(storeName, key) {
        await this.readyPromise;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            const req = store.delete(key);
            req.onsuccess = () => resolve(true);
            req.onerror = () => reject(req.error);
        });
    }

    async count(storeName) {
        await this.readyPromise;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const req = store.count();
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    async clear(storeName) {
        await this.readyPromise;
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            const req = store.clear();
            req.onsuccess = () => resolve(true);
            req.onerror = () => reject(req.error);
        });
    }

    // ==========================================
    // HERRAMIENTAS DE GESTIÓN Y EXPORTACIÓN
    // ==========================================
    async resetToDefaults() {
        await this.clear('products');
        await this.clear('sellers');
        await this.clear('orders');
        await this.clear('users');
        await this.seedInitialData();
        return true;
    }

    async exportBackupJSON() {
        const backup = {
            appName: 'Centro de Compras - Mercado Digital',
            version: '2.0',
            exportedAt: new Date().toISOString(),
            tables: {
                products: await this.getAll('products'),
                sellers: await this.getAll('sellers'),
                orders: await this.getAll('orders'),
                users: await this.getAll('users')
            }
        };

        const jsonStr = JSON.stringify(backup, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `CentroDeCompras_Backup_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Instancia global accesible desde toda la web
window.dbManager = new DatabaseManager();
