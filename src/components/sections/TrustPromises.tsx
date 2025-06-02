
import { Shield, Clock, Zap, RotateCcw } from "lucide-react";

const promises = [
  {
    icon: Shield,
    title: "100% Secure & Regulated",
    description: "Your money is protected with FINTRAC registration and bank-level security"
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Real people who understand your needs, available whenever you need help"
  },
  {
    icon: Zap,
    title: "Fast & Convenient Transfers",
    description: "Your family receives money instantly, so they can focus on what matters most"
  },
  {
    icon: RotateCcw,
    title: "Money-Back Guarantee",
    description: "Complete protection with our comprehensive guarantee for your peace of mind"
  }
];

const TrustPromises = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Our Promise to You
          </h2>
          <p className="text-lg text-subtext-gray max-w-2xl mx-auto font-light">
            Built on trust, powered by technology, driven by your family's success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {promises.map((promise, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <promise.icon className="w-6 h-6 text-primary-dark" />
              </div>
              <h3 className="text-lg font-semibold text-primary-dark mb-3">
                {promise.title}
              </h3>
              <p className="text-subtext-gray font-light text-sm">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPromises;
