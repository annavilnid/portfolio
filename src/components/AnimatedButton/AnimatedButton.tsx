import s from './AnimatedButton.module.scss'

type AnimatedButtonType = {
  type: 'submit'
  value: string
}

function AnimatedButton({type, value}: AnimatedButtonType) {
  return (
    <div className={s.buttons}>
      <button className={s.blob} type={type}>
        {value}
        <span className={s.blob__inner}>
          <span className={s.blob__blobs}>
            <span className={s.blob__blob}></span>
            <span className={s.blob__blob}></span>
            <span className={s.blob__blob}></span>
            <span className={s.blob__blob}></span>
        </span>
        </span>
      </button>

      <svg className='blob-svg' xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10'></feGaussianBlur>
            <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7'
                           result='goo'></feColorMatrix>
            <feBlend in2='goo' in='SourceGraphic' result='mix'></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default AnimatedButton;