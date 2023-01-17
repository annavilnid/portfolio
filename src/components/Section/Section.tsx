import React from 'react';
import Subtitle from '../Subtitle/Subtitle';
import s from './Section.module.css'

type SectionPropsType = {
  subtitle: string
  children: React.ReactNode
  id: string
}

function Section({id, subtitle, children}: SectionPropsType) {
  return (
    <div className={s.section} id={id}>
      <Subtitle
        subtitle={subtitle}
      />
      <div className="section-content">
        {children}
      </div>
    </div>
  );
}

export default Section;