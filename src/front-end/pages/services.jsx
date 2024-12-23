import React, { useState } from "react";
import Card from '../components/card/card';
import Footer from '../components/footer/footer'
// import { FaServer, FaCode, FaLightbulb, FaMobileAlt, FaCloud } from 'react-icons/fa';
import { FaCogs, FaMobileAlt, FaBullhorn, FaCode,FaLightbulb, FaChartLine } from "react-icons/fa";

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
        icon: <FaLightbulb />,
    },
    {
        id: 3,
        category: "apps",
        title: "Expert Professionals Across Platforms",
        description: "Our programming professionals boasts a minimum of 5 years of experience in their respective fields.",
        icon: <FaCode />,
    },
    {
        id: 4,
        category: "consultant",
        title: "Website Leasing with Unmatched Stability",
        description: "Solutions are designed to handle various applications seamlessly, including logistics systems, SAP, and more.",
        icon: <FaCogs />,
    },
    {
        id: 5,
        category: "campaign",
        title: "Social Media Content",
        description: "Driving engagement and awareness with tailored strategies for brand growth.",
        icon: <FaBullhorn />,
    },
    {
        id: 6,
        category: "campaign",
        title: "Online Community Growth",
        description: "Effective strategies to grow content creator communities and increase revenue.",
        icon: <FaChartLine />,
    },
    ];
    const categories = [
    { label: "All", value: "all" },
    { label: "Developed Applications", value: "apps" },
    { label: "IT Consultant", value: "consultant" },
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

const Services  = ({ footerRef }) => {
    const [activeCategory, setActiveCategory] = useState("all");
    
    const filteredContent =
    activeCategory === "all"
        ? contentData
        : contentData.filter((item) => item.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Ready to take your business <br /> to the next level?</h2>
                
                {/* Section 1 */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
                    {/* <Card
                        title="Website Leasing with Unmatched Stability"
                        content="We offer website leasing services with platforms that have been rigorously tested for stability. Our solutions are designed to handle various applications seamlessly, including logistics systems, SAP, and more. With our robust and reliable infrastructure, you can focus on your operations while we ensure optimal website performance."
                        icon={<FaServer />} 
                    />
                    <Card
                        title="Expert Professionals Across Platforms"
                        content="Our team consists of highly skilled professionals with expertise across multiple programming platforms, including website and mobile development. No matter the complexity of your project, our experts are equipped to deliver results that exceed expectations."
                        icon={<FaCode />} 
                    />
                    <Card
                        title="Experienced and Insightful Development"
                        content="Each of our programming professionals boasts a minimum of 5 years of experience in their respective fields. This wealth of expertise ensures a deep understanding of your unique requirements and the ability to provide tailored solutions that align perfectly with your business goals. With our commitment to excellence and a customer-first approach, we strive to be the trusted partner for all your technology needs."
                        icon={<FaLightbulb />} 
                    /> */}
                {/* </div> */}

                {/* Section 2 */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"> */}
                    {/* <Card
                        title="Custom Website Development"
                        content="Our website development services are tailored to meet your business goals. From e-commerce platforms to portfolio websites, we ensure high-quality design, seamless functionality, and cross-platform compatibility."
                        icon={<FaCode />} 
                    />
                    <Card
                        title="Mobile Application Development"
                        content="Leverage the power of mobile technology with our cutting-edge application development services. We specialize in creating user-friendly, responsive, and high-performance apps for both iOS and Android."
                        icon={<FaMobileAlt />} 
                    />
                    <Card
                        title="Cloud Hosting Services"
                        content="Secure your website or application with our reliable cloud hosting solutions. With top-notch data encryption, daily backups, and 24/7 monitoring, we ensure that your business stays online and your data remains safe."
                        icon={<FaCloud />} 
                    /> */}
                {/* </div> */}

                {/* Our Service */}
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
                

                {/* Why Choose Us Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 mt-10">
                    <h2 className="text-2xl font-bold text-center mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Expertise Across Industries:</strong> 10+ years of experience in web and mobile development.</li>
                        <li><strong>Client-Centric Approach:</strong> Custom solutions tailored to your needs.</li>
                        <li><strong>Scalable Solutions:</strong> Designed to grow with your business.</li>
                        <li><strong>Support You Can Rely On:</strong> 24/7 technical assistance.</li>
                    </ul>
                </div>

                {/* Call-to-Action Section */}
                {/* <div className="text-center mt-10">
                    <h2 className="text-xl font-semibold mb-4">Ready to take your business to the next level?</h2>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                        Get Started
                    </button>
                </div> */}
            </div>
            <div className="footerPage container" ref={footerRef}>
          <Footer />
        </div>
        </div>
    );
};

export default Services;
