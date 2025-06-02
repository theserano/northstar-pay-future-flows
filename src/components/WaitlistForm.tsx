
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 p-2 bg-gray-50 rounded-full border border-gray-200">
      <div className="flex-1 relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-subtext-gray w-5 h-5" />
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-11 bg-transparent border-none text-gray-900 placeholder:text-subtext-gray focus:ring-0 focus:border-none h-12 rounded-full"
          required
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        className="bg-primary-yellow hover:bg-yellow-500 text-primary-dark font-medium px-8 h-12 rounded-full transition-all duration-300 transform hover:scale-105 group border-0"
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
