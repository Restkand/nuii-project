import React from "react";
import Slider from "react-slick";
import Card from "../card/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handImage from "../../assets/images/hand.png";
import karitesImage from "../../assets/images/karites.png";
import indobrew from "../../assets/images/indobrew.jpg";
import polda from "../../assets/images/poldaSumbar.jpg";
import metro from "../../assets/images/Nusantara-Metro-Logo.png";
import uin from "../../assets/images/uin.png";
import '../../assets/style/global.css'; 

const SponsoredCarousel = () => {
  const sponsoredData = [
    { id: 1, image: handImage, title: "Hand Care", content: "" },
    { id: 2, image: karitesImage, title: "KHARITES", content: "" },
    { id: 3, image: indobrew, title: "INDOBREW", content: "" },
    { id: 4, image: metro, title: "Metro Nusantara", content: "" },
    { id: 5, image: uin, title: "UIN Tulung Agung", content: "" },
    { id: 6, image: polda, title: "POLDA SUMBAR", content: "" },
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
