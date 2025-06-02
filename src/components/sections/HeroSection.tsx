
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import WaitlistForm from "../WaitlistForm";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* FINTRAC Badge */}
            <div className="flex justify-start mb-8">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200 px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                FINTRAC Registered Money Services Business
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-dark leading-tight">
              Send Money Home
              <span className="block text-primary-yellow">
                Safely & Instantly
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl mb-8 text-subtext-gray max-w-lg leading-relaxed font-light">
              Connect with loved ones across Africa through secure, instant money transfers. 
              Your family gets what they need, when they need it, without the wait or worry.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-md">
              <WaitlistForm />
              <p className="text-sm text-subtext-gray mt-4 font-light">
                Be the first to experience hassle-free transfers. No spam, ever.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/2507ac42-2e69-420e-8b72-f847ed32443b.png" 
                alt="Woman sending money with mobile phone"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
