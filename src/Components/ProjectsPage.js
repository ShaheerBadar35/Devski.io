import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProjectsPageCss from "../Css/ProjectsPage.module.css"
import Devski_Logo from '../Images/Devski_Logo.png';
import play from '../Images/PlayButton.png';
import strategyIcon from '../Images/strategyIcon.png'
import flameIcon from '../Images/flameIcon.png'
import userIcon from '../Images/userIcon.png'
import starsIcon from '../Images/starsIcon.png'
import CardImage from '../Images/CardImage.png'
import WorkTogether from '../Images/WorkTogether.png'
import behance from '../Images/behance.png'
import Insta from '../Images/Insta.png'
import linkedin from '../Images/linkedin.png'



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
  return (
    <>
        <div className={ProjectsPageCss.main}>

            <div className={ProjectsPageCss.cover}>

                <header className={ProjectsPageCss.header}>
                <nav className={ProjectsPageCss.navbar}>
                    <img src={Devski_Logo} className={ProjectsPageCss.DevskiLogo} alt='logo'/>
                    <ul className={ProjectsPageCss.navMenu}>
                        <Link to='/' style={{textDecoration: 'none'}}>
                        <li className={ProjectsPageCss.home}>Home</li>
                        </Link>
                        <Link to='/devskiServices' style={{textDecoration: 'none'}}>
                        <li className={ProjectsPageCss.services}>Services</li>
                        </Link>
                        <Link to='/projectsPage' style={{textDecoration: 'none'}}>
                            <li className={ProjectsPageCss.projects}>Projects</li>
                        </Link>
                        <Link to='/aboutus' style={{textDecoration: 'none'}}>
                            <li className={ProjectsPageCss.about}>About Us</li>
                        </Link>
                        <Link to='/' style={{textDecoration: 'none'}}>
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
                    <button className={ProjectsPageCss.allbtn}>All</button>
                    <button className={ProjectsPageCss.webbtn}>Web Dev</button>
                    <button className={ProjectsPageCss.appbtn}>App Dev</button>
                    <button className={ProjectsPageCss.uibtn}>UI / UX</button>
                </div>

                <div className={ProjectsPageCss.video}>
                    <h1>Featured Project</h1>
                    <div className={ProjectsPageCss.projectBackground}>
                        <button><img src={play} className={ProjectsPageCss.play} alt='play'/></button>
                    </div>
                </div>

                <div className={ProjectsPageCss.projectPictures}>
                    <div className={ProjectsPageCss.appProjectsPic}>
                        <div className={ProjectsPageCss.appProj}></div>
                        <h2>Carreri</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={ProjectsPageCss.uiProjectsPic}>
                        <div className={ProjectsPageCss.uiProj}></div>
                        <h2>Tansto</h2>
                        <p>Web Design</p>
                    </div>
                 </div>
                  
                <div className={ProjectsPageCss.projectPictures}>
                    <div className={ProjectsPageCss.appProjectsPic}>
                        <div className={ProjectsPageCss.appProj}></div>
                        <h2>Carreri</h2>
                        <p>Mobile App</p>
                    </div>

                    <div className={ProjectsPageCss.uiProjectsPic}>
                        <div className={ProjectsPageCss.uiProj}></div>
                        <h2>Tansto</h2>
                        <p>Web Design</p>
                    </div>
                 </div>

            </div>
            
            <div className={ProjectsPageCss.keyFeatures}>
                <div className={ProjectsPageCss.keyFeaturesWavy}>
                    <h1><span>Key Features</span> of Our Projects</h1>
                    <p>Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</p>
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
                                <h2>Customized Solutions</h2>
                                <p>We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly align with our clients' brand identities.</p>
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
                        <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        <button className={ProjectsPageCss.CardButton}>
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
                        <div className={ProjectsPageCss.RightColumn}>
                            <h1>Contact</h1>
                            <h2>devski@info.io</h2>
                            <h3>d0318-0010470</h3>
                        </div>
                        <div className={ProjectsPageCss.MiddleColumn}>
                            <h1>Got a project? Want to collaborate? </h1>
                            <button className={ProjectsPageCss.CardButton}>Discuss Your Project <span> </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <path d="M10 6L0 11.7735V0.226501L10 6Z" fill="#111204"/>
                                </svg></button>
                            </div>
                        <div className={ProjectsPageCss.LeftColumn}>
                            <h1>America</h1>
                            <h2>Jln. Bambu No. 375</h2>
                            <h3>Samarinda, Kalimantan Timur</h3>
                            <h4>Hong Kong</h4>
                            <h5>60 Ya Fung Sung</h5>
                            <h6>San Tsuen, 75129</h6>
                        </div>
                    </div>
                <div className={ProjectsPageCss.ThinLine}>
                        <h1>© Copyright 2024. Aditama Studio. All rights reserved.</h1>
                        <h2>Terms & Conditions</h2>
                        <div className={ProjectsPageCss.SocialMedia}>
                            <img src = {behance} className={ProjectsPageCss.behance} alt = "behance"/>
                            <img src = {Insta} className={ProjectsPageCss.Insta} alt = "Insta"/>
                            <img src = {linkedin} className={ProjectsPageCss.linkedin} alt = "linkedin"/>
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