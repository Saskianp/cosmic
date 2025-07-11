import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Konten Utama */}
      <main className="flex-grow">
        <section className="bg-gray py-30 px-6 text-center">
            <div className="max-w-6xl mx-auto space-y-10">
                <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
                <p className="text-white text-sm leading-relaxed px-8 sm:px-10 md:px-70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
                    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.
                </p>

                {/* Form */}
                <form className="space-y-6 text-left px-6 sm:px-8 md:px-50">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Write your message"
                    rows={6}
                    className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gray text-black px-4 py-2 text-md text-normal rounded flex items-center gap-2"
                    >
                        Submit
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 rotate-[-30deg]"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                        </svg>
                    </button>
                    </div>
                </form>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
