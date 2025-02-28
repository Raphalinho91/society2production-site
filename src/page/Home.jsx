import Contact from "./Contact";
import Price from "./Price";
import Accueil from "./Accueil";
import AboutMe from "./AboutMe";
import { Divider } from "@mui/material";
import { useState } from "react";
// import Picture from "./Picture";

export default function Home() {
  const [price, setPrice] = useState(null);
  return (
    <>
      <Accueil />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <AboutMe />
      {/* <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} /> */}
      {/* <Picture /> */}
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <Price setPrice={setPrice} />
      <Divider variant="middle" sx={{ backgroundColor: "#FFF" }} />
      <Contact price={price} />
    </>
  );
}
