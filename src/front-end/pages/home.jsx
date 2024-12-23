import React from "react";

// import FeatureCard from '../components/featureCard/featureCard';
import Cards from '../components/blackCard/blackCard';
import HalfCard from '../components/halfCard/halcCard';
import SponsoredCarousel from "../components/carousel/carousel";
import Footer from '../components/footer/footer'

// Assets
import myGif from '../assets/gif/DK-Homepage-One-Loop-With-Background.mp4';
import myLYellow from '../assets/gif/DK-Illustration-Home-Page-Short-About-LYellow.gif';
import myRYellow from '../assets/gif/DK-Illustration-Home-Page-Short-About-RYellow.gif';
import AnalyticImg from '../assets/gif/DK-Service-of-Doki-Insights-_-Report.gif';
import StrategyImg from '../assets/gif/DK-Service-of-Doki-Social-Media-_-Digital-Strategy.gif';

import '../assets/style/global.css';

const Home = ({ footerRef }) => {
  const cardKarites = 'Karites • 2024';
  const cardKaritesDesc = "OPTIMIZING BUSINESS STRATEGY THROUGH APPLICATION WITH MORE PRECISE CONSUMER TARGETS";


  const cardHandco = 'Hand Co • 2023';
  const cardHandcoDesc = "MAXIMIZING EFFICIENCY BY PROVIDING IN-DEPTH ANALYTICS TO SUPPORT BEST DECISIONS";
  // Maximizing Efficiency by Providing In-Depth Analytics to Support the Best Business Decisions
    
  const firstHalfCards = 'Multiplatform Application';
  const firstHalfCardsDesc = 'We delivering innovative and integrated cross-platform digital solutions, specifically designed to maximize efficiency and accelerate your business transformation process.';
  const secondHalfCards = 'Social Media & Digital Strategy';
  const secondHalfCardsDesc = "We're always observing people’s interest, what’s in their heart and mind, and figure out the most effective ways to spark their feelings with contents that we carry out through our social media channels";
  const thirdHalfCards = 'IT Consultant';
  const thirdHalfCardsDesc = 'We are led by experienced experts who have helped companies achieve ISO 9001 certification, so able to adapt to any field, division, or type of company to design a system that suits your business needs.';
  const fourthHalfCards = 'Insights & Report';
  const fourthHalfCardsDesc = "We're always iterating and keep our senses aware to the world and its changes, gained insights that could be applied regularly, so it become a continuous circle of improvement for the brand.";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* <Navbar /> */}

      <main className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
        <div className="home-1 pt-12 sm:pt-28 pb-16 sm:pb-32 px-4 md:px-20 text-center md:text-left">
          <h4 className="text-xl sm:text-2xl md:text-4xl leading-loose">
            Struggling to understand the market?
          </h4>
          <h2 className="text-2xl sm:text-4xl md:text-7xl font-bold tracking-wide leading-snug">
          <span className="text-green">Strengthen</span> your business <span className="text-purple">strategy</span> with our <span className="text-orange">solutions</span>
            {/* Connecting the <span className="text-yellow">Hearts</span> of Your <span className="text-purple">Brand</span> and <span className="text-orange">Audiences</span> */}
          </h2>
          <video className="my-video-class mt-2 w-full mx-auto" autoPlay loop muted playsInline>
              <source src={myGif} type="video/mp4" />
              Your browser does not support the video tag.
          </video>

        </div>

        <div className="home-2 pt-10 pb-10 sm:pt-20 sm:pb-20 px-4 sm:px-10 md:px-20 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-12">      
          <div className='CenterText flex flex-col sm:flex-row justify-center items-center text-center sm:col-span-12 px-4'>
              <img src={myLYellow} alt="Animated left gif" className="w-full max-w-xs sm:max-w-sm leftImage" />
              <h3 className='tracking-wider text-xl sm:text-3xl md:text-7xl leading-loose'>WITH SINCERITY AND YEARS OF EXPERIENCE, COMMITTED TO ELEVATING YOUR BUSINESS TO A HIGHER LEVEL.</h3>
              <img src={myRYellow} alt="Animated right gif" className="w-full max-w-xs sm:max-w-sm rightImage" />
          </div>
        </div>

        <div className="home-3 pt-12 sm:pt-28 pb-10 sm:pb-20 px-4 sm:px-10 md:px-20">
          <div className='featuredWorks grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-12 pb-8'>
              <div className='featuredL sm:col-span-6'>
                <h3 className='text-3xl sm:text-5xl'>Featured Works</h3>
              </div>
              <div className='featuredR sm:col-span-6 flex justify-center sm:justify-end'>
                <a href="/works" className="linkWorks text-base sm:text-xl flex items-center">
                  <h5>
                    VIEW ALL WORKS
                    <span className="circle-container ml-2">
                      <svg width="15" height="15" viewBox="1 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.05295 3H21V19.947H15.351V12.6435L4.99446 23L1 19.0055L11.3565 8.64901H4.05295V3Z" fill="white"></path>
                      </svg>
                    </span>
                  </h5>
                </a>
              </div>
          </div>
          <div className='Danone pb-4'>
              <Cards title={cardKarites} description={cardKaritesDesc} imageSrc={StrategyImg} />
          </div>
          <div className='Fatore'>
              <Cards title={cardHandco} description={cardHandcoDesc} imageSrc={AnalyticImg} />
          </div>
        </div>

        <div className='home-4 pb-10 sm:pb-20 px-4 sm:px-10 md:px-20 md:py-20'>
          <div className='titleHome4 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-12'>
              <div className='col-span-12 sm:col-span-8'>
                  <h2 className='text-3xl mt-8 sm:text-5xl'>Distribute messages to the right audience <span className='text-purple'>thoughtfully</span> and <span className="text-orange">playfully</span></h2>
              </div>
          </div>
          <section className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <HalfCard title={firstHalfCards} description={firstHalfCardsDesc} /> 
            <HalfCard title={secondHalfCards} description={secondHalfCardsDesc} /> 
            <HalfCard title={thirdHalfCards} description={thirdHalfCardsDesc} /> 
            <HalfCard title={fourthHalfCards} description={fourthHalfCardsDesc} /> 
          </section>
        </div>
        <SponsoredCarousel />
        <div className="footerPage" ref={footerRef}>
          <Footer />
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-500 text-sm sm:text-base">
        <p>© 2023 NUii. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;