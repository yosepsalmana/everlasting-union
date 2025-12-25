import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { X } from 'lucide-react';
import dividerImage from '@/assets/javanese-divider.png';

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
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30 pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Galeri</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Momen Bersama
          </h2>
          <img src={dividerImage} alt="" className="w-40 md:w-56 mx-auto opacity-70" />
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
          className="fixed inset-0 z-50 bg-background/98 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative border-4 border-primary/30 rounded-lg overflow-hidden shadow-gold">
            <img 
              src={selectedImage} 
              alt="Gallery view"
              className="max-w-full max-h-[85vh] object-contain animate-scale-in"
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
      className={`${span} overflow-hidden rounded-lg cursor-pointer group transition-all duration-700 border-2 border-primary/20 hover:border-primary/50`}
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
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default Gallery;