import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    alt: 'Couple walking in garden',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop',
    alt: 'Wedding rings',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop',
    alt: 'Couple portrait',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop',
    alt: 'Dancing together',
    span: '',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop',
    alt: 'Romantic sunset',
    span: 'md:col-span-2',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop',
    alt: 'Candid moment',
    span: '',
  },
];

const Gallery = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-gradient-section">
      <div className="container-wide">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-base mb-4 tracking-[0.2em] uppercase">Captured moments</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Our Gallery
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-ivory hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
          />
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
      className={`${span} overflow-hidden rounded-lg cursor-pointer group transition-all duration-700`}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <div className={`relative h-full min-h-[200px] md:min-h-[250px] transition-all duration-500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default Gallery;
