import React, {ReactNode, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import s from './App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Element, scroller } from 'react-scroll';
import anime from 'animejs';

const FadeTop = () => {
    const handleScroll = () => {
        scroller.scrollTo('top', {
            duration: 300,
            smooth: 'easeOutSine',
        });
    };

    return (
        <Element name="top" className={s.fadeTop} onClick={handleScroll}>
            <div className={s.fadeContent}>
                <Footer />
            </div>
        </Element>
    );
};


function App() {
    return (
        <div className={s.app}>
            {/*<Particule sectionId='test' />*/}
            <Header />
            <Main />
            <FadeTop/>
        </div>
    );
}

export default App;