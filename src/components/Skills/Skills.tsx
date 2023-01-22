import s from './Skills.module.scss';
import Skill from '../Skill/Skill';
import {skillsContent} from '../../utils/content/TextContent';

function Skills() {
  return (
      <div className={s.skills}>
        {skillsContent.map( s =>
          <Skill key={s.id}
            skill={s}
          />
        )}
      </div>
  );
}

export default Skills;