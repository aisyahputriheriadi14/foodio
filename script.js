let cart = [];
function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}
function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toLocaleString()} IDR`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toLocaleString();
}

function toggleCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
}
function checkout() {
  if (cart.length === 0) {
    alert('Keranjang masih kosong!');
    return;
  }
  let message = 'Halo, saya ingin memesan:\n';
  let total = 0;
  cart.forEach(item => {
    message += `- ${item.name}: ${item.price.toLocaleString()} IDR\n`;
    total += item.price;
  });
  message += `\nTotal: ${total.toLocaleString()} IDR`;
  const phoneNumber = '6285754649410';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide-image');
const totalSlides = slides.length;
function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}
showSlide(currentSlide);
setInterval(nextSlide, 3000);

