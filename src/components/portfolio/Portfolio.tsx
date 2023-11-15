import { useEffect, useState } from 'react';
import portfolioData from './portfolio.json';
import { Typography,  Box, } from '@mui/material';

const Portfolio = () => {
    const [slidesToShow, setSlidesToShow] = useState(1);
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: slidesToShow
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1124) {
          setSlidesToShow(3); 
        } else if (window.innerWidth >= 930) {
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
      <Box sx={{
        backgroundColor: '#2D3540',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        width: '100%'
      }}>
        <Box sx={{ paddingTop: '4rem', maxWidth: { md: '1000px', lg: '1200px' }, width: '100%' }}>
          <Typography color='white' fontWeight='900' sx={{ fontSize: { xs: '20px', lg: '48px' }, margin: '2rem auto', textAlign:'center' }}>Portfolio</Typography>
          <Typography color='white' fontWeight='400' sx={{ maxWidth: '800px', margin: '1rem auto', textAlign:'jutify' }}>Aquí hay algunos de mis proyectos recientes que muestran mis habilidades y experiencia en desarrollo web. Cada proyecto representa un desafío único que pude superar con creatividad y atención al detalle. ¡Echa un vistazo y descubre lo que puedo hacer por ti!  </Typography>
        </Box>
  
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '4rem 0 4rem 0',
          flexWrap: 'wrap',
        }}>
          {portfolioData.map((servicio, index) => (
            <Box key={servicio.id} style={{ marginRight: index < portfolioData.length - 1 ? '16px' : '0' }} className='card'>
              <a href={servicio.route} target="_blank" style={{ textDecoration: 'none' }}>
                <img src={servicio.imagen} alt={servicio.title} style={{ width: '350px', height: '260px', borderRadius: '12px', margin: '1rem auto' }} />
                <Box className="card__content">
                  <Typography variant='h4' className="card__title">{servicio.title}</Typography>
                  <Typography variant='body1' className="card__description">{servicio.description}</Typography>
                  <Box style={{ display: "flex", flexWrap: "wrap", marginTop: "8px", justifyContent: 'center' }}>
                    {Object.values(servicio.labels).map((label, index) => (
                      <Typography
                        key={index}
                        color="#FFFFFF"
                        fontWeight="700"
                        fontSize="16px"
                        style={{ margin: "8px", backgroundColor: '#6B7280', padding: '4px 12px 4px 12px', borderRadius: '6px' }}
                      >
                        {label}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </a>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  
  export default Portfolio;