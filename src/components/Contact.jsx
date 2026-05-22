import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured yet. Add your EmailJS keys in .env."
      });
      return;
    }

    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
      to_name: "Morning Bite Team"
    };

    try {
      setIsSending(true);
      setStatus({ type: "", message: "" });
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey
      });
      form.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. We will contact you soon."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Could not send your message. Please try again in a moment."
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container contact-grid">
        <div className="contact-info" data-aos="fade-up">
          <h2 className="section-title">Visit Morning Bite</h2>
          <p className="section-subtitle">
            We love serving fresh breakfast and snacks all day. Reach out for
            reservations, private bookings, or quick inquiries.
          </p>
          <div className="contact-card">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 8:00 AM - 11:00 PM</p>
          </div>
          <div className="contact-card">
            <h3>Address</h3>
            <p>21 Brew Lane, Downtown, Kolkata, India</p>
            <p>Email: hello@morningbite.com</p>
            <p>Phone: +91 98765 11111</p>
          </div>
        </div>

        <form className="contact-form" data-aos="zoom-in" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Tell us what you need..."
          />

          <button type="submit" className="btn-primary" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status.message ? (
            <p className={`contact-status ${status.type}`}>{status.message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;
