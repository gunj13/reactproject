import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = form.current.user_email.value;
    if (!emailRegex.test(email)) {
      setAlertMessage("Please enter a valid email address");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    const phone = form.current.user_phone.value;
    if (!phoneRegex.test(phone)) {
      setAlertMessage("Please enter a 10-digit phone number");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }

    emailjs
      .sendForm(
        "service_w27vm9b",
        "template_oferbpk",
        form.current,
        "7pERvQhBU9QaLsi7K"
      )
      .then(
        () => {
          setAlertMessage("Message Sent!");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
          form.current.reset();
        },
        (error) => {
          setAlertMessage("FAILED... " + error.text);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        }
      );
  };
  
  return (
    <section className="contact-section" id="contact">
      <h2>Take the First Step</h2>
      <p>
        Whether pursuing modernization of your enterprise application estate or
        seeking a more efficient approach to application management,{" "}
        <b style={{color:"#004aad"}}>Simpli</b>&nbsp;<b>amal</b> is here to help.
      </p>
      <p>
        When you're ready to take the next step, fill out the form below and
        we'll contact you to discuss more.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="user_email" required />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="user_phone" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea><br></br>
        <input type="submit" value="Send" />
      </form>
      {showAlert && (
        <div className="alertmsg">
          <span>{alertMessage}</span>
        </div>
      )}

    </section>
  );
};

export default ContactSection;
