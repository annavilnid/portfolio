import s from './Portfolio.module.scss';
import Project from '../Project/Project';
import {portfolioContent} from '../../utils/content/TextContent';

function Portfolio() {

  return (
      <div className={s.portfolio}>
        {portfolioContent.map( p =>
          <Project key={p.id}
            project={p}/>
        )}
      </div>
  );
}

export default Portfolio;