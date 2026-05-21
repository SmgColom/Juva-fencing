import styles from "./TestimonyList.module.scss";
import Container from "@/components/common/Container/Container";

export default function TestimoniesList() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Services we provide</h2>

        <div className={styles.grid}>
          <article className={styles.card}>
            <img
              src="/Timber_Fencing.jpg"
              alt="Timber Fencing"
              className={styles.cardImage}
            />
          </article>

          <article className={styles.card}>
            <div className={styles.textContent}>
              <h3>Timber Fencing</h3>
              <p>
                Strong, classic, and cost-effective. Perfect for privacy and a
                natural look.
              </p>
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.textContent}>
              <h3>Colorbond Fencing</h3>
              <p>
               Modern, durable, and low-maintenance. Ideal for long-lasting boundary fencing.
              </p>
            </div>
          </article>
                    <article className={styles.card}>
            <img
              src="/ColorBond_Fencing.jpg"
              alt="ColorBond fencing"
              className={styles.cardImage}
            />
          </article>
          <article className={styles.card}>
            <img
              src="/Paling_Fences.jpg"
              alt="Paling fences"
              className={styles.cardImage}
            />
          </article>

          <article className={styles.card}>
            <div className={styles.textContent}>
              <h3>Paling Fences</h3>
              <p>
                Traditional and reliable fencing option, commonly used for residential properties.
              </p>
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.textContent}>
              <h3>Fence Repairs</h3>
              <p>
                Damaged or leaning fence? We provide fast and effective repair services to restore safety and appearance.
              </p>
            </div>
          </article>
          <article className={styles.card}>
            <img
              src="/Fence_Repairs.jpg"
              alt="Fence Repairs"
              className={styles.cardImage}
            />
          </article>

          <article className={styles.card}>
            <img
              src="/Custom_Fencing.jpg"
              alt="Custom Fencing"
              className={styles.cardImage}
            />
          </article>

          <article className={styles.card}>
            <div className={styles.textContent}>
              <h3>Custom Fencing Solutions</h3>
              <p>
                Every property is different. We design and build tailored fencing solutions to match your specific requirements.
              </p>
            </div>
          </article>
<article className={styles.card}>
            <div className={styles.textContent}>
              <h3>Gate Installation</h3>
              <p>
                We install secure and functional gates that complement your fence design.
              </p>
            </div>
          </article>
          <article className={styles.card}>
            <img
              src="/Gate_Installation.jpg"
              alt="Gate Installation"
              className={styles.cardImage}
            />
          </article>
        </div>
      </Container>
    </div>
  );
}