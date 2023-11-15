import { Box, Button, Container, Typography } from "@mui/material";
import { DocumentDownload } from "iconsax-react";

function AboutMe() {

    return (
    <Box sx={{textAlign:'center', maxWidth:'800px', margin:'3rem auto'}}>
      <Box sx={{margin:'2rem'}}>
        
      <img src="images/MauricioLores.jpg" alt="" style={{width:'200px', height:'200px'}}/>
      </Box>
      <Typography fontSize={20} textAlign={"justify"}>Mi nombre es Mauricio Lores, Soy desarrollador Front End en constante formacion, con conocimientos en Diseño UX/UI, desarrollo web, Javascript, ReactJs. Actualmente diseño, rediseño y programo nuevos proyectos y sitios de aplicaciones web, del lado del cliente (Front-end). Continuamente estoy aprendiendo y adquiriendo nuevas habilidades en función a las actuales y futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones web en general.</Typography>
      <Typography fontSize={20} textAlign={"justify"} marginTop={"1rem"}>Me caracterizo por ser una persona carismática y creativa. Analítica, orientada al detalle y con buenas capacidades comunicativas. Disfruto mucho trabajar con personas de diferentes países y culturas, ya que puedo mejorar mis habilidades técnicas y lingüísticas. Siempre dispuesto a desarrollar cada dia mas mis habilidades en proyectos que me permitan un crecimiento intelectual y profesional con el fin de obtener experiencia y conocimientos.</Typography>
      <Box sx={{margin:'2rem'}}>
      <a href="images/CVMauricioLores.pdf" >
      <Button variant='contained' style={{ margin: '16px', borderRadius: '12px', textTransform: 'none', }}> <DocumentDownload style={{marginRight:'10px'}} size="32" color="#FFFFFF" variant="Bulk"/>
        Descargar CV 
      </Button>
        </a>
        
      </Box>
      
  </Box>

    );
}

export default AboutMe