import { Box, Typography } from "@mui/material";

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
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#FFF",
          textTransform: "uppercase",
          letterSpacing: 5,
          fontSize: { xs: 25, sm: 35, md: 40 },
        }}
      >
        society2production
      </Typography>
    </Box>
  );
}
