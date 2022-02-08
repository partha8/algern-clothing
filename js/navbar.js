const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
  <div id="nav" class="nav">
            <div class="information">
                <a href="#">Customer Service</a>
                <a href="#">Find a store</a>
            </div>
            <!-- <img src="img/dark-logo.png" class="brand-logo" alt=""> -->
            <a href="./index.html">
                <h2 class="brand-logo logo">Algern Clothing</h2>
            </a>
            <div class="nav-items">
                <a href="./signup-login.html"><i class='bx bxs-user'></i></a>
                <a href="./cart.html"><i class='bx bxs-cart'></i></a>
                <a href="./wishlist.html"><i class='bx bxs-heart'></i></a>
                <div class="search">
                    <!-- <i class='bx bx-search-alt-2'></i> -->
                    <span class="iconify" data-icon="ic:round-search" data-inline="false"></span>
                    <!-- <input type="text" class="search-box" placeholder="search brand, product">
                    <button class=" btn btn-primary-solid search-btn">search</button> -->
                </div>
            </div>
        </div>
        <ul id='links-container' class="links-container">
            <li class="link-item"><a href="./product-list.html" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">children</a></li>
            <li class="link-item"><a href="#" class="link">handbags</a></li>
            <li class="link-item"><a href="#" class="link">beauty</a></li>
            <li class="link-item"><a href="#" class="link">jewellery and watches</a></li>
        </ul>
    `;
};

createNav();
