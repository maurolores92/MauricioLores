import React, { useState } from 'react';
import { Typography, Box, Dialog, DialogContent, Button } from '@mui/material';
import certificationsData from './certifications.json';

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
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  const handleClickOpen = (certification: Certification) => {
    setSelectedCertification(certification);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: '#2D3540', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ paddingTop: {xs:'0', lg:'4rem'}, maxWidth: { md: '1000px', lg: '1200px' }, width: '100%' }}>
        <Typography color='white' fontWeight='900' sx={{ fontSize: { xs: '28px', lg: '48px' }, margin:  {xs:'0 auto', lg:'2rem auto'}, textAlign: 'center' }}>Certificaciones</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: {xs:'1rem auto', lg:'4rem auto'}, flexWrap: 'wrap' }}>
        {certificationsData.map((certification, index) => (
          <Box key={certification.id} style={{ marginRight: index < certificationsData.length - 1 ? '16px' : '0' }} className='card'>
            <div onClick={() => handleClickOpen(certification)} style={{ cursor: 'pointer' }}>
              <img src={certification.imagen} alt={certification.title} style={{ width: '280px', height: '200px', borderRadius: '12px', margin: '1rem auto' }} />
              <Box className="card__content">
                <Typography variant='h4' className="card__title">{certification.title}</Typography>
                <Typography variant='body1' className="card__description">{certification.description}</Typography>
                <Typography variant='body1' className="card__description">{certification.date}</Typography>
              </Box>
            </div>
          </Box>
        ))}
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
  );
};

export default Certifications;
