import styles from './Hero.module.scss';
import blurImage from "./img/blur.png"; 

<div className={styles.hero}>

</div>

function Hero() {
  return (
    <div className={styles.Hero} style={{ backgroundImage:`url(${blurImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"} }>
      <div className="container">
        <div className={styles.wrapper}>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
