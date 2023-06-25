import s from './Skills.module.scss';
import Skill from '../Skill/Skill';
import {skillsContent} from '../../utils/content/TextContent';

// import React, { useCallback } from "react";
// import Particles from "react-particles";
// import type { Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";
// import particlesOptions from "../../particles.json";
// import { ISourceOptions } from "tsparticles-engine";


function Skills() {
    // const particlesInit = useCallback(async (engine: Engine) => {
    //     await loadFull(engine);
    // }, []);
    return (
        <div className={s.skills}>
            {/*<div className={s.particles__container}>*/}
                {/*<Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>*/}
                {skillsContent.map(s =>
                    <Skill key={s.id}
                           skill={s}
                    />
                )}
            {/*</div>*/}
        </div>
  );
}

export default Skills;