import Contact from "./Contact";
import Price from "./Price";
import Accueil from "./Accueil";
import AboutMe from "./AboutMe";
import { Divider } from "@mui/material";
import { useState } from "react";
import Picture from "./Picture";

export default function Home() {
  const [price, setPrice] = useState(null);
  return (
    <>
      <Accueil />
      <AboutMe />
      <Picture />
      <Price setPrice={setPrice} />
      <Divider variant="middle" />
      <Contact price={price} />
    </>
  );
}
