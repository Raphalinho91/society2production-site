import Contact from "./Contact";
import Price from "./Price";
import Accueil from "./Accueil";
import AboutMe from "./AboutMe";
import { Box, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { PiTiktokLogo } from "react-icons/pi";

export default function Home() {
  const [price, setPrice] = useState(null);
  return (
    <>
      <Accueil />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <AboutMe />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <Price setPrice={setPrice} />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <Contact price={price} />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <Box
        id="footer"
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "#121212",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          pb: 2,
          pt: 2,
        }}
      >
        <a
          href="https://www.instagram.com/2society.production/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton sx={{ color: "#FFF", transition: "all 0.3s ease" }}>
            <InstagramIcon sx={{ fontSize: "35px" }} />
          </IconButton>
        </a>
        <a
          href="https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%402society.productions%3F_t%3DZN-8uBeOY6iAPW%26_r%3D1%26fbclid%3DPAZXh0bgNhZW0CMTEAAaauLAyiX3McMJlCz5LoW-ZHLsQHebKrHqXq5ymZexfJXXt5jDF6LY5M58M_aem_r8tXQXYSj-pxFm1NYQ6QFg&e=AT3FZrv_ZM0jX8ehJFn2vHru2_nWEo0t2bAjPqgZS24750y3149wovLY9rwWxhssfk6F24KmKS8chGi0psK_zvrnTQYDnHrVAnfLq8fX_ORoOOmYfiTMPA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton sx={{ color: "#f15726", transition: "all 0.3s ease" }}>
            <PiTiktokLogo style={{ fontSize: "35px" }} />
          </IconButton>
        </a>
      </Box>
    </>
  );
}
