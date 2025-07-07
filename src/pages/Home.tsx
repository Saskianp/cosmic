import React from 'react';
import Navbar from '../components/Navbar';
// import Features from '../components/Features';
import Footer from '../components/Footer';
import Pantai from '../assets/pantai.jpg';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative w-[95vw] h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${Pantai})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            We're full service creative & video production management
          </h1>
          {/* <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
            Candid adalah platform modern untuk membuat landing page dan branding kamu jadi lebih keren, cepat, dan elegan.
          </p> */}
        </div>
      </section>

      {/* Grid 3 images sama besar */}
       <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-100">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-full h-60 overflow-hidden rounded shadow-md">
            <img
              src={Pantai}
              alt={`Pantai ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
