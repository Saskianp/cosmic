// import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pantai from '../assets/pantai.jpg';
import Video from '../assets/Music 01_Credentials_Cosmic Grounds 2025.mp4'; 

// const images = [
//   { src: Pantai, title: 'Pantai Satu' },
//   { src: Pantai, title: 'Pantai Dua' },
//   { src: Pantai, title: 'Pantai Tiga' },
// ];

const HomePage: React.FC = () => {
  // const [modal, setModal] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section
          className="relative h-[70vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 md:px-8 overflow-hidden"
          style={{
            backgroundImage: `url(${Pantai})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 text-white w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-10 space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md leading-relaxed mt-10">
              <b>Cosmic Grounds</b> is a generational platform rooted in <b>creativity, collaboration, 
              and long-term vision</b> — a place where ideas take root and grow into impactful ventures. 
              In its first phase, Cosmic Grounds will focus on operating as a <b>Creative Production House</b>, delivering high-quality content and storytelling across disciplines. The name itself blends the imaginative scale of the cosmos with the fertile foundation of “grounds,” symbolizing both ambition and support. 
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md leading-relaxed">
              It <b>stands as a launchpad for creators and a home for innovation</b> — modular, future-ready, and emotionally resonant for partners, talent, and audiences alike.
            </p>
          </div>
        </section>


        <section className="relative m-0 p-0">
          <video
            className="w-full h-auto block"
            src={Video}
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        {/* Grid 3 images */}
        {/* <section className="grid grid-cols-1 md:grid-cols-3 w-full">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer h-[30vh]"
              onClick={() => setModal(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                {img.title}
              </div>
            </div>
          ))}
        </section> */}

        {/* Modal */}
        {/* {modal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setModal(null)}
          >
            <div className="max-w-3xl w-full mx-4 relative">
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                ✕
              </button>
              <h2 className="text-white text-3xl font-bold mb-4 text-center">{modal.title}</h2>
              <img src={modal.src} alt={modal.title} className="w-full rounded shadow-lg" />
            </div>
          </div>
        )} */}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
