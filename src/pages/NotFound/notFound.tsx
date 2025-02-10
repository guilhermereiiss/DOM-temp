
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

const NotFoundd = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#f4f6f8',
        color: '#333',
        padding: 3,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Página não encontrada
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        A página que você procura não existe. Pode ter sido movida ou excluída.
      </Typography>
      <Link to="/DOM-temp/">
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          sx={{
            fontSize: '1.2rem',
            padding: '10px 20px',
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
            },
          }}
        >
          Voltar para a Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundd;
