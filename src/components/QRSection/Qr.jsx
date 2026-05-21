import styles from "./Qr.module.scss";
import Container from "@/components/common/Container/Container";
import Button from "@/components/common/Button/Button";

export default function Qr() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Still not sure of what type of fence you want?
          </h2>

          <h3 className={styles.subtitle}>
            Call for a consultation and information regarding your options
          </h3>

          <div className={styles.buttonWrapper}>
            <Button
              href="https://calendar.app.google/EHkcSF4JTVJWpuzJ8"
              target="_blank"
            >
              Call now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}