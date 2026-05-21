import Image from "next/image";
import styles from "./Hero.module.scss";
import Button from '@/components/common/Button/Button';
import { FaCheck } from "react-icons/fa";
export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.title}>Your expert fence builders</h1>

          <div className={styles.features}>
            <ul>
              <li><FaCheck /> With over 4 years of experience in the industry, we are committed to providing outstanding service.</li>
              
            </ul>
          </div>

          {/* Botón siempre después de features */}
          <Button href="https://calendar.app.google/EHkcSF4JTVJWpuzJ8" target="_blank">
            Free Quote!
          </Button>
        </div>

        <div className={styles.rightWrapper}>
          <Image
            className={styles.right}
            src="/Logo.png"
            alt="Hero image"
            width={550}
            height={550}
            priority
          />
        </div>
      </div>
    </div>
  );
}