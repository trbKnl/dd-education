import React from 'react';
import { PrimaryButton } from "../framework/visualisation/react/ui/elements/button"
import { useNavigate } from 'react-router-dom';
import { Footer } from "./components/footer"
import { NavBar } from "./components/navbar"
import hero from './icons/hero.svg'


export const LandingPage = () => {
  const navigate = useNavigate();
  const to="/port"

  const handleClick = () => {
    navigate(to);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section with Left Banner Image and Right Text */}
      <header className="bg-primary h-96">
        <div className="container mx-auto h-full flex">
          {/* Left side - Banner Image */}
          <div className="w-1/2 h-full flex items-center justify-center overflow-hidden">
            <img 
              src={hero}
              alt="Digital Footprint Banner" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          {/* Right side - Text Content */}
          <div className="w-1/2 flex flex-col justify-center items-center p-8">
            <h1 className="text-4xl text-white font-bold mb-4 text-center">Digital Footprint Explorer</h1>
            <p className="text-xl text-white text-center">Discover and understand your online presence</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8">
        <p className="text-lg mb-3 text-gray-700">
          Welcome to Digital Footprint Explorer, a tool designed to help you
          analyze and explore your digital presence across various platforms.
          This tool can provide insights into your online
          activities on various platforms, helping you make informed decisions about your digital life.
        </p>
        <p className="text-lg mb-3 text-gray-700">
                    The tool enables you to explore and visualize data from various platforms, helping you gain insights into your behavior and understand what these platforms collect about you. It provides instructions on how to request and download your data in the correct format. If there are any platforms missing that you’d like to see included—such as for educational purposes or data awareness—please contact us. We’d be happy to add them!
        </p>
        <p className="text-lg mb-3 text-gray-700">
Click the button below to start exploring!
        </p>

          <div className="flex flex-row gap-4 mt-4 mb-4">
            <PrimaryButton
              label="Start"
              onClick={handleClick}
              color="bg-success text-white"
              spinning={false}
            />
          </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

