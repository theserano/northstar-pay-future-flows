
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why should I trust Northstar Pay?",
    answer: "We are FINTRAC registered as a Money Services Business and committed to transparency and exceptional service. Your funds are protected by Canadian regulations and our security measures exceed industry standards."
  },
  {
    question: "Where can I send and receive money using Northstar Pay?",
    answer: "You will be able to send money to multiple African countries including Nigeria, Kenya, Ghana, Uganda, Tanzania, and others. We're continuously expanding our network based on community needs."
  },
  {
    question: "When will Northstar Pay launch?",
    answer: "We are in the final stages of development and testing. Join the waitlist to get early access and be notified as soon as we launch. Waitlist members get priority access and special launch offers."
  },
  {
    question: "How do I fund my CAD wallet?",
    answer: "You will be able to use Interac e-Transfer, credit/debit card payments, and direct bank deposits. All funding methods are secure and most are available instantly."
  },
  {
    question: "Is Northstar Pay regulated and secure?",
    answer: "Yes. We're fully compliant with Canadian financial regulations and FINTRAC-registered. Your personal data and funds are protected with bank-level security, encryption, and fraud monitoring."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-subtext-gray font-light">
              Everything you need to know about Northstar Pay
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-primary-dark hover:text-primary-yellow py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-subtext-gray pb-6 leading-relaxed font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
