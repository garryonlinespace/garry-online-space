
import Navbar from "@/components/Navbar";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <div className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or need more information about our courses? Get in touch with our team today.
            </p>
          </div>
        </div>
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
