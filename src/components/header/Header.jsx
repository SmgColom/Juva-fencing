import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const syncHeaderOffset = useCallback(() => {
    const h = headerRef.current?.getBoundingClientRect().height ?? 0;
    document.body.style.setProperty("--header-offset", `${Math.ceil(h)}px`);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useLayoutEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    syncHeaderOffset();
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen, syncHeaderOffset]);

  useEffect(() => {
    const onResize = () => syncHeaderOffset();
    window.addEventListener("resize", onResize);
    const t = setTimeout(syncHeaderOffset, 50);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [syncHeaderOffset]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}
    >
      <div className={styles.brand}>
        <button
          type="button"
          className={styles.logoButton}
          onClick={() => setShowModal(true)}
          aria-label="Ver logo"
        >
          <Image
            src="/Logo.png"
            alt="Logo juva fencing"
            width={96}
            height={96}
            priority
          />
        </button>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true">
          <div className={styles.modalContent}>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className={styles.closeButton}
              aria-label="Cerrar"
            >
              ✖️
            </button>
            <img src="/Logo.png" alt="Logo grande" className={styles.modalImage} />
          </div>
        </div>
      )}

      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="main-nav" className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
        <ul>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/servicios/servicios" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/eventos" onClick={closeMenu}>Gallery</Link></li>
          <li><Link href="/news/blog" onClick={closeMenu}>Contact</Link></li>
          <li className={styles.callItem}>
            <Link href="/contact" onClick={closeMenu}>Call 0466 674 743</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;







