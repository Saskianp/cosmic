import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Creative Agency',
    items: [
      'Marketing Communication',
      'Creative Concept',
      'Storytelling',
      'Brand Communication',
      'Corporate Identity',
      'Packaging',
      'Collateral Design',
    ],
  },
  {
    title: 'Commercial Production House',
    items: [
      'TVC Production',
      'Digital Video',
      'Video Profile',
      'Motion Graphic',
      'Photoshoot',
      '2D & 3D Animation',
      'CGI Ads / FOOH',
    ],
  },
  {
    title: 'KOL / Influencer Management / Affiliate',
    items: [
      'Messaging',
      'KOL Handling',
      'Performance Monitoring & Reporting',
    ],
  },
  {
    title: 'AI Image & Video Production',
    items: [
      'Post Production',
      'AI Image & Video Production',
    ],
  },
];

const ServicesPage: React.FC = () => {
return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        <section className="bg-gray py-30 px-6 text-center">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {services.map((service, index) => (
                <div key={index} className="text-left space-y-8">
                  <h3 className="text-xl font-semibold min-h-[3.5rem]">{service.title}</h3>
                    <div className="space-y-6 text-sm text-gray-400">
                    {service.items.map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
