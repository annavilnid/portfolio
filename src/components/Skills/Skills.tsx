import s from './Skills.module.css';
import Skill from '../Skill/Skill';
import reactLogo from '../../images/icon-react.svg'
import TypescriptLogo from '../../images/icon-typescript.svg'
import ReduxLogo from '../../images/icon-redux.svg'
import {testText} from "../../testText";

function Skills() {
  return (
      <div className={s.skills_container}>
        <Skill
          logo={reactLogo}
          header={'React'}
          description={testText}
        />
        <Skill
          logo={TypescriptLogo}
          header={'TypeScript'}
          description={testText}
        />
        <Skill
          logo={ReduxLogo}
          header={'Redux'}
          description={testText}
        />
      </div>
  );
}

export default Skills;