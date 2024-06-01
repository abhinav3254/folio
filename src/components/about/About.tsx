import React from 'react'
import './About.css';
import educationSvg from '../../assets/svg/education.svg';
import bgiLogo from '../../assets/img/bgi-logo.png'

const About = () => {
    return (
        <div className='About'>
            <div className='education-img'>
                <img src={educationSvg} alt="" />

                <div className="EducationCard">
                    <div className="EducationImg">
                        <img src={bgiLogo} alt="" />
                    </div>
                    <div className="EducationCardRight">
                        <div className="Header">
                            <p>Bansal Institute of Research Technology and Science,Bhopal,Madhya Pradesh</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quisquam molestiae esse impedit laboriosam</p>
                        <p>in accusamus, autem sint numquam libero soluta amet tenetur iste inventore vel ut odit cupiditate? Fugiat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About