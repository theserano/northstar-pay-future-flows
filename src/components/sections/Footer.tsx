import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
              <span className="font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold">Northstar Pay</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">FINTRAC Registered Money Services Business</span>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Connecting families across borders with secure, instant, and affordable money transfers. 
            Your trust is our foundation.
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Northstar Pay. All rights reserved. Made with ❤️ for the global community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
