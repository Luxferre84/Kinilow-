import React from 'react';

const KadisDKIPS = () => {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen bg-white w-full mt-10">
      
      {/* Bagian overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 red-overlay2"></div>
      
      <div className="text-center mt-12 mb-12">
        <h1 className="text-3xl font-bold text-gray-800 uppercase">PETA KINILOW 1</h1>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Bagian gambar */}
        <div className="w-3/4 h-auto">
          <img src="/mapkinilow.jpg" alt="Kadis DKIPS" className="object-cover w-full h-auto" />
        </div>
      </div>   
        
    </section>
  );
};

export default KadisDKIPS;
