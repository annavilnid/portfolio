import s from './Subtitle.module.scss';

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