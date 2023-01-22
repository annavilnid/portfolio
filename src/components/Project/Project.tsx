import s from './Project.module.scss'
import {MouseEvent, useState} from 'react';
import {ProjectType} from '../../utils/content/TextContent';

type ProjectPropsType = {
  project: ProjectType
}

function Project({project}: ProjectPropsType) {
  const mainLogoStyle = {
    backgroundImage: `url(${project.mainLogo})`,
  };
  const activeLogoStyle = {
    backgroundImage: `url(${project.activeLogo})`,
  };
  const [isSkillActive, setIsSkillActive] = useState<boolean>(false)

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    setIsSkillActive(true)
  }

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    setIsSkillActive(false)
  }

  const styleFunc = () => isSkillActive ? activeLogoStyle : mainLogoStyle

  return (
    <a href='#'
       target='_blank'
       className={s.project}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}>
      <div className={s.project__icon} style={styleFunc()}/>
      <h4 className={s.project__title}>{project.title}</h4>
      <p className={s.project__description}>{project.description}</p>
    </a>
  );
}

export default Project;