import React from 'react'
import './Social.css';
import SocialsJson from '../../assets/json/social.json';
import temp from '../../assets/svg/github.svg';

const Social = () => {

    const imagePathFinder = (name: string): string => {
        return `../../assets/svg/${name}.svg`;
    }

    return (
        <div className='Social'>
            <div className="conatiner">
                {SocialsJson.map((data) => (
                    <div className="SocialConatiner" key={data.id}>
                        <img src={require('../../assets/svg/' + data.name.toLowerCase() + '.svg')} alt={data.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Social