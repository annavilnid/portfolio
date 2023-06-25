import s from './Skill.module.scss';
import {SkillType} from '../../utils/content/TextContent';



type SkillPropsType = {
  skill: SkillType
}

function Skill({skill}: SkillPropsType) {
  return (
      <div className={s.skill}>
              <img className={s.skill__logo} src={skill.logo} />
              <h4 className={s.skill__title}>{skill.title}</h4>
              <p className={s.skill__description}>{skill.description}</p>
      </div>
  );
}

export default Skill;