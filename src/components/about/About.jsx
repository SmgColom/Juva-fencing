import { useState } from "react";
import styles from "./About.module.scss";
import Container from "@/components/common/Container/Container";
import Image from "next/image";

export default function AboutList() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="about" className={styles.wrapper}>

      {/* ── Banner: texto izquierda + imagen derecha ── */}
      <div className={styles.banner}>
        <Container>
          <div className={styles.bannerInner}>
            <div className={styles.bannerText}>
              <h2 className={styles.bannerTitle}>
                Ensuring that your project fences are completed to your exact specifications.
              </h2>
              <p>
                At Juva Fencing, we specialize in delivering high-quality fencing solutions
                tailored to each client's needs. With hands-on experience in residential and
                commercial projects, we focus on building fences that are not only strong and
                secure, but also enhance the look and value of your property.
              </p>
              <p>
                Led by Juan Rivera, a qualified carpenter with industry experience, our team
                takes pride in precision, reliability, and honest workmanship. We understand
                that every project is different, which is why we take the time to assess your
                space and recommend the best solution for your budget and goals.
              </p>
              <p>
                Our mission is simple: deliver durable fences, clean finishes, and a service
                you can trust from start to finish.
              </p>
            </div>
          </div>
        </Container>

        {/* Imagen fuera del Container para que llegue al borde derecho */}
        <div className={styles.bannerImage}>
          <Image
            src="/fence.jpg"
            alt="Wooden fence installation"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}