import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';
import ImageLightbox from '../components/ImageLightbox';
import { supabase } from '../lib/supabase';

interface PortfolioImage {
  id: string;
  image_url: string;
  created_at: string;
}

const PortfolioPage: React.FC = () => {
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from('portfolio_images')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching images:', error);
          return;
        }

        if (data) {
          setImages(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleContactClick = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-100">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] max-h-[800px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://res.cloudinary.com/ddridqpei/image/upload/v1742093402/Amazing_Way-148_compressed_5_jffgs1.jpg"
              className="w-full h-full object-contain md:object-cover object-center md:[object-position:center_30%] [object-position:center_35%]"
              alt="Amazing Way Project Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="relative text-center space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8 transform -translate-y-24 sm:-translate-y-28 md:-translate-y-32">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel text-white tracking-wider">
                AMAZING WAY
              </h1>
              <div>
                <div className="w-24 h-0.5 bg-amber-500 mx-auto"></div>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cinzel font-normal tracking-[0.3em] text-white mt-4">
                  PORTFOLIO
                </span>
              </div>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white/90 mt-4 sm:mt-8">
                A stunning transformation showcasing our expertise in luxury home renovation and interior design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {isLoading ? (
          <div className="flex justify-center items-center h-[600px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-600 border-t-transparent"></div>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
              <div className="h-[600px]">
                <ImageSlider 
                  images={images.map(img => ({
                    url: img.image_url
                  }))} 
                  onSlideChange={setSelectedImage}
                  selectedIndex={selectedImage}
                />
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer group"
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={image.image_url}
                    alt={`Portfolio Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">View Image</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <ImageLightbox
              images={images.map(img => ({ url: img.image_url }))}
              currentIndex={selectedImage}
              isOpen={isLightboxOpen}
              onClose={() => setIsLightboxOpen(false)}
              onNavigate={setSelectedImage}
            />
          </>
        )}

        {/* Project Overview */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-gray-600 mb-8">
            The Amazing Way project represents our commitment to transforming living spaces into extraordinary homes. 
            This comprehensive renovation showcases our expertise in interior design, custom renovations, and attention to detail.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;