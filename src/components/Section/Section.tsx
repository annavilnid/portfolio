import React from 'react';
import Subtitle from '../Subtitle/Subtitle';
import s from './Section.module.scss'

type SectionPropsType = {
  id: string
  subtitle: string
  children: React.ReactNode
}

function Section({id, subtitle, children}: SectionPropsType) {
  return (
    <div className={s.section} id={id}>
      <Subtitle
        subtitle={subtitle}
      />
      <div className={s.section__content}>
        {children}
      </div>
    </div>
  );
}

export default Section;