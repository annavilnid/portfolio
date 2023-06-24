import s from './Skills.module.scss';
import Skill from '../Skill/Skill';
import {skillsContent} from '../../utils/content/TextContent';

import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";
import { ISourceOptions } from "tsparticles-engine";

function Skills() {
    return (
      <div className={s.skills}>
          {/*<Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>*/}
        {skillsContent.map( s =>
          <Skill key={s.id}
            skill={s}
          />
        )}
      </div>
  );
}

export default Skills;