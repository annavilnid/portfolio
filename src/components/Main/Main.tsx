import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contacts from '../Contacts/Contacts';
import s from './Main.module.css';
import Section from "../Section/Section";
import React from "react";

function Main() {
  return (
    <main className={s.main}>
      <AboutMe/>
      <Section
        subtitle="My skills"
        id="Skills"
      >
        <Skills/>
      </Section>
      <Section
        subtitle="My Projects"
        id="Projects"
      >
        <Portfolio/>
      </Section>
      <Section
        subtitle="Contacts"
        id="Contacts"
      >
        <Contacts/>
      </Section>
    </main>
  );
}

export default Main;