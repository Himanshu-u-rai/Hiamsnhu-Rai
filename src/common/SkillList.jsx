function SkillList({ src, skill }) {  
    return (
      <span>
        <img src={src} alt="Checkmark icon" />
        <p>{skill}</p>  {/* Use 'skill' here */}
      </span>
    )
  }
  
  export default SkillList;
  