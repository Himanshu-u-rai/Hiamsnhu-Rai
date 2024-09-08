import styles from '../Projects/ProjectsStyles.module.css'
import Music from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import Portfolio from '../../assets/Portfolio Website.png';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
     <div className={styles.projectsContainer}>
     <ProjectCard src={Portfolio} link="https://github.com/AnuragSeervi/purelocal"h3="Portfolio"p="Portfolio website"/>
     <ProjectCard src={Music} link="https://github.com/AnuragSeervi/purelocal"h3="Music"p="Streaming App"/>
     <ProjectCard src={freshBurger} link="https://github.com/AnuragSeervi/purelocal"h3="freshBurger"p="Eating App"/>
     <ProjectCard src={hipsster} link="https://github.com/AnuragSeervi/purelocal"h3="Hipsster"p="Eyeware App"/>
     <ProjectCard src={fitLift} link="https://github.com/AnuragSeervi/purelocal"h3="FitLift"p="Gym App"/>
     </div>
    </section>
  )
}

export default Projects



