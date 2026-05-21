import styles from "./ContactForm.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";
import Image from "next/image";

const ContactInfo = () => (
  <div className={styles.infoBox}>
    
    <div>
        <div className={styles.contact__icon}><FaPhoneAlt /></div>
      <h3>Phone</h3>
      <p>0466674743</p>
    </div>


    <div>
        <div className={styles.contact__icon}><FaLocationDot /></div>
      <h3>Address</h3>
      <p>Prahran VIC 3181, Australia</p>
    </div>
    <div>
        <div className={styles.contact__icon}><RiCalendarScheduleFill /></div>
      <h3>Operating Hours</h3>
      <p>Monday-Friday: 7am - 5pm</p>
      <p>Saturday: 9am - 5pm</p>
      <p>Sunday: Closed</p>
    </div>

  </div>
);

export default ContactInfo;


