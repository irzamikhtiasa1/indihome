// scripts.js

// Fungsi untuk menyimpan data paket dan mengarahkan ke halaman pembelian
function selectPackage(type, name, ...details) {
    localStorage.setItem('package-type', type);
    localStorage.setItem('package-name', name);
    localStorage.setItem('details', details.slice(0, -1).join(', '));
    localStorage.setItem('price', details.pop());
    window.location.href = 'Form.html';
}

// Fungsi untuk menangani pengiriman form
function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    // Validasi form: Pastikan nama dan alamat sudah diisi
    if (!name || !address) {
        alert('Mohon isi semua field');
        return;
    }

    // Menampilkan modal dengan daftar kontak
    const modal = new bootstrap.Modal(document.getElementById('contactListModal'));
    modal.show();
}

// Fungsi untuk mengirim pesan WhatsApp
function sendWhatsApp(contact) {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const packageType = localStorage.getItem('package-type');
    const packageName = localStorage.getItem('package-name');
    const details = localStorage.getItem('details');
    const price = localStorage.getItem('price');

    const message = `Hallo MinHome%0ANama: ${name}%0AAlamat: ${address}%0AType: ${packageType.replace(/\+/g, '%2B')}%0APaket: ${packageName}%0ADetail: ${details.replace(/\+/g, '%2B')}%0AHarga: ${price} (Harga belum termasuk PPN 11%)`;

    window.location.href = `https://wa.me/${contact}?text=${message}`;
}

// Mengisi form dengan data dari localStorage di purchase.html
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('Form.html')) {
        const packageType = localStorage.getItem('package-type');
        const packageName = localStorage.getItem('package-name');
        const details = localStorage.getItem('details');
        const price = localStorage.getItem('price');

        if (packageType && packageName && details && price) {
            // Mengisi form dengan data dari localStorage
            document.getElementById('package-type').value = packageType;
            document.getElementById('package-name').value = packageName;
            document.getElementById('details').value = details;
            document.getElementById('price').value = price;

            // Menampilkan detail paket yang dipilih di elemen #package-details
            const packageDetails = `Paket: ${packageName}<br>Kecepatan: ${details}<br>Harga: ${price}`;
            document.getElementById('package-details').innerHTML = packageDetails;
        } else {
            document.getElementById('package-details').innerHTML = "Tidak ada paket yang dipilih.";
        }
    }
});
