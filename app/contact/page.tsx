import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact | TaskFlow",
  description: "Request a demo or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact us"
        text="Write to us or visit our office. We reply within one day."
      />
      <ContactForm />
    </>
  );
}