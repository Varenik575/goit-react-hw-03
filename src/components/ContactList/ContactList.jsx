import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <ul className={styles.List}>
      {contacts.forEach((contact) => {
        return (
          <li className={styles.listElement}>
            <Contact key={contact.id} name={contact.name} number={contact.number} />{" "}
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
