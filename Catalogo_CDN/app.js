// carga de productos
const { createApp } = Vue

createApp({

    // Datos reactivos
    data() {
        return {
            textoBusqueda: "",
            mostrarCarrito: false,
            carrito: [],
            productos: [
                // acá va la información de los productos: Nombre, descripción, precio, imagen y stock.
                { id: 1, nombre: "Notebook", descripcion: "Portátil 14 pulgadas", precio: 500000, imagen: "assets/laptop.png", stock: 5 },
                { id: 2, nombre: "Mouse", descripcion: "Mouse inalámbrico", precio: 15000, imagen: "assets/mouse.png", stock: 0 },
                { id: 3, nombre: "Teclado", descripcion: "Teclado mecánico", precio: 35000, imagen: "assets/keyboard.png", stock: 3 },
                { id: 4, nombre: "Monitor", descripcion: "Monitor 24 pulgadas", precio: 120000, imagen: "assets/monitor.png", stock: 0 },
                { id: 5, nombre: "Audífonos", descripcion: "Cancelación de ruido", precio: 45000, imagen: "assets/headphones.png", stock: 8 },
                { id: 6, nombre: "Webcam", descripcion: "Full HD", precio: 30000, imagen: "assets/webcam.png", stock: 0 },
                { id: 7, nombre: "Disco", descripcion: "Disco", precio: 60000, imagen: "assets/disco.png", stock: 3 }
            ]
        }
    },

    // Propiedades calculadas: Aquí van valores que se calculan a partir de los datos.
    computed: {

        productosFiltrados() {
            return this.productos.filter(p =>
                p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
            )
        }

    },

    // Funciones de la app: Aquí van funciones que cambian datos cuando el usuario hace algo.
    methods: {

        agregarAlCarrito(producto) {
            this.carrito.push(producto)
        },

        eliminarDelCarrito(index) {
            this.carrito.splice(index, 1)
        },

        vaciarCarrito() {
            this.carrito = []
        }

    }

}).mount("#app")    // Cuando Vue se monta: lee productos, le la lista con v-for y para cada producto evalúa producto.stock > 0 ( si es true muestra botón y si es false activa v-else )

