import { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, IconButton, List, ListItem, ListItemText, Typography, useMediaQuery } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

function HomeMauro() {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  const handleOpenConfirmation = () => {
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handleDownloadClick = () => {
    handleOpenConfirmation();
  };

  const handleConfirmDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/CVMauricioLores.pdf';
    link.download = 'CVMauricioLores.pdf';
    link.click();
    handleCloseConfirmation();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: '#0A0B0D',
        background: `linear-gradient(to bottom, #151f42, #1e2958)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        minHeight: "100vh", 
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/images/fondo.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: .3, 
        }}
      />
      {/* Menú */}
      {isMobile && (
        <IconButton
          onClick={toggleMenu}
          sx={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: "1000",
            color: "white",
          }}
        >
          <Menu />
        </IconButton>
      )}

      {/* Menú desplegable para dispositivos móviles */}
      <Drawer
  anchor="top"
  open={isMenuOpen && isMobile}
  onClose={toggleMenu}
  sx={{
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  }}
>
  {/* Botón X para cerrar el drawer manualmente */}
  <Box sx={{ display: "flex", justifyContent: "flex-end", paddingRight: "10px", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
  <IconButton onClick={toggleMenu} sx={{ color: "white" }}>
            <Close />
          </IconButton>
  </Box>

  {/* Lista de elementos del menú */}
  <List sx={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
    <ListItem button onClick={() => { window.scrollTo(0, 0); toggleMenu(); }}>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem button onClick={() => { window.scrollTo(0, window.innerHeight); toggleMenu(); }}>
      <ListItemText primary="Tecnologías" />
    </ListItem>
    <ListItem button onClick={() => { window.scrollTo(0, window.innerHeight * 2); toggleMenu(); }}>
      <ListItemText primary="Portafolio" />
    </ListItem>
    <ListItem button onClick={() => { window.scrollTo(0, window.innerHeight * 3); toggleMenu(); }}>
      <ListItemText primary="Certificaciones" />
    </ListItem>
    <ListItem button onClick={() => { window.scrollTo(0, window.innerHeight * 4); toggleMenu(); }}>
      <ListItemText primary="Contacto" />
    </ListItem>
  </List>
</Drawer>


      {/* Menú fijo en la parte superior para pantallas mayores a 700px */}
      {!isMobile && (
        <Box
          sx={{
            position: "fixed",
            top: "0",
            width: "100%",
            padding: "20px 0",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Fondo transparente
            zIndex: "999",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button color="inherit" onClick={() => window.scrollTo(0, 0)} sx={{ padding: '0 2rem' }}>Inicio</Button>
          <Button color="inherit" onClick={() => window.scrollTo(0, window.innerHeight)} sx={{ padding: '0 2rem' }}>Tecnologias</Button>
          <Button color="inherit" onClick={() => window.scrollTo(0, window.innerHeight * 2)} sx={{ padding: '0 2rem' }}>Portafolio</Button>
          <Button color="inherit" onClick={() => window.scrollTo(0, window.innerHeight * 3)} sx={{ padding: '0 2rem' }}>Certificaciones</Button>
          <Button color="inherit" onClick={() => window.scrollTo(0, window.innerHeight * 4)} sx={{ padding: '0 2rem' }}>Contacto</Button>
        </Box>
      )}

      {/* Contenido de la página */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Inicialmente oculto y desplazado hacia abajo
        animate={{ opacity: 1, y: 0 }} // Animación para aparecer y mover hacia arriba
        transition={{ duration: 1 }} // Duración de la animación en segundos
        style={{ maxWidth: '880px', marginTop: '6rem' }}
      >
        <Box sx={{ maxWidth: '600px', margin: '2rem auto' }}>
          <img src="images/logo/logo-transparente.svg " alt="" />
        </Box>

        <Typography fontWeight="bold" sx={{ textAlign: 'center', margin: '2rem auto', fontSize: { xs: '16px', md: '22px  ' } }}>
          ¡Hola! Soy Mauricio Lores, un apasionado desarrollador Front End en constante búsqueda de la excelencia. Con experiencia en Diseño UX/UI, desarrollo web, Javascript, Typescript, ReactJs y NextJs, me dedico a diseñar, rediseñar y programar proyectos innovadores y atractivos en el mundo del desarrollo web del lado del cliente. Estoy comprometido con el aprendizaje continuo y la adquisición de nuevas habilidades para mantenerme al día con las últimas tendencias y demandas tecnológicas. ¡Déjame ayudarte a llevar tus ideas al siguiente nivel!
        </Typography>

        
        <Button color="primary" variant="contained" onClick={handleDownloadClick}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '2rem auto',
            borderRadius: '6px',
            backgroundColor: '#b2b4b2',
            color: '#2D3540',
            "&:hover": {
              backgroundColor: '#151f42',
              color: ' #b2b4b2',
              border: 'solid 1px #b2b4b2',
              scale:'1.1'
            }
          }}>
          Descargar CV
        </Button>
        <Dialog open={isConfirmationOpen} onClose={handleCloseConfirmation}>
          <DialogTitle>Confirmar Descarga</DialogTitle>
          <DialogContent><DialogContentText>¿Estás seguro de que deseas descargar el CV?</DialogContentText></DialogContent>
          <DialogActions>
            <Button onClick={handleCloseConfirmation} color="primary">Cancelar</Button>
            <a href="https://drive.google.com/file/d/18ZmnnK-9KdEsC6eMGqjtK5bmfZWONKGI/view?usp=sharing" target="_blank"><Button color="primary" >Descargar
          </Button>
            </a>
          </DialogActions>
        </Dialog>
      </motion.div>
    </Box>
  );
}

export default HomeMauro;
