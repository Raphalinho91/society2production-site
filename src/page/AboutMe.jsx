import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import IMAGE1 from "../assets/image1.webp";
import IMAGE2 from "../assets/image2.webp";
import IMAGE3 from "../assets/image3.webp";
import IMAGE4 from "../assets/image8.webp";
import IMAGE5 from "../assets/image5.webp";
import IMAGE6 from "../assets/image6.webp";
import { AnimatePresence, motion } from "framer-motion";

const images = [IMAGE1, IMAGE2, IMAGE3, IMAGE4, IMAGE5, IMAGE6];

export default function AboutMe2() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const getNextImage = (offset) => {
    return images[(selectedIndex + offset) % images.length];
  };

  return (
    <Box
      id="aboutMe"
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#121212",
        position: "relative",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#121212",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          id="slider"
          className="slider"
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            pl: { xs: 2, sm: 10 },
          }}
        >
          <Box
            id="itemSlide"
            className="itemSlide"
            sx={{
              display: "flex",
              minWidth: { xs: "340px", sm: "400px", md: "533px" },
              minHeight: { xs: "510px", sm: "600px", md: "800px" },
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <AnimatePresence exitBeforeEnter>
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                alt="Main Image"
                initial={{ x: direction * 100, scale: 0.8, opacity: 0 }}
                animate={{ x: 0, scale: 1, opacity: 1 }}
                exit={{ x: -direction * 100, scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                loading="lazy"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </AnimatePresence>
            <Box
              sx={{
                display: "block",
                position: "absolute",
                bottom: "5%",
                left: "5%",
                flexDirection: "column",
                textAlign: "left",
                width: "310px",
                zIndex: 1,
              }}
            >
              <Typography sx={{ color: "#FFF", fontWeight: "bold" }}>
                society2production
              </Typography>
              <Typography sx={{ color: "#FFF", mt: 2 }}>
                Des photos portraits pour instagram, pour le perso ou pour le
                pro. Il y en à pour tous, on attend que vous !
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              overflow: "hidden",
              position: "absolute",
              left: { xs: "300px", sm: "420px", md: "550px" },
            }}
          >
            <AnimatePresence exitBeforeEnter>
              {[1, 2, 3].map((offset) => (
                <motion.div
                  key={offset}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: { xs: "120px", sm: "160px", md: "200px" },
                      height: { xs: "180px", sm: "240px", md: "300px" },
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleImageClick((selectedIndex + offset) % images.length)
                    }
                  >
                    <Box
                      component="img"
                      alt={`Secondary Image ${offset}`}
                      src={getNextImage(offset)}
                      loading="lazy"
                      sx={{
                        display: "flex",
                        position: "absolute",
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        zIndex: 0,
                        borderRadius: "20px",
                      }}
                    />
                  </Box>
                </motion.div>
              ))}
            </AnimatePresence>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: { xs: 15, sm: 2 },
            mb: 2,
            gap: 2,
          }}
        >
          <Button
            sx={{ backgroundColor: "transparent", color: "#FFF" }}
            onClick={handlePrev}
          >
            <KeyboardArrowLeftIcon sx={{ fontSize: 42 }} />
          </Button>
          <Button
            sx={{ backgroundColor: "transparent", color: "#FFF" }}
            onClick={handleNext}
          >
            <KeyboardArrowRightIcon sx={{ fontSize: 42 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
