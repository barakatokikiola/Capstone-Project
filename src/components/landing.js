import background from "./images/background.jpg";
import logo from "./images/logo.jpg";
import handwriting from "./images/handwriting.jpg";
import staricon from "./images/5-stars.jpg";
import avatar from "./images/Avatar.jpg";
import anonymous from "./images/anonymous.jpg";
import socialmedia from "./images/Socialmedia.jpg";
import appsteps from "./images/app-steps.jpg";
import sliders from "./images/Slider.jpg";
const Landing = () => {
    return (
        <div className="container-sm">
            {/* background with overlay */}
            
                <div className="card bg-white sm">
                    <img src={background} alt="background-pics" className="background-display"/>
                    <div className="card-img-overlay">
                        <img src={logo} alt="logo" className="Logo" />
                        {/* navigation and a call to action */}
                        <div className="navigation">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Report</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Rights</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Contact</a>
                                </li>
                                <hr/>
                            </ul>
                            <div className="button">
                                <button className="signup-cta"> Sign Up</button>
                                <button className="signin-cta"> Sign In</button>
                            </div>
                         </div>
                        <div className="bg-paragraph">
                            <p>Sound the alarm!</p>
                            <span>Got an incident we need to know about?</span>
                        </div>
                        <div className="button">
                                <button className="report-cta"> Report a crime</button>
                                <button className="track-cta"> Track a report</button>
                            </div>
                </div>
                    <div className="app-steps sm">
                        <img src={appsteps} alt="workflow" className="wf-image"/>
                </div> 
                 <div className="container-sm"> 
                    <section className="about-us">
                        <h1>About us</h1>
                        <p>In a society where bad and corrupt practices has become the order of the day, where victims are silenced and oppressed, where the citizens are denied their human rights, where the powerful are abusing powers entrusted into them and where the common man is falling prey in the hands of those that are meant to protect them, we at THE VOICE BUILDERS organisation are stepping out as a ray of light, a beam of hope, restoring confidence, joy, peace, laughter and obtaining justice in hopeless situations. <a href="#" className="read-more">Read more...</a></p>
                        <div className="statistics">
                            <div className="complaint-filed">
                                <h3>435</h3>
                                <p>Complaints Filed</p>
                            </div>
                            <div className="solved-cases">
                                <h3>397</h3>
                                <p>Solved Cases</p>
                            </div>
                            <div className="ongoing-inv">
                                <h3>38</h3>
                                <p>Ongoing Investigations</p>
                            </div>
                        </div>
                    </section>
                </div>
                  </div>
                  <section className="file-report ">
                    <div className="card mb-3">
                    <div className="row g-0">
                     <div className="col-sm-6">
                     <img src={handwriting} className="img-fluid rounded-start" alt="filing-display"/>
                    </div>
                    <div className="col-sm-6" >
                     <div className="card-body sm">
                     <h3 className="card-title file-report">File your complaints <br /> and get a rapid response<br /> from our teams.</h3>
                        <p className="card-text file-report-paragraph">You can report an incident from the comfort of your home <br />and it will be properly attended to. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, quam!</p>
                        <div className="button">
                            <button className="file-report-button"> Report a crime</button>
                        </div>
                    </div>
                 </div>      
          
            </div>
            </div>
            </section>
            <section className="testimonials">
                <h2>TESTIMONIALS</h2>
                <h3>What our victors say</h3>
                <div className="card-group">
                <div className="card test-card">
                 <img src={staricon} className="card-img-top" alt="5star-icon "/>
                <div className="card-body">
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro debitis laudantium consequatur dolorem sed numquam facere illum, suscipit quibusdam. Magni saepe id enim, accusamus laborum eaque officiis ab aliquam dolore.</p>
    </div>
    {/* <div className="card-footer"> */}
        <img src={avatar} alt="avavtar" className="avatar" />
      <p className="text-muted">MUIZ ALABA</p>
      <p className="muiz">Lagos, Nigeria</p>
    {/* </div> */}
  </div>
  <div className="card test-card">
    <img src={staricon} className="card-img-top" alt="5star-icon"/>
    <div className="card-body">
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, autem cumque aperiam voluptates beatae consequuntur suscipit dolor obcaecati, in, dolorum at quasi minus. Possimus esse atque deserunt omnis cum iure.</p>
    </div>
    {/* <div className="card-footer"> */}
   
      <img src= {avatar} className="avatar" alt="avatar"/>
      <p className="text-muted">HENRIETTA A. </p>
      <p className="henrietta">Kogi, Nigeria</p>
    {/* </div> */}
  </div>
  <div className="card test-card">
    <img src= {staricon} className="card-img-top" alt="5star-icon"/>
    <div className="card-body">
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe harum consectetur reprehenderit, a, laborum cumque facere, explicabo temporibus distinctio unde! Tempora voluptatum et vero tenetur commodi facere, mollitia in.</p>
    </div>
         
         <img src={avatar} alt="avavtar-icon" className="avatar" />
         <p className="text-muted">BARAKAT OPE</p>
         <p className="barakat">Ibadan, Nigeria</p>
            </div>
            </div>
            <img src={sliders} alt="sliders" className="sliders"/>
            </section>
            <section className="anonymous">
            <div className="card mb-3 anonymous">
         <div className="row g-0">
          <div className="col-md-6">
          <img src={anonymous} className="img-fluid rounded-start anonymous" alt="anonymous-display"/>
        </div>
     <div className="col-md-6">
      <div className="card-body anonymous">
        <h3 className="card-title">Stay anonymous <br /> while you file your <br /> complaints</h3>
        <p className="card-text">We can file your complaints while you remain anonymous. <br />We seek to safeguard and protect your identity.</p>
                 <div className="button">
                            <button className="report-cta"> Report a crime</button>
                 </div>      
           </div>
            </div>
            </div>
            </div>
            </section>
            <footer className="footer-bar">
                <img src={socialmedia} alt="social-media-icon" className="social-media-icon" />
                <p className= "footer-p">CFS Interventions</p>
                <p>&copy;2022</p>
                <ul>
                    <li> <a href="#">Privacy policy</a> <li><a href="#">Terms of use</a></li></li>

                </ul>
            </footer>
        </div>
    );
}

export default Landing;