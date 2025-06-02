
import WaitlistForm from "../WaitlistForm";

const WaitlistSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
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
