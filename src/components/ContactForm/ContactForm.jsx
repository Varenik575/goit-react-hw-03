import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const INITIAL_STATE = { name: "", number: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">
          <span className={styles.formTag}>Name</span>
          <input
            onChange={handleChangeInput}
            value={formData.name}
            className={styles.input}
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="number">
          <span className={styles.formTag}>Number</span>
          <input
            onChange={handleChangeInput}
            value={formData.number}
            className={styles.input}
            type="text"
            name="number"
          />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
