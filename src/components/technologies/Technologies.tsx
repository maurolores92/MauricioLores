import { Box, Typography } from "@mui/material";
import logosData from './logos.json';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect } from "react";
import lozad from 'lozad';

const Technologies = () => {
    const isMobile = useMediaQuery('(max-width:800px)');

    useEffect(() => {
        const observer = lozad('.lozad', {
            rootMargin: '50px 0px', 
            threshold: 0.1,
        });
        observer.observe();
    }, []);

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
        <Box sx={{paddingTop:'4rem'}}>
            <Box sx={{textAlign:'center', }}>
            <Typography color='white' fontWeight='900' sx={{ fontSize: { xs: '32px', lg: '48px' }, margin: '2rem auto', textAlign:'center' }}>Tecnologias y herramientas</Typography>
            <Typography color='white' fontWeight='400' sx={{ maxWidth: '800px', margin: '2rem auto', textAlign:'jutify', fontSize: { xs: '18px', lg: '22px' }, }}>Sumérgete en el mundo de las tecnologías modernas y eficientes que empleo para desarrollar sitios web y aplicaciones profesionales de alta calidad. A continuación, te presento algunas de las herramientas que utilizo para llevar a cabo proyectos innovadores y exitosos.</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth:'1100px', margin:'0 auto' }} >
                {logosData.map((logo) => (
                    <Box key={logo.id}>
                        <Box sx={{borderRadius: '6%', marginTop:'2rem' }} >
                            <motion.div animate={{ x: [null, 100, 0] }}>
                            <Image src={logo.logoSrc} alt={logo.nombre} width={isMobile ? 60 : 100} height={isMobile ? 60 : 100} className="lozad" />
                            </motion.div>
                        </Box>

                        
                    </Box>
                ))}
                
            </Box>
        </Box>
        
        </Box>
    );
};

export default Technologies;
