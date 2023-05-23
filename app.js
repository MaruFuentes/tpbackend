class ProductManager {
    constructor() {
        this.products = [];
    }
    static id = 0;

    addProduct(title, description, price, img, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products [i].code === code) {
                console.log(`El codigo ${code} ya existe`);
                break;
            }
        }
    const newProduct = {
        title,
        description,
        price,
        img,
        code,
        stock,
    };
    if (!Object.values(newProduct).includes(undefined)){
        ProductManager.id++;
        this.products.push({
            ...newProduct,
            id: ProductManager.id,
        });
    } else { 
        console.log("Se requiere completar todos los campos");
    }
    }
    getProduct() {
        return this.products;
    }
    existe(id) {
        return this.products.find((producto) => producto.id === id);
    }
    getProductById(id){
        !this.existe(id) ? console.log("Not found") : console.log(this.existe(id));
    }
}
const productos = new ProductManager();
console.log("1- Muestro array vacio");
console.log(productos.getProduct());

console.log("---------------------------- O ----------------------------------------");

console.log("2- Se carga producto");
productos.addProduct("productoA", "descripcionA", 2500, "imgProductoA", "abc123", 45);
productos.addProduct("productoB", "descripcionB", 3500, "imgProductoB", "abc124", 90);

console.log("---------------------------- O ----------------------------------------");

console.log("3- Muestro los productos del array");
console.log(productos.getProduct());

console.log("---------------------------- O ----------------------------------------");

console.log("4- Agrego producto, pero falla por codigo existente")
productos.addProduct("ProductoC", "descripcion3", 1000, "img1", "abc123", 15);
console.log("El producto ProductoC no se puede agregar porque el capo CODE ya existe en otro producto");

console.log("---------------------------- O ----------------------------------------");

console.log("5- Obtener producto por ID")
productos.getProductById(2)
console.log("Se encuentra el producto solicitado con ID numero 2")

console.log("---------------------------- O ----------------------------------------");

console.log("6- Obtener producto por ID pero falla por ID inexistente")
productos.getProductById(4)
console.log("ID no encontrado, en este caso se intento buscar ID numero 4");