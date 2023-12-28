import React, { useState } from "react";
import "./Portfolio.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const portfolioItems = [
  {
    image: img6,
    title: "Online code compiler (MERN stack)",
    githubLink: "https://github.com/orgs/approachjunction/repositories",
    liveDemoLink: "https://approacheditor.vercel.app/",
  },
  {
    image: img1,
    title: "Homeappliances24x7",
    githubLink: "https://github.com/razmishra/homeappliances24x7",
    liveDemoLink: "https://homeappliances24x7.netlify.app/",
  },
  {
    image: img2,
    title: "Your Science classes",
    githubLink: "https://github.com/razmishra/yourscienceclasses",
    liveDemoLink: "https://yourscienceclasses.netlify.app/",
  },
  {
    image: img3,
    title: "Book My Cab",
    githubLink: "https://github.com/razmishra/cabBookingProject",
    liveDemoLink: "https://github.com/razmishra/cabBookingProject",
  },
  {
    image: img4,
    title: "Fetch Live Stocks",
    githubLink: "https://github.com/razmishra/fetchLiveStockData",
    liveDemoLink: "https://github.com/razmishra/fetchLiveStockData",
  },
  {
    image: img5,
    title: "Way Point Planner",
    githubLink: "https://github.com/Rajneesh436/Way_Point_Planner",
    liveDemoLink: "https://github.com/Rajneesh436/Way_Point_Planner",
  },
];

const Portfolio = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  const handleImageLoad = (index) => {
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, index]);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItems.map((item, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              {!loadedImages.includes(index) && <Skeleton height={200} />}
              <img
                src={item.image}
                alt="project images"
                style={{
                  display: loadedImages.includes(index) ? "block" : "none",
                }}
                onLoad={() => handleImageLoad(index)}
              />
            </div>

            <h3>
              {loadedImages.includes(index) ? (
                item.title
              ) : (
                <Skeleton count={1} height={20} />
              )}
            </h3>

            <div className="portfolio__item-cta">
              <a href={item.githubLink} className="btn" target="__blank">
                Github
              </a>
              <a
                href={item.liveDemoLink}
                className="btn btn-primary"
                target="__blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
