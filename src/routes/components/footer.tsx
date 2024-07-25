import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
  <footer className="bg-gray-200 py-6">
  <div className="container mx-auto flex flex-wrap justify-between items-center">
    <div className="text-sm text-gray-600 mb-2 md:mb-0">
      © 2024 Digital Footprint Explorer. All rights reserved.
      <span className="mx-2">|</span>
      <Link to="/privacy-policy" className="hover:text-gray-900 underline">Privacy Policy</Link>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-600">Funded by PDI-SSH</span>
      <img src="/pdi_ssh_logo.png" alt="PDI-SSH" className="h-34 w-34 object-contain" />
      <img src="/uva_logo.png" alt="University of Amsterdam" className="h-34 w-34 object-contain" />
      <img src="/uu_logo.png" alt="Utrecht University" className="h-34 w-34 object-contain" />
    </div>
  </div>
</footer>
  );
};
