import './Home.scss'
import homeSvg from '../../svg/softwares.svg'

const Home = () => {
    return (
        <div className="Home">
            <div className='div-1'>
                <p className='text-sm m-10 salutation'>Hi, my name is</p>
                <p className='text-lg m-10 name'>Abhinav Jha</p>
                <p className='text-lg m-10 intro'>I write codes to stay happy 🤠</p>
                <p className='text-md m-10 des'>I'm a Software Engineer</p>
            </div>
            <div className='img-svg'>
                <img src={homeSvg} alt="" />
            </div>
        </div>
    )
}

export default Home