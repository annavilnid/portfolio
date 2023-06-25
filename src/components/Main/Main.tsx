import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contacts from '../Contacts/Contacts';
import Section from '../Section/Section';
import s from './Main.module.scss';
import Particule from "../Skills/Particule";

function Main() {
    return (
        <main className={s.main}>
            {/*<AboutMe/>*/}
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
            <Section
                subtitle='My skills test'
                id="Skills-test"
            >
                <Particule sectionId='test'/>
            </Section>
        </main>
    );
}

export default Main;