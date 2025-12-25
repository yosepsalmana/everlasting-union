import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { X } from 'lucide-react';
import dividerImage from '@/assets/javanese-divider.png';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    alt: 'Pre-wedding photo 1',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop',
    alt: 'Pre-wedding photo 2',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop',
    alt: 'Pre-wedding photo 3',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop',
    alt: 'Pre-wedding photo 4',
    span: '',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
    alt: 'Pre-wedding photo 5',
    span: 'md:col-span-2',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop',
    alt: 'Pre-wedding photo 6',
    span: '',
  },
];

const Gallery = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40 pointer-events-none" />
      
      {/* Corner ornaments */}
      <img src={ornamentFrame} alt="" className="absolute bottom-8 left-4 w-20 md:w-28 opacity-40 -scale-y-100 animate-ornament-sway" />
      <img src={ornamentFrame} alt="" className="absolute bottom-8 right-4 w-20 md:w-28 opacity-40 rotate-180 animate-ornament-sway" style={{ animationDelay: '1s' }} />
      
      <div className="container-wide relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Galeri</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
            Momen Bersama
          </h2>
          <img 
            src={dividerImage} 
            alt="" 
            className={`w-44 md:w-64 mx-auto transition-all duration-1000 delay-200 ${isInView ? 'opacity-80 scale-100' : 'opacity-0 scale-90'}`}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={image.id} 
              {...image} 
              index={index}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors duration-300 hover:scale-110"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <div className="relative">
            <img 
              src={ornamentFrame} 
              alt="" 
              className="absolute -inset-8 md:-inset-12 w-[calc(100%+64px)] md:w-[calc(100%+96px)] h-[calc(100%+64px)] md:h-[calc(100%+96px)] object-contain opacity-60 animate-glow-ambient"
            />
            <img 
              src={selectedImage} 
              alt="Gallery view"
              className="max-w-full max-h-[80vh] object-contain rounded-lg border-4 border-primary/40 shadow-gold animate-scale-in"
            />
          </div>
        </div>
      )}
    </section>
  );
};

interface GalleryImageProps {
  src: string;
  alt: string;
  span: string;
  index: number;
  onClick: () => void;
}

const GalleryImage = ({ src, alt, span, index, onClick }: GalleryImageProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`${span} overflow-hidden rounded-lg cursor-pointer group border-2 border-primary/20 hover:border-primary/50 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <div className="relative h-full min-h-[180px] md:min-h-[240px]">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center">
            <span className="text-primary text-xl">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;