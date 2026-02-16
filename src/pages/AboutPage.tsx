import React from 'react';
import { Award, Building2, Users, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/JM Logo.png" 
                alt="JM Home Decor Logo" 
                className="h-24 w-24 object-contain"
              />
              <h1 className="text-4xl font-bold">About JM Home Decor</h1>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600">
                Welcome to JM Home Decor, where craftsmanship meets vision. Founded by Mauricio Oliveira, our company has established itself as a premier provider of high-quality construction and home renovation services.
              </p>
              <p className="text-gray-600">
                With 20+ years of experience in the construction industry, Mauricio brings a unique blend of technical expertise and creative vision to every project. His passion for building dream homes is evident in the meticulous attention to detail and commitment to excellence that defines our work.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 mt-8">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Our Legacy of Excellence</h3>
                <p className="text-gray-700">
                  Since 2010, we have been dedicated to transforming ordinary spaces into extraordinary homes that inspire and elevate daily living. With a passion for design, attention to detail, and a commitment to excellence, we bring your vision to life, creating spaces where comfort meets style and memories are made.
                </p>
              </div>
              <div className="flex items-center space-x-4 text-amber-600">
                <Award className="h-8 w-8" />
                <p className="font-semibold">Excellence in Every Detail</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" 
              alt="Luxury Interior Design"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Target className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To create exceptional living spaces that perfectly align with our clients' visions while maintaining the highest standards of quality and craftsmanship.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Building2 className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Expertise</h3>
            <p className="text-gray-600">
              From complete home renovations to custom builds, we bring innovation and expertise to every project, ensuring lasting quality and satisfaction.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Users className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Client Focus</h3>
            <p className="text-gray-600">
              We value our relationships with clients, working closely with them throughout the process to turn their dreams into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;