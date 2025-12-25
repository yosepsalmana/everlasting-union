import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Check, Send } from 'lucide-react';
import dividerImage from '@/assets/javanese-divider.png';
import ornamentFrame from '@/assets/javanese-ornament-corner.png';
import ParticleGlow from '@/components/animations/ParticleGlow';

const RsvpForm = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: '1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.attendance) {
      toast({
        title: "Mohon lengkapi data yang diperlukan",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Terima Kasih!",
      description: "Konfirmasi kehadiran Anda telah kami terima.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 batik-pattern pointer-events-none opacity-40" />
        <ParticleGlow />
        <div className="container-narrow relative z-10">
          <div className="text-center py-16 animate-fade-in-up">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-primary/50 animate-glow-pulse">
              <Check className="w-12 h-12 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Terima Kasih!
            </h2>
            <p className="font-body text-muted-foreground text-lg md:text-xl max-w-md mx-auto">
              Kami sangat menantikan kehadiran Anda di hari bahagia kami.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-40" />
      <ParticleGlow />
      
      {/* Corner ornaments */}
      <img src={ornamentFrame} alt="" className="absolute bottom-8 left-4 w-20 md:w-28 opacity-40 -scale-y-100 animate-ornament-sway" />
      <img src={ornamentFrame} alt="" className="absolute bottom-8 right-4 w-20 md:w-28 opacity-40 rotate-180 animate-ornament-sway" style={{ animationDelay: '1s' }} />
      
      <div className="container-narrow relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-14 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Konfirmasi Kehadiran</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
            RSVP
          </h2>
          <img 
            src={dividerImage} 
            alt="" 
            className={`w-44 md:w-64 mx-auto mb-8 transition-all duration-1000 delay-200 ${isInView ? 'opacity-80 scale-100' : 'opacity-0 scale-90'}`}
          />
          <p className="font-body text-muted-foreground max-w-md mx-auto text-lg">
            Kehadiran Bapak/Ibu/Saudara/i merupakan kehormatan bagi kami
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className={`max-w-xl mx-auto space-y-7 bg-card/70 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-primary/30 shadow-gold transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="space-y-3">
            <Label htmlFor="name" className="font-heading text-foreground text-base">Nama Lengkap *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background/60 border-primary/30 focus:border-primary focus:ring-primary/30 font-body text-lg py-6 transition-all duration-300"
            />
          </div>

          <div className="space-y-4">
            <Label className="font-heading text-foreground text-base">Apakah Anda akan hadir? *</Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center space-x-3 bg-background/60 rounded-lg p-5 border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer flex-1 hover:bg-background/80">
                <RadioGroupItem value="yes" id="yes" className="border-primary text-primary" />
                <Label htmlFor="yes" className="font-body cursor-pointer text-base">Ya, Saya Akan Hadir</Label>
              </div>
              <div className="flex items-center space-x-3 bg-background/60 rounded-lg p-5 border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer flex-1 hover:bg-background/80">
                <RadioGroupItem value="no" id="no" className="border-primary text-primary" />
                <Label htmlFor="no" className="font-body cursor-pointer text-base">Maaf, Tidak Bisa Hadir</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attendance === 'yes' && (
            <div className="space-y-3 animate-fade-in">
              <Label htmlFor="guests" className="font-heading text-foreground text-base">Jumlah Tamu</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="5"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="bg-background/60 border-primary/30 focus:border-primary focus:ring-primary/30 font-body w-28 py-6 text-lg"
              />
            </div>
          )}

          <div className="space-y-3">
            <Label htmlFor="message" className="font-heading text-foreground text-base">Ucapan & Doa</Label>
            <Textarea
              id="message"
              placeholder="Tuliskan ucapan dan doa untuk kedua mempelai..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background/60 border-primary/30 focus:border-primary focus:ring-primary/30 font-body min-h-[140px] resize-none text-base"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-lg font-heading tracking-widest transition-all duration-500 hover:shadow-gold hover:scale-[1.02] animate-glow-pulse"
          >
            <Send className="w-5 h-5 mr-3" />
            Kirim Konfirmasi
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RsvpForm;