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
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="ReactJs" />
        <SkillList src={checkMarkIcon} skill="bootstrap" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Java" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="Laravel" />
        <SkillList src={checkMarkIcon} skill="Flutter" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="PostGreSQL" />
        <SkillList src={checkMarkIcon} skill="WordPress" />
      </div>

    </section>
  )
}

export default Skills;
