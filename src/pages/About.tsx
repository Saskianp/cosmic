import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Wp from '../assets/wp.jpg'; 

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <section 
        className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${Wp})`,
          width: '100%',
          height: '70vh',
        }}  
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Tentang Candid
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
            Platform modern untuk membuat landing page dan branding kamu jadi lebih keren, cepat, dan elegan.
          </p>
        </div>  
      </section>


      <section className="min-h-screen py-20 px-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Tentang Candid</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Candid adalah platform modern untuk membuat landing page dan branding kamu jadi lebih keren, cepat, dan elegan.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
