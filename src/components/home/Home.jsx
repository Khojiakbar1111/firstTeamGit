import './Home.css'
import HomeImg from '../../assets/Gleb.png'


const Home = () => {
    return (
        <div className='home'>
            <div className="home-title">
                <h4>HELLO</h4>
                <h1>I’M GLEB
                    KOSTRUBOV</h1>
                <p>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
                <button>Contact me</button>
            </div>
            <div className="home-img"> 
        <img src={HomeImg} alt="HomeImg" />

            </div>
        </div>
    )
}

export default Home
