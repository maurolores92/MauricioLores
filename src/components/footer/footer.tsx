
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { DirectboxNotif, Map, Whatsapp, } from "iconsax-react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
const currentYear = new Date().getFullYear();

  return (
    <Box sx={{
      background: `linear-gradient(to bottom, #2D3540,#0A0B0D )`,
      height: 'auto',
      paddingTop:'6rem'
    }}>
      <Box sx={{paddinTop:'4rem'}}>
        <Typography fontSize={48} fontWeight='bold'  color={'white'} textAlign="center">Contactame</Typography>
        <Box sx={{ textAlign:'center', margin:'0 auto', justifyContent:'center'}}>
          <Box sx={{ maxWidth:'500px', margin:'2rem auto',}}>
            <Typography  color={"white"}>No dudes en ponerte en contacto conmigo, siempre estoy dispuesto a hablar de nuevos proyectos, ideas creativas u oportunidades para participar en tus proyectos.</Typography>
          </Box>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "650px",
                margin: "auto",
                padding:'0 2rem',
              }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField label="Nombre" margin="normal" fullWidth  id="filled-basic" variant="filled" sx={{ background: "white" }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Correo Electrónico" margin="normal" fullWidth  id="filled-basic" variant="filled"  sx={{ background: "white" }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Asunto" margin="normal" fullWidth   id="filled-basic" variant="filled"  sx={{ background: "white" }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Mensaje"
                    multiline
                    rows={4}
                    margin="normal"
                    id="filled-basic" variant="filled" 
                    fullWidth
                    sx={{ background: "white" }}
                  />
                </Grid>
              </Grid>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Enviar
              </Button>
          </Box> 
            <Box sx={{display:'flex', margin:'2rem auto', textAlign:'justify', color:'white', justifyContent:'center'}}>
            <a href="mailto:maurolores1992@gmail.com" target="_blank"> <DirectboxNotif size="32" color="white" variant="Bold" style={{margin:'10px', fontSize:'35px'}}/></a>
            <a href="https://wa.me/+541126882173" target="_blank"><Whatsapp size="32" color="white" variant="Bold" style={{margin:'10px', fontSize:'35px'}}/></a>
            <a href="https://www.linkedin.com/in/mauriciolores" target="_blank"><LinkedInIcon style={{margin:'10px', fontSize:'35px', color:'white'}}/></a>
            <a href="https://https://github.com/maurolores92" target="_blank"><GitHubIcon style={{margin:'10px', fontSize:'35px', color:'white'}}/></a>
            <a href="https://t.me/Maurolores" target="_blank"><TelegramIcon style={{margin:'10px', fontSize:'35px', color:'white'}}/></a>
            <a href="https://www.instagram.com/mlores.dev/" target="_blank"><InstagramIcon style={{margin:'10px', fontSize:'35px', color:'white'}}/></a>
            <a href="https://www.facebook.com/mauricio.lores" target="_blank"><FacebookIcon style={{margin:'10px', fontSize:'35px', color:'white'}}/></a>
              </Box>
        </Box>
        
        <Box sx={{textAlign:'center', color:'white', marginTop:'3rem'}}>
          <Typography>Todos los derechos reservados MauricioLores © {currentYear} |{' '}
          <a href="/terminos" target="_blank" style={{ color: 'yellow' }}>Política de Términos y Condiciones</a>
          </Typography> 
        </Box>
      </Box>
    </Box>
  );
};
  
  export default Footer;