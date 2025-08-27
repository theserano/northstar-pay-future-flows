import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Shield, Lock, Eye, Users, Database, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const sections = [
    { id: "introduction", title: "Introduction", icon: Shield },
    { id: "who-are-we", title: "Who are we?", icon: Users },
    { id: "information-collection", title: "What information do we collect?", icon: Database },
    { id: "how-we-collect", title: "How do we collect your personal information?", icon: Eye },
    { id: "how-we-use", title: "How Do We Use the Personal Information We Collect?", icon: Lock },
    { id: "contact", title: "Contact Us", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <h1 className="text-xl font-semibold">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-2 text-sm p-2 rounded hover:bg-accent transition-colors"
                      >
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        {section.title}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {/* Title Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">NORTHSTAR PAY LIMITED</h1>
                <h2 className="text-2xl font-semibold text-muted-foreground mb-6">PRIVACY POLICY</h2>
                <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm">
                  <AlertCircle className="h-4 w-4" />
                  Last updated: {new Date().toLocaleDateString()}
                </div>
              </div>

              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Introduction</h2>
                </div>
                
                <div className="bg-card border rounded-lg p-6 mb-6">
                  <p className="text-lg leading-relaxed">
                    This Privacy Notice (the "Notice") represents the notice of Northstar Pay Limited, 
                    a Canadian corporation (hereinafter referred to as "Northstar", the "Company" or "we") 
                    accessed via the Nomba App regarding the collection, use, and management of personal 
                    information belonging to:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-card border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Site Visitors</h4>
                    <p className="text-sm text-muted-foreground">
                      All visitors to our website at https://www.paynorthstar.com/
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Application Users</h4>
                    <p className="text-sm text-muted-foreground">
                      Anyone who downloads or uses our mobile application
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Clients</h4>
                    <p className="text-sm text-muted-foreground">
                      Anyone who enrolls for our Services
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    A special note about children
                  </h4>
                  <p className="text-sm">
                    Children are not eligible to use Northstar Services. We do not knowingly collect 
                    personal information from persons under 18. If you are under 18, please do not 
                    use our services or provide any information to us.
                  </p>
                </div>
              </section>

              {/* Who are we */}
              <section id="who-are-we" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Who are we?</h2>
                </div>
                
                <div className="bg-card border rounded-lg p-6">
                  <p className="leading-relaxed mb-4">
                    Northstar is a Canadian corporation and a Money Service Business authorized to 
                    deal in foreign exchange and money transferring activities. In this Policy, 
                    references to "You" and "your" are references to a user of our website and/or 
                    of our Mobile App.
                  </p>
                  <p className="leading-relaxed">
                    We are committed to safeguarding the personal information of our customers, 
                    users, employees and other stakeholders, while helping our customers, employees, 
                    investors and society create a deeper impact and make the right decisions.
                  </p>
                </div>
              </section>

              {/* Information Collection */}
              <section id="information-collection" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">What information do we collect?</h2>
                </div>
                
                <p className="mb-6">
                  We, or our third-party service providers on our behalf, collect the following 
                  personal information about our customers and users:
                </p>

                <div className="space-y-4">
                  {[
                    "Contact information (e.g., name, address, phone number, email)",
                    "Information required by law (AML/CTF) (e.g., occupation as required by law)",
                    "Identity documents as required by law (e.g., Government issued identity card)",
                    "Photo(s) to compare against provided identity documents (e.g., selfie)",
                    "Network identifiers (e.g., IP address or browser information, login information)",
                    "Transaction details and geographic location data"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card border rounded-lg">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0" />
                      <p className="text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How we collect */}
              <section id="how-we-collect" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">How do we collect your personal information?</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Information you provide to us</h4>
                    <p className="text-sm leading-relaxed">
                      We collect information when you use Northstar Services, add information on our 
                      website, update your account information, or correspond with us regarding our services.
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Information from other sources</h4>
                    <p className="text-sm leading-relaxed">
                      We may obtain information from third parties such as identity verification 
                      services and credit bureaus through a "soft pull" process that doesn't affect 
                      your credit score.
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Information from social networks</h4>
                    <p className="text-sm leading-relaxed">
                      If you log in using your social media account, we receive necessary information 
                      to enable our Services and authenticate you.
                    </p>
                  </div>
                </div>
              </section>

              {/* How we use */}
              <section id="how-we-use" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">How Do We Use the Personal Information We Collect?</h2>
                </div>
                
                <div className="bg-card border rounded-lg p-6 mb-6">
                  <p className="font-medium mb-4">
                    Our primary purpose in collecting personal information is to provide you with 
                    a secure, smooth, efficient, and customized experience.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Provide Northstar Services and customer support",
                      "Process transactions and send transaction notices",
                      "Verify your identity and manage account security",
                      "Detect, prevent, and remediate fraud",
                      "Improve Services and customize user experience",
                      "Provide targeted marketing and advertising",
                      "Perform creditworthiness and solvency checks",
                      "Comply with legal and regulatory requirements"
                    ].map((use, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0" />
                        <p className="text-sm">{use}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <p className="text-sm font-medium">
                    The Company does not sell or share user personal data with third parties 
                    for their direct marketing, except with Users' consent.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                
                <div className="bg-card border rounded-lg p-6">
                  <p className="mb-4">
                    If you have concerns about any of the terms of this Privacy Policy or wish 
                    to exercise your rights regarding your personal information, please contact us:
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:privacy@paynorthstar.com" className="hover:underline">
                      privacy@paynorthstar.com
                    </a>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <div className="border-t pt-8 mt-12">
                <p className="text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Northstar Pay Limited. All rights reserved.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;