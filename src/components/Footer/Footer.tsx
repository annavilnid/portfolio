import s from './Footer.module.scss';
import telegramLogo from '../../images/icon-telegram.svg';
import linkedInLogo from '../../images/icon-linkedin.svg';
import githubLogo from '../../images/icon-github.svg';
import Subtitle from '../Subtitle/Subtitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <Subtitle subtitle={'Anna Vilnid'}/>
      <nav className={s.footer__links}>
        <a title='Telegram' href='#' target='_blank'>
          <FontAwesomeIcon className={s.footer__link} icon={faInstagram}/>
        </a>
        <a title='Telegram' href='https://telegram.me/annavilnid' target='_blank'>
          <img className={s.footer__link} src={telegramLogo} alt='Telegram icon'/>
        </a>
        <a href='https://www.linkedin.com/in/anna-vilnid-96312a167/' target='_blank'>
          <img className={s.footer__link} src={linkedInLogo} alt='LinkedIn icon'/>
        </a>
        <a href='https://github.com/annavilnid'  target='_blank'>
          <img className={s.footer__link} src={githubLogo} alt='Github icon'/>
        </a>
      </nav>
      <p className={s.footer__copyright}>&copy; {currentYear} All Rights Reserved</p>
      <a className={s.footer__icons8} target='_blank' href='https://icons8.com'>icon by Icons8</a>
    </footer>
  );
}

export default Footer;