import s from './Skill.module.scss';
import {SkillType} from '../../utils/content/TextContent';

import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";
import { ISourceOptions } from "tsparticles-engine";


type SkillPropsType = {
  skill: SkillType
}

function Skill({skill}: SkillPropsType) {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
  return (
    <div className={s.skill}>
        <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>

      <img className={s.skill__logo} src={skill.logo} />
      <h4 className={s.skill__title}>{skill.title}</h4>
      <p className={s.skill__description}>{skill.description}</p>
    </div>
  );
}

export default Skill;