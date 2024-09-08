import styles from './HeroStyle.module.css';
import heroImg from '../../assets/profilepic.png';
import sun from'../../assets/sun.svg';
import moon from'../../assets/moon.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubIcon from '../../assets/github-light.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import {useTheme} from '../../common/ThemeContext';

function Hero() {

  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer} ><img className={styles.hero} src={heroImg} alt="Profile Picture" />
      <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>Himanshu 
            <br/>
            Rai</h1>
            <h2>
               Data Engineer 
            </h2>
            <span>
                <a href="https://twitter.com" target="https://x.com/I_Himanshu_Rai">
                <img src={twitterIcon} alt="twitter icon" /></a>
                <a href="https://github.com" target="https://github.com/Himanshu-u-rai">
                <img src={githubIcon} alt="github icon" /></a>
                <a href="https://linkedin.com" target="https://www.linkedin.com/in/rai-himanshu/">
                <img src={linkedinIcon} alt="linkedin icon" /></a>
            </span>
            <p className={styles.description}>Aspired By Data</p>
            <a href={CV} download><button className="hover">Resume</button></a>
      </div>
    </section>
  )
}

export default Hero
