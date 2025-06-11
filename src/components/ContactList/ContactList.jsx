import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList({ contacts, functions }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => {
           return (<li key={contact.id} className={styles.listElement}>
            <Contact  name={contact.name} number={contact.number} id={contact.id} onDelete={functions}/>
          </li>);
      })}
    </ul>
  );
}
export default ContactList;
