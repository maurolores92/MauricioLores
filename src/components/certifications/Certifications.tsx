import React, { useEffect, useState } from 'react';
import { Typography, Box, Dialog, DialogContent, Button } from '@mui/material';
import certificationsData from './certifications.json';
import Slider from 'react-slick';

type Certification = {
  id: number;
  title: string;
  description: string;
  date: string;
  imagen: string;
  route: string;
};

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  const handleClickOpen = (certification: Certification) => {
    setSelectedCertification(certification);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: slidesToShow, // Ajustado a slidesToShow
    slidesToShow: slidesToShow
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1224) {
        setSlidesToShow(3); 
      } else if (window.innerWidth >= 800) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <>  
    <Box sx={{ 
      backgroundColor: '#2D3540', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
      }}>
      <Box sx={{ paddingTop: {xs:'0', lg:'4rem'}, maxWidth: { md: '1000px', lg: '1200px' }, width: '100%' }}>
        <Typography color='white' fontWeight='900' sx={{ fontSize: { xs: '28px', lg: '48px' }, margin:  {xs:'0 auto', lg:'2rem auto'}, textAlign: 'center' }}>Certificaciones</Typography>
        <Typography color='white' fontWeight='400' sx={{ maxWidth: '800px', margin: '1rem auto', textAlign:'center' }}>Mi compromiso con la excelencia y el aprendizaje continuo se refleja en las certificaciones que he obtenido en el campo de la programacion. Estas certificaciones son el resultado de mi dedicación a mejorar mis habilidades y mantenerme al día con las últimas tecnologías y mejores prácticas. </Typography>
      </Box>
      <Box sx={{width: {xs: '390px', md: '800px', lg:'1400px'}, margin:'2rem auto'}}>
      <Slider {...settings}>
        {certificationsData.map((certification, index) => (
          <Box key={certification.id} style={{ marginRight: index < certificationsData.length - 1 ? '16px' : '0' }} className='card'>
            <div onClick={() => handleClickOpen(certification)} style={{ cursor: 'pointer' }}>
              <img src={certification.imagen} alt={certification.title} style={{ width: '280px', height: '200px', borderRadius: '12px', margin: '1rem auto' }} />
            </div>
          </Box>
        ))}
        </Slider>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {selectedCertification && (
            <Box sx={{textAlign:'center'}}>
              <img src={selectedCertification.imagen} alt={selectedCertification.title} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
              <Typography variant='h4' sx={{ marginTop: '1rem' }}>{selectedCertification.title}</Typography>
              <Typography variant='body1'>{selectedCertification.description}</Typography>
              <Typography variant='body1'>{selectedCertification.date}</Typography>
              <Button onClick={handleClose} variant="contained" sx={{ marginTop: '1rem' }}>
                Cerrar
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
    </>
  );
};

export default Certifications;
