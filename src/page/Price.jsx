import { Box, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { BoxAllPrice, BoxPrice, BoxPriceEuro } from "./style.price";
import PropTypes from "prop-types";

export default function Price({ setPrice }) {
  return (
    <Box
      id="price"
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
          mt: { xs: 2, md: 0 },
          mb: { xs: 0, md: 5 },
          fontWeight: "bold",
          textAlign: { xs: "center", md: "none" },
          color: "#FFF",
        }}
        variant="h4"
      >
        Tarif des shooting
      </Typography>
      <Box sx={BoxAllPrice}>
        <Box sx={BoxPrice}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", color: "#e1410f" }}
              variant="h4"
            >
              Classique
            </Typography>
            <Typography sx={{ mt: 0, color: "#FFF" }} variant="body2">
              Une séance classique accessible à tous et pour tous !
            </Typography>
            <Box sx={BoxPriceEuro}>
              <Typography
                sx={{
                  display: "flex",
                  fontWeight: "bold",
                  fontSize: "32px",
                  color: "#e1410f",
                }}
              >
                80,00 €
              </Typography>
            </Box>
            <Typography sx={{ mt: 0.5, color: "#FFF" }} variant="body2">
              Option supplémentaire : 20,00 € / photo retouchée
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Durée du shooting 2h30
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Lieux de votre choix ou lieux choisit par la production
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                15 à 20 photos retouchées
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Accès aux photos non retouchées
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <Button
              id="tarif-1"
              href="#contact"
              onClick={() => setPrice("essentiel")}
              variant="contained"
              sx={{ backgroundColor: "#e1410f", fontWeight: "bold" }}
            >
              Choisir ce tarif
            </Button>
          </Box>
        </Box>
        <Box sx={BoxPrice}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", color: "#e1410f" }}
              variant="h4"
            >
              Etudiant
            </Typography>
            <Typography sx={{ mt: 0, color: "#FFF" }} variant="body2">
              Une séance pour tous les étudiants de -18 ans !
            </Typography>
            <Box sx={BoxPriceEuro}>
              <Typography
                sx={{
                  display: "flex",
                  fontWeight: "bold",
                  fontSize: "32px",
                  color: "#e1410f",
                }}
              >
                45,00 €
              </Typography>
            </Box>
            <Typography sx={{ mt: 0.5, color: "#FFF" }} variant="body2">
              Option supplémentaire : 20,00 € / photo retouchée
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Durée du shooting 2h30
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Lieux de votre choix ou lieux choisit par la production
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                16 à 18 photos retouchées
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Accès aux photos non retouchées
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <Button
              id="tarif-2"
              href="#contact"
              onClick={() => setPrice("etudiant")}
              variant="contained"
              sx={{ backgroundColor: "#e1410f", fontWeight: "bold" }}
            >
              Choisir ce tarif
            </Button>
          </Box>
        </Box>
        <Box sx={BoxPrice}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", color: "#e1410f" }}
              variant="h4"
            >
              Anniversaire
            </Typography>
            <Typography sx={{ mt: 0, color: "#FFF" }} variant="body2">
              Une séance festive dont vous garderez les souvenirs !
            </Typography>
            <Box sx={BoxPriceEuro}>
              <Typography
                sx={{
                  display: "flex",
                  fontWeight: "bold",
                  fontSize: "32px",
                  color: "#e1410f",
                }}
              >
                90,00 €
              </Typography>
            </Box>
            <Typography sx={{ mt: 0.5, color: "#FFF" }} variant="body2">
              Option supplémentaire : 20,00 € / photo retouchée
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Durée du shooting 2h30
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Lieux de votre choix ou lieux choisit par la production
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                25 à 30 photos retouchées
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Accès aux photos non retouchées
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <Button
              id="tarif-3"
              href="#contact"
              onClick={() => setPrice("anniversaire")}
              variant="contained"
              sx={{ backgroundColor: "#e1410f", fontWeight: "bold" }}
            >
              Choisir ce tarif
            </Button>
          </Box>
        </Box>
        <Box sx={BoxPrice}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", color: "#e1410f" }}
              variant="h4"
            >
              Famille
            </Typography>
            <Typography sx={{ mt: 0, color: "#FFF" }} variant="body2">
              Une séance familliale pour photographier des moments inoubliables
              !
            </Typography>
            <Box sx={BoxPriceEuro}>
              <Typography
                sx={{
                  display: "flex",
                  fontWeight: "bold",
                  fontSize: "32px",
                  color: "#e1410f",
                }}
              >
                140,00 €
              </Typography>
            </Box>
            <Typography sx={{ mt: 0.5, color: "#FFF" }} variant="body2">
              Option supplémentaire : 20,00 € / photo retouchée
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Durée du shooting 2h30
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Lieux de votre choix ou lieux choisit par la production
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                30 à 35 photos retouchées
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <CheckIcon sx={{ color: "green" }} />
              <Typography sx={{ ml: 1, color: "#FFF" }} variant="body1">
                Accès aux photos non retouchées
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <Button
              id="tarif-4"
              href="#contact"
              onClick={() => setPrice("famille")}
              variant="contained"
              sx={{ backgroundColor: "#e1410f", fontWeight: "bold" }}
            >
              Choisir ce tarif
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Price.propTypes = {
  setPrice: PropTypes.func,
};
