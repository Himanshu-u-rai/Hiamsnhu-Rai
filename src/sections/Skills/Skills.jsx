import styles from '../Skills/SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList.jsx';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>  
      <div className={styles.SkillList}>
         <SkillList src={checkMarkIcon} skill="HTML" />
         <SkillList src={checkMarkIcon} skill="CSS" />
         <SkillList src={checkMarkIcon} skill="python" />
         <SkillList src={checkMarkIcon} skill="js" />
      </div>
      <hr/>
      <div className={styles.SkillList}>
         <SkillList src={checkMarkIcon} skill="react" />
         <SkillList src={checkMarkIcon} skill="angular" />
         <SkillList src={checkMarkIcon} skill="java" />
         <SkillList src={checkMarkIcon} skill="c++" />
      </div>
      <hr/>
      <div className={styles.SkillList}>
         <SkillList src={checkMarkIcon} skill="redux" />
         <SkillList src={checkMarkIcon} skill="webpack" />
         <SkillList src={checkMarkIcon} skill="git" />
         <SkillList src={checkMarkIcon} skill="bootstrap++" />
      </div>
    </section>
  )
}

export default Skills;
