/* eslint-disable react/no-unknown-property */
import { Box } from "@mui/material";
import Exemple from "../assets/exemple.jpeg";
import "./style.picture.css";

export default function Picture() {
  return (
    <Box
      id="picture"
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
        style={{ "--width": "300px", "--height": "250px", "--quantity": 10 }}
      >
        <div className="list">
          <div className="item" style={{ "--position": 1 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <img src={Exemple} alt="photo" />
          </div>
        </div>
      </div>
      <div
        className="slider"
        reverse="true"
        style={{ "--width": "300px", "--height": "250px", "--quantity": 10 }}
      >
        <div className="list">
          <div className="item" style={{ "--position": 1 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <img src={Exemple} alt="photo" />
          </div>
        </div>
      </div>
      <div
        className="slider"
        style={{ "--width": "300px", "--height": "250px", "--quantity": 10 }}
      >
        <div className="list">
          <div className="item" style={{ "--position": 1 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img src={Exemple} alt="photo" />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <img src={Exemple} alt="photo" />
          </div>
        </div>
      </div>
    </Box>
  );
}
