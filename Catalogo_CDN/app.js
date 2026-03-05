// carga de productos
const { createApp } = Vue

createApp({

    data() {
        return {
            textoBusqueda: "",
            productos: [
                // acá va la información de los productos: Nombre, descripción, precio, imagen y stock.
                { id: 1, nombre: "Notebook", descripcion: "Portátil 14 pulgadas", precio: 500000, imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", stock: 5 }, 
                { id: 2, nombre: "Mouse", descripcion: "Mouse inalámbrico", precio: 15000, imagen: "https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", stock: 0 },
                { id: 3, nombre: "Teclado", descripcion: "Teclado mecánico", precio: 35000, imagen: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", stock: 3 },
                { id: 4, nombre: "Monitor", descripcion: "Monitor 24 pulgadas", precio: 120000, imagen: "https://plus.unsplash.com/premium_photo-1680721575441-18d5a0567269?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", stock: 0 },
                { id: 5, nombre: "Audífonos", descripcion: "Cancelación de ruido", precio: 45000, imagen: "https://images.unsplash.com/photo-1633346703386-bf6f1e59ec6f?q=80&w=1053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", stock: 8 },
                { id: 6, nombre: "Webcam", descripcion: "Full HD", precio: 30000, imagen: "https://images.unsplash.com/photo-1614588876378-b2ffa4520c22?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", stock: 0 },
                { id: 7, nombre: "Disco", descripcion: "Disco", precio: 60000, imagen: "https://plus.unsplash.com/premium_photo-1761033366858-d6ec8aca56e3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", stock: 3 }
            ]
        }
    },

    computed: { // Computed: solo afecta al buscador
        productosFiltrados() {
            return this.productos.filter(p =>
                p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
            )
        }
    }

}).mount("#app")    // Cuando Vue se monta: lee productos, le la lista con v-for y para cada producto evalúa producto.stock > 0 ( si es true muestra botón y si es false activa v-else )

