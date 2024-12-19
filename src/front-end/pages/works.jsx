import React, { useState } from "react";
import Card from "../components/card/card";
import Parallax from '../components/paralax/paralax';
import Footer from '../components/footer/footer'
import SponsoredCarousel from "../components/carousel/carousel";
import { FaCogs, FaMobileAlt, FaBullhorn, FaPenNib, FaChartLine } from "react-icons/fa";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../assets/style/global.css';

import Heskin from '../assets/portofolio/project/heskin.png';
import urrofi from '../assets/portofolio/project/urofi.png';
import kalbu from '../assets/portofolio/project/kalbu.png';
import korlantas from '../assets/portofolio/project/korlantas.png';
import metro from '../assets/portofolio/project/metro.png';
import neoTrip from '../assets/portofolio/project/neonTrip.png';
import sdmpolda from '../assets/portofolio/project/sdm_polda.png';
import sdmpolda2 from '../assets/portofolio/project/sdm_polda_2.png';
import uin from '../assets/portofolio/project/uin.png';
import urofilm from '../assets/portofolio/project/urofilm.png';
import indobrew from '../assets/portofolio/project/indobrew.png';
import wimisec from '../assets/portofolio/project/wimisec.png';


const projects = [
  { id: 1, title: "He-Skin Halodoc", image: Heskin },
  { id: 2, title: "Kepulauan Seribu Apps ", image: kalbu },
  { id: 3, title: "E-Learning UROFFI", image: urrofi },
  { id: 4, title: "Metro Nusantara", image: metro },
  { id: 5, title: "Korlantas Polri", image: korlantas },
  { id: 6, title: "Vaksinasi Polda", image: sdmpolda },
  { id: 7, title: "Meonthrift", image: neoTrip },
  { id: 8, title: "SDM Polda", image: sdmpolda2 },
  { id: 9, title: "SIAKAD UIN", image: uin },
  { id: 10, title: "Company Profile URROFI", image: urofilm },
  { id: 11, title: "E-Commerce INDOBREW", image: indobrew },
  { id: 12, title: "E-Learning WIMISEC", image: wimisec },
];
const contentData = [
  {
    id: 1,
    category: "apps",
    title: "Mobile Inventory Management",
    description: "A mobile app that helps track and manage inventory in real-time with accuracy.",
    icon: <FaMobileAlt />,
  },
  {
    id: 2,
    category: "apps",
    title: "Employee Attendance System",
    description: "Attendance and scheduling app for remote and on-site teams, ensuring efficiency.",
    icon: <FaCogs />,
  },
  {
    id: 3,
    category: "content",
    title: "One Planet One Health Campaign",
    description: "Encouraging healthier lifestyles and environmental sustainability.",
    icon: <FaPenNib />,
  },
  {
    id: 4,
    category: "content",
    title: "Social Media Content for Dairy Brand",
    description: "Driving engagement and awareness with tailored strategies for brand growth.",
    icon: <FaBullhorn />,
  },
  {
    id: 5,
    category: "campaign",
    title: "Online Community Growth",
    description: "Effective strategies to grow content creator communities and increase revenue.",
    icon: <FaChartLine />,
  },
  {
    id: 6,
    category: "campaign",
    title: "F&B Business Elevation",
    description: "Improving branding and outreach for F&B businesses with high-quality content.",
    icon: <FaBullhorn />,
  },
];
const categories = [
  { label: "All", value: "all" },
  { label: "Developed Applications", value: "apps" },
  { label: "Content Creation", value: "content" },
  { label: "Campaign & Social Strategy", value: "campaign" },
];


const FilterButton = ({ label, active, onClick }) => {
  return (
    <button
      className={`button-neu ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Works = ({ footerRef }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredContent =
    activeCategory === "all"
      ? contentData
      : contentData.filter((item) => item.category === activeCategory);

  return (
    <div className="">
      <header className="text-center py-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Giving <span className="text-purple">life</span> to{" "}
          <span className="text-orange">ideas</span>
        </h2>
        <h4 className="text-gray-500 mt-2">
          Telling your Business to the world with professionalism
        </h4>
      </header>

      <nav className="text-center mb-8">
        {categories.map((category) => (
          <FilterButton
            key={category.value}
            label={category.label}
            active={activeCategory === category.value}
            onClick={() => setActiveCategory(category.value)}
          />
        ))}
      </nav>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-11/12 max-w-6xl">
        {filteredContent.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            content={item.description}
            icon={item.icon}
            customStyle={{ backgroundColor: "#f9f9f9", color: "#333" }}
          />
        ))}
      </section>
      <div className="flex flex-wrap justify-center mx-auto bg-black p-5 max-w-6xl rounded-lg">
        <div className="w-full">
          <h2 className="text-center text-white w-full">FINISH PROJECT</h2>
          <div className="w-full" style={{ width: '70%', margin: '0 auto' }}>
            <DotLottieReact
              src="https://lottie.host/7e308df5-18b2-4f11-b214-df23e4ec10c4/sk2JogOKzd.lottie"
              loop
              autoplay
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full p-5 ">
          {projects.map((project) => (
            <Parallax key={project.id} title={project.title} image={project.image} />
          ))}
        </div>
      </div>
      <SponsoredCarousel />
      <div className="footerPage container" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Works;
