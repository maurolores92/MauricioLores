import { useEffect, useState } from 'react';
import portfolioData from './portfolio.json';
import { Typography,  Box, Button} from '@mui/material';

const Portfolio = () => {


    return (
      <Box sx={{ backgroundColor: '#2D3540', height: "100%", display: "flex", flexDirection: "column", alignItems: 'center', }}>
        <Box sx={{ paddingTop: '4rem', maxWidth: { md: '1000px', lg: '1200px' }, width: '100%' }}>
          <Typography color='white' fontWeight='900' sx={{ fontSize: { xs: '20px', lg: '48px' }, margin: '2rem auto', textAlign:'center' }}>Portfolio</Typography>
          <Typography color='white' fontWeight='400' sx={{ maxWidth: '800px', margin: '1rem auto', textAlign:'center' }}>Aquí hay algunos de mis proyectos recientes que muestran mis habilidades y experiencia en desarrollo web. Cada proyecto representa un desafío único que pude superar con creatividad y atención al detalle. ¡Echa un vistazo y descubre lo que puedo hacer por ti!  </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: '4rem 0 4rem 0', flexWrap: 'wrap', }}>
          {portfolioData.map((servicio, index) => (
            <Box key={servicio.id} style={{ marginRight: index < portfolioData.length - 1 ? '16px' : '0', marginTop:'1rem' }} className="container">
              <img src={servicio.imagen} alt={servicio.title} style={{ width: '330px', height: '220px', borderRadius: '12px', margin: '1rem auto' }} /> 
              <Box sx={{height:'240px'}}>
              <Typography variant='h4' color="#6B7280">{servicio.title}</Typography>
              <Typography variant='body1' color="#6B7280" sx={{margin:'1rem'}}>{servicio.description}</Typography>
              <Box style={{ display: "flex", flexWrap: "wrap", marginTop: "8px", justifyContent: 'center' }}>
                {Object.values(servicio.labels).map((label, index) => (
                <Typography
                  key={index}
                  color="#FFFFFF"
                  fontWeight="700"
                  fontSize="16px"
                  style={{ margin: "8px", backgroundColor: '#6B7280', padding: '4px 12px 4px 12px', borderRadius: '6px' }}>
                  {label}
                </Typography>))}
              </Box>
                <Box className="button-wrapper"> 
                <a href={servicio.route} target="_blank" style={{ textDecoration: 'none' }}>
                  <Button variant='contained' >Visitar</Button>
                  </a>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  
  export default Portfolio;