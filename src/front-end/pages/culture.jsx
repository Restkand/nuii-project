import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 

import Card from "../components/card/card";
import Modal from '../components/modal/modal';
import Kabul from '../assets/portofolio/kabul/kabul.jpg';
import Renaldi from '../assets/portofolio/renaldi/renaldi.jpeg';
import Sammsudin from '../assets/portofolio/samsudin/sem.jpeg';
import Angga from '../assets/portofolio/angga/angga.jpeg';
import Arkan from '../assets/portofolio/arkan/arkan.png';

const teamData = [
  { id: 1, title: 'Kabul Dedi Sutrisno', description: 'IT Consultant', image: Kabul },
  { id: 2, title: 'Ahmad Renaldi Iskandar', description: 'Full-Stack Developer', image: Renaldi },
  { id: 3, title: 'Mohammad Samsudin', description: 'Dev Support', image: Sammsudin },
  { id: 4, title: 'Angga Saputra', description: 'Web & Mobile Developer', image: Angga },
  { id: 5, title: 'Bukhori Arkan', description: 'Senior Developer', image: Arkan },
];

const Culture = () => {
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
        <h2 className="text-4xl font-bold">
          At <span className="text-blue-500">NUII</span>, we bring technology to life<br />
          with <span className="text-blue-500">integrity</span> and <span className="text-blue-500">responsibility</span>.
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          NUII is a trusted IT consulting firm driven by a commitment to excellence and strong values. We believe in delivering solutions that not only transform businesses but also uphold the highest standards of trust and integrity.
        </p>
      </div>
      <div className="flex justify-center w-full" style={{ width: '70%', margin: '0 auto' }}>
        <DotLottieReact
          src="https://lottie.host/5805b60b-02de-405e-b0c6-be585abb46a8/xcw9oYWXLU.lottie"
          loop
          autoplay
        />
      </div>
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Founded with the vision of providing cutting-edge IT solutions, NUII has grown into a trusted partner for businesses worldwide. Our journey is built on trust, responsibility, and a passion for innovation.
        </p>
      </div>
      <div className="bg-teal py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Meet Our Team</h2>
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
                  customStyle={{ width: '250px', backgroundColor: '#fff7e6', color: '#8d6e63', borderColor: '#fce4b8', borderRadius: '12px'}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={!!selectedMember} onClose={closeModal}>
  {selectedMember && (
    <div className="modal-card">
      <img src={selectedMember.image} alt={selectedMember.title} />
      <div className="modal-content">
        <div className="icon-circle">
         {/* <i className="fa fa-user"></i> */}
        </div>
        <h3 className="modal-title">{selectedMember.title}</h3>
        <p className="modal-description">{selectedMember.description}</p>
        <p className="modal-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quasi, voluptates praesentium velit officia dolor impedit nemo distinctio rem ducimus molestias pariatur in beatae quo incidunt? Exercitationem ipsum suscipit inventore.</p>
        {/* Additional elements like icons can be added here */}
      </div>
    </div>
  )}
</Modal>

    </div>
  );
};

export default Culture;
