import ContactModern from "../contact-modern";
import SectionHeader from "../ui/section-header";

function ContactSection() {
  return (
    <section id="contact" className="flex flex-col pb-16">
      <SectionHeader>Let's get in touch</SectionHeader>
      <ContactModern />
    </section>
  );
}

export default ContactSection;
