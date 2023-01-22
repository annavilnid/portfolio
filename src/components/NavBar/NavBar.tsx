import {MouseEvent, useState} from 'react';
import s from './NavBar.module.scss';

function Navbar() {
  const [isActive, setActive] = useState('Home')

  const toLink = (e: MouseEvent<HTMLAnchorElement>) => {
      const name = e.currentTarget.dataset.name as string;
      const block = document.querySelector(`#${name}`);
    if (block) {
      setActive(name)
      block.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

  const toTop = () => {
    setActive('Home')
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const classNameFunc = (name: string) => isActive === name ? `${s.nav__link} ${s.nav__active}` : s.nav__link;

  return (
    <nav className={s.nav} id='navbar'>
            <a className={classNameFunc('Home')} onClick={toTop}>Home</a>
            <a className={classNameFunc('Skills')} data-name='Skills' onClick={toLink}>Skills</a>
            <a className={classNameFunc('Projects')} data-name='Projects' onClick={toLink}>Projects</a>
            <a className={classNameFunc('Contacts')} data-name='Contacts' onClick={toLink}>Contacts</a>
    </nav>
  );
}

export default Navbar;