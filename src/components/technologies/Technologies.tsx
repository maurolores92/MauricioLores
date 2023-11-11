import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import logosData from './logos.json';
import useMediaQuery from '@mui/material/useMediaQuery';

const Technologies = () => {
    const isMobile = useMediaQuery('(max-width:800px)');

    return (
        <Box sx={{
            background: `linear-gradient(to bottom, #1C2026,#2D3540 )`,
            width: '100%',
            color:'white',
        }}>
        <Box sx={{paddingTop:'4rem'}}>
            <Box sx={{textAlign:'center', }}>
                <Typography sx={{fontSize: {xs:'24px', md:'30px  ',}, justifyContent:'center'}}>Tecnologias y herramientas</Typography>
                <Typography fontWeight='bold' sx={{fontSize:'18px', maxWidth:'800px', margin:'1rem auto'}}>Utilizo tecnologías modernas y eficientes para crear sitios web y aplicaciones de alta calidad y profesionales. A continuación se presentan algunas de las tecnologías y herramientas que utilizo</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth:'1100px', margin:'0 auto' }} >
                {logosData.map((logo) => (
                    <Box key={logo.id}>
                        <Box sx={{borderRadius: '6%', marginTop:'1rem' }} >
                            <img src={logo.logoSrc} alt={logo.nombre} style={{width: isMobile ? '60px' : '100px'}}/>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
        </Box>
    );
};

export default Technologies;
