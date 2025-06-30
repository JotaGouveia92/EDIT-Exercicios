// # - Criar um ficheiro html com uma tag script;
// # - Criar uma class chamada Ecommerce;
// # - Criar os seguintes métodos para a class:
// # ○ addProduct: aceita um produto e o adicione à lista de produtos;
// # ○ setProductPrice:
// # ■ Aceita 2 parametros: productId e price;
// # ■ Deve actualizar o produto com o preço novo (price).
// # ○ getAllProducts: devolve a lista de todos os produtos;
// # ○ getAllProductsNames: devolve uma string com todos os nomes dos produtos, separados por ponto e virgula “;” ;
// # ○ getProductById: aceita um id de produto e devolve esse produto;
// # ○ getProductsByPrice:
// # ■ aceita 2 parametros: initialPrice e finalPrice
// # ■ Devolve os produtos que sejam iguais ou superiores a initialPrice e menores ou iguais a finalPrice;
// # ○ addProductToCart: aceita um produto e adiciona esse produto ao carrinho de compras;
// # ○ getCartTotalPrice: devolve a soma de todos os produtos do carrinho;
// # - Um produto é composto pelos campos: name, price, id;
// # - O carrinho de compras é um array de produtos;

class Ecommerce {
    constructor(){
        this.products = [];
        this.cart = [];
    }

    addProduct(product){
        this.products.push(product);
    }

    // setProductPrice(productId, price){ 
    //     this.products = this.products.map(product => {
    //         if (product.id !== productId) {
    //             return product
    //         } 
    //         return {
    //             ...product,
    //             price
    //         }
    //     })
    // }

    setProductPrice(productId, price) {
        const product = this.products.find(product => product.id === productId);
        if (product) {
            product.price = price;
        }
    }

    getAllProducts(){
        console.warn("List All products")
        console.table(this.products);
        return this.products;
    }

    getAllProductsNames(){
        const allProductsNames = this.products.map(product => product.name).join(";")
        console.log("All Products Names: " + allProductsNames);
        return allProductsNames;
    }

    getProductById(productId){
        const product = this.products.find((product) => product.id === productId )
        console.log("All Products ID: " + JSON.stringify(product));
        return product;
    }

    getProductsByPrice(initialPrice, finalPrice){
       const productsByPrice = this.products.filter(({price}) => price >= initialPrice && price <= finalPrice)
       console.table(productsByPrice);
       return productsByPrice;
    }

    addProductToCart(product){
        this.cart.push(product)
    }

    getCartTotalPrice(){
        const totalPrice = this.cart.reduce(
            (accumulator, product) => accumulator + product.price, 0
        )
        console.log("Total Price: " + totalPrice);
        return totalPrice;
    } 
}

const shop = new Ecommerce();

shop.addProduct({
    id:50,
    name:"t-shirt",
    price:90
});

shop.addProduct({
    id:39,
    name:"shirt",
    price:49
});

shop.addProduct({
    id:30,
    name:"trousers",
    price:50
});

shop.addProduct({
    id:89,
    name:"sweatshirt",
    price:19
});

shop.addProduct({
    id:10,
    name:"shorts",
    price:50
});

shop.getAllProducts();
shop.setProductPrice(30, 60);
shop.getAllProducts();
shop.getAllProductsNames();
shop.getProductById(39);
shop.getProductsByPrice(10,60);
shop.getProductsByPrice(80,100);

shop.addProductToCart(shop.getProductById(10));

shop.getCartTotalPrice();
