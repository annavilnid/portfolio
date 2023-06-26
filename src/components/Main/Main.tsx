import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contacts from '../Contacts/Contacts';
import Section from '../Section/Section';
import s from './Main.module.scss';
import FadeTop from '../FadeTop/FadeTop';
// import { Fade } from 'react-reveal';
// const Fade = require("react-reveal/Fade")

function Main() {
    return (
        <main className={s.main}>
            <AboutMe/>
            {/*<FadeTop>*/}
            {/*<Fade top>*/}
            <Section
                subtitle='My skills'
                id='Skills'
            >
                <Skills/>
            </Section>
            <Section
                subtitle='My Projects'
                id='Projects'
            >
                <Portfolio/>
            </Section>
            <Section
                subtitle='Get in touch'
                id='Contacts'
            >
                <Contacts/>
            </Section>
            {/*</Fade>*/}
            {/*    </FadeTop>*/}
        </main>
    );
}

export default Main;