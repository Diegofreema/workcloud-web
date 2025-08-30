import { ContactForm } from '@/components/contact/form/contact-form';
import { HeroSection } from '@/components/contact/hero-section';

const page = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form & Info */}
      <ContactForm />
    </div>
  );
};

export default page;
