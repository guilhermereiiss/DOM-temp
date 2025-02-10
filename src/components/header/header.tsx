// import logotipo from "../../assets/logotipo/DOMlogo.png"



// export default function Header() {
//   return (
//     <div>

//     </div>
//   )
// }

import logotipo from "../../assets/logotipo/DOMlogo.png"
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
const Header = () => {

  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" sx={{ backgroundColor: '#162257' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logotipo}
              alt="DOM Football Logo"
              style={{ height: 80, marginRight: 10 }} />
            <Typography variant="h6" color="white">
              DOM FOOTBALL
            </Typography>
          </Box>


          {/* <Button 
            variant="contained" 
            color="success" 
            startIcon={<WhatsAppIcon />} 
            sx={{ marginRight: 2, borderRadius: '50px', padding: '8px 16px' }}
            onClick={() => window.open('https://wa.me/qr/MRJUDC32G5ITL1', '_blank')} 
          >
            Whatsapp
          </Button> */}

          <Button
            variant="contained"
            startIcon={<InstagramIcon />}
            sx={{
              borderRadius: '50px',
              padding: '8px 16px',
              background: 'linear-gradient(45deg, #FF4081, #9C27B0)',
              '&:hover': {
                background: 'linear-gradient(45deg, #F50057, #7B1FA2)',
              },
              width: { xs: '100%', sm: 'auto' },
            }}
            onClick={() => window.open('https://www.instagram.com/dom_football__/', '_blank')}
          >
            Instagram
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;



