import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WorksPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        <section className="bg-gray py-30 px-6 text-center">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-3xl font-bold text-center mb-10">Our Works</h2>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorksPage;
