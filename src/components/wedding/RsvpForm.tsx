import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';

const RsvpForm = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.attendance) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Thank you for your RSVP!",
      description: "We can't wait to celebrate with you.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center py-16 animate-fade-in-up">
            <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-sage" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Thank You!
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              Your RSVP has been received. We look forward to seeing you!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section-padding bg-background">
      <div className="container-narrow">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="elegant-subheading text-base mb-4 tracking-[0.2em] uppercase">Will you join us?</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            RSVP
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Kindly respond by May 15, 2025
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className={`max-w-lg mx-auto space-y-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="font-body text-foreground">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-border focus:border-gold focus:ring-gold/20 font-body"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-body text-foreground">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-border focus:border-gold focus:ring-gold/20 font-body"
            />
          </div>

          <div className="space-y-3">
            <Label className="font-body text-foreground">Will you attend? *</Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center space-x-3 bg-card rounded-lg p-4 border border-border hover:border-gold/50 transition-colors cursor-pointer">
                <RadioGroupItem value="yes" id="yes" className="border-gold text-gold" />
                <Label htmlFor="yes" className="font-body cursor-pointer">Joyfully Accept</Label>
              </div>
              <div className="flex items-center space-x-3 bg-card rounded-lg p-4 border border-border hover:border-gold/50 transition-colors cursor-pointer">
                <RadioGroupItem value="no" id="no" className="border-gold text-gold" />
                <Label htmlFor="no" className="font-body cursor-pointer">Regretfully Decline</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attendance === 'yes' && (
            <div className="space-y-2 animate-fade-in">
              <Label htmlFor="guests" className="font-body text-foreground">Number of Guests</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="5"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="bg-background border-border focus:border-gold focus:ring-gold/20 font-body w-24"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message" className="font-body text-foreground">Message for the Couple</Label>
            <Textarea
              id="message"
              placeholder="Share your wishes or any dietary restrictions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-border focus:border-gold focus:ring-gold/20 font-body min-h-[120px] resize-none"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-body tracking-wide transition-all duration-300 hover:shadow-medium"
          >
            Send RSVP
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RsvpForm;
