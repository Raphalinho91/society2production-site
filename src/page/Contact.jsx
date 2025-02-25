import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { textfieldStyle } from "./style.contact";
import { useEffect, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import CameraPhoto from "../assets/cameraPhoto.png";
import PropTypes from "prop-types";

export default function Contact({ price }) {
  const [date, setDate] = useState(dayjs().locale("fr"));
  const [shootingType, setShootingType] = useState(price);

  useEffect(() => {
    if (price) {
      setShootingType(price);
    }
  }, [price]);

  const textInfo = () => {
    if (shootingType === "essentiel") {
      return "Cette séance est au prix de 80,00 € !";
    }
    if (shootingType === "etudiant") {
      return "Cette séance est au prix de 45,00 € !";
    }
    if (shootingType === "anniversaire") {
      return "Cette séance est au prix de 90,00 € !";
    }
    if (shootingType === "famille") {
      return "Cette séance est au prix de 140,00 € !";
    }
    if (shootingType === "personnalise") {
      return "Cette séance n'a pas de prix fixe, le prix sera déterminé par rapport à vos attentes et vos besoins !";
    }
    return null;
  };

  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          mt: { xs: 2, md: 0 },
          mb: 5,
          fontWeight: "bold",
          textAlign: { xs: "center", md: "none" },
        }}
        variant="h4"
      >
        Réservez votre shooting
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            component="img"
            alt="cameraPhoto"
            src={CameraPhoto}
            sx={{
              display: "flex",
              width: { xs: "90%", md: "80%" },
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            gap: 2,
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            sx={{ width: { xs: "90%", md: "80%" }, ...textfieldStyle }}
          />
          <TextField
            label="Prénom et Nom"
            variant="outlined"
            type="text"
            sx={{ width: { xs: "90%", md: "80%" }, ...textfieldStyle }}
          />
          <TextField
            label="Lieux du shooting"
            variant="outlined"
            type="text"
            sx={{ width: { xs: "90%", md: "80%" }, ...textfieldStyle }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
            <DateTimePicker
              label="Date et Heure"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              sx={{ width: { xs: "90%", md: "80%" }, ...textfieldStyle }}
            />
          </LocalizationProvider>
          <FormControl
            variant="outlined"
            sx={{ width: { xs: "90%", md: "80%" }, ...textfieldStyle }}
          >
            <InputLabel>Tarif de shooting</InputLabel>
            <Select
              value={shootingType}
              onChange={(e) => setShootingType(e.target.value)}
              label="Tarif du shooting"
            >
              <MenuItem value="essentiel">Essentiel</MenuItem>
              <MenuItem value="etudiant">Etudiant</MenuItem>
              <MenuItem value="anniversaire">Anniversaire</MenuItem>
              <MenuItem value="famille">Famille</MenuItem>
              <MenuItem value="personnalise">Personnalisé</MenuItem>
            </Select>
          </FormControl>
          <Typography
            sx={{
              display: shootingType ? "flex" : "none",
              width: { xs: "90%", md: "80%" },
            }}
            variant="body2"
          >
            {textInfo()}
          </Typography>
          <TextField
            label="Décrivez le shooting que vous voulez"
            variant="outlined"
            type="text"
            multiline
            rows={4}
            sx={{ width: { xs: "90%", md: "80%" }, ...textfieldStyle }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#e1410f", fontWeight: "bold" }}
          >
            Envoyez votre réservation
          </Button>
          <Typography
            sx={{
              display: "flex",
              width: { xs: "90%", md: "80%" },
              mb: { xs: 4, md: 0 },
            }}
            variant="body2"
          >
            Nous vous recontacterons rapidement pour confirmer votre réservation
            et vous orienter vers le lieu du shooting. Merci de votre confiance
            !
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

Contact.propTypes = {
  price: PropTypes.string,
};
