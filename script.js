// Pesan ucapan (Bisa diedit sesuka hati, gunakan \n untuk baris baru)
const ucapan = "Hai! Selamat ulang tahun ya! \nSemoga panjang umur, sehat selalu, \ndan semua impianmu tercapai tahun ini. \nTetap jadi orang baik ya! 🥳✨";

function bukaHadiah() {
    const landing = document.getElementById('landing-page');
    const content = document.getElementById('main-content');
    const music = document.getElementById('bg-music');

    // 1. Sembunyikan tombol, tampilkan kartu
    landing.classList.add('hidden');
    content.classList.remove('hidden');

    // 2. Putar Musik (Browser memblokir autoplay, jadi harus via klik user)
    music.play().catch(error => console.log("Gagal memutar musik otomatis"));

    // 3. Efek Confetti (Kertas warna-warni)
    tembakConfetti();

    // 4. Efek Mengetik Teks
    ketikPesan();
}

function tembakConfetti() {
    const duration = 3000; // Durasi 3 detik
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function ketikPesan() {
    const element = document.getElementById('typing-text');
    let i = 0;
    element.innerHTML = ""; // Reset teks
    
    function ngetik() {
        if (i < ucapan.length) {
            // Jika karakter adalah \n, ganti dengan <br> agar turun baris
            if (ucapan.charAt(i) === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += ucapan.charAt(i);
            }
            i++;
            setTimeout(ngetik, 50); // Kecepatan mengetik (50ms)
        }
    }
    ngetik();
}