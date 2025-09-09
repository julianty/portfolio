import Contact from "../contact";
import SectionHeader from "../ui/section-header";

function ContactSection() {
  return (
    <section id="contact" className="flex flex-col h-[70vh]">
      <SectionHeader>Let's get in touch</SectionHeader>
      <Contact />
    </section>
  );
}

export default ContactSection;
