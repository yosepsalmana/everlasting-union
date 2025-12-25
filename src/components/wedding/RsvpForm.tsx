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
        <div className="absolute inset-0 batik-pattern pointer-events-none opacity-30" />
        <div className="container-narrow relative z-10">
          <div className="text-center py-16 animate-fade-in-up">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/40">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Terima Kasih!
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              Kami sangat menantikan kehadiran Anda di hari bahagia kami.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern pointer-events-none opacity-30" />
      
      {/* Corner ornaments */}
      <img src={ornamentFrame} alt="" className="absolute bottom-4 left-4 w-20 md:w-32 opacity-40 -scale-y-100" />
      <img src={ornamentFrame} alt="" className="absolute bottom-4 right-4 w-20 md:w-32 opacity-40 rotate-180" />
      
      <div className="container-narrow relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-sm mb-4 tracking-[0.3em] uppercase">Konfirmasi Kehadiran</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            RSVP
          </h2>
          <img src={dividerImage} alt="" className="w-40 md:w-56 mx-auto opacity-70 mb-6" />
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Kehadiran Bapak/Ibu/Saudara/i merupakan kehormatan bagi kami
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className={`max-w-lg mx-auto space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 shadow-gold transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="font-heading text-foreground">Nama Lengkap *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary/20 font-body"
            />
          </div>

          <div className="space-y-3">
            <Label className="font-heading text-foreground">Apakah Anda akan hadir? *</Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center space-x-3 bg-background/50 rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-colors cursor-pointer flex-1">
                <RadioGroupItem value="yes" id="yes" className="border-primary text-primary" />
                <Label htmlFor="yes" className="font-body cursor-pointer">Ya, Saya Akan Hadir</Label>
              </div>
              <div className="flex items-center space-x-3 bg-background/50 rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-colors cursor-pointer flex-1">
                <RadioGroupItem value="no" id="no" className="border-primary text-primary" />
                <Label htmlFor="no" className="font-body cursor-pointer">Maaf, Tidak Bisa Hadir</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attendance === 'yes' && (
            <div className="space-y-2 animate-fade-in">
              <Label htmlFor="guests" className="font-heading text-foreground">Jumlah Tamu</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="5"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary/20 font-body w-24"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message" className="font-heading text-foreground">Ucapan & Doa</Label>
            <Textarea
              id="message"
              placeholder="Tuliskan ucapan dan doa untuk kedua mempelai..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary/20 font-body min-h-[120px] resize-none"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-heading tracking-wide transition-all duration-300 hover:shadow-gold"
          >
            <Send className="w-4 h-4 mr-2" />
            Kirim Konfirmasi
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RsvpForm;