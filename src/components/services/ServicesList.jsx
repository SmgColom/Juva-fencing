import { useState } from "react";
import { services } from "../../data/services.js";
import ServiceCard from "./ServiceCard.jsx";
import ServiceModal from "./ServiceModal.jsx";
import styles from "./ServicesList.module.scss";
import Container from "@/components/common/Container/Container";

export default function ServicesList() {
  const [selected, setSelected] = useState(null);

  return (
    <section className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onOpen={setSelected} />
          ))}
        </div>
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      </Container>
    </section>
  );
}