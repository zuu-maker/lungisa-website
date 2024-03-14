import Address from "@/components/Address";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import SendMessage from "@/components/SendMessage";
import SmallFooter from "@/components/SmallFooter";
import React from "react";

function ContactUsPage() {
  return (
    <div className="montserrat opacity-90">
      <Header />
      <ContactUs />
      <SendMessage />
      <Address />
      <SmallFooter />
    </div>
  );
}

export default ContactUsPage;
