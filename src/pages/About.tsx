import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
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
