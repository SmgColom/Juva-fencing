import Image from "next/image";
import styles from "./Qr.module.scss";
import Container from "@/components/common/Container/Container";

export default function Qr() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Text Us</h2>
        <h3 className={styles.subtitle}>Scan the QR code</h3>

        <div className={styles.qrImages}>
          <div className={styles.qrItem}>
            <h4>Text Us</h4>
            <Image
              src="/QR1.png"
              alt="QR code to send SMS option 1"
              width={140}
              height={140}
            />
          </div>

          <div className={styles.qrItem}>
            <h4>Text Us</h4>
            <Image
              src="/QR2.png"
              alt="QR code to send SMS option 2"
              width={140}
              height={140}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}