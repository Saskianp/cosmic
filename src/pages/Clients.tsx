import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ClientsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">

      </main>

      <Footer />
    </div>
  );
};

export default ClientsPage;
