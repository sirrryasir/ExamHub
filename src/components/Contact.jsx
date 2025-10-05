import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6c8acrc",
        "template_hoyefv5",
        form.current,
        "lbASzE-CiXyu8aQhd"
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-20 text-center transition-colors">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 font-poppins">
          Contact Us
        </h1>
        <p className="text-gray-700 dark:text-white text-lg mb-10">
          Have questions, feedback, or partnership ideas? We’d love to hear from
          you. Fill out the form below or reach us through the following
          contacts.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:outline-blue-600"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg focus:outline-blue-600"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full border p-3 rounded-lg focus:outline-blue-600"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Email</h3>
              <a
                href="mailto:its.yazzzy@gmail.com"
                target="_blank"
                className="text-gray-700 dark:text-white"
              >
                its.yazzzy@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Phone</h3>
              <a
                href="https://wa.me/+252676919012"
                target="_blank"
                className="text-gray-700 dark:text-white"
              >
                +252 67 6919012
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Location</h3>
              <p className="text-gray-700 dark:text-white">
                Hargeisa, Somaliland
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
