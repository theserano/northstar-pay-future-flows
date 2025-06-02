
import { Shield, Clock, Users, Zap, RotateCcw } from "lucide-react";

const promises = [
  {
    icon: Users,
    title: "Easy Sign-Up",
    description: "Just your email and identity information to start"
  },
  {
    icon: Shield,
    title: "100% Secure & Regulated",
    description: "Your money is safe with FINTRAC registration"
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Talk to real people anytime you need help"
  },
  {
    icon: Zap,
    title: "Fast & Convenient Transfers",
    description: "No delays, your family gets money instantly"
  },
  {
    icon: RotateCcw,
    title: "Money-Back Guarantee",
    description: "You're protected with our guarantee"
  }
];

const TrustPromises = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Promise to You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built on trust, powered by technology, driven by your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {promises.map((promise, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <promise.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {promise.title}
                </h3>
                <p className="text-gray-600">
                  {promise.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPromises;
