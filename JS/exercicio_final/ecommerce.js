class Ecommerce {
  constructor() {
    this.products = [];
    this.cart = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  setProductPrice(productId, price) {
    const product = this.products.find((product) => product.id === productId);
    if (product) {
      product.price = price;
    }
  }

  getAllProducts() {
    console.warn("List All products");
    console.table(this.products);
    return this.products;
  }

  getAllProductsNames() {
    const allProductsNames = this.products
      .map((product) => product.name)
      .join(";");
    console.log("All Products Names: " + allProductsNames);
    return allProductsNames;
  }

  getProductById(productId) {
    const product = this.products.find((product) => product.id === productId);
    console.log("All Products ID: " + JSON.stringify(product));
    return product;
  }

  getProductsByPrice(initialPrice, finalPrice) {
    const productsByPrice = this.products.filter(
      ({ price }) => price >= initialPrice && price <= finalPrice
    );
    console.table(productsByPrice);
    return productsByPrice;
  }

  addProductToCart(product) {
    this.cart.push(product);
  }

  getCartTotalPrice() {
    const totalPrice = this.cart.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );
    console.log("Total Price: " + totalPrice);
    return totalPrice;
  }
}

// shop.addProduct({
//   id: 50,
//   name: "t-shirt",
//   price: 90,
// });

// shop.addProduct({
//   id: 39,
//   name: "shirt",
//   price: 49,
// });

// shop.addProduct({
//   id: 30,
//   name: "trousers",
//   price: 50,
// });

// shop.addProduct({
//   id: 89,
//   name: "sweatshirt",
//   price: 19,
// });

// shop.addProduct({
//   id: 10,
//   name: "shorts",
//   price: 50,
// });

// shop.getAllProducts();
// shop.setProductPrice(30, 60);
// shop.getAllProducts();
// shop.getAllProductsNames();
// shop.getProductById(39);
// shop.getProductsByPrice(10, 60);
// shop.getProductsByPrice(80, 100);

// shop.addProductToCart(shop.getProductById(10));

// shop.getCartTotalPrice();

const shop = new Ecommerce();

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    const container = document.getElementById("products-container");
    products.forEach((product) => {
      const card = document.createElement("div");
      const title = document.createElement("h2");
      const imgProduct = document.createElement("img");
      imgProduct.src = product.image;
      imgProduct.alt = product.title;
      const addButton = document.createElement("button");
      addButton.textContent = "Adicionar ao carrinho";
      addButton.addEventListener("click", () => {
        shop.addProductToCart(product);

        const payload = {
          userId: 1,
          date: new Date().toISOString().split("T")[0],
          products: shop.cart.map((products) => ({
            productId: products.id,
            quantity: products.quantity,
          })),
        };

        fetch("https://fakestoreapi.com/carts/3", {
          method: "PUT",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Resposta da API", data);
            alert(`${product.title} Adicionado ao carrinho`);
          })
          .catch((error) => {
            console.error("Erro", error);
            alert("Erro ao enviar!");
          });
      });

      card.append(title);
      card.append(imgProduct);
      card.append(addButton);

      container.append(card);

      // FOOTER

      let footer = document.getElementsByTagName("footer")[0];
      footer.textContent = `Copyright ${new Date().getFullYear()}`;
    });
  });
