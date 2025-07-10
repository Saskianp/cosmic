import React from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray text-white py-10 px-6 text-sm mt-auto">
      <div className="max-w-6xl mx-auto space-y-6 text-left">
        {/* Kontak */}
        <div className="space-y-3">
          <h2 className="text-base font-semibold">Contact</h2>

          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-gray-400" />
            <span className="font-normal">+62 821-5559-0108 / +62 852-1233-3072</span>
          </div>

          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="h-5 w-5 text-gray-400" />
            <span className="font-normal">Contact@CosmicGroundsID.com</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaInstagram className="h-5 w-5 text-gray-400" />
            <span className="font-normal">@CosmicGroundsID</span>
          </div>

          <div className="flex items-center space-x-2">
            <GlobeAltIcon className="h-5 w-5 text-gray-400" />
            <span className="font-normal">www.CosmicGroundsID.com</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-xs text-gray-400">
          © 2025 Cosmic Grounds. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
