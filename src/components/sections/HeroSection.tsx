
import { Badge } from "@/components/ui/badge";
import { Shield, Send, Zap, Heart, Globe, DollarSign } from "lucide-react";
import WaitlistForm from "../WaitlistForm";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* FINTRAC Badge */}
            <div className="flex justify-start mb-8">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200 px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" style={{ color: '#F5C400' }} />
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

          {/* Right Image with Animated Icons */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Animated floating icons */}
              <div className="absolute -top-8 -left-8 animate-bounce delay-100">
                <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center shadow-lg">
                  <Send className="w-6 h-6 text-primary-dark" />
                </div>
              </div>
              
              <div className="absolute top-4 -right-6 animate-pulse delay-300">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 animate-bounce delay-500">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-8 -right-8 animate-pulse delay-700">
                <div className="w-11 h-11 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 animate-bounce delay-900">
                <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
              </div>

              <img 
                src="/lovable-uploads/2507ac42-2e69-420e-8b72-f847ed32443b.png" 
                alt="Woman sending money with mobile phone"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto relative z-10 rounded-2xl"
              />
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/10 to-blue-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
