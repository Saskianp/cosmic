import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Wp from '../assets/wp.jpg'; 
import Avatar1 from '../assets/avatar-alexander.jpg'; 
import Avatar2 from '../assets/aiony-haust.jpg'; 
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Muhammad Fadli',
    position: 'Co-Founder',
    img: Avatar1,
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com/in',
  },
  {
    name: 'Jimmy Singh',
    position: 'Executive Producer',
    img: Avatar1,
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com/in',
  },
  {
    name: 'Dany Danchow',
    position: 'Executive Producer',
    img: Avatar1,
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com/in',
  },
  {
    name: 'Michael Lee',
    position: 'Video Producer',
    img: Avatar2,
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com/in',
  },
  {
    name: 'Sophie Tan',
    position: 'Editor',
    img: Avatar2,
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com/in',
  },
  {
    name: 'David Kim',
    position: 'Sound Engineer',
    img: Avatar2,
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com/in',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
      <Navbar />
        <section 
          className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: `url(${Wp})`,
            width: '100%',
            height: '100vh',
          }}  
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-white w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-10 space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md leading-relaxed">
              <b>Cosmic Grounds</b> is a generational platform rooted in <b>creativity, collaboration, 
              and long-term vision</b> — a place where ideas take root and grow into impactful ventures. 
              In its first phase, Cosmic Grounds will focus on operating as a <b>Creative Production House</b>, delivering high-quality content and storytelling across disciplines. The name itself blends the imaginative scale of the cosmos with the fertile foundation of “grounds,” symbolizing both ambition and support. 
            </p>

            <p className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md leading-relaxed">
              It <b>stands as a launchpad for creators and a home for innovation</b> — modular, future-ready, and emotionally resonant for partners, talent, and audiences alike.
            </p>
          </div>
        </section>

        {/* Arrow Scroll Button */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={() =>
              document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white text-white hover:bg-white/10 transition duration-300 animate-bounce"
            aria-label="Scroll Down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>


        <section id="next-section" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16 bg-gray">
          {/* Gambar Kiri */}
          <div>
            <img    
            src={Wp}
            alt="Deskripsi Gambar"
            className="w-full h-auto object-cover rounded"
            />
          </div>

          {/* Teks Kanan */}
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Creative & Video Production
            </h2>
            <p className="text-white leading-relaxed">
              Cosmic Grounds menghadirkan layanan kreatif dan produksi video untuk brand yang ingin tampil beda dan berkesan. Tim kami siap mendampingi dari proses ide sampai realisasi.
            </p>
            <p className="text-white leading-relaxed">
              Dengan pengalaman luas dan jaringan talenta kreatif, kami menawarkan solusi produksi yang strategis, efisien, dan sesuai dengan karakter brand kamu.
            </p>
          </div>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16 bg-gray">
          

          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold text-white">
              What we do
            </h2>
            <p className="text-white leading-relaxed"> 
              Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora 
              torquent per conubia nostra, per inceptos himenaeos. Jorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, 
              metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
              Maecenas eget condimentum velit, sit amet feugiat lectus            
            </p>
            <p className="text-white leading-relaxed">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
              Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
              Maecenas eget condimentum velit, sit amet feugiat lectus.            
            </p>
          </div>

          <div>
            <img    
            src={Wp}
            alt="Deskripsi Gambar"
            className="w-full h-auto object-cover rounded"
            />
          </div>
        </section>


        <section className="py-16 px-6 bg-gray text-white">
          <h2 className="text-3xl font-bold text-center mb-5">The Team</h2>
          <p className="text-sm font-normal text-center mb-10">
            We are a team of innovative people who love creating stellar ideas and visuals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.position}</p>
                </div>
                <div className="flex space-x-4">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-5 w-5 hover:text-pink-400" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-5 w-5 hover:text-blue-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
