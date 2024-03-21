import { ContactForm } from "../components/ContactForm";
import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="form-overlay">
        <ContactForm />
      </div>
    </div>
  );
}
