const deleteButtons = document.querySelectorAll('.delete-btn-cart');

deleteButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const listItem = event.target.closest('li');
        if (listItem) {
            listItem.remove();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cart = document.querySelector('.cart');
    const toggleCartBtn = document.querySelector('.toggle-cart-btn'); // Asegúrate de tener este botón en tu HTML
  
    toggleCartBtn.addEventListener('click', function () {
      cart.classList.toggle('open'); // Alterna la visibilidad del carrito
    });
  });
  