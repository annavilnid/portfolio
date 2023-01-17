import s from './Portfolio.module.css';
import Project from '../Project/Project';
import logoSocialNetwork from '../../images/icon-social-network.png';
import logoCounter from '../../images/icon-counter.png';
import {testText} from "../../testText";

function Portfolio() {
  return (
      <div className={s.portfolio__container}>
        <Project
          logo={logoSocialNetwork}
          header={'Social Network'}
          description={testText}
        />
        <Project
          logo={logoCounter}
          header={'Counter'}
          description={testText}
        />
      </div>
  );
}

export default Portfolio;