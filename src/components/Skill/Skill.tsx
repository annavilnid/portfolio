import s from './Skill.module.css'

type SkillPropsType = {
  logo: string
  header: string
  description: string
}

function Skill({logo, header, description}: SkillPropsType) {
  return (
    <div className={s.skill}>
      <img className={s.skill__logo} src={logo}/>
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Skill;