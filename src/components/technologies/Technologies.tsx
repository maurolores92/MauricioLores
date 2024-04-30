import { Box, Typography } from "@mui/material";
import logosData from './logos.json';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from "framer-motion";

const Technologies = () => {
    const isMobile = useMediaQuery('(max-width:800px)');

    return (
        <Box sx={{
            background: `linear-gradient(to bottom, #1e2958,#151f42 )`,
            width: '100%',
            color:'white',
        }}>
        <Box sx={{paddingTop:'4rem'}}>
            <Box sx={{textAlign:'center', }}>
            <Typography color='white' fontWeight='900' sx={{ fontSize: { xs: '20px', lg: '48px' }, margin: '2rem auto', textAlign:'center' }}>Tecnologias y herramientas</Typography>
            <Typography color='white' fontWeight='400' sx={{ maxWidth: '800px', margin: '1rem auto', textAlign:'jutify' }}>Sumérgete en el mundo de las tecnologías modernas y eficientes que empleo para desarrollar sitios web y aplicaciones profesionales de alta calidad. A continuación, te presento algunas de las herramientas que utilizo para llevar a cabo proyectos innovadores y exitosos.</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth:'1100px', margin:'0 auto' }} >
                {logosData.map((logo) => (
                    <Box key={logo.id}>
                        <Box sx={{borderRadius: '6%', marginTop:'1rem' }} >
                            <motion.div animate={{ x: [null, 100, 0] }}>
                                <img src={logo.logoSrc} alt={logo.nombre} style={{width: isMobile ? '60px' : '100px'}}/>
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
