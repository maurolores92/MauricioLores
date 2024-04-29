import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import portfolioData from './portfolio.json';
import { Card, CardContent, Typography,  Box, Button, Divider} from '@mui/material';

const Portfolio = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: slidesToShow, 
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
        backgroundColor: '#151f42', 
        height: "100%", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: 'center',
        width: '100%'
        }}>
        <Box sx={{ paddingTop: '4rem', maxWidth: { md: '1000px', lg: '1200px' }, width: '100%' }}>
          <Typography color='white' fontWeight='900' sx={{ fontSize: { xs: '28px', lg: '48px' }, margin: '2rem auto', textAlign:'center' }}>Portfolio</Typography>
          <Typography color='white' fontWeight='400' sx={{ maxWidth: '800px', margin: '1rem auto', textAlign:'center' }}>Bienvenido a mi portafolio, donde encontrarás una selección de mis proyectos más recientes y representativos. Cada proyecto aquí no solo es un testimonio de mis habilidades técnicas, sino también un reflejo de mi dedicación a superar desafíos con creatividad y atención al detalle. ¡Te invito a explorar y descubrir cómo puedo convertir tus ideas en realidad!</Typography>
        </Box>
        <Box sx={{width: {xs: '390px', md: '800px', lg:'1400px'}, margin:'2rem auto'}}>
        <Slider {...settings}>
          {portfolioData.map((servicio, index) => (
              <Card key={servicio.id} sx={{ margin:'1rem auto', borderRadius:'12px', width:'338px', height:'463px'  }} className="container">
                <Box sx={{ position: 'relative' }}>
              <img src={servicio.imagen} alt={servicio.title} style={{ width: '330px', height: '220px', borderRadius: '12px', margin: '.5rem auto' }} /> 
              </Box>
              <CardContent>
              <Box sx={{height:'240px'}}>
              <Typography variant='h4' color="#6B7280">{servicio.title}</Typography>
              <Typography variant='body1' color="#6B7280" >{servicio.description}</Typography>
              <Box style={{ display: "flex", flexWrap: "wrap", marginTop: "8px", justifyContent: 'center' }}>
                {Object.values(servicio.labels).map((label, index) => (
                <Typography
                  key={index}
                  color="#FFFFFF"
                  fontWeight="700"
                  fontSize="16px"
                  style={{ margin: "6px", backgroundColor: '#6B7280', padding: '4px 10px 4px 10px', borderRadius: '6px' }}>
                  {label}
                </Typography>))}
              </Box>
                <Box className="button-wrapper"> 
                <a href={servicio.route} target="_blank" style={{ textDecoration: 'none' }}>
                  <Button variant='contained' color="secondary">Visitar</Button>
                  </a>
                </Box>
              </Box>
              </CardContent>
              </Card>
          ))}
          </Slider>
        </Box>
      </Box>
      </>

    );
  };
  
  export default Portfolio;