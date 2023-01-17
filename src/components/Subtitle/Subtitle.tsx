import s from './Subtitle.module.css';

type SubtitlePropsType = {
  subtitle: string
}

function Subtitle ({subtitle}: SubtitlePropsType) {
  return (
    <h3 className={s.subtitle}>
      {subtitle}
    </h3>
  );
}

export default Subtitle;