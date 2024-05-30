import './Home.css'
import homeImage from '../../assets/svg/home-image.svg';
import Social from '../socials/Social';
import HelloSvg from '../../assets/svg/Hello.svg'
import { gsap } from "gsap";
import { useEffect } from 'react';

const Home: React.FC = () => {

    useEffect(() => {
        gsap.to(".HelloIcon", {
            duration: 0.5,
            x: "+=10",
            yoyo: true,
            repeat: -1,
        });
    }, []);

    return (
        <div className='Home'>
            <div className="HomeLeft">
                <img src={homeImage} alt="" />
            </div>
            <div className="HomeRight">
                <div className="Hello">
                    <img className='HelloIcon' src={HelloSvg} alt="hello" />
                </div>
                <p className='Name'>Abhinav Jha</p>
                <p className='Information'>
                    A passionate innovator driven by a mission to develop end-to-end solutions that foster sustainable and scalable social and technical systems, creating a meaningful impact. With a keen eye for detail and a relentless drive for excellence, I thrive in dynamic environments, turning visionary ideas into reality. My expertise spans from cutting-edge technology development to holistic system design, ensuring every project not only meets but exceeds expectations. Join me on a journey to harness technology for the greater good and make a lasting difference in the world.
                </p>
                <Social />
            </div>
        </div>
    )
}

export default Home