const sampleProducts = [

    {
      id : 1,
      name: "Product 1",
      description: "Description of product 1",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id : 2,
      name: "Product 2",
      description: "Description of product 2",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id : 3,
      name: "Product 3",
      description: "Description of product 3",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id : 4,
      name: "Product 4",
      description: "Description of product 4",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id : 5,
      name: "Product 5",
      description: "Description of product 5",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id : 6,
      name: "Product 6",
      description: "Description of product 6",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id : 7,
      name: "Product 7",
      description: "Description of product 7",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id : 8,
      name: "Product 8",
      description: "Description of product 8",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id : 9,
      name: "Product 9",
      description: "Description of product 9",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id : 10,
      name: "Product 10",
      description: "Description of product 10",
      image:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
  class NavBar {
    constructor() {
      this.render();
    }
  
    render() {
      document.getElementById("navbar").innerHTML = `
              <nav>
                  <h1>E-commerce Website</h1>
                  <ul class="nav-links">
                  <li><a href="index.html"/>Home</li>
                  <li><a href="login.html"/>log in</li>
                  <li><a href="cart.html">Cart(<span id="cart-count">0</span>
                  )</a></li>
                  </ul>     
              </nav>
          `;
    }
    updateCartCount(count) {
      document.getElementById("cart-count").textContent = count;
    }
  }

  function updateCartCount(count) {
    document.getElementById("cart-count").textContent = count;
  }
  
  class Footer {
    constructor() {
      this.render();
    }
  
    render() {
      document.getElementById("footer").innerHTML = `
                <footer>
                    <p>&copy; 2025 E-commerce Website</p>
                    <ul class="footer-links">
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Service</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </footer>
            `;
    }
  }
  
  class Products {
    constructor(products, cart) {
      this.products = products;
      this.cart = cart;
      this.render();
    }
  
    render() {
      const mainContent = document.getElementById("main-content");
      mainContent.innerHTML = this.products
        .map(
          (product) => `
              <div class="product" style="background : black;color : white; width:200px; margin:20px;">
                  <img src="${product.image}" alt="${product.name}" style="height:200px; width:200px;">
                  <h3>${product.name}</h3>
                  <p style= "color: white";>${product.description}</p>
  
                  <button onclick="cart.addToCart(${product.id},'${product.name}','${product.description}','${product.image}')">Add To Cart</button>

              </div>
              `
        )
        .join("");
    }
  }
  
  class Cart {
    constructor() {
      this.items = JSON.parse(localStorage.getItem("cart")) || [];
      this.updateCartDisplay();
    }
  
    addToCart(id, name, description, image) {
      this.items.push({ id, name, description, image });
      updateCartCount(this.items.length);
      localStorage.setItem("cart", JSON.stringify(this.items));
      alert(`${name} has been added successfully to cart!!`);
    }
    
  
    updateCartDisplay() {
      const navbar = new NavBar();
      navbar.updateCartCount(this.items.length);
    }
    
      // inside cart html 
      
    displayCartItems() {
      const cartItemContainer = document.getElementById("cart-items");
  
      console.log(this.items);
  
      if (this.items.length === 0) {
        cartItemContainer.innerHTML = `<p>Your cart is empty!</p>`;
      } else {
        cartItemContainer.innerHTML = this.items
          .map(
            (item) => `
              <div class="cart-item" style="background : black; width:200px; margin:20px; color:white";>
                  <img src="${item.image}" alt="${item.name}" style="height:200px; width:200px;">

                  <h3>${item.name}</h3>
  
                  <button onclick="cart.removeFromCart('${item.name}')">Remove</button>
              </div>
              `
          )
          .join("");
      }
    }
  
    removeFromCart(name) {
      this.items = this.items.filter((item) => item.name !== name);
      localStorage.setItem("cart", JSON.stringify(this.items));
      this.displayCartItems();
      this.updateCartDisplay();
    }
  }
  
  const cart = new Cart();

  if (document.getElementById("main-content")) {
    new NavBar();
    new Products(sampleProducts, cart);
  }
  
  if (document.getElementById("cart-items")) {
    new NavBar();
    cart.displayCartItems();
  }
  