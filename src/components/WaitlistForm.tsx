
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Northstar Pay! 🎉",
        description: "You're now on our waitlist. We'll notify you when we launch!",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
      <div className="flex-1 relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-11 bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:bg-white/30 h-12"
          required
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 h-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
      >
        {isLoading ? (
          "Joining..."
        ) : (
          <>
            Join Waitlist
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
};

export default WaitlistForm;
