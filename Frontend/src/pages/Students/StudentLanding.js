import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Instructors/instructorlanding.module.css";
import Navbar from "../../Navbar";
import Footer from "../Footer";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

import kidsswimming from "../Instructors/Images/kidswimming.jpeg";
import events from "../Instructors/Images/events.jpeg";
import purchasepackage from "../Instructors/Images/purchasepackage.webp";
import swimschoollogo from "../Instructors/Images/swimschoollogo.png";

const StudentLanding = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [kidsswimming, events, purchasepackage];
  const headings = ["Book A Class", "Events", "Purchase A Package"];
  const links=['/book-a-class', '/events', '/package-form']
  const navigate = useNavigate();
  
  const NextArrow = ({ onClick }) => {
    return (
      <>
        <IconContext.Provider value={{ color: "white" }}>
          <div
            className="arrow next"
            onClick={onClick}
            style={{ top: "50%", right: "20%", position: "absolute" }}
          >
            <FaArrowRight />
          </div>
        </IconContext.Provider>
      </>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <IconContext.Provider value={{ color: "white" }}>
        <div
          className="arrow prev"
          style={{ top: "50%", left: "20%", position: "absolute" }}
          onClick={onClick}
        >
          <FaArrowLeft />
        </div>
      </IconContext.Provider>
    );
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
    <Navbar />
        <img 
        src={swimschoollogo} 
        alt={swimschoollogo}
        style={{
        transform: "translate(40%,-25%)",
        }}/>

      <section style={{ marginBottom: "30vh" }}>
        <div>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <div width="33vw" style={{}}>
                  <p
                    style={{
                      fontFamily: "verdana, sans-serif",
                      fontSize: "20px",
                      color:"white",
                      padding: "20px",
                      marginBottom: "100px",
                      transform: "translateX(-50%)",
                      textAlign: "center",
                    }}
                  >
                    {headings[idx]}
                  </p>
                </div>
                <div>
                  <img
                    src={img}
                    alt={img}
                    width={500}
                    height={300}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateX(-50%)",
                      borderRadius: "10%",
                    }}
                    onClick={()=>navigate(links[idx])}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default StudentLanding;




















// import React from "react"
// import styles from './studentlanding.module.css'
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../Navbar";
// const StudentLanding=()=>{
//   const navigate= useNavigate()
//     return(
//     <>
// {/* Navbar */}
// <Navbar/>
// {/* Content */}
// <div className="my-5">
// <h1 className="display-5 text-center">Raising Active, Confident And Growth-Minded Children Through Sports</h1>
// <div className="row">
//   <div className="col-4 d-flex justify-content-center flex-column align-item-center h-100">
//     <img
//       src='/kidswimming.jpeg'
//       alt="kid_swimming"
//       className="bg-dark"
//     />
//     <p className={`text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ${styles.card}`} onClick={()=>{navigate('/book-a-class')}}>
//     Book A Class
//     </p>
//   </div>
//   <div className="col-4 d-flex justify-content-center flex-column align-item-center h-100">
//   <img src='/events.jpeg' height='330vw' alt="task icon to job list" />
//     <p className={`text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ${styles.card}`} onClick={()=>{navigate('/events')}}>
//     Events
//     </p>
//   </div>
//   <div className="col-4 d-flex justify-content-center flex-column align-item-center h-100">
//   <img src='/purchasepackage.webp' alt="task icon to job list" />
//     <p className={`text-center d-flex align-items-center justify-content-center m-0 p-4 w-100 ml-1 ${styles.card}`} onClick={()=>{navigate('/package-form')}}>
//     Purchase A package   
//     </p>
//   </div>
// </div>
// </div>
// </>
//     )
// }
// export default StudentLanding