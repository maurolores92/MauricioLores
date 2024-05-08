import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import portfolioData from './portfolio.json';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

const Portfolio = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

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
    <Box
      sx={{
        position: "relative",
        backgroundColor: '#0A0B0D',
        background: `linear-gradient(to bottom, #1e2958, #151f42)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          backgroundImage: "url('/images/fondo.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: .2,
          
        }}
      />
      <Box sx={{ paddingTop: '4rem', }}>
        <Typography color='white' fontWeight='900' sx={{ fontSize: { xs: '32px', lg: '48px' }, margin: '2rem auto', textAlign: 'center' }}>Portfolio</Typography>
        <Typography color='white' fontWeight='400' sx={{ maxWidth: '800px', margin: '1rem auto', textAlign: 'center', fontSize: { xs: '18px', lg: '22px' }, }}>Bienvenido a mi portafolio, donde encontrarás una selección de mis proyectos más recientes y representativos. Cada proyecto aquí no solo es un testimonio de mis habilidades técnicas, sino también un reflejo de mi dedicación a superar desafíos con creatividad y atención al detalle. ¡Te invito a explorar y descubrir cómo puedo convertir tus ideas en realidad!</Typography>
      </Box>
      <Box sx={{ textAlign:'center',  }}>
        <Slider {...settings}>
          {portfolioData.map((servicio, index) => (
            <Card key={servicio.id} sx={{ margin: '1rem auto', borderRadius: '12px', width: '380px', height: '463px' }} className="container">
              <Box sx={{ position: 'relative' }}>
                <Image src={servicio.imagen} alt={servicio.title} width={320} height={180} style={{borderRadius: '12px', margin: '1rem auto' }} />
              </Box>
              <CardContent>
                <Box sx={{ height: '240px' }}>
                  <Typography variant='h4' color='white'>{servicio.title}</Typography>
                  <Typography variant='body1' color='white' >{servicio.description}</Typography>
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
                      <Button variant='contained' sx={{ fontWeight: '800' }}>Visitar</Button>
                    </a>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>

    </Box>
  )
}

export default Portfolio;
