import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { textfieldStyle } from "./style.contact";
import { useEffect, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import CameraPhoto from "../image-contact/cameraPhoto.png";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

export default function Contact({ price }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState(dayjs().locale("fr"));
  const [shootingType, setShootingType] = useState(price);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

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

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (
      !email.trim() ||
      !name.trim() ||
      !place.trim() ||
      !date ||
      !shootingType.trim() ||
      !message.trim()
    ) {
      setSnackbarMessage("Tous les champs sont requis !");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setSnackbarMessage("Veuillez entrer une adresse email valide.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    const dateFormat = dayjs(date).format("dddd D MMMM YYYY à HH:mm");

    const object = `Je m'appelle ${name}. 
    Mon email c'est ${email}.
    Je suis disponible ${dateFormat} à ce lieu : ${place}. 
    Le tarif que j'ai choisi est ${shootingType}. 
    Voici un message qui décrit ce que je veux : ${message}.`;
    setIsLoading(true);

    const templateParams = {
      from_name: name,
      message: object,
    };

    emailjs
      .send(
        "service_upkkajn",
        "template_032984d",
        templateParams,
        "JDlSnDKnz2DqtoYZU"
      )
      .then(
        () => {
          setSnackbarMessage("Message envoyé avec succès !");
          setSnackbarSeverity("success");
        },
        () => {
          setSnackbarMessage("Une erreur s'est produite. Veuillez réessayer.");
          setSnackbarSeverity("error");
        }
      )
      .finally(() => {
        setSnackbarOpen(true);
        setIsLoading(false);
        setEmail("");
        setName("");
        setPlace("");
        setDate(dayjs().locale("fr"));
        setShootingType("");
        setMessage("");
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      id="contact"
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
      <Typography
        sx={{
          mt: { xs: 6, md: 0 },
          mb: 5,
          fontWeight: "bold",
          textAlign: { xs: "center", md: "none" },
          color: "#FFF",
          width: { xs: "310px", md: "100%" },
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
            loading="lazy"
            sx={{
              display: "flex",
              width: { xs: "90%", md: "80%" },
              height: "auto",
              objectFit: "cover",
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Prénom et Nom"
            variant="outlined"
            type="text"
            sx={{ width: { xs: "90%", md: "80%" }, ...textfieldStyle }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Lieux du shooting"
            variant="outlined"
            type="text"
            sx={{
              width: { xs: "90%", md: "80%" },
              ...textfieldStyle,
            }}
            value={place}
            onChange={(e) => setPlace(e.target.value)}
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
            <InputLabel id="shooting-label">Tarif du shooting</InputLabel>
            <Select
              labelId="shooting-label"
              value={shootingType || ""}
              onChange={(e) => setShootingType(e.target.value)}
              label="Tarif de shooting"
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
              color: "#FFF",
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
            sx={{
              width: { xs: "90%", md: "80%" },
              ...textfieldStyle,
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSendMessage}
            sx={{ backgroundColor: "#e1410f", fontWeight: "bold" }}
            startIcon={
              isLoading ? (
                <CircularProgress
                  size={20}
                  sx={{
                    color: "#FFF",
                    backgroundColor: "#e1410f",
                  }}
                />
              ) : null
            }
            disabled={isLoading}
          >
            Envoyez votre réservation
          </Button>
          <Typography
            sx={{
              display: "flex",
              width: { xs: "90%", md: "80%" },
              mb: { xs: 6, md: 0 },
              color: "#FFF",
            }}
            variant="body2"
          >
            Nous vous recontacterons rapidement pour confirmer votre réservation
            et vous orienter vers le lieu du shooting. Merci de votre confiance
            !
          </Typography>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

Contact.propTypes = {
  price: PropTypes.string,
};
