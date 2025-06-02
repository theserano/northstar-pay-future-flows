
import WaitlistForm from "../WaitlistForm";

const WaitlistSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Be among the first to experience hassle-free money transfers. 
            Your family deserves better than long waits and hidden fees.
          </p>
          
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2,500+</div>
              <div className="text-sm">People waiting</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm">Countries supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">&lt;5min</div>
              <div className="text-sm">Transfer time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
