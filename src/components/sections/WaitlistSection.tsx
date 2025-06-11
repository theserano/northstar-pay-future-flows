
import WaitlistForm from "../WaitlistForm";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-16 md:py-24 bg-primary-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
            Be among the first to experience the future of money transfers. 
            Your family deserves better than long waits and hidden fees.
          </p>
          
          <div className="w-full max-w-md mx-auto px-4 sm:px-0">
            <WaitlistForm labelClass="!text-gray-300" inputClass="!text-gray-300 !placeholder-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
