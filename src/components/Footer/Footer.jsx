import styles from './Footer.module.scss'
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <div className={styles.footerwrapper}>
      <div className={styles.footerInner}>
        <div className={styles.socialIcons}>
          <a title="Instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <GrInstagram size={30}/>
          </a>
          <a title="Facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a title="Tiktok" aria-label="Tiktok" target="_blank" rel="noopener noreferrer">
            <AiFillTikTok size={30} />
          </a>
        </div>
        <span>&copy; {getCurrentYear()}</span>
      </div>
    </div>
  );
}

export default Footer;
