import React from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const Headlines = () => {
  const headlines = [
    {
      image: '/gub.png',
      date: '5 Agustus 2024',
      title: 'Berita Penting Pertama',
      link: '/berita/berita-pertama'
    },
    {
      image: '/gub.png',
      date: '4 Agustus 2024',
      title: 'Berita Penting Kedua',
      link: '/berita/berita-kedua'
    },
    {
      image: '/gub.png',
      date: '4 Agustus 2024',
      title: 'Berita Penting Ketiga',
      link: '/berita/berita-ketiga'
    },
    {
      image: '/gub.png',
      date: '4 Agustus 2024',
      title: 'Berita Penting Ketiga',
      link: '/berita/berita-ketiga'
    },
  ];

  return (
    <section className="w-full flex items-center justify-center min-h-screen py-12" style={{ backgroundColor: 'rgb(0, 51, 0)' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mb-20">PROFIL DESA</h2>

        {/* Teks Deskriptif tentang Kelurahan Kinilow */}
        <div className="text-white text-center mb-10">
          <p className="text-lg mb-4">
            <b><i>Kelurahan Kinilow</i></b>, terletak di Kecamatan Tomohon Utara, Sulawesi Utara, dikelilingi pegunungan dengan pemandangan <b><i>Gunung Lokon</i></b> yang indah dan memiliki kode pos 95414. Terdiri dari 7 lingkungan, nama <b><i>Kinilow diambil dari pohon kayu yang dulu tumbuh di daerah tersebut</i></b>, serta memiliki julukan <b><i>Nimokal</i></b> yang berarti <b><i>Menghalang</i></b> Nama Kinilow juga terkait dengan cerita <b><i>Burung Kilow-Kilow</i></b> yang memberi peringatan saat terjadi kebakaran hebat di masa lampau.
          </p>
        </div>

        <div className="text-white text-center mb-10">
          <p className="text-lg mb-4">
          Kelurahan Kinilow menjadi salah satu destinasi unggulan di Kota Tomohon, menawarkan pengalaman perjalanan yang nyaman dengan jalur lalu lintas yang akan ditata untuk mendukung wisatawan dan pelaku perjalanan. Di sepanjang jalur ini, Anda dapat menemukan hampir <b><i>20 pelaku UMKM</i></b> yang menghadirkan produk khas <b><i>anyaman bambu berkualitas</i></b>, yang telah menjadi daya tarik wisatawan domestik dan mancanegara selama puluhan tahun. Selain itu, <b><i>Kinilow</i></b> juga menyajikan keindahan alam yang memukau, seperti kawah <b><i>Gunung Lokon, air terjun, dan lokasi-lokasi menawan lainnya</i></b> yang siap memanjakan pengunjung dengan pesonanya.
          </p>
        </div>

        <div className="text-white text-center mb-10">
          <p className="text-lg mb-4">
          Kelurahan Kinilow juga memiliki <b><i>mata air alami</i></b> yang menjadi sumber kehidupan bagi warga, digunakan untuk berbagai kebutuhan seperti mandi, mencuci, dan aktivitas sehari-hari. Kejernihan dan kesegaran mata air ini menjadi daya tarik tersendiri, menawarkan pengalaman yang baru dan menyegarkan bagi siapa pun yang berkunjung.
          </p>
        </div>

        <div className="text-white text-center mb-10">
          <p className="text-lg mb-4">
          Di sepanjang kelurahan Kinilow juga terdapat <b><i>Waruga</i></b>, sebuah <b><i>kuburan kuno peninggalan zaman megalitikum</i></b> yang unik dan khas dari masyarakat Sulawesi Utara. <b><i>Waruga</i></b> terbuat dari <b><i>batu alam yang dibentuk sedemikian rupa sehingga menyerupai rumah adat Minahasa</i></b>. Bentuknya yang unik ini membuatnya menjadi salah satu peninggalan arkeologi yang menarik perhatian para peneliti dan wisatawan.
          </p>
        </div>

        <div className="text-white text-center mb-10">
          <p className="text-lg mb-4">
          Kelurahan Kinilow merupakan salah satu <b><i>bukti nyata kekayaan budaya Minahasa</i></b>. Jangan lewatkan kesempatan untuk menjelajahi sejarah Minahasa lebih dekat. Kunjungi <b><i>Kelurahan Kinilow</i></b> sekarang juga!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Headlines;