import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProjectsPageCss from "../Css/ProjectsPage.module.css"
import Devski_Logo from '../Images/Devski_Logo.png';
import play from '../Images/PlayButton.png';
import strategyIcon from '../Images/strategyIcon.png'
import flameIcon from '../Images/flameIcon.png'
import userIcon from '../Images/userIcon.png'
import starsIcon from '../Images/starsIcon.png'
import CardImage from '../Images/CardImage.png'
import WorkTogether from '../Images/WorkTogether.png'
import upwork from '../Images/upworkIcon.png';
import Insta from '../Images/Insta.png'
import linkedin from '../Images/linkedin.png'
import CafeStreetVideo from '../Images/CafeStreetVideo.mp4'


function ProjectsPage() {
    useEffect(() => {
        const hamburgerElement = document.querySelector(`.${ProjectsPageCss.hamburger}`);
        const navMenu = document.querySelector(`.${ProjectsPageCss.navMenu}`);
    
        if (hamburgerElement && navMenu) {
          function mobileMenu() {
            hamburgerElement.classList.toggle(ProjectsPageCss.active);
            navMenu.classList.toggle(ProjectsPageCss.active); 
          }
    
          hamburgerElement.addEventListener("click", mobileMenu);
    
          return () => {
            hamburgerElement.removeEventListener("click", mobileMenu);
          };
        }
    }, []);

    const navigate = useNavigate()

    const navigateAllProjects = () => {
        navigate('/devski-completeProjects')
    }
    const navigateAppProjects = () => {
        navigate('/devski-appDevProjects')
    }
    const navigateUiUXProjects = () => {
        navigate('/devski-UiUXProjects')
    }    
    const navigateAboutus = () => {
        navigate('/devski-contactus')
    }
    const navigateInsta = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateUpwork = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }
    const navigateLinkedin = () => {
        window.open('https://www.instagram.com/wearedevski?igsh=NG9qYnQ3MnY5emMz', '_blank');
    }

  return (
    <>
        <div className={ProjectsPageCss.main}>

            <div className={ProjectsPageCss.cover}>

                <header className={ProjectsPageCss.header}>
                <nav className={ProjectsPageCss.navbar}>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <img src={Devski_Logo} className={ProjectsPageCss.DevskiLogo} alt='logo'/>
                </Link>
                <ul className={ProjectsPageCss.navMenu}>
                        <Link to='/' style={{textDecoration: 'none'}}>
                        <li className={ProjectsPageCss.home}>Home</li>
                        </Link>
                        <Link to='/devski-devskiServices' style={{textDecoration: 'none'}}>
                        <li className={ProjectsPageCss.services}>Services</li>
                        </Link>
                        <Link to='/devski-projectsPage' style={{textDecoration: 'none'}}>
                            <li className={ProjectsPageCss.projects}>Projects</li>
                        </Link>
                        <Link to='/devski-aboutus' style={{textDecoration: 'none'}}>
                            <li className={ProjectsPageCss.about}>About Us</li>
                        </Link>
                        <Link to='/devski-contactus' style={{textDecoration: 'none'}}>
                            <li className={ProjectsPageCss.contact}>Contact Us</li>
                        </Link>
                    </ul>
                    <div className={ProjectsPageCss.hamburger}>
                        <span className={ProjectsPageCss.bar}></span>
                        <span className={ProjectsPageCss.bar}></span>
                        <span className={ProjectsPageCss.bar}></span>
                    </div>
                </nav>
                </header>

                <h1>Our <span>Projects</span></h1>

            </div>

            <div className={ProjectsPageCss.featuredProjects}>
                <div className={ProjectsPageCss.projectButtons}>
                    <button className={ProjectsPageCss.allbtn} onClick={navigateAllProjects}>All</button>
                    <button className={ProjectsPageCss.webbtn}>Web Dev</button>
                    <button className={ProjectsPageCss.appbtn} onClick={navigateAppProjects}>App Dev</button>
                    <button className={ProjectsPageCss.uibtn} onClick={navigateUiUXProjects}>UI / UX</button>
                </div>

                {/* <div className={ProjectsPageCss.video}>
                    <h1>Featured Project</h1>
                    <div className={ProjectsPageCss.projectBackground}>
                        <button><img src={play} className={ProjectsPageCss.play} alt='play'/></button>
                    </div>
                </div> */}
                <div className={ProjectsPageCss.videoDiv}>
                    <video autoPlay
                        muted
                        controls
                        loop className={ProjectsPageCss.videos}>
                        <source src={CafeStreetVideo} type="video/mp4"  autoplay loop/>
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className={ProjectsPageCss.projectPictures}>
                    <div className={ProjectsPageCss.appProjectsPic}>
                        <div className={ProjectsPageCss.appProj1}></div>
                        <h2>Helping Hands</h2>
                        <p>Website</p>
                    </div>

                    <div className={ProjectsPageCss.uiProjectsPic}>
                        <div className={ProjectsPageCss.uiProj1}></div>
                        <h2>Cafe Street</h2>
                        <p>Website</p>
                    </div>
                 </div>
                  
                <div className={ProjectsPageCss.projectPictures}>
                    <div className={ProjectsPageCss.appProjectsPic}>
                        <div className={ProjectsPageCss.appProj2}></div>
                        <h2>Simax</h2>
                        <p>Website</p>
                    </div>

                    <div className={ProjectsPageCss.uiProjectsPic}>
                        <div className={ProjectsPageCss.uiProj2}></div>
                        <h2>Tech Tree</h2>
                        <p>Website</p>
                    </div>
                 </div>

            </div>
            
            <div className={ProjectsPageCss.keyFeatures}>
                <div className={ProjectsPageCss.keyFeaturesWavy}>
                    <h1><span>Key Features</span> of Our Projects</h1>
                {/* </div> */}
                    <div className={ProjectsPageCss.featureAttributes}>

                        <div className={ProjectsPageCss.firstRow}>

                            <div className={ProjectsPageCss.strategicPlan}>
                                <img src={strategyIcon} className={ProjectsPageCss.strategyIcon} alt='strategyIcon'/>
                                <h2>Strategic Planning</h2>
                                <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                            </div>
                            <hr></hr>

                            <div className={ProjectsPageCss.strategicPlan}>
                                <img src={flameIcon} className={ProjectsPageCss.flameIcon} alt='flameIcon'/>
                                <h2>Collaborative Process</h2>
                                <p>We work closely with clients throughout the project to ensure alignment with their vision and objectives.</p>
                            </div>
                            <hr></hr>

                            <div className={ProjectsPageCss.strategicPlan}>
                                <img src={userIcon} className={ProjectsPageCss.userIcon} alt='userIcon'/>
                                <h2>User-Centric Approach</h2>
                                <p style={{width:'82%'}}>Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.</p>
                            </div>

                        </div>
                        
                        {/* <hr/> */}

                        <div className={ProjectsPageCss.secondRow}>
                            <div className={ProjectsPageCss.edgeTechnology}>
                                <img src={starsIcon} className={ProjectsPageCss.strategyIcon} alt='starsIcon'/>
                                <h2>Cutting-Edge Technologies</h2>
                                <p>We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.</p>
                            </div>
                            <hr></hr>

                            <div className={ProjectsPageCss.TimelyDelivery}>
                                <img src={starsIcon} className={ProjectsPageCss.flameIcon} alt='starsIcon'/>
                                <h2>Timely Delivery</h2>
                                <p>We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ProjectsPageCss.MainCard}>
                <div className={ProjectsPageCss.Card}>
                    <div className={ProjectsPageCss.CardText}>
                        <h1>Help To Build Your Dream Project</h1>
                        <p>We are a software startup dedicated to bringing your ideas to life. We provide end-to-end services tailored to startups and businesses looking to innovate and grow.</p>
                        <button className={ProjectsPageCss.CardButton} onClick={navigateAboutus}>
                            Discuss Your Project
                            <span> </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                            </svg>
                        </button>
                    </div>
                    <img src={CardImage} className={ProjectsPageCss.CardImage} alt="CardImage"/>
                </div>
            </div>

            
            <div className={ProjectsPageCss.FooterMain}> 
            <div className={ProjectsPageCss.EveryFooterDiv}>
                <div className={ProjectsPageCss.AllColumn}>
                    <div className={ProjectsPageCss.MiddleColumn}>
                        <h1>Got a project? Let's build something amazing together! </h1>
                        <p>Have an idea you'd like to bring to life or a project you need help with? Let's collaborate and create something extraordinary together. Click below to start the conversation—your vision is just one step away!</p>
                        <button className={ProjectsPageCss.CardButton} onClick={navigateAboutus}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                        </svg></button>
                    </div>
                    <div className={ProjectsPageCss.LeftColumn}>
                        <h1>United States of America</h1>
                        <h2>5570 FM 423 Ste 250 Apt# 1120</h2>
                        <h3>Frisco, TX 75036</h3>
                        <h4 style={{marginTop: '-2px'}}>Texas</h4>
                        <h1 style={{marginTop:'10px', fontWeight:'bold', fontSize:'16px'}}>Contact</h1>
                        <h2>devski@info.io</h2>
                    </div>
                </div>
                <div className={ProjectsPageCss.ThinLine}>
                    <div className={ProjectsPageCss.SocialMedia}>
                        <img src = {upwork} className={ProjectsPageCss.upwork}  onClick={navigateUpwork} alt = "behance"/>
                        <img src = {Insta} className={ProjectsPageCss.Insta} onClick={navigateInsta} alt = "Insta"/>
                        <img src = {linkedin} className={ProjectsPageCss.linkedin} onClick={navigateLinkedin} alt = "linkedin"/>
                    </div>
                </div>
            </div>
            
            <div className={ProjectsPageCss.FooterHeading}>
                 <img src = {WorkTogether}className={ProjectsPageCss.WorkTogether} alt = "WorkTogether"/>
            </div>
        </div>

        </div>
    
    </>
)
}

export default ProjectsPage