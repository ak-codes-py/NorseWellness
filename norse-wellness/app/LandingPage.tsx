// components/LandingPage.tsx
import React from 'react';
import RippleButton from '@/components/ui/ripple-button'; // Adjust the import based on your project structure
import PulsatingButton from '@/components/ui/pulsating-button';
import { MagicCard } from '@/components/ui/magic-card';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { ChevronRight } from "lucide-react";



const features = [
  {
    title: 'Mental Health Resources',
    description: 'Access tools and expert content to manage stress and maintain a positive mindset.',
  },
  {
    title: 'Fitness & Nutrition',
    description: 'Personalized fitness and meal plans designed for college life.',
  },
  {
    title: 'Community Support',
    description: 'Connect with peers who share your journey and goals.',
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-subtle">
        <div className="flex items-center">
          <img
            src= "https://www.nku.edu/content/www/about/mediacenter/presstools/_jcr_content/par/columncontrol_1834010542/column-2/columncontrol/column-1/columncontrol/column-3/image.img.jpg/1209602494.jpg"
            alt="Norse Wellness Logo"
            className="h-10 w-18 mr-2" // Adjust the size as needed
          />
                  <div className="text-2xl font-bold">Norse Wellness</div>
        </div>  
          <div>
          <ul className="flex space-x-6">
            {['Home', 'Resources', 'Contact','Login'].map((item) => (
              <li key={item} className="hover:text-gold transition px-4 py-2 rounded cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
         <div className="absolute top-4 right-8 flex items-center space-x-2">
        <AnimatedGradientText className='mt-1'>
          <span className="inline-block bg-gradient-to-r from-[#cb6f6f] via-[#40409f] to-[#ba7f37] bg-clip-text text-transparent">
            Login
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />

        </AnimatedGradientText>
          </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Wellness Made Simple <br />
            <span className="text-gold">For College Students</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover tools, resources, and community to help you thrive
            mentally, physically, and emotionally during your college journey.
          </p>
          <PulsatingButton>Get Started</PulsatingButton>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://inside.nku.edu/content/inside/studentaffairs/departments/student-wellness/dimensions/_jcr_content/par/columncontrol/column-2/textimage/image.img.jpg/1887067992.jpg"
            alt="Wellness"
            className="w-full max-w-sm md:max-w-md mx-auto"
          />
        </div>
      </header>

     {/* Features Section */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="text-gold">NorseWellness?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <MagicCard
              key={feature.title}
              className="p-6 bg-white border border-gray-200 rounded-lg text-center shadow-subtle"
              gradientColor="#D9D9D955"
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </MagicCard>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-gold text-black text-center">
  <h2 className="text-3xl font-bold mb-6">Join the NorseWellness Community</h2>
  <p className="text-lg mb-8">
    Take the first step toward a healthier, happier you. Sign up today!
  </p>
  <div className="flex justify-center">
    <RippleButton rippleColor="#000000">Sign Up</RippleButton>
  </div>
</section>


      {/* Footer */}
      <footer className="px-8 py-4 bg-white text-center border-t border-gray-200">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NorseWellness. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
