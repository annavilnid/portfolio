import s from './Header.module.scss';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
      <header className={s.header}>
      <NavBar/>
      </header>
  );
}

export default Header;