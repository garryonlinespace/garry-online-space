import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Garry Online Space services, you accept and agree to be bound 
                by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
              <p className="text-muted-foreground">
                Our services are provided for educational and informational purposes. Trading and betting 
                involve risk, and you should only invest what you can afford to lose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your account credentials and 
                for all activities under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payment and Refunds</h2>
              <p className="text-muted-foreground">
                Payment for services must be made in full before access is granted. Refunds are handled 
                on a case-by-case basis according to our refund policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
              <p className="text-muted-foreground">
                The information provided through our services is for educational purposes only and should 
                not be considered as financial advice. We are not responsible for any financial losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Garry Online Space shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of our services 
                constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
