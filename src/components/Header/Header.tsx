import s from './Header.module.css';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
      <header className={s.header}>
      <NavBar/>
      </header>
  );
}

export default Header;