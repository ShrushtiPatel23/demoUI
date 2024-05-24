import './App.css';
import logo from './image/logo.png'
import aws from './image/aws.png'
import hubspot from './image/hubspot.png'
import cloud from './image/cloud.png'
import node from './image/node.png'
import reactNative from './image/react-native.png'
import react from './image/react.png'
import slide3 from './image/slide3.png'
import slide4 from './image/slide4.png'
import slide51 from './image/slide5-1.png'
import slide52 from './image/slide5-2.png'
import slide53 from './image/slide5-3.png'
import slide62 from './image/slide6-2.png'
import slide63 from './image/slide6-3.png'
import slide64 from './image/slide6-4.png'
import slide65 from './image/slide6-5.png'
import slide66 from './image/slide6-6.png'
import slide67 from './image/slide6-7.png'
import slide68 from './image/slide6-8.png'
import slide71 from './image/slide7-1.png'
import slide72 from './image/slide7-2.png'
import slide73 from './image/slide7-3.png'



import { FaSquareFacebook, FaLinkedin, FaArrowRightLong } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function App() {
  return (
    <div className='container-fluid-md'>

      {/* Slide - 1 */}
      <div className='row'>
        <nav className="navbar navbar-expand-md fixed-top navbar-dark black p-2">
          <div className="offset-md-1 container-fluid">
            <a class="navbar-brand" href="#">
              <img src={logo} alt='' width="35" height="40" />
              <span className='ms-2'><a class="navbar-brand ms-0">Chimera Prime</a></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav small me-auto mb-2 mb-md-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">Clients</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Careers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='row mt-5 mt-md-0'>
        <div className="ratio ratio-16x9 position-relative d-flex">
          <video autoplay='true' loop muted playsinline preload="none" className="video-element" poster="https://8231514.fs1.hubspotusercontent-na1.net/hubfs/8231514/01%20Home%20Page%20images/1.1.%20New%20home%20page/hero-video-poster-image.webp">
            <source src="https://8231514.fs1.hubspotusercontent-na1.net/hubfs/8231514/01%20Home%20Page%20images/1.4%20Home%20Page%20Videos/1077607553-hd_compressed_3_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="position-absolute d-flex align-items-center text-center justify-content-center ms-2" data-aos="fade-up" data-aos-delay="500" style={{ color: 'white' }}>
            <div>
              <h1 style={{ fontSize: '60px' }} className='fs-1 fs-md-2 fs-md-1'>Empowering Growth with Seamless Technical Solutions</h1>
              <p className='mt-md-5 fs-4 fs-md-4 fs-md-1' style={{ fontSize: '28px' }}>Your trusted Partner for Maximizing Impact and Results</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide - 2 */}

      <div className="container-fluid mt-2  pb-5">
        <div className='row row-cols-md-4 row-cols-2 border p-0 mt-2'>
          <div className="col text-center border p-1">
            <img src={aws} alt='' className='img-fluid'/>
          </div>
          <div className="col text-center border p-1">
            <img src={hubspot} alt='' className='img-fluid'/>
          </div>
          <div className="col text-center border p-1">
            <img src={cloud} alt='' className='img-fluid'/>
          </div>
          <div className="col text-center border p-1">
            <img src={node} alt='' className='img-fluid'/>
          </div>
          <div className="col offset-md-3 text-center border p-3">
            <img src={reactNative} alt='' className='img-fluid'/>
          </div>
          <div className="col text-center border p-3">
            <img src={react} alt='' className='img-fluid'/>
          </div>
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center border p-3" style={{ color: '#282E78' }}>
            View all <span className='ms-2'><FaArrowRightLong /></span>
          </div>
        </div>
      </div>

      {/* Slide - 3 */}

      <div className="row mt-5">
        <div className="col-12 col-md-10 offset-md-2 mt-3">
          <h4 className='text-start mb-5 ms-3 mt-4 fw-bold' style={{ color: '#080E4B' }}>Services</h4>
        </div>
        <div className='col-12 col-md-5 offset-md-2 p-0' >
          <img className='img-fluid float-center' src={slide3} alt='' width='100%' height='100%' />
        </div>
        <div className="col-12 col-md-5 d-flex flex-column align-items-start justify-content-center mt-5">
          <h5 className='text-wrap ms-3 fs-md-3 fs-2' style={{ width: '20rem', color: '#080E4B' }}>Self-managed Teams for Startups</h5>
          <p className='mt-1 text-wrap ms-3' style={{ fontSize: '15px', width: '20rem' }}>Hire a team of Developers, Designers, Quality Assurance Specialists, DevOps Engineeers, and other experts you may need to work hand-by-hand on your digital product</p>
          <p style={{ color: '#282E78', fontSize: '15px' }} className='ms-3'>View Managed Teams <FaArrowRightLong /></p>
        </div>
      </div>

      {/* Slide - 4 */}

      <div className="row flex-column-reverse flex-md-row mb-5 mt-2 mt-md-0">
        <div className="col-12 col-md-5 offset-md-2 d-flex flex-column align-items-start justify-content-center mb-5">
          <h5 className='text-wrap ms-md-5 ms-2 fs-md-3 fs-2 mt-5' style={{ width: '20rem', color: '#080E4B' }}>HubSpot Services for Marketing Agencies</h5>
          <p className='mt-1 text-wrap ms-md-5 ms-2' style={{ fontSize: '15px', width: '20rem' }}>HubSport services include Marketing Hub, Sales Hub, Service Hub, CMS Hub, Operation Hub, and Onboarding.</p>
          <p style={{ color: '#282E78', fontSize: '15px' }} className='mb-5 ms-md-5 ms-2'>View HubSpot <FaArrowRightLong /></p>
        </div>
        <div className='col-md-5 col-12 p-0' >
          <img className='img-fluid' src={slide4} alt='' width='100%' height='100%' />
        </div>
      </div>

      {/* Slide - 5 */}

      <div className="row bg-light mt-5 mb-5">
        <div className="col-12 col-md-9 offset-md-2 d-flex flex-column align-items-start justify-content-center mt-2 mb-3">
          <h4 style={{ color: '#080E4B' }} className='fw-bold'>Featured Client</h4>
        </div>


        <div className="col-12 col-md-10 offset-md-2 p-0 d-md-flex mt-5 mt-md-3 flex-row">
          <div className="col-md-3 col-12 d-flex mt-5 mt-md-3 me-md-4 ">
            <img className='img-fluid flex-fill' src={slide51} alt='' />
          </div>
          <div className="col-md-3 col-12 d-flex mt-5 mt-md-3 me-md-4">
            <img className='img-fluid flex-fill' src={slide52} alt='' />
          </div>
          <div className="col-md-3 col-12 d-flex mt-5 mt-md-3 me-md-4">
            <img className='img-fluid flex-fill' src={slide53} alt='' />
          </div>
        </div>

      </div>

      {/* Slide - 6 */}

      <div className="row border bg-light shadow-sm mb-2">
        <div id="carouselExample" class="carousel slide mb-4" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="4" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="5" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="6" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="7" aria-label="Slide 7"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='col text-center'>
                <h5 className='mt-5 mb-5 fw-bold text-center fs-2' style={{ color: '#080E4B' }}>What our clients say about us</h5>
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <img src=" " alt='loaded image' className='mb-5' />
                <h5 className='mb-2 fw-bold fs-2' style={{ color: '#080E4B' }}>Development support</h5>
                <p className='mt-1' style={{ fontSize: '12px' }}>"Chimera Prime provides great help in development and technical support"</p>
                <p style={{ fontSize: '12px' }} className='mb-1 fw-bold'>Silvija Seres</p>
                <p style={{ fontSize: '12px' }} className='mb-5'>CEO at L&oslash;rn</p>
              </div>
            </div>
            <div class="carousel-item" >
              <div className='col text-center'>
                <h5 className='mt-5 mb-5 fw-bold text-center fs-2' style={{ color: '#080E4B' }}>What our clients say about us</h5>
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <img src={slide62} alt='loaded image' className='mb-5' width='30%' height='50%' />
                <h5 className='mb-2 fw-bold fs-2' style={{ color: '#080E4B' }}>Outstanding tech</h5>
                <p className='mt-1' style={{ fontSize: '12px' }}>"One of the reasons we are doing so well is because the technology you guys are developing for us. It sets us apart from everyone."</p>
                <p style={{ fontSize: '12px' }} className='mb-1 fw-bold'>Siyanda Mthethwa</p>
                <p style={{ fontSize: '12px' }} className='mb-5'>Founder at <span style={{ color: '#282E78' }}>Kuloola</span>, Rising Star in South Africa</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='col text-center'>
                <h5 className='mt-5 mb-5 fw-bold text-center fs-2' style={{ color: '#080E4B' }}>What our clients say about us</h5>
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <img src={slide63} alt='loaded image' className='mb-5' width='30%' height='50%' />
                <h5 className='mb-2 fw-bold fs-2' style={{ color: '#080E4B' }}>Reliable partners</h5>
                <p className='mt-1' style={{ fontSize: '12px' }}>"They helped us build our brand from scratch with animations, designs, website, blog and SEO. They did a fantastic job, and we are very happy with their work so far and will be using them for the years to come."</p>
                <p style={{ fontSize: '12px' }} className='mb-1 fw-bold'>Are Berg Hjelle</p>
                <p style={{ fontSize: '12px' }} className='mb-5'>Partner at <span style={{ color: '#282E78' }}>Athene Group</span></p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='col text-center'>
                <h5 className='mt-5 mb-5 fw-bold text-center fs-2' style={{ color: '#080E4B' }}>What our clients say about us</h5>
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <img src={slide64} alt='loaded image' className='mb-5' width='30%' height='50%' />
                <h5 className='mb-2 fw-bold fs-2' style={{ color: '#080E4B' }}>Individual approach</h5>
                <p className='mt-1' style={{ fontSize: '12px' }}>“Chimera has built a website that is tailor-made to our needs. It is clean and well-designed, and at the same time easily customisable. We can update it on our own whenever we need.”</p>
                <p style={{ fontSize: '12px' }} className='mb-1 fw-bold'>Thomas Midthjell</p>
                <p style={{ fontSize: '12px' }} className='mb-5'> CTO at <span style={{ color: '#282E78' }}>Procano</span></p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='col text-center'>
                <h5 className='mt-5 mb-5 fw-bold text-center fs-2' style={{ color: '#080E4B' }}>What our clients say about us</h5>
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <img src={slide65} alt='loaded image' className='mb-5' width='30%' height='50%' />
                <h5 className='mb-2 fw-bold fs-2' style={{ color: '#080E4B' }}>First choice</h5>
                <p className='mt-1' style={{ fontSize: '12px' }}>"They always come to our minds first when our clients ask for visual identity, web development, HubSpot integration or digital transformation."</p>
                <p style={{ fontSize: '12px' }} className='mb-1 fw-bold'>Strategy Director & Founder at <span style={{ color: '#282E78' }}>Coupler</span></p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='col text-center'>
                <h5 className='mt-5 mb-5 fw-bold text-center fs-2' style={{ color: '#080E4B' }}>What our clients say about us</h5>
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <img src={slide66} alt='loaded image' className='mb-5' width='30%' height='50%' />
                <h5 className='mb-2 fw-bold fs-2' style={{ color: '#080E4B' }}>Open-minded</h5>
                <p className='mt-1' style={{ fontSize: '12px' }}>"Working with the Chimera team was very productive. They were really dedicated to developing something unique. Together we created an innovative solution that has no actual competition on the market."</p>
                <p style={{ fontSize: '12px' }} className='mb-1 fw-bold'>Peder Strømsvåg</p>
                <p style={{ fontSize: '12px' }} className='mb-5'>Founder at <span style={{ color: '#282E78' }}>RoadTech</span></p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='col text-center'>
                <h5 className='mt-5 mb-5 fw-bold text-center fs-2' style={{ color: '#080E4B' }}>What our clients say about us</h5>
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <img src={slide67} alt='loaded image' className='mb-5' width='30%' height='50%' />
                <h5 className='mb-2 fw-bold fs-2' style={{ color: '#080E4B' }}>Proactive attitude</h5>
                <p className='mt-1' style={{ fontSize: '12px' }}>"Really enjoyed developing my project with Chimera Prime. The team was very inquisitive about my idea for the e-learning platform and they delivered a fully functional MVP within three months."</p>
                <p style={{ fontSize: '12px' }} className='mb-1 fw-bold'>Tatiana Penzo</p>
                <p style={{ fontSize: '12px' }} className='mb-5'>Founder at <span style={{ color: '#282E78' }}>Penzo</span></p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='col text-center'>
                <h5 className='mt-5 mb-5 fw-bold text-center fs-2' style={{ color: '#080E4B' }}>What our clients say about us</h5>
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <img src={slide68} alt='loaded image' className='mb-5' width='30%' height='50%' />
                <h5 className='mb-2 fw-bold fs-2' style={{ color: '#080E4B' }}>Committed team</h5>
                <p className='mt-1' style={{ fontSize: '12px' }}>"We have been working with Chimera hand in hand from the very beginning. We could count on their expertise at all development stages. From product design to market release and ongoing tech support. They were as passionate about the project as our own team."</p>
                <p style={{ fontSize: '12px' }} className='mb-1 fw-bold'>Anders Glorvigen</p>
                <p style={{ fontSize: '12px' }} className='mb-5'>Co-founder at  <span style={{ color: '#282E78' }}>Fantasy Scout</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide - 7 */}

      <div className="row bg-light mt-5 mb-5 d-flex ms-3 me-3">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center mt-2 mb-3">
          <h4 style={{ color: '#080E4B' }} className='fw-bold text-center'>Our Latest Blog Posts</h4>
        </div>
        <div className='col-md-4 col-12'>
          <img src={slide71} alt='' width="100%" height="50%" />
          <p style={{ fontSize: '12px' }} className='mt-3 mb-2'>23. Aug 2023 </p>
          <p className='fw-bold fs-5 lh-2'>How to Migrate My Website to HubSpot? A Step-By-Step Guide</p>
          <p>Migrating your website to HubSpot can be a great move if you're looking for an all-in-one...</p>
        </div>
        <div className='col-md-4 col-12' >
          <img src={slide72} alt='' width="100%" height="50%" />
          <p style={{ fontSize: '12px' }} className='mt-3 mb-2'>08. Aug 2023 </p>
          <p className='fw-bold fs-5 lh-2'>HubSpot Theme vs Custom Development</p>
          <p>So you've decided to build a website, huh? That's fantastic! Now comes the tricky part,...</p>
        </div>
        <div className='col-md-4 col-12'>
          <img src={slide73} alt='' width="100%" height="50%" />
          <p style={{ fontSize: '12px' }} className='mt-3 mb-2'>05. Jul 2023 </p>
          <p className='fw-bold fs-5 lh-2'>HubSpot and Slack integration = Communication Magic</p>
          <p>Ever feel like managing your business communication is like juggling flaming torches...</p>
        </div>
      </div>

      {/* Slide - 8 */}

      <div className="row border shadow-sm mb-5 p-5" style={{ color: 'white', backgroundColor: 'black' }}>
        <div className="col-12 col-md-10 offset-md-2 d-flex flex-row align-items-start justify-content-between">
          <img className="mt-0 mb-3" src={logo} alt="" width="35" height="40" />
          <div className="d-flex mb-3">
            <FaSquareFacebook fontSize="20px" style={{ margin: '8px', marginLeft: '0px' }} />
            <FaLinkedin fontSize="20px" style={{ margin: '8px' }} />
            <FaInstagramSquare fontSize="20px" style={{ margin: '8px' }} />
          </div>
        </div>
        <div className="col-6 col-md-3 offset-md-2 d-flex flex-column align-items-start justify-content-start mb-5">
          <h5 className="mb-3 mt-3" style={{ fontSize: '12px' }}>SERVICES</h5>
          <p className="mb-0" style={{ fontSize: '12px' }}>Self-managed Teams</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>HubSpot Services for Marketing Agencies</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Our HubSpot Portfolio</p>
        </div>
        <div className="col-6 col-md-2 d-flex flex-column align-items-start justify-content-start mb-5">
          <h5 className="mb-3 mt-3" style={{ fontSize: '12px' }}>COMPANY</h5>
          <p className="mb-0" style={{ fontSize: '12px' }}>History</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Core Values</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Social Responsibility</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Blog</p>
        </div>
        <div className="col-12 col-md-2 d-flex flex-column align-items-start justify-content-start mb-5">
          <h5 className="mb-3 mt-3" style={{ fontSize: '12px' }}>LEGAL</h5>
          <p className="mb-0" style={{ fontSize: '12px' }}>Privacy Policy</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Terms & Conditions</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Cookie Policy</p>
        </div>
        <div className="col-12 col-md-2 offset-md-1 d-flex flex-column align-items-start justify-content-start mb-5">

          <h5 className="mb-3 mt-2" style={{ fontSize: '12px' }}>OFFICES</h5>
          <p className="mb-1 fw-bold" style={{ fontSize: '12px' }}>Headquarter</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Torggata 13,0181</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Oslo, Norway</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>(+47) 930 45 198</p>
          <p className="mb-1 fw-bold mt-2" style={{ fontSize: '12px' }}>Warsaw Office</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Zlota 59,00-120</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>Warsaw, Poland</p>
          <p className="mb-0" style={{ fontSize: '12px' }}>(+48) 505 316 553</p>
        </div>
        <div className='col-1'></div>
      </div>

    </div>

  );
}

export default App;
