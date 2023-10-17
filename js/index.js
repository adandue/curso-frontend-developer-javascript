/*components*/ 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerButton = document.querySelector('#burger-button');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');
//functions
const toggleDesktopMenu = () => {
    const isAsideCartClosed = asideCart.classList.contains('inactive');
    if(!isAsideCartClosed) {
        asideCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
const toggleMobileMenu = () => {
    const isAsideCartClosed = asideCart.classList.contains('inactive');
    if(!isAsideCartClosed) {
        asideCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
const toggleCartMenu = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    asideCart.classList.toggle('inactive');
}
//events
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerButton.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);