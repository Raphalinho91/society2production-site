/* eslint-disable react/no-unknown-property */
import { Box, Typography } from "@mui/material";
import "./style.accueil.css";
import IMAGE1 from "../photoRedimensions/image1.jpeg";
import IMAGE2 from "../photoRedimensions/image2.jpeg";
import IMAGE3 from "../photoRedimensions/image3.jpeg";
import IMAGE4 from "../photoRedimensions/image4.jpeg";
import IMAGE5 from "../photoRedimensions/image5.jpeg";
import IMAGE6 from "../photoRedimensions/image6.jpeg";
import IMAGE7 from "../photoRedimensions/image7.jpeg";
import IMAGE8 from "../photoRedimensions/image8.jpeg";
import IMAGE9 from "../photoRedimensions/image9.jpeg";
import IMAGE10 from "../photoRedimensions/image10.jpeg";
import IMAGE11 from "../photoRedimensions/image11.jpeg";
import IMAGE12 from "../photoRedimensions/image12.jpeg";
import IMAGE13 from "../photoRedimensions/image13.jpeg";
import IMAGE14 from "../photoRedimensions/image14.jpeg";
import IMAGE15 from "../photoRedimensions/image15.jpeg";

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
      }}
    >
      <div
        className="slider"
        reverse="true"
        style={{ "--width": "167px", "--height": "250px", "--quantity": 15 }}
      >
        <div className="list">
          {images.map((image, i) => (
            <div key={i} className="item" style={{ "--position": i + 1 }}>
              <img
                src={image}
                alt="photo"
                loading="lazy"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
      <Box
        className="title"
        reverse="true"
        sx={{
          width: "100%",
          height: "250px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            mt: 6,
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
        </h3>{" "}
      </Box>
      <div
        className="slider"
        reverse="true"
        style={{ "--width": "167px", "--height": "250px", "--quantity": 15 }}
      >
        <div className="list">
          {images.map((image, i) => (
            <div key={i} className="item" style={{ "--position": i + 1 }}>
              <img
                src={image}
                alt="photo"
                loading="lazy"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
