import React from "react";
import Slider from "react-slick";
import Card from "../card/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handImage from "../../assets/images/hand.png";
import karitesImage from "../../assets/images/karites.png";
import leftImage from "../../assets/images/left.png";
import rightImage from "../../assets/images/right.png";
import nuiiImage from "../../assets/images/nuii.png";
import '../../assets/style/global.css'; 

const SponsoredCarousel = () => {
  const sponsoredData = [
    { id: 1, image: handImage, title: "Hand Care", content: "Website by Hand Co." },
    { id: 2, image: karitesImage, title: "Karites", content: "Marketplace Apps by Karites." },
    { id: 3, image: leftImage, title: "Left Care", content: "Innovative Solutions." },
    { id: 4, image: rightImage, title: "Right Works", content: "Elevate your workflow." },
    { id: 5, image: nuiiImage, title: "Nuii Co.", content: "NUii Project" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "7rem auto", width: "90%", maxWidth: "1200px" }}>
      <h2 className="featuredWorks text-4xl" style={{ textAlign: "center", marginBottom: "5rem" }}>Joint Partnership</h2>
      <Slider {...settings}>
        {sponsoredData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            content={item.content}
            icon={
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain", 
                  margin: "0 auto",   
                }}
              />
            }
            customStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              textAlign: "center",
              padding: "1rem",
              borderRadius: "100%",
              height: "200px",
              width: "200px"
            }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SponsoredCarousel;
