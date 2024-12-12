import Image from 'next/image';

const LatestNews = () => {
  const newsItems = [
    {
      date: '',
      title: 'Gunung Lokon',
      description: 'Gunung Lokon adalah gunung berapi aktif di Sulawesi Utara yang terkenal dengan keindahan alamnya dan sering menjadi tujuan pendaki.',
      imageUrl: '/gununglokon.jpeg',
    },
    {
        date: '',
        title: 'Gunung Empung',
        description: 'Gunung Empung adalah gunung berapi berkawah di Sulawesi Utara yang menawarkan pemandangan indah serta bagian dari kompleks vulkanik bersama Gunung Lokon.',
        imageUrl: '/empung1.jpeg', // Replace with the correct path
    },
    {
        date: '',
        title: 'Anyaman',
        description: 'UMKM anyaman di Kinilow terkenal dengan kerajinan tangan berkualitas tinggi yang memanfaatkan bahan alami seperti bambu dan rotan, mencerminkan kearifan lokal serta kreativitas masyarakat.',
        imageUrl: '/anyaman.jpeg', // Replace with the correct path
    },
    {
        date: '',
        title: 'Waruga',
        description: 'Waruga adalah makam batu khas Minahasa yang berbentuk kubus dengan tutup atap segitiga, digunakan sejak zaman kuno sebagai tempat peristirahatan terakhir leluhur.',
        imageUrl: '/waruga2.jpeg', // Replace with the correct path
    },
    {
      date: '',
      title: 'Pemandian Mata Air',
      description: 'Tempat pemandian umum adalah destinasi alami dengan air jernih yang menyegarkan, dikelilingi oleh keindahan alam yang menenangkan.',
      imageUrl: '/pemandian.jpeg', // Replace with the correct path
    },
    

    
  ];

  return (
    <div className="py-10 min-h-screen w-full" style={{ backgroundColor: 'rgb(0, 51, 0)' }}>
      <h2 className="text-center text-white text-3xl font-bold mb-10">POTENSI KELURAHAN KINILOW</h2>
      
      {/* Top row with 3 news items */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 mb-6">
        {newsItems.slice(0, 3).map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover"
              width={500}
              height={300}
            />
            <div className="p-4">
              <span className="block text-gray-500 text-sm mb-2">{item.date}</span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row with 2 centered news items */}
      <div className="max-w-screen-md mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {newsItems.slice(3, 5).map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover"
              width={500}
              height={300}
            />
            <div className="p-4">
              <span className="block text-gray-500 text-sm mb-2">{item.date}</span>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;