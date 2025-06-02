
import { Badge } from "@/components/ui/badge";
import { Shield, Star } from "lucide-react";
import WaitlistForm from "../WaitlistForm";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        {/* FINTRAC Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4 mr-2" />
            FINTRAC Registered Money Services Business
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Send Money Home
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Without the Wait
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Northstar Pay makes sending money to Africa simple, secure, and instant. 
            No hidden fees, no long waits, just reliable transfers when your family needs them most.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-blue-200 ml-2">Trusted by thousands across Canada</span>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto animate-scale-in">
            <WaitlistForm />
            <p className="text-sm text-blue-200 mt-4">
              Join 2,500+ people already on our waitlist. No spam, ever.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
