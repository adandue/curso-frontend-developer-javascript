/*components*/ 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerButton = document.querySelector('#burger-button');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//functions
const toggleDesktopMenu = () => {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
const toggleMobileMenu = () => {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}
const toggleCartMenu = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
const openProductDetailAside = () => {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
const closeProductDetailAside = () => {
    productDetailContainer.classList.add('inactive');
}
//events
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerButton.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

const productList = [];
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV',
    price: 850.00,
    image: 'https://www.cyberpuerta.mx/img/product/XL/CP-LG-55UH5J-dc6dbf.jpg',
});
productList.push({
    name: 'Playstation',
    price: 800.00,
    image: 'https://m.media-amazon.com/images/I/61gimpyy0UL._AC_SL1500_.jpg',
});
productList.push({
    name: 'Pool Table',
    price: 560.00,
    image: 'http://www.pooltables.ca/images/felts/pinnacle-walnut-basic-green.jpg',
});
productList.push({
    name: 'Beer',
    price: 25.00,
    image: 'https://cdn.shopify.com/s/files/1/1176/1532/products/24packmodeloespeciallata355ml_406x406.png?v=1646078623',
});
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV',
    price: 850.00,
    image: 'https://www.cyberpuerta.mx/img/product/XL/CP-LG-55UH5J-dc6dbf.jpg',
});
productList.push({
    name: 'Playstation',
    price: 800.00,
    image: 'https://m.media-amazon.com/images/I/61gimpyy0UL._AC_SL1500_.jpg',
});
productList.push({
    name: 'Pool Table',
    price: 560.00,
    image: 'http://www.pooltables.ca/images/felts/pinnacle-walnut-basic-green.jpg',
});
productList.push({
    name: 'Beer',
    price: 25.00,
    image: 'https://cdn.shopify.com/s/files/1/1176/1532/products/24packmodeloespeciallata355ml_406x406.png?v=1646078623',
});

{/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */}


const renderProducts = (arr) => {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        //product = {name, price, image} --> product.image
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', '../icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoFigureImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);