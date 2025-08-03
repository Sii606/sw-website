document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const product = document.querySelector('input[name="product"]').value.trim();
    const quantity = document.querySelector('input[name="quantity"]').value.trim();
    const date = document.querySelector('input[name="date"]').value;
    const message = document.querySelector('textarea[name="message"]').value.trim();

    const whatsappNumber = "919496769405";
    const text = `Hello! I would like to order:\n\n🍽️ Product: ${product}\n📦 Quantity: ${quantity}\n🗓️ Delivery Date: ${date}\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📜 Note: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
});

document.getElementById('viewBtn').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('orderBtn').addEventListener('click', () => {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
});

lottie.loadAnimation({
    container: document.getElementById('cupcake-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/5e093d80-74e1-4dd6-a42c-282d02b4705a/zKqM9YDoUD.json'
});
