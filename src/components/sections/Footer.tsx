
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#3E2D00' }} className="text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3" style={{ backgroundColor: '#F5C400' }}>
              <span className="font-bold text-lg text-primary-dark">N</span>
            </div>
            <span className="text-2xl font-bold">Northstar Pay</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-5 h-5" style={{ color: '#F5C400' }} />
            <span className="text-gray-300">FINTRAC Registered Money Services Business</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Connecting families across borders with secure, instant, and affordable money transfers. 
            Your trust is our foundation.
          </p>
          
          <p className="text-gray-500 text-sm mb-8">
            2 Lansing Square, Suite 707, North York, Ontario, M2J4P8, Canada
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 Northstar Pay. All rights reserved. Made with ❤️ for the global community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
