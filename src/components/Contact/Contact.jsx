import styles from "./Contact.module.css";
import PhoneIcon from "../PhoneIcon/PhoneIcon";
import UserIcon from "../UserIcon/UserIcon";

function Contact({ name, number, id, onDelete}) {

  

  return (
    <div className={styles.wrapper}>
      <div className={styles.textBlock}>
        <div className={styles.stylingBlock}>
          <UserIcon width="12px" height="12px" color="black" />
          <span className={styles.name}>{name}</span>
        </div>

        <div className={styles.stylingBlock}>
          <PhoneIcon width="12px" height="12px" color="black" />
          <span className={styles.number}>{number}</span>
        </div>
      </div>

      <button className={styles.button} onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
}

export default Contact;
