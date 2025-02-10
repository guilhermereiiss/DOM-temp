import { createTheme, ThemeProvider, Card, CardContent, Typography, CardMedia, Grid, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import camisaMock from "../../data/CamisaTimes/camisaTimes.json";

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
    },
});

export default function Produtos() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                padding: '20px', 
                backgroundColor: '#f4f4f4', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column'
            }}>
                <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ marginBottom: 4, fontWeight: 600 }}>
                    CATÁLOGO DE CAMISAS
                </Typography>
                <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '1200px' }}>
                    {camisaMock.map((camisa) => (
                        <Grid item xs={12} sm={6} md={4} key={camisa.id}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={camisa.imagem1}
                                    alt={camisa.nome}
                                    sx={{
                                        objectFit: 'cover',
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3,
                                    }}
                                />
                                <CardContent sx={{ padding: '16px' }}>
                                    <Typography variant="h6" gutterBottom>
                                        {camisa.nome}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                                        Ano: {camisa.ano}
                                    </Typography>
                                    <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                                        {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(camisa.preco)}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ padding: '16px' }}>
                                    <Button
                                        component={Link}
                                        to={`/DOM-temp/Detalhes/${camisa.id}`}
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{
                                            padding: '10px',
                                            borderRadius: 2,
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: '#004ba0',
                                            },
                                        }}
                                    >
                                        Ver Detalhes
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
