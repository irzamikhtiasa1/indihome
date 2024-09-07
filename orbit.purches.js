/ Fungsi untuk membuka link WhatsApp dengan pesan default
function sendMessage(phoneNumber) {
    const message = "Halo MinHome, saya tertarik ingin berlangganan Orbit. Tapi saya ingin tanya dulu.";
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Arahkan pengguna ke WhatsApp
    window.open(waLink, '_blank');
}
