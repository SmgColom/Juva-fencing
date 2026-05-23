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
    handleScroll();

    window.addEventListener("scroll", handleScroll);

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

    const timer = setTimeout(syncHeaderOffset, 50);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timer);
    };
  }, [syncHeaderOffset]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        menuOpen ? styles.menuOpen : ""
      }`}
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

            <img
              src="/Logo.png"
              alt="Logo grande"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}

      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setMenuOpen((value) => !value)}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-nav"
        className={`${styles.nav} ${menuOpen ? styles.active : ""}`}
      >
        <ul>
          <li>
            <Link href="#home" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link href="#about" onClick={closeMenu}>
              About
            </Link>
          </li>

          <li>
            <Link href="#services" onClick={closeMenu}>
              Services
            </Link>
          </li>

          <li>
            <Link href="#projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>

          <li>
            <Link href="#contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          <li className={styles.callItem}>
            <a href="tel:0466674743">Call 0466 674 743</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;







