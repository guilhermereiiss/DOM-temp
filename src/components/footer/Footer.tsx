
import { Container, Typography, Box, Link } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

const Footer: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          bgcolor: "#162257",
          color: "#fff",
          py: 3,
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1">&copy; {new Date().getFullYear()} Dom Football. Todos os direitos reservados.</Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="/termos" color="inherit" sx={{ mx: 1 }}>
              Termos de Uso
            </Link>
            <Link href="/privacidade" color="inherit" sx={{ mx: 1 }}>
              Política de Privacidade
            </Link>
            <Link href="https://wa.me/qr/MRJUDC32G5ITL1" color="inherit" sx={{ mx: 1 }}>
              Contato
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
