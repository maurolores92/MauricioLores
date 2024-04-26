import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { DocumentDownload } from "iconsax-react";
import React, { useState } from "react";

function HomeMauro() {

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

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

  return (
    <Box
      sx={{
        backgroundColor:'#0A0B0D',
        background: `linear-gradient(to bottom, #151f42, #1e2958)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: {xs:'column', md:'row'},
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Box sx={{ textAlign: 'center', alignItems:'center', margin:'2rem' }}>
            <img src="images/MauricioLores1.svg " alt="" style={{ width: '320px', height: 'auto', borderRadius: '12px'}} />
        </Box>
        <Box sx={{ width:'maxContent', marginTop: {xs: '0', lg:'6rem'}}}>
          <img src="images/logo/logo-transparente.svg " alt="" />
            
            <Typography sx={{ maxWidth:'680px', textAlign:'center', margin:'1rem auto', fontSize: {xs:'16px', md:'18px  '}}}>
            ¡Hola! Soy Mauricio Lores, un apasionado desarrollador Front End en constante búsqueda de la excelencia. Con experiencia en Diseño UX/UI, desarrollo web, Javascript, Typescript, ReactJs y NextJs, me dedico a diseñar, rediseñar y programar proyectos innovadores y atractivos en el mundo del desarrollo web del lado del cliente. Estoy comprometido con el aprendizaje continuo y la adquisición de nuevas habilidades para mantenerme al día con las últimas tendencias y demandas tecnológicas. ¡Déjame ayudarte a llevar tus ideas al siguiente nivel!
            </Typography>
            <Button
            color="primary"
              variant="contained"
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
                  border:'solid 1px #b2b4b2'
                },
              }}
              onClick={handleDownloadClick}
            >
              <DocumentDownload style={{ marginRight: '10px' }} size="32" color="white" variant="Bulk" />
              Descargar CV
            </Button>
            <Dialog open={isConfirmationOpen} onClose={handleCloseConfirmation}>
        <DialogTitle>Confirmar Descarga</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas descargar el CV?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDownload} color="primary">
            Descargar
          </Button>
        </DialogActions>
      </Dialog>
        </Box>
      
     
    </Box>
  );
}

export default HomeMauro;
