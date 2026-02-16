import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, Virtual } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/virtual';

interface SlideImage {
  url: string;
  caption?: string;
}

interface ImageSliderProps {
  images: SlideImage[];
  onSlideChange?: (index: number) => void;
  selectedIndex?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  onSlideChange,
  selectedIndex = 0 
}) => {
  const swiperRef = useRef<SwiperType>();
  const isUserInitiated = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);
  const [isLoading, setIsLoading] = useState(true);

  // Preload adjacent images
  useEffect(() => {
    const preloadImages = (indexes: number[]) => {
      indexes.forEach(index => {
        if (index >= 0 && index < images.length) {
          const img = new Image();
          img.src = images[index].url;
        }
      });
    };

    // Preload current, next, and previous images
    const currentIdx = currentIndex % images.length;
    const nextIdx = (currentIdx + 1) % images.length;
    const prevIdx = (currentIdx - 1 + images.length) % images.length;
    preloadImages([currentIdx, nextIdx, prevIdx]);
  }, [currentIndex, images]);

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.realIndex;
    setCurrentIndex(newIndex);
    if (onSlideChange && newIndex !== selectedIndex) {
      isUserInitiated.current = true;
      onSlideChange(newIndex);
    }
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative h-full group">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay, Virtual]}
        effect="fade"
        speed={500}
        slidesPerView={1}
        loop={true}
        virtual
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (!isUserInitiated.current && typeof selectedIndex === 'number') {
            swiper.slideTo(selectedIndex);
          }
        }}
        onSlideChange={handleSlideChange}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} virtualIndex={index} className="h-full bg-gray-100">
            <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-600 border-t-transparent"></div>
                </div>
              )}
              <img
                src={image.url}
                alt={image.caption || `Portfolio Image ${index + 1}`}
                className={`max-h-[calc(100%-2rem)] w-auto max-w-full object-contain transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                loading="lazy"
                onLoad={handleImageLoad}
              />
              {image.caption && (
                <div className="mt-4 text-center">
                  <p className="text-gray-700 font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button 
        className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full shadow-lg z-10 hover:bg-black/70 transition-colors opacity-90 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button 
        className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full shadow-lg z-10 hover:bg-black/70 transition-colors opacity-90 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlider;