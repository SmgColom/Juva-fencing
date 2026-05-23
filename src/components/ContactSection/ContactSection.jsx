import styles from "./ContactSection.module.scss";
import Map from "./Map";
import ContactInfo from "./ContactInfo";
import Container from "@/components/common/Container/Container";

export default function ContactSection() {
  return (
    <section className={styles.wrapper} id="contact">
      <Container>
        <h2 className={styles.title}>Contact Us</h2>

        <div className={styles.ContactContainer}>
          <div className={styles.ContactForm}>
            <Map />
          </div>

          <div className={styles.ContactInfo}>
            <ContactInfo />
          </div>
        </div>
      </Container>
    </section>
  );
}


