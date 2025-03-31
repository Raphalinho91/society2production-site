import { useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";
import LANDSCAPE1 from "../image-landscape/landscape2.jpeg";
import LANDSCAPE2 from "../image-landscape/landscape3.jpeg";
import LANDSCAPE3 from "../image-landscape/landscape4.jpeg";
import LANDSCAPE4 from "../image-landscape/landscape5.jpeg";
import LANDSCAPE5 from "../image-landscape/landscape6.jpeg";
import LANDSCAPE6 from "../image-landscape/landscape8.jpeg";
import LANDSCAPE7 from "../image-landscape/landscape10.jpeg";
import LANDSCAPE8 from "../image-landscape/landscape7.jpeg";
import "./style.accueil.css";

const text = [
  "Shooting",
  "Photographie",
  "Montage",
  "Mannequinat",
  "Shooting",
  "Photographie",
  "Montage",
  "Mannequinat",
];

export default function Accueil() {
  const sliderRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const next = nextRef.current;
    const prev = prevRef.current;

    if (!slider || !next || !prev) return;

    const nextSlide = () => {
      const items = slider.querySelectorAll(".itemLandscape");
      if (items.length > 0) {
        slider.appendChild(items[0]);
      }
    };

    const prevSlide = () => {
      const items = slider.querySelectorAll(".itemLandscape");
      if (items.length > 0) {
        slider.insertBefore(items[items.length - 1], items[0]);
      }
    };

    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    let startX = 0;
    let endX = 0;
    let isDragging = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const deltaX = endX - startX;
      if (Math.abs(deltaX) > 50) {
        deltaX < 0 ? nextSlide() : prevSlide();
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      endX = e.clientX;
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      const deltaX = endX - startX;
      if (Math.abs(deltaX) > 50) {
        deltaX < 0 ? nextSlide() : prevSlide();
      }
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseleave", handleMouseUp);

    return () => {
      next.removeEventListener("click", nextSlide);
      prev.removeEventListener("click", prevSlide);

      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);

      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  return (
    <Box
      id="accueil"
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          height: { xs: "40px", md: "60px" },
          width: "100%",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box sx={{ display: "flex", ml: 2, mt: { xs: 5, md: 0 } }}>
          <Button
            id="go-to-accueil"
            variant="contained"
            href="#accueil"
            sx={{
              textTransform: "initial",
              color: "#FFF",
              backgroundColor: "#1E1E1E",
              zIndex: 111,
              fontWeight: "bold",
              letterSpacing: 1.25,
              "& span": {
                color: "#f15726",
              },
            }}
          >
            SOCIETY<span>2</span>PRODUCTION
          </Button>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2, gap: 2 }}>
          <Button
            id="go-to-aboutMe"
            variant="contained"
            href="#aboutMe"
            sx={{
              textTransform: "initial",
              color: "#FFF",
              backgroundColor: "#1E1E1E",
              zIndex: 111,
              fontWeight: "bold",
            }}
          >
            Qui nous sommes ?
          </Button>
          <Button
            id="go-to-price"
            variant="contained"
            href="#price"
            sx={{
              textTransform: "initial",
              color: "#FFF",
              backgroundColor: "#1E1E1E",
              zIndex: 111,
              fontWeight: "bold",
            }}
          >
            Nos prix
          </Button>
          <Button
            id="go-to-contact"
            variant="contained"
            href="#contact"
            sx={{
              textTransform: "initial",
              color: "#FFF",
              backgroundColor: "#1E1E1E",
              zIndex: 111,
              fontWeight: "bold",
            }}
          >
            Nous contacter
          </Button>
        </Box>
      </Box>
      <div className="containerLandscape">
        <div className="sliderLandscape" ref={sliderRef}>
          {[
            LANDSCAPE8,
            LANDSCAPE1,
            LANDSCAPE2,
            LANDSCAPE3,
            LANDSCAPE4,
            LANDSCAPE5,
            LANDSCAPE6,
            LANDSCAPE7,
          ].map((img, index) => (
            <div
              key={index}
              className="itemLandscape"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="contentLandscape">
                <h2 className="titleAccueil">SOCIETY2PRODUCTION</h2>
                <p className="skillsAccueil">{text[index]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="buttonsLandscape">
          <span className="prevLandscape" ref={prevRef}></span>
          <span className="nextLandscape" ref={nextRef}></span>
        </div>
      </div>
    </Box>
  );
}
