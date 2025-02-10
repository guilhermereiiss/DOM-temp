import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button, CardMedia, Grid } from "@mui/material";
import camisaMock from "../../data/CamisaTimes/camisaTimes.json";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
});

export default function DetalhesCamisa() {
  const { id } = useParams();
  const camisa = camisaMock.find((item) => item.id.toString() === id);
  const [fotoPrincipal, setFotoPrincipal] = useState(camisa?.imagem1);

  if (!camisa) {
    return (
      <Box sx={{ textAlign: "center", padding: "40px" }}>
        <Typography variant="h5" color="error">Camisa não encontrada!</Typography>
        <Button variant="contained" color="primary" component={Link} to="/" sx={{ marginTop: 2 }}>
          Voltar ao Catálogo
        </Button>
      </Box>
    );
  }



  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", minHeight: "100vh", padding: "20px", backgroundColor: "#f4f4f4" }}>
        <Grid container spacing={3} sx={{ width: "100%" }}>
          <Grid item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CardMedia
              component="img"
              height="100%"
              image={fotoPrincipal}
              alt={`Camisa ${camisa.nome}`}
              sx={{ objectFit: "contain", cursor: "pointer", width: "100%", maxHeight: "500px" }}
            />
            <Grid container spacing={1} sx={{ marginTop: 2 }}>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  height="100"
                  image={camisa.imagem1}
                  alt={`Camisa ${camisa.nome} imagem1`}
                  sx={{ objectFit: "contain", cursor: "pointer", borderRadius: 1 }}
                  onClick={() => setFotoPrincipal(camisa.imagem1)}
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  height="100"
                  image={camisa.imagem2}
                  alt={`Camisa ${camisa.nome} imagem2`}
                  sx={{ objectFit: "contain", cursor: "pointer", borderRadius: 1 }}
                  onClick={() => setFotoPrincipal(camisa.imagem2)}
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  height="100"
                  image={camisa.imagem3}
                  alt={`Camisa ${camisa.nome} imagem3`}
                  sx={{ objectFit: "contain", cursor: "pointer", borderRadius: 1 }}
                  onClick={() => setFotoPrincipal(camisa.imagem3)}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ padding: 3, display: "flex", flexDirection: "column" }}>
              <Typography variant="h4" gutterBottom>{camisa.nome}</Typography>
              <Typography variant="body1" color="textSecondary">Ano: {camisa.ano}</Typography>
              <Typography variant="h5" color="primary" sx={{ fontWeight: 600, marginTop: 2 }}>
                {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(camisa.preco)}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                Tamanhos disponíveis: {camisa.tamanhos.join(", ")}
              </Typography>
              <Typography variant="body2" color={camisa.estoque > 0 ? "green" : "red"} sx={{ marginTop: 2 }}>
                {camisa.estoque > 0 ? "Disponível" : "Esgotado"}
              </Typography>


              <Grid container spacing={2} sx={{ marginTop: 3 }}>
              
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    component="a"
                    onClick={() => window.open('https://wa.me/qr/MRJUDC32G5ITL1', '_blank')}
                    target="_blank"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    Falar no WhatsApp
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    component="a"

                    onClick={() => window.open('https://www.instagram.com/dom_football__/', '_blank')}
                    target="_blank"
                    sx={{
                      display: "flex", justifyContent: "center", 
                      background: 'linear-gradient(45deg, #FF4081, #9C27B0)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #F50057, #7B1FA2)',
                      },
                    }}
                  >
                    Visite nosso Instagram
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" color="primary" fullWidth component={Link} to="/DOM-temp/">
                    Voltar ao Catálogo
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
