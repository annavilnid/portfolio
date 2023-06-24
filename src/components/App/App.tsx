// import { useCallback } from "react";
// import Particles from "react-particles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";
//
// export const App = () => {
//     const particlesInit = useCallback(async (engine: Engine) => {
//         console.log(engine);
//
//         // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
//         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//         // starting from v2 you can add only the features you need reducing the bundle size
//         await loadFull(engine);
//     }, []);
//
//     const particlesLoaded = useCallback(async (container: Container | undefined) => {
//         await console.log(container);
//     }, []);
//
//     return (
//         <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
//     );
// };
//
// export default App;

import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import s from './App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import particlesOptions from "../../particles.json";
import { ISourceOptions } from "tsparticles-engine";

function App() {
    // const particlesInit = useCallback(async (engine: Engine) => {
    //     await loadFull(engine);
    // }, []);

    return (
        <div className={s.app}>
            {/*<Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>*/}
            {/*<div className={s.app}>*/}
                <Header />
                <Main />
                <Footer />
            {/*</div>*/}
        </div>
    );
}

export default App;