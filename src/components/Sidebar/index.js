import { Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitles from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-log" src={LogoS} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                  target="_blank"
                  rel='noreferrer'
                  href="https://www.linkedin.com/in/shawn-conway-offthestem/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                  </a>
            </li>
        </ul>
        <ul>
            <li>
                <a
                  target="_blank"
                  rel='noreferrer'
                  href="https://github.com/shawnway210"
                  >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                  </a>
            </li>
        </ul>
        

    </div>
)

export default Sidebar