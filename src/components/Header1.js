import React from 'react'
import './Header.css'
import Navbar from './Headerjs';


const Header1 = () => {
  return (
    <div>
       <meta name="description" content="Web designer and front-end developer" />
  <link href='https://fonts.googleapis.com/css?family=Raleway:100,200,400,600' rel='stylesheet' type='text/css' />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.4/jquery.fullPage.min.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />

    {/* navbar header */}
    <div className="nav-header">
      <div className="nav-brand">
        <img src="logoo.png" />
      </div>
      <i className="fa fa-bars fa-3x" />
      <div className="header-links">
        <ul>
          <li data-menuanchor="fourthPage"><a href="#contact">CONTACT</a></li>
          <li data-menuanchor="thirdPage"><a href="#portfolio">PORTFOLIO</a></li>
          <li data-menuanchor="secondPage"><a href="#about">ABOUT</a></li>
        </ul>
      </div>
    </div>
    {/* end navbar header */}
    {/* sidebar slider */}
    <div className="nav-screen">
      <i className="fa fa-times fa-3x" />
      <div className="nav-container">
        <div className="nav-links">
          <ul id="myMenu">
            <li data-menuanchor="secondPage"><a href="#about">ABOUT</a></li>
            <li data-menuanchor="thirdPage"><a href="#portfolio">PORTFOLIO</a></li>
            <li data-menuanchor="fourthPage"><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </div>
    {/* end navbar slider */}
    {/* begin fullpage */}
    <div id="fullpage">
      {/* begin section */}
      <div className="section aboutme" data-anchor="aboutme">
        <div className="opaque-bg animated fadeInDown">
          <h1 style={{color: 'white'}}>Rc<span style={{color: '#FF6363'}}>/</span>Codex</h1>
          <p><span id="holder" /><span className="blinking-cursor">|</span></p>
        </div>
        <i id="moveDown" className="fa fa-chevron-down fa-3x bounce" />
      </div>
      {/* end section */}
      {/* begin section */}
      <div className="section" data-anchor="skills">
        <div className="content">
          <h1 className="wow fadeInDown" data-wow-delay="0.2s">ABOUT ME</h1>
          <p className="wow fadeInDown" data-wow-delay="0.2s">Hi, I'm Rc! I'm a Web Application Web Designer &amp; Front-end Developer focused on creating clean, responsive web designs!</p>
          <div className=" wow fadeInUp container-skillbar" data-wow-delay="0.2s">
            <div className="skillbar clearfix " data-percent="90%">
              <div className="skillbar-title" style={{background: '#DD1E2F'}}><span>HTML5</span></div>
              <div className="skillbar-bar" style={{background: '#DD1E2F'}} />
              <div className="skill-bar-percent">90%</div>
            </div> {/* End Skill Bar */}
            <div className="skillbar clearfix " data-percent="80%">
              <div className="skillbar-title" style={{background: '#EBB035'}}><span>CSS3</span></div>
              <div className="skillbar-bar" style={{background: '#EBB035'}} />
              <div className="skill-bar-percent">80%</div>
            </div> {/* End Skill Bar */}
            <div className="skillbar clearfix " data-percent="75%">
              <div className="skillbar-title" style={{background: '#218559'}}><span>Photoshop</span></div>
              <div className="skillbar-bar" style={{background: '#218559'}} />
              <div className="skill-bar-percent">75%</div>
            </div> {/* End Skill Bar */}
            <div className="skillbar clearfix " data-percent="45%">
              <div className="skillbar-title" style={{background: '#6840D4'}}><span>Rails</span></div>
              <div className="skillbar-bar" style={{background: '#6840D4'}} />
              <div className="skill-bar-percent">45%</div>
            </div> {/* End Skill Bar */}
            <div className="skillbar clearfix " data-percent="30%">
              <div className="skillbar-title" style={{background: '#06A2CB'}}><span>jQuery</span></div>
              <div className="skillbar-bar" style={{background: '#06A2CB'}} />
              <div className="skill-bar-percent">30%</div>
            </div> {/* End Skill Bar */}
            <div className="skillbar clearfix " data-percent="20%">
              <div className="skillbar-title" style={{background: '#AB4DD2'}}><span>PHP</span></div>
              <div className="skillbar-bar" style={{background: '#AB4DD2'}} />
              <div className="skill-bar-percent">20%</div>
            </div> {/* End Skill Bar */}
          </div>
        </div>
      </div>
      {/* end section */}
      {/* begin section */}
      <div className="section" data-anchor="projects">
        <div className="content-slide">
          <div className="slide">
            <h1 className="wow fadeInDown" data-wow-delay="0.2s">XFAIRE</h1>
            <p className="wow fadeInDown" data-wow-delay="0.2s">Digital streaming service</p>
            <img className="wow fadeInUp" data-wow-delay="0.2s" data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/xfaire.jpg" />
          </div>
          <div className="slide">
            <h1>MACHETE ENERGY</h1>
            <p>Energy drink website</p>
            <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/machete.jpg" />
          </div>
          <div className="slide">
            <h1>PORTFOLIO</h1>
            <p>Mockup of a personal portfolio I was working on for a friend.</p>
            <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/cascioportfolio.jpg" />
          </div>
          <div className="slide">
            <h1>THATONEBLOG</h1>
            <p>Minimalist blogging platform.</p>
            <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/blog.jpg" />
          </div>
          <div className="slide">
            <h1>PIXBORED</h1>
            <p>Website for sharing images and gifs.</p>
            <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/pixbored.jpg" />
          </div>
          <div className="slide">
            <h1>PERSONAL WEBSITE</h1>
            <p>Responsive vertical/horizontal header website theme.</p>
            <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/personalsite.jpg" />
          </div>
        </div>
      </div>
      {/* end section */}
      {/* begin section */}
      <div className="section" data-anchor="contact">
        <div className="content wow fadeInDown" data-wow-delay="0.2s">
          <h1>CONTACT ME</h1>
          <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
          <br />
          <div className="contact-form">
            <div id="form-messages" />
            <form id="ajax-contact" method="post" role="form" action="contact.php" data-toggle="validator">
              <div className="form-group has-feedback wow fadeInLeft" data-wow-delay="0.6s">
                <input type="text" className="form-control" id="name" name="name" placeholder="NAME" data-error="Field can't be blank!" required />
                <span className="glyphicon form-control-feedback" aria-hidden="true" />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group has-feedback wow fadeInRight" data-wow-delay="0.8s">
                <input type="email" className="form-control" id="email" name="email" placeholder="EMAIL" data-error="Field can't be blank!" required />
                <span className="glyphicon form-control-feedback" aria-hidden="true" />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group has-feedback wow fadeInLeft" data-wow-delay="1s">
                <textarea data-minlength={10} className="form-control" id="message" name="message" placeholder="MESSAGE" data-error="Minimum of 10 characters" required defaultValue={""} />
                <span className="glyphicon form-control-feedback" aria-hidden="true" />
                <div className="help-block with-errors" />
              </div>
              <div className="hidden">
                <input type="text" className="form-control" id="human" name="human" placeholder />
              </div>
              <div className="wow fadeInUp" data-wow-delay="1s">
                <button type="submit" id="submit" name="submit" className="btn btn-lg">SEND MESSAGE</button>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
      <script>
        
      </script>
      {/* end section */}
      {/* begin section */}
      <div className="section fp-auto-height">
        <div className="footer">
          <p>CONNECT WITH ME</p>
          <div className="social-links">
            <span><a href="https://www.linkedin.com/in/chaman-yadav-469564261/" target="_blank"><i className="fa fa-linkedin fa-2x" /></a></span>
            <span><a target="_blank" href="https://twitter.com/bradengelhardt"><i className="fa fa-twitter fa-2x" /></a></span>
            <span><a href="https://github.com/chamanyadav123" target="_blank"><i className="fa fa-github fa-2x" /></a></span>
            <span><a href="https://codepen.io/Baghi_9999/pen/PodEqoO"><i className="fa fa-codepen fa-2x" /></a></span>
          </div>
        </div>
      </div>
      {/* end section */}
    </div>
    {/* end fullpage */}
    <Navbar />
  </div>
        );
      }

export default Header1