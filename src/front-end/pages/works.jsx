import React, { useState } from "react";
import Card from "../components/card/card";
import SponsoredCarousel from "../components/carousel/carousel";
import { FaCogs, FaMobileAlt, FaBullhorn, FaPenNib, FaChartLine } from "react-icons/fa";
import '../assets/style/global.css';

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

const Works = () => {
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
      <SponsoredCarousel />
    </div>
  );
};

export default Works;
