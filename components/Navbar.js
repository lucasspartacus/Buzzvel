import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Lucas Spartacus</div>
      <input className={styles.menubtn} type="checkbox" id="menubtn" />
      <label className={styles.menuicon} for="menubtn"><span className={styles.navicon}></span></label>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        <li className={styles.linavnar}><Link href="#about">About Me</Link></li>
        <li className={styles.linavnar}><Link href="#projects">Buzzvel Projects</Link></li>
        <li className={styles.linavnar}><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
