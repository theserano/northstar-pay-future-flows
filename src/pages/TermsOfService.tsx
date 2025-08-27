import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Users, CreditCard, Shield, Lock, AlertCircle, Scale, DollarSign, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const sections = [
    { id: "general-terms", title: "General Terms", icon: FileText },
    { id: "account-registration", title: "Account Registration", icon: Users },
    { id: "age-requirements", title: "Age of Users", icon: AlertCircle },
    { id: "service-description", title: "Service Description", icon: CreditCard },
    { id: "transactions", title: "Transactions", icon: DollarSign },
    { id: "restrictions", title: "Restrictions", icon: Shield },
    { id: "fraud-mitigation", title: "Fraud Mitigation Measures", icon: Lock },
    { id: "fees-taxes", title: "Fees & Taxes", icon: DollarSign },
    { id: "termination", title: "Termination", icon: Settings },
    { id: "governing-law", title: "Governing Law", icon: Scale },
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
              <FileText className="h-5 w-5 text-primary" />
              <h1 className="text-xl font-semibold">Terms of Service</h1>
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
                <h1 className="text-4xl font-bold mb-6">General Terms of Service</h1>
                <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm">
                  <AlertCircle className="h-4 w-4" />
                  Last updated: {new Date().toLocaleDateString()}
                </div>
              </div>

              {/* General Terms */}
              <section id="general-terms" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">General Terms</h2>
                </div>
                
                <div className="bg-card border rounded-lg p-6 mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    These General Terms of Service ("General Terms") are a legal agreement between you, 
                    as a current or prospective User of Northstar's services ("you," "your", "User") 
                    and Northstar Pay Limited, ("Northstar," "we," "our" or "us") and govern your use 
                    of Northstar's services via the Nomba App.
                  </p>
                  
                  <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <p className="font-semibold text-red-800 dark:text-red-200">
                      By signing up for an account or using any of the Services, you agree to these 
                      General Terms of Service. If you do not agree to any or all of these Terms, 
                      DO NOT USE THE SERVICES.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Business Users</h4>
                    <p className="text-sm text-muted-foreground">
                      If using Services on behalf of a business, you represent that you have 
                      authority to bind that entity to these Terms.
                    </p>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Additional Terms</h4>
                    <p className="text-sm text-muted-foreground">
                      Certain Services may be subject to additional terms and conditions 
                      from our Service Partners.
                    </p>
                  </div>
                </div>
              </section>

              {/* Account Registration */}
              <section id="account-registration" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Account Registration</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Required Information</h4>
                    <p className="text-sm leading-relaxed mb-4">
                      To access Northstar's services via the Nomba Mobile Application, you must provide:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "First and last name",
                        "Date of birth", 
                        "Residential address",
                        "Valid email address",
                        "Telephone number",
                        "Government issued ID"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-primary rounded-full shrink-0" />
                          <p className="text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                      Account Restrictions
                    </h4>
                    <p className="text-sm">
                      Accounts opened without valid national identification and phone number will be 
                      restricted until proper documentation is provided. We are required by PCMLTFA 
                      and FINTRAC to verify all identification.
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Verification Process</h4>
                    <p className="text-sm leading-relaxed">
                      We reserve the right to screen all Users against applicable sanction lists and 
                      may decline applications if found on any watchlist. Validation may include 
                      sending a representative to your location or business address.
                    </p>
                  </div>
                </div>
              </section>

              {/* Age Requirements */}
              <section id="age-requirements" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Age of Users</h2>
                </div>
                
                <div className="bg-card border rounded-lg p-6">
                  <p className="text-lg font-medium mb-4">
                    You must be 18 years or older to use our Services.
                  </p>
                  <p className="text-sm leading-relaxed">
                    To use the Service, you must represent and warrant that you are 18 years and over 
                    and of legal competence to enter into a binding agreement with us, and are not 
                    otherwise prohibited from using the App and Services.
                  </p>
                </div>
              </section>

              {/* Service Description */}
              <section id="service-description" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Service Description</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <p className="leading-relaxed mb-4">
                      The App permits registered Users to make a profit while performing financial 
                      transactions on behalf of members of the public including money transfers, 
                      withdrawals, and conversions, using Northstar Wallets.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card border rounded-lg p-4 text-center">
                      <h4 className="font-semibold mb-2">Supported Currencies</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Canadian Dollar (CAD)</p>
                        <p>US Dollar (USD)</p>
                        <p>Euro (EUR)</p>
                        <p>British Pound (GBP)</p>
                        <p>Nigerian Naira (NGN)</p>
                        <p>Congolese Franc (CDF)</p>
                      </div>
                    </div>
                    
                    <div className="bg-card border rounded-lg p-4 text-center">
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Money Transfers</p>
                        <p>Cash Withdrawals</p>
                        <p>Currency Conversions</p>
                        <p>Balance Management</p>
                      </div>
                    </div>

                    <div className="bg-card border rounded-lg p-4 text-center">
                      <h4 className="font-semibold mb-2">Important Note</h4>
                      <p className="text-sm text-muted-foreground">
                        Northstar is neither a bank nor a deposit-taking institution. 
                        No interest is paid on wallet funds.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Transactions */}
              <section id="transactions" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Transactions</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Available Transaction Types</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Fund your Northstar Wallet through bank transfer",
                        "Send money to personal or third party accounts", 
                        "Withdraw cash through local transfers",
                        "Manage your Northstar Wallet (balance, PIN changes, etc.)"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0" />
                          <p className="text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Transaction Restrictions
                    </h4>
                    <p className="text-sm mb-3">Your transaction will not be completed if:</p>
                    <div className="space-y-2 text-sm">
                      {[
                        "Insufficient funds in your wallet",
                        "Maximum wallet balance limit reached", 
                        "Daily transaction limit exceeded",
                        "Account temporarily suspended or frozen",
                        "System delays or outages"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Transaction Finality</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      A transaction once completed is final and irrevocable. Northstar shall not be 
                      under any compulsion to reverse any transaction.
                    </p>
                    <p className="text-sm leading-relaxed">
                      We reserve the right to cancel or reverse a transaction only if reasonable grounds 
                      such as manifest error or fraud are shown, provided the recipient has not redeemed 
                      the funds and the reversal claim is made within one (1) month.
                    </p>
                  </div>
                </div>
              </section>

              {/* Restrictions */}
              <section id="restrictions" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Restrictions</h2>
                </div>
                
                <div className="bg-card border rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Prohibited Uses</h4>
                  <p className="text-sm mb-4">You may use this Service only for lawful purposes. You agree not to use this Service:</p>
                  
                  <div className="space-y-3">
                    {[
                      "In violation of any applicable national or international law or regulation",
                      "In any way that infringes upon the rights of others or is illegal, threatening, fraudulent, or harmful",
                      "To engage in conduct that restricts others' use or enjoyment of the Service",
                      "In any manner that could disable, overburden, damage, or impair the Service",
                      "Using automated means like robots, spiders, scrapers, or other automated tools",
                      "To perform actions that would interfere with proper working of the Services"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-red-500 rounded-full mt-2 shrink-0" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <p className="text-sm font-medium">
                      If we reasonably suspect unauthorized, illegal, or criminal use of your account, 
                      you give us express authorization to share information with law enforcement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Fraud Mitigation */}
              <section id="fraud-mitigation" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Fraud Mitigation Measures</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Record Keeping Requirements</h4>
                    <p className="text-sm leading-relaxed">
                      You agree to maintain a record sheet showing identification details, phone numbers, 
                      and addresses of clients for whom payments and bills are processed. Ensure all 
                      required KYC information is accurately recorded with clear pictures of account owners.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Suspicious Activity Reporting
                    </h4>
                    <p className="text-sm">
                      You are required to flag and report in writing any suspicious transactions to the 
                      nearest law enforcement office and provide us with a report for our records. 
                      Non-compliance may cause your account to be flagged and placed on a fraud watchlist.
                    </p>
                  </div>
                </div>
              </section>

              {/* Fees & Taxes */}
              <section id="fees-taxes" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Fees & Taxes</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Fees</h4>
                    <div className="space-y-3 text-sm">
                      <p>You are responsible for payment of all applicable fees</p>
                      <p>All fees are deducted at source and subject to change at Northstar's discretion</p>
                      <p>Fees are deducted from your wallet at transaction completion</p>
                      <p>Your new balance will be notified via SMS</p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Taxes</h4>
                    <p className="text-sm">
                      Taxes include any present or future taxes, charges, fees, levies, or other 
                      assessments except withholding tax, imposed by any domestic or foreign 
                      taxing authority.
                    </p>
                  </div>
                </div>
              </section>

              {/* Termination */}
              <section id="termination" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Amendment, Suspension and Termination</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Our Rights</h4>
                    <div className="space-y-3 text-sm">
                      <p>We reserve the right to suspend or terminate the agreement if you use the Service for unauthorized purposes</p>
                      <p>We may be compelled by law to suspend/freeze your account if there are reasonable grounds to suspect criminal or fraudulent activity</p>
                      <p>We may close your account at any time with one (1) week's notice</p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Automatic Termination</h4>
                    <p className="text-sm">
                      This agreement terminates automatically upon the death of the User who signed up for the App.
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Your Rights</h4>
                    <p className="text-sm">
                      You may terminate the General Terms and Additional Terms applicable to your Account 
                      by deactivating your Account at any time.
                    </p>
                  </div>
                </div>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Governing Law and Dispute Resolution</h2>
                </div>
                
                <div className="bg-card border rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Governing Law</h4>
                      <p className="text-sm">
                        These terms and conditions will be governed and interpreted pursuant to the laws of Canada.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Dispute Resolution</h4>
                      <p className="text-sm">
                        Disputes will be resolved by amicable settlement and negotiation. Where disputes persist, 
                        they shall be resolved by the courts in Canada.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Limitation on Time</h4>
                    <p className="text-sm">
                      Any action or proceeding relating to any dispute must commence within one year 
                      after the cause of action accrues.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <div className="bg-card border rounded-lg p-6 text-center">
                <h3 className="font-semibold mb-2">Questions about these Terms?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                <Button asChild>
                  <Link to="/privacy-policy">View Privacy Policy</Link>
                </Button>
              </div>

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

export default TermsOfService;