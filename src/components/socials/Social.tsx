import './Social.css';
import SocialsJson from '../../assets/json/social.json';

const Social = () => {

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