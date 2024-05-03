import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const cardWidth = 400;
      const minCardsToShow = 1; 

      let cardsToShow = Math.floor(screenWidth / cardWidth);
      cardsToShow = Math.max(cardsToShow, minCardsToShow); 

      setSlidesToShow(cardsToShow);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    slidesToScroll: slidesToShow,
    slidesToShow: slidesToShow
  };

  return (
    <>  
    <Box sx={{
        position: "relative",
        backgroundColor: '#0A0B0D',
        background: '#151f42',
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
        color: "white",
        minHeight: {xs:'91vh'}, 
      }}>
      <Box sx={{ paddingTop: '4rem'}}>
        <Typography color='white' fontWeight='900' sx={{ fontSize: { xs: '32px', lg: '48px' }, margin:'3rem auto', textAlign: 'center' }}>Certificaciones</Typography>
        <Typography color='white' fontWeight='400' sx={{ maxWidth: '800px', margin:  {xs:'2rem auto', lg:'3rem auto'}, textAlign:'center', fontSize: { xs: '18px', lg: '22px' },  }}>Mi compromiso con la excelencia y el aprendizaje continuo se refleja en las certificaciones que he obtenido en el campo de la programacion. Estas certificaciones son el resultado de mi dedicación a mejorar mis habilidades y mantenerme al día con las últimas tecnologías y mejores prácticas. </Typography>
      </Box>
      <Box sx={{ margin: '2rem auto', textAlign:'center' }}>
      <Slider {...settings}>
        {certificationsData.map((certification, index) => (
          <Box key={certification.id} style={{ marginRight: index < certificationsData.length - 1 ? '16px' : '0' }} className='card' sx={{margin:'3rem auto'}}>
            <div onClick={() => handleClickOpen(certification)} style={{ cursor: 'pointer' }}>
              <img src={certification.imagen} alt={certification.title} style={{ width: '280px', height: '200px', borderRadius: '12px', margin: '3rem auto' }} />
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
              <Button onClick={handleClose} variant="contained" color="secondary" sx={{ marginTop: '1rem' }}>
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
