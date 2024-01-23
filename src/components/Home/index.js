import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
//import Loader from 'react-loaders';
//import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h','a','w','n']
    const jobArray = ['s','o','f','t','w','a','r','e',' ','e','n','g','i','n','e','e','r','.']
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)
    },[])
    
    return (
    <div className="container home-page">
        <div className="text-one">
            <h1>
            <span className={letterClass}>H</span> 
            <span className={`${letterClass} _12`}>i,</span> 
            <br/> 
            <span className={`${letterClass} _13`}>I</span> 
            <span className={`${letterClass} _14`}>'m</span> 
            <img src={LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15}/>
            </h1>
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22}/>
            <h2>Full Stack Developer  /  JavaScript  /  Python</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>

    </div>
    )
}
   

export default Home