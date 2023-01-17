import studentPhoto from '../../images/student-photo.jpg'
import style from './AboutMe.module.css'
import { Typewriter } from 'react-simple-typewriter'
// import 'react-simple-typewriter/dist/index.css'

function AboutMe() {
  return (
    <div className={style.aboutme}>
      <div className={style.aboutme__wrapper}>
        <h2 className={style.aboutme__header  + ' ' + style.aboutme__header_yellow}>Hello&nbsp;</h2>
        <h2 className={style.aboutme__header}>My name is&nbsp;</h2>
        <h1 className={style.aboutme__header}>Anna Vilnid.</h1>
      </div>
      <div className={style.aboutme__container}>
        <h1 className={style.aboutme__header  + ' ' + style.aboutme__header_yellow}>
          frontend {' '}
          <span className={style.aboutme__header  + ' ' + style.aboutme__header_yellow}>
          {/* Style will be inherited from the parent element */}
          {/*  <Typewriter /!* Props *!/ />*/}
            <Typewriter
              loop
              cursor
              cursorStyle='_'
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={3000}
              words={['DEVELOPER']}
              // onLoop={(loopCount) =>
              //   console.log(`Just completed loop ${loopCount}`)
              // }
            />
        </span>
        </h1>
      </div>
      </div>
    // </div>
  );
}

export default AboutMe;