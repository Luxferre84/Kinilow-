import React from 'react';
import Weather from '../components/Weather';

import Headlines from '../components/Headlines';
import KadisDKIPS from '../components/KadisDKIPS';

import LatestNews from '../components/BeritaTerbaru';
import RunningText from '../components/RunningText';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center mr-auto">
      <Weather />
      <div className="text-center mt-4">
        <h1 className="text-white text-1xl md:text-2xl font-bold leading-tight">
          Kelurahan Kinilow<br /> Tomohon Utara
        </h1>
      </div>
      <RunningText />
      <KadisDKIPS />
      <Headlines /> {/* Tambahkan komponen Headlines di sini */}

      <LatestNews />
      <Footer />
    </main>
  );
}
