import React from 'react';
import './Skills.css';
import websiteBuilderSvg from '../../assets/svg/website-img.svg';
import fullStackSkillsJSON from '../../assets/json/full-stack.json';
// import '../../assets/skills/fullstack'

const Skills = () => {
    return (
        <div className='Skills'>
            <div className="SkillsContainer">
                <img src={websiteBuilderSvg} alt="" />
                <div className="SkillsContainerRight">
                    <p className='SkillCategory'>Full Stack Development</p>
                    <div className="SkillsContainerRightContainer">
                        {fullStackSkillsJSON.map((data) => (
                            <div className="ConatinerCard">
                                <img src={require('../../assets/skills/fullstack/' + data.name.toLowerCase() + '.svg')} alt={data.name} />
                                <p>{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills