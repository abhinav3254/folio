import './Skills.css';
import websiteBuilderSvg from '../../assets/svg/website-img.svg';
import fullStackSkillsJSON from '../../assets/json/full-stack.json';
import cloudJSON from '../../assets/json/cloud.json';
import databaseJSON from '../../assets/json/database.json';
import mobileJSON from '../../assets/json/mobile.json';
import serverImg from '../../assets/svg/server.svg';
import mobileImg from '../../assets/svg/mobile.svg';
import databaseImg from '../../assets/svg/database.svg';

const Skills = () => {
    return (
        <div className='Skills'>
            <div className="SkillsContainer">
                <img src={websiteBuilderSvg} alt="" />
                <div className="SkillsContainerRight">
                    <p className='SkillCategory'>Full Stack Development</p>
                    <div className="SkillsContainerRightContainer">
                        {fullStackSkillsJSON.map((data) => (
                            <div className="ConatinerCard" key={data.id}>
                                <img src={require('../../assets/skills/fullstack/' + data.name.toLowerCase() + '.svg')} alt={data.name} />
                                <p>{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="SkillsContainer">
                <div className="SkillsContainerRight">
                    <p className='SkillCategory'>Cloud Infra-Architecture</p>
                    <div className="SkillsContainerRightContainer">
                        {cloudJSON.map((data) => (
                            <div className="ConatinerCard" key={data.id}>
                                <img src={require('../../assets/skills/cloud/' + data.name.toLowerCase() + '.svg')} alt={data.name} />
                                <p>{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <img src={serverImg} alt="" />
            </div>

            <div className="SkillsContainer">
                <img src={databaseImg} alt="" />
                <div className="SkillsContainerRight">
                    <p className='SkillCategory'>Database</p>
                    <div className="SkillsContainerRightContainer">
                        {databaseJSON.map((data) => (
                            <div className="ConatinerCard" key={data.id}>
                                <img src={require('../../assets/skills/database/' + data.name.toLowerCase() + '.svg')} alt={data.name} />
                                <p>{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="SkillsContainer">
                <div className="SkillsContainerRight">
                    <p className='SkillCategory'>Mobile Application Development</p>
                    <div className="SkillsContainerRightContainer">
                        {mobileJSON.map((data) => (
                            <div className="ConatinerCard" key={data.id}>
                                <img src={require('../../assets/skills/mobile/' + data.name.toLowerCase() + '.svg')} alt={data.name} />
                                <p>{data.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <img src={mobileImg} alt="" />
            </div>
        </div>
    )
}

export default Skills