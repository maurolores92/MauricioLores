import React, { ChangeEvent, useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { DirectboxNotif, Whatsapp } from "iconsax-react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenConfirmDialog(true);
  };

  const handleConfirmSend = async () => {
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setEmailSent(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    } finally {
      setOpenConfirmDialog(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenConfirmDialog(false);
  };

  
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box sx={{
      background: `linear-gradient(to bottom, #151f42, #1e2958 )`,
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
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "650px",
              margin: "auto",
              padding: '0 2rem',
            }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
              <TextField
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                fullWidth
                required
                InputLabelProps={{style: {color: isFocused ? 'white' : 'white',},}} 
                inputProps={{style: { borderColor: 'white', color: 'white' },}}
                sx={{'& .MuiInputBase-input': {color: 'white',},}}
              />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Correo Electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                onBlur={handleBlur}
                fullWidth
                required
                InputLabelProps={{style: {color: isFocused ? 'white' : 'white',},}}
                inputProps={{style: { borderColor: 'white', color: 'white' },}}
                sx={{'& .MuiInputBase-input': {color: 'white',},}}
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Asunto"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={handleFocus}
                onBlur={handleBlur}
                fullWidth
                required
                InputLabelProps={{style: {color: isFocused ? 'white' : 'white',},}}
                inputProps={{style: { borderColor: 'white', color: 'white' },}}
                sx={{'& .MuiInputBase-input': {color: 'white',},}}
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  onFocus={handleFocus}
                onBlur={handleBlur}
                fullWidth
                required
                InputLabelProps={{style: {color: isFocused ? 'white' : 'white',},}}
                inputProps={{style: { color: 'white', borderColor: 'white' },}}
                sx={{'& .MuiInputBase-input': {color: 'white',},}}
                variant="outlined"
              />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary">
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
      {/* Diálogo de confirmación */}
      <Dialog open={openConfirmDialog} onClose={handleCloseDialog}>
        <DialogTitle>¿Enviar correo electrónico?</DialogTitle>
        <DialogContent>
          <Typography>¿Estás seguro de que deseas enviar este correo electrónico?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmSend} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
      {/* Diálogo de correo enviado */}
      <Dialog open={emailSent} onClose={() => setEmailSent(false)}>
        <DialogTitle>Mensaje enviado</DialogTitle>
        <DialogContent>
          <Typography>¡El correo electrónico ha sido enviado correctamente!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEmailSent(false)} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
  
  export default Footer;