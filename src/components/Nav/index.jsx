import { Nav } from "./navegationstyles"
import { Link } from 'react-scroll';
import home from "../../imgs/home.svg"
import about from "../../imgs/about.svg"
import suitcase from "../../imgs/suitcase.svg"
import brain from "../../imgs/brain.svg"
import projects from "../../imgs/projects.svg"

export default function NavMenu() {
    return(
        <Nav>
                <Link 
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <img src={home} alt="" />
                </Link>
                <Link  
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <img src={about} alt="" />
                </Link>
                <Link 
                    activeClass="active"
                    to="summary"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <img src={suitcase} alt="" />
                </Link>
                <Link 
                    activeClass="active"
                    to="knowladge"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <img src={brain} alt="" />
                </Link>
                <Link activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <img src={projects} alt=""/>
                </Link>
            </Nav>
    )
}