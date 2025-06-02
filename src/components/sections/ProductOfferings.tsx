
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Zap, Eye } from "lucide-react";

const offerings = [
  {
    icon: Wallet,
    title: "Create & Fund Your CAD Wallet",
    description: "Fund instantly via Interac e-Transfer, card, and more. Set up your secure wallet in minutes with complete peace of mind.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100"
  },
  {
    icon: Zap,
    title: "Send CAD to African Countries Instantly",
    description: "Real-time payouts that your family can count on. Money arrives in minutes, not days, so they're never left waiting.",
    iconColor: "text-green-600",
    iconBg: "bg-green-100"
  },
  {
    icon: Eye,
    title: "Enjoy Transparent Rates and Low Fees",
    description: "No surprises, no hidden costs. See exactly what you pay and what your family receives before you send.",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100"
  }
];

const ProductOfferings = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            What You Can Do with <span className="text-primary-yellow">Northstar Pay</span>
          </h2>
          <p className="text-lg text-subtext-gray max-w-2xl mx-auto font-light">
            Everything you need to support your family, built with care and security in mind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className={`w-16 h-16 ${offering.iconBg} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <offering.icon className={`w-8 h-8 ${offering.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  {offering.title}
                </h3>
                <p className="text-subtext-gray leading-relaxed font-light">
                  {offering.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOfferings;
