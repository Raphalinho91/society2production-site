import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IMAGE1 from "../image-portrait/image1.jpeg";
import IMAGE2 from "../image-portrait/image2.jpeg";
import IMAGE3 from "../image-portrait/image3.jpeg";
import IMAGE4 from "../image-portrait/image4.jpeg";
import IMAGE5 from "../image-portrait/image5.jpeg";
import IMAGE6 from "../image-portrait/image6.jpeg";
import IMAGE7 from "../image-portrait/image7.jpeg";
const images = [IMAGE1, IMAGE2, IMAGE3, IMAGE4, IMAGE5, IMAGE6, IMAGE7];
const texts = [
  "2SOCIETY, c’est bien plus qu’une équipe, c’est une famille unie par une vision commune.",
  "Ce qui nous rassemble, ce n’est pas seulement notre passion pour la création, mais aussi notre volonté d’évoluer ensemble.",
  "Malgré nos inspirations et nos styles différents, nous avançons dans la même direction, guidés par deux principes fondamentaux : l’unité et l’excellence.",
  "Notre objectif est simple : devenir la meilleure version de nous-mêmes. Chaque jour, nous cherchons à nous améliorer, à apprendre les uns des autres et à acquérir de nouvelles compétences pour enrichir notre travail.",
  "L’échange et le partage sont au cœur de notre démarche, car nous croyons que c’est en restant ouverts et curieux que nous pouvons offrir un contenu toujours plus qualitatif.",
  "Aujourd’hui, nous nous concentrons principalement sur la photographie, un domaine qui nous permet d’exprimer notre créativité et de raconter des histoires à travers l’image.",
  "Mais ce n’est qu’un début. Notre ambition ne connaît pas de limites, et nous continuerons à évoluer pour vous proposer toujours plus et toujours mieux.",
];
const positions = [
  "center",
  "left2",
  "left1",
  "left",
  "right",
  "right1",
  "right2",
];

const imageVariants = {
  center: { x: "0%", scale: 1, zIndex: 5 },
  left2: { x: "-50%", scale: 0.9, zIndex: 3 },
  left1: { x: "-90%", scale: 0.7, zIndex: 2 },
  left: { x: "-120%", scale: 0.5, zIndex: 1 },
  right: { x: "120%", scale: 0.5, zIndex: 1 },
  right1: { x: "90%", scale: 0.7, zIndex: 2 },
  right2: { x: "50%", scale: 0.9, zIndex: 3 },
};

export default function AboutMe() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [textIndex, setTextIndex] = useState(0);

  const handlePrev = () => {
    setPositionIndex((prevIndex) => {
      const newIndex = prevIndex.map((index) => (index - 1 + 7) % 7);
      return newIndex;
    });
    setTextIndex((prev) => (prev - 1 + texts.length) % texts.length);
  };

  const handleNext = () => {
    setPositionIndex((prevIndex) => {
      const newIndex = prevIndex.map((index) => (index + 1) % 7);
      return newIndex;
    });
    setTextIndex((prev) => (prev + 1) % texts.length);
  };

  return (
    <Box
      id="aboutMe"
      sx={{
        display: "flex",
        width: "100%",
        minHeight: { xs: "100vh", sm: "95vh" },
        backgroundColor: "#121212",
        color: "#FFF",
        position: "relative",
        overflowX: "hidden",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        mt: 4,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              borderRadius: "12px",
              width: "340px",
              height: "510px",
              position: "absolute",
            }}
            initial="center"
            animate={positions[positionIndex[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          />
        ))}
      </Box>

      <motion.div
        key={textIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: "center",
          maxWidth: "500px",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <Typography variant="h6" sx={{ pl: 2, pr: 2 }}>
          {texts[textIndex]}
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bottom: { xs: 30, sm: 20 },
          gap: 2,
          zIndex: 1000,
        }}
      >
        <Button
          id="prevButton"
          sx={{ backgroundColor: "transparent", color: "#FFF" }}
          onClick={handlePrev}
        >
          <KeyboardArrowLeftIcon sx={{ fontSize: 42 }} />
        </Button>
        <Button
          id="nextButton"
          sx={{ backgroundColor: "transparent", color: "#FFF" }}
          onClick={handleNext}
        >
          <KeyboardArrowRightIcon sx={{ fontSize: 42 }} />
        </Button>
      </Box>
    </Box>
  );
}
