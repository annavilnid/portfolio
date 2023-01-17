import s from './Project.module.css'

type ProjectPropsType = {
  logo: string
  header: string
  description: string
}

function Project({logo, header, description}: ProjectPropsType) {
  return (
    <div className={s.project}>
      <img src={logo}/>
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;