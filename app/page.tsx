"use client";
import React, { useEffect } from 'react';
import { Coffee, MapPin, MessageCircle, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CafeProfile() {
  // 1. Inisialisasi Animasi AOS yang Dioptimalkan
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 50, // Animasi akan muncul 50px sebelum elemen terlihat
    });
  }, []);

  // 2. Data Cafe & Konfigurasi
  const namaCafe = "IMOK COFFEE";
  const whatsappNumber = "6283829285201"; 
  const alamat = "Jl. Situ Cileunca No.1 Pulosari Kecamatan Pangalengan Kabupaten Bandung";

  const menuKopi = [
    { nama: "Karamel Machiato", harga: "20k", deskripsi: "Belum ada keterangan.", gambar: "/images/karamel-machiato.jpeg" },
    { nama: "Caramel Coffeelatte.jpeg", harga: "17k", deskripsi: "Belum ada keterangan", gambar: "/images/caramel-coffeelatte.jpeg" },
    { nama: "Cafe Latte", harga: "25k", deskripsi: "Perpaduan sempurna espresso, susu steam, dan foam lembut.", gambar: "/images/cafe-latte.jpg" },
    { nama: "V60 (Single Origin)", harga: "28k", deskripsi: "Kopi seduh manual pilihan, cita rasa unik dari biji terbaik.", gambar: "/images/v60.jpg" },
    { nama: "Matcha Latte", harga: "28k", deskripsi: "Minuman teh hijau Jepang premium dengan susu.", gambar: "/images/matcha-latte.jpg" },
    { nama: "Red Velvet Latte", harga: "28k", deskripsi: "Minuman creamy dengan sentuhan manis dan warna merah velvet.", gambar: "/images/red-velvet-latte.jpg" },
  ];

  const hubungiWA = () => {
    const pesan = encodeURIComponent(`Halo ${namaCafe}, saya ingin tanya tentang menu/lokasi.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${pesan}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#46322B] overflow-x-hidden">
      
      {/* HERO SECTION DENGAN VIDEO */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
            <source src="/images/hero-video.mp4" type="video/mp4" />
            <img src="/images/hero-cafe.jpg" className="w-full h-full object-cover" alt="Cafe Hero" />
          </video>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6" data-aos="zoom-in" data-aos-duration="1500">
          <div className="flex justify-center mb-6 animate-bounce">
            <Coffee size={60} className="text-[#D4A373]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 drop-shadow-lg">
            {namaCafe}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 italic mb-8 font-light tracking-wide">
            "Setiap Cangkir Punya Cerita, Temukan Ceritamu di Sini."
          </p>
          <button 
            onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})}
            className="bg-[#D4A373] hover:bg-[#b98a59] text-[#46322B] px-8 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95"
          >
            Lihat Menu
          </button>
        </div>
      </header>

      {/* MENU SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#46322B]" data-aos="fade-up">
          Daftar Menu Kami
        </h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuKopi.map((item, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.gambar} 
                  alt={item.nama} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#46322B] mb-2">{item.nama}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.deskripsi}</p>
                <p className="text-[#D4A373] font-extrabold text-lg">Rp {item.harga}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERI SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#46322B] mb-4">Sudut Nyaman Kami</h2>
            <p className="text-gray-500">Intip suasana hangat di {namaCafe}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num} 
                data-aos="zoom-in" 
                data-aos-delay={num * 100} 
                className="relative h-64 overflow-hidden rounded-xl group cursor-pointer"
              >
                <img 
                  src={`/images/suasana-${num}.jpg`} 
                  alt={`Suasana ${num}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-[#46322B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white font-bold text-2xl">+</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOKASI SECTION */}
      <section className="bg-[#F4F1EA] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-3xl font-bold text-[#46322B] mb-6 underline decoration-[#D4A373]">Kunjungi Kami</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nikmati suasana tenang dan kopi terbaik langsung di kedai kami.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#D4A373] mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold">Alamat</h4>
                  <p className="text-gray-600">{alamat}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-[#D4A373] mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Minggu: 09:00 AM - 21:00 PM WIB</p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/Tox9AJ7wyM5SpEJK9" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#46322B] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#5d4037] transition-all shadow-md active:scale-95"
            >
              Buka di Google Maps
            </a>
          </div>

          {/* GOOGLE MAPS INTERAKTIF PANGALENGAN */}
          <div className="h-[350px] bg-gray-200 rounded-3xl overflow-hidden shadow-md relative border border-gray-100" data-aos="fade-left">
            <iframe 
              src="https://maps.google.com/maps?q=IMOK%20COFFEE%20Pangalengan%20Bandung&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi IMOK COFFEE Pangalengan"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#46322B] py-12 px-6 text-center text-white/60 border-t border-white/5">
        <p className="text-sm">© 2026 {namaCafe}. Semua Hak Dilindungi.</p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <button 
        onClick={hubungiWA}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 z-50 group"
      >
        <MessageCircle size={24} />
        <span className="font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          Chat Kami
        </span>
      </button>
    </div>
  );
}