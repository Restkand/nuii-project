import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Footer from '../components/footer/footer';
import '../assets/style/global.css';

import Logo from '../assets/images/nuiiLogo-white.png';

import Card from "../components/card/card";
import Modal from '../components/modal/modal';

import Kabul from '../assets/portofolio/kabul/kabul.jpg';
import Renaldi from '../assets/portofolio/renaldi/renaldi.jpeg';
import Sammsudin from '../assets/portofolio/samsudin/sem.jpeg';
import Angga from '../assets/portofolio/angga/angga.jpeg';
import Arkan from '../assets/portofolio/arkan/arkan.png';

// import KabulCV from '../assets/portofolio/kabul/kabul_CV.pdf';
// import RenaldiCV from '../assets/portofolio/renaldi/renaldi_CV.pdf';
import SammsudinCV from '../assets/portofolio/samsudin/Portfolio.pdf';
// import AnggaCV from '../assets/portofolio/angga/angga_CV.pdf';
import ArkanCV from '../assets/portofolio/arkan/portofolio.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const teamData = [
  {
    id: 1,
    title: 'Kabul Dedi Sutrisno',
    description: 'IT Consultant',
    image: Kabul,
    socialMedia: {
      linkedin: 'https://linkedin.com/in/kabulds',
      github: 'https://github.com/kabulds',
    },
    cv: '/assets/documents/Kabul_CV.pdf',
  },
  {
    id: 2,
    title: 'Renaldi Iskandar',
    description: 'Full-Stack Developer',
    image: Renaldi,
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/renaldi-iskandar-585055246/',
      github: 'https://github.com/Restkand',
    },
    cv: '/assets/documents/Renaldi_CV.pdf',
  },
  {
    id: 3,
    title: 'Mohammad Samsudin',
    description: 'Dev Support',
    image: Sammsudin,
    socialMedia: {
      linkedin: 'https://linkedin.com/in/mohamad-samsudin',
      github: 'https://github.com/samsudin47',
    },
    cv: SammsudinCV,
  },
  {
    id: 4,
    title: 'Angga Saputra',
    description: 'Web & Mobile Developer',
    image: Angga,
    socialMedia: {
      linkedin: 'https://linkedin.com/in/angga-saputra16',
      github: 'https://github.com/anggaSaputra16',
    },
    cv: '/assets/documents/Renaldi_CV.pdf',
  },
  {
    id: 5,
    title: 'Bukhori Arkan',
    description: 'Senior Developer',
    image: Arkan,
    socialMedia: {
      linkedin: 'https://linkedin.com/in/bukhoriarkan',
      github: 'https://github.com/bukharkan/bukharkan.github.io',
    },
    cv: ArkanCV,
  },
];

const Culture = ({ footerRef }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = member => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="w-full text-gray-800">
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold">
          <span className='text-orange'>Radiance</span> of <span className='text-[#EFBA0F]'>Technology</span> <br /> 
          to Empower Progress
        </h2>
        <p className="mt-12 text-xl text-gray-600 max-w-2xl mx-auto">
          Much like Amaterasu emerging from the cave, bringing warmth, clarity, and purpose to the world. Guided by integrity and responsibility, we illuminate paths to progress, empowering innovation to thrive.
        </p>
      </div>
      <div className="flex justify-center w-full" style={{ width: '70%', margin: '0 auto' }}>
        <img src={Logo} alt="Animated left gif" className="w-full max-w-xs sm:max-w-sm leftImage" />
      </div>
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-5xl font-bold mt-14 mb-12">Our Guiding Light</h2>
        <p className="text-gray-600 max-w-xl text-xl mx-auto leading-relaxed">
          Nuii is a trusted IT consulting firm driven by a commitment to excellence and strong values. We believe in delivering solutions that not only transform businesses but also uphold the highest standards of trust and integrity
        </p>
      </div>
      <div className="flex justify-center w-full" style={{ width: '60%', margin: '0 auto' }}>
        <DotLottieReact
          src="https://lottie.host/5805b60b-02de-405e-b0c6-be585abb46a8/xcw9oYWXLU.lottie"
          loop
          autoplay
        />
      </div>
      <div className="py-12 container rounded-sm">
        <div className="container bg-[#FFFFFF] mx-auto rounded-lg">
          <h2 className="text-5xl mt-8 font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <div onClick={() => handleCardClick(member)} key={member.id}>
                <Card
                  title={member.title}
                  content={member.description}
                  icon={
                    <img
                      src={member.image}
                      alt={member.title}
                      style={{
                        width: "150px",
                        height: "145px",
                        objectFit: "contain",
                        margin: "0 auto",
                        borderRadius: "20px"
                      }}
                    />
                  }
                  customStyle={{ width: '250px', backgroundColor: '#FDE2A6', color: '#8d6e63', borderColor: '#fce4b8', borderRadius: '20px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={!!selectedMember} onClose={closeModal}>
        {selectedMember && (
          <div className="modal-card featuredWorks">
            <img src={selectedMember.image} alt={selectedMember.title} />
            <div className="modal-content">
              <h3 className="modal-title">{selectedMember.title}</h3>
              <p className="modal-description">{selectedMember.description}</p>

              {/* Sosial Media */}
              <div className="social-media mt-4">
                {selectedMember.socialMedia.linkedin && (
                  <a
                    href={selectedMember.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon mr-4"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-gray-800 text-xl" />
                  </a>
                )}
                {selectedMember.socialMedia.github && (
                  <a
                    href={selectedMember.socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-gray-800 text-xl" />
                  </a>
                )}
              </div>
              <div className="mt-4">
                <a
                  href={selectedMember.cv}
                  download={`${selectedMember.title}_CV`}
                  className=" text-black py-2 bg-[#EFBA0F] p-2 rounded hover:bg-orange transition"
                >
                  Portofolio
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <div className="footerPage container" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Culture;
