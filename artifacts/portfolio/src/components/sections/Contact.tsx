import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Section id="contact" className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Work <br/><span className="text-gradient">Together.</span></h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-md">
            Ready to elevate your online presence? Fill out the form or drop me an email to start the conversation.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:hello@alexmorgan.dev" className="text-foreground font-medium hover:text-primary transition-colors">sahildodiya2004@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider mb-1">Location</p>
                <p className="text-foreground font-medium">Remote / Worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80">Project Details</label>
              <textarea 
                id="message" 
                required
                rows={4}
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
