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
        backgroundColor:'#2D3540',
        backgroundSize: '100% auto',
        backgroundRepeat:'no-repeat',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        width: '100%'
      }}>
           <Box sx={{paddingTop:'4rem'}}>
            <Box sx={{textAlign:'center'}}>
            <Typography color='white' fontWeight='900' sx={{fontSize: {xs:'20px', lg:'48px'}, margin:'2rem auto'}}>Portfolio</Typography>
            <Typography color='white' fontWeight='400' sx={{maxWidth:'800px', margin:'1rem auto'}}>Aquí hay algunos de mis proyectos recientes que muestran mis habilidades y experiencia en desarrollo web. Cada proyecto representa un desafío único que pude superar con creatividad y atención al detalle. ¡Echa un vistazo y descubre lo que puedo hacer por ti!  </Typography>
          </Box>
          <Box sx={{maxWidth:{xs:'360px', md:'1000px', lg:'1200px'}, margin:'0 auto'}}>
          <Slider {...settings}>
        {portfolioData.map((servicio, index) => (
          <Box key={servicio.id} style={{ marginRight: index < portfolioData.length - 1 ? '16px' : '0' }}>
            <Card sx={{ margin:'2rem auto', borderRadius:'12px', width:'338px', height:'463px'  }}>
            <a href={servicio.route} target="_blank" style={{textDecoration:'none'}}>   
            <Box sx={{ position: 'relative' }}>
                <img src={servicio.imagen} alt={servicio.title} style={{ width:'300px', height:'180px', borderRadius:'12px', margin:'1rem auto' }} />
            </Box>
              <CardContent>
              <Typography color="#6B7280" fontWeight='300' textAlign='end'  fontSize='20px'>
                  {servicio.date}
                </Typography>
                <Typography color="#13254E" fontWeight='700' textAlign='justify'  fontSize='20px'>
                  {servicio.title}
                </Typography>
                <Typography color="#676767" fontWeight='400' textAlign='justify'  fontSize='18px'>
                  {servicio.description}
                </Typography>
                <Box style={{ display: "flex", flexWrap: "wrap", marginTop: "8px", justifyContent:'center' }}>
                    {Object.values(servicio.labels).map((label, index) => (
                    <Typography
                        key={index}
                        color="#FFFFFF"
                        fontWeight="700"
                        fontSize="16px"
                        style={{ margin: "8px", backgroundColor:'#6B7280', padding:'4px 12px 4px 12px', borderRadius:'6px' }}
                    >
                        {label}
                    </Typography>
                    ))}
                </Box>
              </CardContent>
              </a> 
            </Card>
          </Box>
        ))}
      </Slider>
      </Box>
        </Box> 
        </Box>
    );
  };
  
  export default Portfolio;