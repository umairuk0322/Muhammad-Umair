let isLoginMode = true;


function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function registerUser(email, password) {
  const users = getUsers();

  if (users.find(u => u.email === email)) {
    return { success: false, message: "User already exists" };
  }

  users.push({ email, password });
  saveUsers(users);

  return { success: true };
}

function loginUser(email, password) {
  const users = getUsers();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return { success: false, message: "Invalid credentials" };
  }

  localStorage.setItem("token", "fake-token");
  localStorage.setItem("currentUser", email);

  return { success: true };
}

function logoutUser() {
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser");
  updateAuthUI();
}

function isAuthenticated() {
  return !!localStorage.getItem("token");
}

function openAuth() {
  document.getElementById('auth-modal').style.display = 'flex';
}

function closeAuth() {
   document.getElementById('auth-modal').style.display = 'none';
}

function toggleAuthMode() {
  isLoginMode = !isLoginMode;

  document.getElementById("auth-title").textContent =
    isLoginMode ? "Login" : "Register";

  document.getElementById("auth-switch-text").textContent =
    isLoginMode ? "Don't have an account?" : "Already have an account?";

    document.getElementById("auth-switch-btn").textContent=
    isLoginMode?"Register":"Login";
}


function handleAuth() {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;

  let res;

  if (isLoginMode) {
    res = loginUser(email, password);
  } else {
    res = registerUser(email, password);
  }

  if (!res.success) {
    alert(res.message);
    return;
  }

 

  closeAuth();
  updateAuthUI();
}


function updateAuthUI() {
  const btn = document.getElementById("auth-btn");
  const btnMobile = document.getElementById("auth-btn-mobile"); 

  if (isAuthenticated()) {
    const user = localStorage.getItem("currentUser");

    btn.textContent = "Logout (" + user + ")";
    btn.onclick = logoutUser;
     if (btnMobile) { btnMobile.textContent = "Logout"; btnMobile.onclick = logoutUser; }

  } else {
    btn.textContent = "Login";
    btn.onclick = openAuth;
    if (btnMobile) { btnMobile.textContent = "Login"; btnMobile.onclick = () => { openAuth(); toggleMobileMenu(); }; }

  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  updateAuthUI(); 
  fetchAPIProducts();
});



function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}



  const TOAST_DURATION = 3500;
 
  let allProducts = [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  document.addEventListener('DOMContentLoaded', () => {
      updateCartUI();
      fetchAPIProducts();
  });




  const smartwatchData = [
  { id: 9001, title: "Apple Watch Series 9", price: 399, description: "Advanced health sensors, crash detection.", thumbnail: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=400&q=80", rating: 4.8, discountPercentage: 0, category: "smartwatches" },
  { id: 9002, title: "Samsung Galaxy Watch 6", price: 299, description: "Track your sleep, heart rate, and fitness goals.", thumbnail: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80", rating: 4.5, discountPercentage: 12, category: "smartwatches" },
  { id: 9003, title: "Google Pixel Watch 2", price: 349, description: "Powered by Wear OS with Fitbit integration.", thumbnail: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80", rating: 4.3, discountPercentage: 0, category: "smartwatches" },
  { id: 9004, title: "Garmin Fenix 7 Pro", price: 599, description: "Built for extreme sports with GPS, solar charging.", thumbnail: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=400&q=80", rating: 4.9, discountPercentage: 8, category: "smartwatches" },
  { id: 9006, title: "Apple Watch Ultra 2", price: 799, description: "Titanium case, precision GPS, 60-hour battery.", thumbnail: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=400&q=80", rating: 5.0, discountPercentage: 0, category: "smartwatches" },
  { id: 9007, title: "Apple Watch SE 2nd Gen", price: 249, description: "All the essentials of Apple Watch at a more affordable price with crash detection.", thumbnail: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=400&q=80", rating: 4.4, discountPercentage: 0, category: "smartwatches" },
{ id: 9009, title: "Garmin Venu 3", price: 449, description: "AMOLED display with advanced sleep tracking, nap detection, and wheelchair mode.", thumbnail: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=400&q=80", rating: 4.7, discountPercentage: 0, category: "smartwatches" },
{ id: 9010, title: "Amazfit Balance", price: 199, description: "AI-powered health management with Zepp Coach and a gorgeous AMOLED display.", thumbnail: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=400&q=80", rating: 4.2, discountPercentage: 18, category: "smartwatches" },
{ id: 9011, title: "Polar Vantage V3", price: 599, description: "Elite sports watch with ECG, optical heart rate, and multi-band GPS for athletes.", thumbnail: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80", rating: 4.8, discountPercentage: 0, category: "smartwatches" },
{ id: 9012, title: "Huawei Watch GT 4 Pro", price: 349, description: "Sapphire glass, titanium case, two-week battery and comprehensive health tracking.", thumbnail: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80", rating: 4.5, discountPercentage: 7, category: "smartwatches" },
{ id: 9013, title: "Withings ScanWatch 2", price: 349, description: "Hybrid smartwatch with ECG, SpO2, and sleep apnea detection in a classic design.", thumbnail: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=400&q=80", rating: 4.3, discountPercentage: 0, category: "smartwatches" }
];


  
  async function fetchAPIProducts() {
      try {
  
          const categoriesToFetch = [
            'smartphones', 
            'laptops', 
            'tablets', 
            'mobile-accessories'
          ];
          const fetchPromises = categoriesToFetch.map(cat => 
              fetch(`https://dummyjson.com/products/category/${cat}`).then(res => res.json())
          );
          
          const results = await Promise.all(fetchPromises);
         
          allProducts = results.flatMap(result => result.products);
          
    
          allProducts = allProducts.filter(p => 
          p.category !== 'mens-watches' && p.category !== 'womens-watches'
          );
          allProducts = [...allProducts, ...smartwatchData];
          
          // Render data
          renderFeaturedProducts();
          renderProductsGrid(allProducts);
      } catch (error) {
          console.error("Error fetching API:", error);
          document.getElementById('products-grid').innerHTML = `
              <div class="col-span-full text-center text-red-400 py-10 bg-red-900/20 rounded-xl border border-red-900/50">
                  Failed to load products. Please check your connection.
              </div>
          `;
      } finally {
          document.getElementById('featured-loading').classList.add('hidden');
          document.getElementById('featured-grid').classList.remove('hidden');
          document.getElementById('products-loading').classList.add('hidden');
      }
  }

  function renderFeaturedProducts() {
      if (allProducts.length === 0) return;
      
      const grid = document.getElementById('featured-grid');
      grid.innerHTML = '';
      
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      const featured = shuffled.slice(0, 4);

      featured.forEach(product => {
          grid.innerHTML += createProductCardHTML(product);
      });
  }


  function renderProductsGrid(products) {
      const grid = document.getElementById('products-grid');
      grid.innerHTML = '';
      
      if (products.length === 0) {
          grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-12">No products found for this category.</p>`;
          return;
      }

      products.forEach(product => {
          grid.innerHTML += createProductCardHTML(product);
      });
  }

  function createProductCardHTML(product) {
      const safeTitle = product.title.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
      
      return `
          <div class="group bg-gray-800/30 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
              <div class="relative aspect-[4/3] bg-white overflow-hidden p-6 flex items-center justify-center">
                  <img src="${product.thumbnail}" alt="${safeTitle}" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                  ${product.discountPercentage > 10 ? `<div class="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Sale -${Math.round(product.discountPercentage)}%</div>` : ''}
                  <div class="absolute top-3 right-3 bg-gray-900/80 backdrop-blur text-yellow-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                      ★ ${product.rating.toFixed(1)}
                  </div>
              </div>
              <div class="p-5 flex-grow flex flex-col justify-between bg-gray-900">
                  <div class="mb-4">
                      <div class="flex justify-between items-start mb-2 gap-2">
                          <h3 class="text-white font-semibold line-clamp-2 text-sm" title="${safeTitle}">${safeTitle}</h3>
                          <span class="text-blue-400 font-bold whitespace-nowrap">$${product.price}</span>
                      </div>
                      <p class="text-gray-500 text-xs line-clamp-2">${product.description}</p>
                  </div>
                  <button onclick="handleAddToCart(${product.id})" class="w-full py-3 bg-gray-800 hover:bg-blue-600 border border-gray-700 hover:border-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-md active:scale-95">
                      Add to Cart
                  </button>
              </div>
          </div>
      `;
  }

  function filterProducts(category) {
      const grid = document.getElementById('products-grid');
      const loader = document.getElementById('products-loading');
      
      updateFilterButtons(category);
      
      const catNames = {
          'all': 'All Products',
          'smartphones': 'Phones',
          'laptops': 'Laptops',
          'smartwatches': 'SmartWatches',
          'tablets': 'Tablets',
          'mobile-accessories': 'Accessories'
          
      };
      document.getElementById('breadcrumb-category').textContent = catNames[category];
      document.getElementById('page-title').textContent = category === 'all' ? 'Our Collection' : catNames[category];

      grid.classList.add('hidden');
      loader.classList.remove('hidden');

      setTimeout(() => {
          let filtered = allProducts;
          if (category !== 'all') {
              filtered = allProducts.filter(p => p.category === category);
          }
          renderProductsGrid(filtered);
          
          loader.classList.add('hidden');
          grid.classList.remove('hidden');
      }, 300);
  }


  function updateFilterButtons(activeCategory) {
      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(btn => {
          btn.className = "filter-btn w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 transition-all group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:scale-110";
      });
      
      const activeBtn = document.getElementById(`filter-${activeCategory}`);
      if (activeBtn) {
          activeBtn.className = "filter-btn w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-900/20 transition-all scale-110";
      }
  }


  function showPage(pageId, category = null) {
      const homePage = document.getElementById('home-page');
      const productsPage = document.getElementById('products-page');
      const navHome = document.getElementById('nav-home');
      const navProducts = document.getElementById('nav-products');
      
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (pageId === 'home') {
          homePage.classList.remove('hidden');
          productsPage.classList.add('hidden');
          
          navHome.classList.add('nav-active');
          navProducts.classList.remove('nav-active');
      } else if (pageId === 'products') {
          homePage.classList.add('hidden');
          productsPage.classList.remove('hidden');
          
          navHome.classList.remove('nav-active');
          navProducts.classList.add('nav-active');
          
          if (category) {
              filterProducts(category);
          } else {
              filterProducts('all');
          }
      }
  }


  function handleAddToCart(productId) {
      const product = allProducts.find(p => p.id === productId);
      if(!product) return;

      const cartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail
      };
      
      addToCart(cartItem);
  }

  function addToCart(product) {
    let existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
    showToast(product);
  }

  function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartUI();
      renderCartSidebar();
  }

  function updateQuantity(productId, delta) {
      let item = cart.find(item => item.id === productId);
      if (item) {
          item.quantity += delta;
          if (item.quantity <= 0) {
              removeFromCart(productId);
          } else {
              localStorage.setItem("cart", JSON.stringify(cart));
              updateCartUI();
              renderCartSidebar();
          }
      }
  }

  function updateCartUI() {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('cart-count').textContent = totalItems;
      document.getElementById('mobile-cart-count').textContent = totalItems;
      document.getElementById('sidebar-cart-count').textContent = totalItems;
  }
 
  function toggleCart() {
      const overlay = document.getElementById('cart-overlay');
      const sidebar = document.getElementById('cart-sidebar');
      
      if (sidebar.classList.contains('translate-x-full')) {
          
          overlay.classList.remove('hidden');
          
          setTimeout(() => {
              overlay.classList.remove('opacity-0');
              overlay.classList.add('opacity-100');
              sidebar.classList.remove('translate-x-full');
          }, 10);
          renderCartSidebar();
      } else {
         
          sidebar.classList.add('translate-x-full');
          overlay.classList.remove('opacity-100');
          overlay.classList.add('opacity-0');
          setTimeout(() => overlay.classList.add('hidden'), 300);
      }
  }

  function renderCartSidebar() {
      const container = document.getElementById('cart-items');
      const totalEl = document.getElementById('cart-total');
      
      container.innerHTML = '';
      
      if (cart.length === 0) {
          container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-gray-500 py-20">
                <span class="text-4xl mb-4">🛒</span>
                <p>Your cart is empty</p>
            </div>
          `;
          totalEl.textContent = '$0.00';
          return;
      }

      let total = 0;
      cart.forEach(item => {
          total += item.price * item.quantity;
          const safeTitle = item.title.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
          container.innerHTML += `
              <div class="flex gap-4 bg-gray-800 p-3 rounded-xl border border-gray-700 relative pr-8">
                  <div class="w-20 h-20 bg-white rounded-lg p-1 flex-shrink-0 flex items-center justify-center">
                      <img src="${item.thumbnail}" alt="${safeTitle}" class="max-w-full max-h-full object-contain">
                  </div>
                  <div class="flex flex-col justify-between flex-grow py-1">
                      <h4 class="text-sm font-semibold text-white line-clamp-2 pr-4">${safeTitle}</h4>
                      <div class="flex justify-between items-center mt-2">
                          <span class="text-blue-400 font-bold">$${item.price}</span>
                          <div class="flex items-center gap-2 bg-gray-900 rounded-lg px-2 py-1">
                              <button onclick="updateQuantity(${item.id}, -1)" class="text-gray-400 hover:text-white px-1">-</button>
                              <span class="text-xs w-4 text-center font-bold">${item.quantity}</span>
                              <button onclick="updateQuantity(${item.id}, 1)" class="text-gray-400 hover:text-white px-1">+</button>
                          </div>
                      </div>
                  </div>
                  <button onclick="removeFromCart(${item.id})" class="absolute top-2 right-2 text-gray-500 hover:text-red-400 p-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
              </div>
          `;
      });
      
      totalEl.textContent = `$${total.toFixed(2)}`;
  }

  function checkout() {

      if (!isAuthenticated()) {
    openAuth();
    return;
  }



      if (cart.length === 0) return;
      
      const msg = document.createElement('div');
      msg.className = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-8 rounded-2xl border border-blue-500/50 shadow-2xl z-[100] text-center max-w-sm w-full";
      msg.innerHTML = `
        <div class="w-16 h-16 bg-green-500/20 text-green-400 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">✓</div>
        <h3 class="text-xl font-bold mb-2">Order Confirmed!</h3>
        <p class="text-gray-400 text-sm mb-6">Thank you for shopping at Vistona Shop. Your order has been placed successfully.</p>
        <button onclick="this.parentElement.remove(); cart=[]; localStorage.setItem('cart', '[]'); updateCartUI(); toggleCart();" class="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-bold transition">Done</button>
      `;
      document.body.appendChild(msg);
  }

  function showToast(product) {

    const wrap = document.getElementById("toast-container");
    
    const existingToast = wrap.querySelector(".toast");
  if (existingToast) {
    dismissToast(existingToast);
  }

  
    const t = document.createElement("div");
    t.className = [
      "toast", "pointer-events-auto", "flex", "items-center", "gap-3",
      "bg-gray-800", "border", "border-gray-700", "rounded-2xl", "px-4", "py-3",
      "w-80", "relative", "overflow-hidden", "opacity-0", "translate-y-10", "scale-95", "shadow-xl"
    ].join(" ");

    const safeTitle = product.title.replace(/'/g, "&#39;").replace(/"/g, "&quot;");

    t.innerHTML = `
      <div class="bg-white p-1 rounded-xl flex-shrink-0 w-12 h-12 flex items-center justify-center">
          <img src="${product.thumbnail}" alt="${safeTitle}" class="max-w-full max-h-full object-contain" onerror="this.style.visibility='hidden'">
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-white truncate">${safeTitle}</p>
        <p class="text-xs text-green-400 font-medium flex items-center gap-1 mt-0.5">
          <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
          Added to cart
        </p>
      </div>
      <button onclick="dismissToast(this.closest('.toast'))" class="w-6 h-6 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-400 hover:text-white text-xs flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer">✕</button>
      <div class="toast-progress absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-teal-400 origin-left"></div>
    `;

    wrap.appendChild(t); 

    requestAnimationFrame(() => requestAnimationFrame(() => {
      t.classList.remove("opacity-0", "translate-y-10", "scale-95");
      t.classList.add("opacity-100", "translate-y-0", "scale-100");
    }));

    const bar = t.querySelector(".toast-progress");
    setTimeout(() => {
      bar.style.transition = `transform ${TOAST_DURATION}ms linear`;
      bar.style.transform = "scaleX(0)";
    }, 20);

    t._timer = setTimeout(() => dismissToast(t), TOAST_DURATION);
  }

  function dismissToast(t) {
    clearTimeout(t._timer);
    t.classList.remove("opacity-100", "translate-y-0", "scale-100");
    t.classList.add("hide", "opacity-0", "translate-y-5", "scale-95");
    setTimeout(() => t.remove(), 250);
  }



