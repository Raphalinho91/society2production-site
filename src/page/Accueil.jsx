import { Box, Typography } from "@mui/material";
import "./style.accueil.css";
import IMAGE1 from "../assets/image1.jpeg";
import IMAGE2 from "../assets/image2.jpeg";
import IMAGE3 from "../assets/image3.jpeg";
import IMAGE4 from "../assets/image4.jpeg";
import IMAGE5 from "../assets/image5.jpeg";
import IMAGE6 from "../assets/image6.jpeg";
import IMAGE7 from "../assets/image7.jpeg";
import IMAGE8 from "../assets/image8.jpeg";
import IMAGE9 from "../assets/image9.jpeg";
import IMAGE10 from "../assets/image10.jpeg";
import IMAGE11 from "../assets/image11.jpeg";
import IMAGE12 from "../assets/image12.jpeg";
import IMAGE13 from "../assets/image13.jpeg";
import IMAGE14 from "../assets/image14.jpeg";
import IMAGE15 from "../assets/image15.jpeg";

const images = [
  IMAGE1,
  IMAGE2,
  IMAGE3,
  IMAGE4,
  IMAGE5,
  IMAGE6,
  IMAGE7,
  IMAGE8,
  IMAGE9,
  IMAGE10,
  IMAGE11,
  IMAGE12,
  IMAGE13,
  IMAGE14,
  IMAGE15,
];

export default function Accueil() {
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
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#FFF",
          textTransform: "uppercase",
          letterSpacing: 5,
          fontSize: { xs: 25, sm: 35, md: 40 },
          zIndex: 1000,
        }}
      >
        society2production
      </Typography>
      <h3>
        <span style={{ "--i": 1 }} data-text="Shooting">
          Shooting
        </span>
        <span style={{ "--i": 2 }} data-text="Photographie">
          Photographie
        </span>
        <span style={{ "--i": 3 }} data-text="Montage">
          Montage
        </span>
        <span style={{ "--i": 4 }} data-text="Mannequinat">
          Mannequinat
        </span>
      </h3>
      <div className="container">
        <div className="gallery">
          {images.map((image, i) => (
            <div
              key={i}
              className={`block block-${i + 1}`}
              loading="lazy"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>
    </Box>
  );
}
