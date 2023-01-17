import s from './NavBar.module.css';
import {MouseEvent} from "react";

function Navbar() {

  const toLink = (e: MouseEvent<HTMLAnchorElement>) => {
      const name = e.currentTarget.dataset.name as string;
      const block = document.querySelector(`#${name}`);
    if (block) {
      block.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  const toTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <nav className={s.nav} id="navbar">
            <a className={s.nav__link} onClick={toTop}>Home</a>
            <a className={s.nav__link} data-name='Skills' onClick={toLink}>Skills</a>
            <a className={s.nav__link} data-name='Projects' onClick={toLink}>Projects</a>
            <a className={s.nav__link} data-name='Contacts' onClick={toLink}>Contacts</a>
    </nav>
  );
}

export default Navbar;