// scripts.js

function selectPackage(type, name, ...details) {
    localStorage.setItem('package-type', type);
    localStorage.setItem('package-name', name);
    localStorage.setItem('details', details.slice(0, -1).join(', '));
    localStorage.setItem('price', details.pop());
    window.location.href = 'Form.html';
}

function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    if (!name || !address) {
        alert('Mohon isi semua field');
        return;
    }

    document.getElementById('contact-list-section').style.display = 'block';
}

function sendWhatsApp(contact) {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const packageType = localStorage.getItem('package-type');
    const packageName = localStorage.getItem('package-name');
    const details = localStorage.getItem('details');
    const price = localStorage.getItem('price');

    const message = `Nama: ${name}%0AAlamat: ${address}%0AType: ${packageType}%0APaket: ${packageName}%0ADetail: ${details}%0AHarga: ${price}`;

    window.location.href = `https://wa.me/${contact}?text=${message}`;
}

// Mengisi form dengan data dari localStorage di purchase.html
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('purchase.html')) {
        document.getElementById('package-type').value = localStorage.getItem('package-type');
        document.getElementById('package-name').value = localStorage.getItem('package-name');
        document.getElementById('details').value = localStorage.getItem('details');
        document.getElementById('price').value = localStorage.getItem('price');
    }
});
