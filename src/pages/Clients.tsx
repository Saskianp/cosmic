import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import pizzahut from '../assets/Pizzahut.svg'; 
import mamasuka from '../assets/mamasuka.png'; 
import abc from '../assets/abc.png'; 
import ajinmt from '../assets/ajinomoto.png'; 
import kalbe from '../assets/kalbe.png'; 
import bca from '../assets/bca.png'; 
import blu from '../assets/blu.png'; 
import png from '../assets/PnG.jpg'; 
import viks from '../assets/vicks.jpg'; 
import neu from '../assets/neu.svg'; 
import pantene from '../assets/pantene.png'; 
import olay from '../assets/olay.jpg'; 
import downy from '../assets/downy.png'; 
import erha from '../assets/erha.png'; 
import ufs from '../assets/UFS.png'; 
import homecredit from '../assets/Home Credit.png'; 
import telkom from '../assets/telkom.png'; 
import xl from '../assets/xl.jpg'; 
import axis from '../assets/axis.png'; 
import indomilk from '../assets/indomilkpng.png'; 
import paragn from '../assets/paragn.png'; 

interface Client {
  name: string;
  category: 'clients' | 'agencies';
  image: string;
}

const clientList: Client[] = [
  { name: 'Pizza Hut', category: 'clients', image: pizzahut },
  { name: 'Mamasuka', category: 'clients', image: mamasuka },
  { name: 'ABC', category: 'agencies', image: abc },
  { name: 'Ajinomoto', category: 'clients', image: ajinmt },
  { name: 'Kalbe', category: 'agencies', image: kalbe },
  { name: 'BCA', category: 'clients', image: bca },
  { name: 'Blu', category: 'clients', image: blu },
  { name: 'Procter & Gamble', category: 'clients', image: png },
  { name: 'Viks', category: 'agencies', image: viks },
  { name: 'Neurobion', category: 'clients', image: neu },
  { name: 'Pantene', category: 'agencies', image: pantene },
  { name: 'Olay', category: 'clients', image: olay },
  { name: 'Downy', category: 'clients', image: downy },
  { name: 'Erha', category: 'clients', image: erha },
  { name: 'UFS', category: 'agencies', image: ufs },
  { name: 'Home Credit', category: 'clients', image: homecredit },
  { name: 'Telkomsel', category: 'agencies', image: telkom },
  { name: 'XL Prioritas', category: 'clients', image: xl },
  { name: 'Axis', category: 'clients', image: axis },
  { name: 'Indomilk', category: 'clients', image: indomilk },
  { name: 'Paragon', category: 'agencies', image: paragn },
];


const ClientsPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<'all' | 'clients' | 'agencies'>('all');

    const handleSelect = (value: 'all' | 'clients' | 'agencies') => {
        setSelected(value);
        setOpen(false);
    };

    const filteredClients = clientList.filter((c) =>
        selected === 'all' ? true : c.category === selected
    );

    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Konten Utama */}
        <main className="flex-grow">

        {/* Backdrop when dropdown open */}
        {open && (
            <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
            onClick={() => setOpen(false)}
            />
        )}

        <section className="bg-gray py-30 px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-3xl font-bold text-center mb-10">Our Clients</h2>
            <p className="text-white text-sm leading-relaxed px-8 sm:px-8 md:px-50">
            Our clients are at the heart of everything we do. 
            We pride ourselves on fostering solid and long-term partnerships with each client, 
            ensuring that we not only meet but exceed their expectations. 
            Our commitment to understanding and addressing the unique needs of our clients sets us apart in the industry.
            </p>

            {/* Dropdown Trigger */}
            <div className="relative flex justify-center mb-10">
            <button
                onClick={() => setOpen(!open)}
                className="bg-gray text-white text-sm font-normal border border-gray-300 px-6 py-2 rounded-full shadow-md focus:outline-none flex items-center gap-2"
            >
                {selected === 'all'
                ? 'All Clients'
                : selected === 'clients'
                ? 'Clients'
                : 'Agencies'}
                <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-300 ${
                    open ? 'rotate-180' : ''
                }`}
                />
            </button>

            {/* Dropdown Content */}
            {open && (
            <div className="absolute top-[-110px] z-50 w-100 h-80 bg-black text-lg text-white rounded-lg shadow-lg p-18 space-y-6 transition-all duration-300">
                <p
                    onClick={() => handleSelect('all')}
                    className="cursor-pointer text-center py-2 rounded"
                >
                    All Clients
                </p>
                <p
                    onClick={() => handleSelect('clients')}
                    className="cursor-pointer text-center py-2 rounded"
                >
                    Clients
                </p>
                <p
                    onClick={() => handleSelect('agencies')}
                    className="cursor-pointer text-center py-2 rounded"
                >
                    Agencies
                </p>
                </div>
            )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
                {filteredClients.map((client, index) => (
                    <div key={index} className="flex flex-col items-center space-y-3">
                    <img
                        src={client.image}
                        alt={client.name}
                        className="w-24 h-24 rounded-full object-cover mt-8 bg-white"
                    />
                    <p className="text-lg font-medium text-white">{client.name}</p>
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

export default ClientsPage;
