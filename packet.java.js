// scripts.js

function selectPackage(name, speed, tv, phone, streaming, price) {
    document.getElementById('purchase-form').style.display = 'block';
    document.getElementById('package-name').value = name;
    document.getElementById('internet-speed').value = speed;
    document.getElementById('tv-package').value = tv;
    document.getElementById('phone').value = phone;
    document.getElementById('streaming').value = streaming;
    document.getElementById('price').value = price;
}

function submitForm() {
    // Ambil data dari form
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const packageName = document.getElementById('package-name').value;
    const speed = document.getElementById('internet-speed').value;
    const tvPackage = document.getElementById('tv-package').value;
    const phone = document.getElementById('phone').value;
    const streaming = document.getElementById('streaming').value;
    const price = document.getElementById('price').value;

    // Simpan atau proses data form sesuai kebutuhan di sini

    // Tampilkan daftar kontak
    document.getElementById('contact-list').style.display = 'block';
}

function sendWhatsApp(contact) {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const packageName = document.getElementById('package-name').value;
    const speed = document.getElementById('internet-speed').value;
    const tvPackage = document.getElementById('tv-package').value;
    const phone = document.getElementById('phone').value;
    const streaming = document.getElementById('streaming').value;
    const price = document.getElementById('price').value;

    const message = `Nama: ${name}\nAlamat: ${address}\nPaket: ${packageName}\nKecepatan: ${speed}\nTV: ${tvPackage}\nTelepon: ${phone}\nStreaming: ${streaming}\nHarga: ${price}`;

    window.location.href = `https://wa.me/${contact}?text=${encodeURIComponent(message)}`;
}
