import s from './AboutMe.module.scss'
import { Typewriter } from 'react-simple-typewriter'

function AboutMe() {
  return (
    <div className={s.aboutme}>
      <div className={s.aboutme__wrapper}>
        <h2 className={`${s.aboutme__header} ${s.aboutme__header_yellow}`}>Hello&nbsp;</h2>
        <h2 className={s.aboutme__header}>My name is&nbsp;</h2>
        <h1 className={s.aboutme__header}>Anna Vilnid.</h1>
      </div>
      <div className={s.aboutme__container}>
        <h1 className={`${s.aboutme__header} ${s.aboutme__header_yellow}`}>
          frontend {' '}
          <span className={`${s.aboutme__header} ${s.aboutme__header_yellow} ${s.aboutme__header_long}`}>
            <Typewriter
              loop
              cursor
              cursorStyle='_'
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={3000}
              words={['DEVELOPER']}
            />
        </span>
        </h1>
      </div>
      </div>
  );
}

export default AboutMe;