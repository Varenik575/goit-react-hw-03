import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => {
           return (<li key={contact.id} className={styles.listElement}>
            <Contact  name={contact.name} number={contact.number}/>
          </li>);
      })}
    </ul>
  );
}
export default ContactList;
