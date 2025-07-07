import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 px-8 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-10">Kenapa Memilih Candid?</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold">Cepat</h4>
          <p className="text-gray-600">Load kilat dengan teknologi terbaru.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold">Responsive</h4>
          <p className="text-gray-600">Tampil keren di semua perangkat.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold">Mudah Dipakai</h4>
          <p className="text-gray-600">Desain intuitif untuk semua pengguna.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
