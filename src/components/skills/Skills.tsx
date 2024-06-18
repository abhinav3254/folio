import './Skills.scss';
import skillsSvg from '../../svg/skills.svg';
import { skills_list } from './skills-list';

const Skills = () => {
    return (
        <div className='Skills'>
            <div className='skills-left'>
                <img src={skillsSvg} alt="" />
            </div>
            <div className='skills-right'>
                <div className="skills-conatiner">
                    {skills_list.map((skill, key) => (
                        <div key={key} className='skill'>
                            <img src={require(`../../images/skills/${skill.toLowerCase()}.svg`)} alt="" />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Skills