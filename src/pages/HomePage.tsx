import React from 'react';
import { ArrowRight, Paintbrush, Hammer, Home, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Luxury Interior"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Space Into a Masterpiece</h1>
            <p className="text-xl mb-8">Luxury home renovations and interior design solutions tailored to your vision</p>
            <a 
              href="#contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center group inline-flex"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Premium Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Paintbrush className="h-8 w-8 text-amber-600" />,
                title: "Interior Design",
                description: "Bespoke design solutions that blend aesthetics with functionality"
              },
              {
                icon: <Hammer className="h-8 w-8 text-amber-600" />,
                title: "Custom Renovations",
                description: "Complete home transformations with premium materials and craftsmanship"
              },
              {
                icon: <Home className="h-8 w-8 text-amber-600" />,
                title: "Architectural Planning",
                description: "Expert space planning and architectural design services"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Let's Discuss Your Project</h2>
              <p className="text-gray-600 mb-8">
                Transform your space with Mauricio Oliveira and our expert team. Contact us today for a consultation.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+14077295446" className="text-gray-600 hover:text-amber-600 transition-colors">
                      (407) 729-5446
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:mauricio@jmhomedecor.com" className="text-gray-600 hover:text-amber-600 transition-colors">
                      mauricio@jmhomedecor.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">Ocoee, Florida</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Instagram className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a 
                      href="https://www.instagram.com/jmhomedecororlando" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      @jmhomedecororlando
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;