import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Onchange input data update that data.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit Handler for submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(`${process.env.REACT_APP_EMAILJS_USER_ID}`);

    // Impented email js for sending mail or contact.
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER_ID}`
      )

      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear for data after submit the form

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className={styles.contactPage}>
      <h2>Let's Connect</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <div className={styles.inputWrapper}>
            <label className={styles.label_star} htmlFor="name">
              Name{" "}
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label_star} htmlFor="email">
              Email{" "}
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label_star} htmlFor="phone">
              Phone{" "}
            </label>
            <input
              type="number"
              placeholder="Your Phone"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label_star} htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label_star} htmlFor="message">
            Message
          </label>
          <textarea
            rows={6}
            placeholder="Your Message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            required
          ></textarea>
        </div>
        {isSubmitted && (
          <p className={styles.successMessage}>Thanks for Connecting Us!!</p>
        )}
        <button type="submit" className={styles.button}>
          Submit form
        </button>
      </form>
    </div>
  );
};
export default Contact;
