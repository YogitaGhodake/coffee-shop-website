document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.navbar');
    document.querySelector('#menu-btn').onclick = () => {
        console.log('Menu Button Clicked');
        navbar.classList.toggle('active');
        console.log(navbar.classList.contains('active'));
    }

    let cartItem = document.querySelector('.cart-items-container');
    document.querySelector('#cart-btn').onclick = () => {
        console.log('Cart Button Clicked');
        cartItem.classList.toggle('active');
        console.log(cartItem.classList.contains('active'));
    }
});
