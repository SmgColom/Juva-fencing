import styles from './Map.module.scss';

export default function ContactForm() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.mapWrapper}>
        <iframe
          title="Prahran VIC 3181 Australia Map"
          src="https://www.google.com/maps?q=Prahran%20VIC%203181%20Australia&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}





