import {useCallback, useEffect} from "react";
import Particles from "react-tsparticles";
import type {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import particlesOptions from "../../particles.json";
import {ISourceOptions} from "tsparticles-engine";


interface ParticuleProps {
    sectionId: string;
}

const Particule: React.FC<ParticuleProps> = ({sectionId}) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        // Инициализация tsParticles
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // Частицы загружены
    }, []);

    useEffect(() => {
        // При монтировании компонента
        const section = document.getElementById(sectionId);
        if (section) {
            const container = section.getElementsByClassName("particles-container")[0];
            if (container) {
                container.classList.add("particles-visible");
            }
        }

        return () => {
            // При размонтировании компонента
            const section = document.getElementById(sectionId);
            if (section) {
                const container = section.getElementsByClassName("particles-container")[0];
                if (container) {
                    container.classList.remove("particles-visible");
                }
            }
        };
    }, [sectionId]);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions as ISourceOptions}
        />
    );
};

export default Particule;