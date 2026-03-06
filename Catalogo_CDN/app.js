// carga de productos
const { createApp } = Vue

createApp({

    // Datos reactivos
    data() {
        return {
            textoBusqueda: "",

            mostrarCarrito: false,
            mostrarCheckout: false,
            pasoCheckout: 1,

            cliente: {
                nombre: "",
                email: "",
                entrega: "",
                pago: ""
            },

            carrito: [],

            toast: {
                visible: false,
                mensaje: ""
            },

            categoriaSeleccionada: null,

            productos: [


                // acá va la información de los productos: Nombre, descripción, precio, imagen y stock.
                { id: 1, nombre: "Notebook", descripcion: "Portátil 14 pulgadas", precio: 500000, imagen: "assets/laptop.png", stock: 5, categoria: "computacion" },
                { id: 2, nombre: "Mouse", descripcion: "Mouse inalámbrico", precio: 15000, imagen: "assets/mouse.png", stock: 0, categoria: "accesorios" },
                { id: 3, nombre: "Teclado", descripcion: "Teclado mecánico", precio: 35000, imagen: "assets/keyboard.png", stock: 3, categoria: "accesorios" },
                { id: 4, nombre: "Monitor", descripcion: "Monitor 24 pulgadas", precio: 120000, imagen: "assets/monitor.png", stock: 0, categoria: "gaming" },
                { id: 5, nombre: "Audífonos", descripcion: "Cancelación de ruido", precio: 45000, imagen: "assets/headphones.png", stock: 8, categoria: "audio" },
                { id: 6, nombre: "Webcam", descripcion: "Full HD", precio: 30000, imagen: "assets/webcam.png", stock: 0, categoria: "accesorios" },
                { id: 7, nombre: "Disco", descripcion: "Disco", precio: 60000, imagen: "assets/disco.png", stock: 3, categoria: "accesorios" }
            ]
        }
    },

    // Propiedades calculadas: Aquí van valores que se calculan a partir de los datos.
    computed: {

        productosFiltrados() {

            return this.productos.filter(p => {

                const coincideBusqueda =
                    p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())

                const coincideCategoria =
                    !this.categoriaSeleccionada || p.categoria === this.categoriaSeleccionada

                return coincideBusqueda && coincideCategoria
            })
        },


        totalCarrito() {
            return this.carrito.reduce(
                (total, item) => total + item.precio * item.cantidad,
                0
            )
        },

        progreso() {
            return (this.pasoCheckout / 3) * 100
        }


    },

    // Funciones de la app: Aquí van funciones que cambian datos cuando el usuario hace algo.
    methods: {


        agregarAlCarrito(producto) {

            const item = this.carrito.find(p => p.id === producto.id)

            if (item) {
                item.cantidad++
            } else {
                this.carrito.push({ ...producto, cantidad: 1 })
            }

            // Mostrar toast
            this.toast.mensaje = `✓ ${producto.nombre} añadido al carrito`
            this.toast.visible = true

            // Se oculta solo después de 2.5 segundos
            setTimeout(() => {
                this.toast.visible = false
            }, 2500)
            
        },

        aumentarCantidad(item) {
            item.cantidad++
        },

        disminuirCantidad(item) {
            if (item.cantidad > 1) {
                item.cantidad--
            } else {
                const index = this.carrito.indexOf(item)
                this.eliminarDelCarrito(index)
            }
        },

        eliminarDelCarrito(index) {
            this.carrito.splice(index, 1)
        },

        abrirCheckout() {
            this.mostrarCheckout = true
            this.mostrarCarrito = false // para que se cierre cuando se abra el modal de compra
        },

        siguientePaso() {
            this.pasoCheckout++
        },

        finalizarCompra() {
            this.pasoCheckout = 3
        },

        seleccionarCategoria(categoria) {

            if (this.categoriaSeleccionada === categoria) {
                this.categoriaSeleccionada = null // si presionas la misma categoría se desactiva
            } else {
                this.categoriaSeleccionada = categoria
            }

        },



    }

}).mount("#app")    // Cuando Vue se monta: lee productos, le la lista con v-for y para cada producto evalúa producto.stock > 0 ( si es true muestra botón y si es false activa v-else )

