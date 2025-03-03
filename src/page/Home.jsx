import { Divider } from "@mui/material";
import { useState } from "react";
import Contact from "./Contact";
import Price from "./Price";
import Accueil from "./Accueil";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

export default function Home() {
  const [price, setPrice] = useState(null);
  return (
    <>
      <Accueil />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <AboutMe />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <Price setPrice={setPrice} />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <Contact price={price} />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <Footer />
    </>
  );
}
