
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Zap, Eye } from "lucide-react";

const offerings = [
  {
    icon: Wallet,
    title: "Create & Fund Your CAD Wallet",
    description: "Fund via Interac e-Transfer, card, and more. Set up your wallet in minutes with bank-level security.",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    icon: Zap,
    title: "Send CAD to African Countries Instantly",
    description: "Real-time payouts with no guesswork. Your family receives money in minutes, not days.",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    icon: Eye,
    title: "Enjoy Transparent Rates and Low Fees",
    description: "No tricks. What you see is what you pay. Always know exactly how much your recipient gets.",
    image: "/placeholder.svg?height=300&width=400"
  }
];

const ProductOfferings = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What You Can Do with <span className="text-blue-600">Northstar Pay</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to send money home, built with your family in mind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <offering.icon className="w-8 h-8 text-white" />
                  </div>
                  <img 
                    src={offering.image} 
                    alt={offering.title}
                    className="w-full h-48 object-cover rounded-xl mb-4 bg-gradient-to-br from-blue-100 to-indigo-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
