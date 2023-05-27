import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Card from '@mui/material/Card';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SecurityIcon from '@mui/icons-material/Security';
import ArtisansIllustration  from './ArtisansIllustration';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Nécessaire pour le bon affichage du carrousel
import styled from '@emotion/styled';
import PHONEImage from './PHONE.png';
import play from './play.png';
import app from './app.png';
const StyledCarousel = styled(Carousel)`
  width: 60%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Optional: Centers the carousel horizontally */
`;

function App() {


  
  const [value, setValue] = useState(0);

  const gradientColor = 'linear-gradient(to right, #CBA029, rgba(203, 160, 41, 0))';
  
    const footerStyle = {
      
      padding: '2rem',
      textAlign: 'center',
    };
  
    const headingStyle = {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    };
  
    const paragraphStyle = {
      fontSize: '1rem',
      color: '#555',
    };
    const iconStyle = {
      fontSize: '2rem',
      margin: '0 0.5rem',
      color: '#555',
    };
    
  return (
    <div>
      <nav style={{ backgroundColor: '#425B59', height: 140, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '10rem' }}>
        <div style={{ marginRight: '4rem' }}>
          <Link
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={() => setValue(0)}
            style={{ color: value === 0 ? '#CBA029' : 'white' }}
          >
            Découvrez
          </Link>
        </div>

        <div style={{ marginRight: '4rem' }}>
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={() => setValue(1)}
            style={{ color: value === 1 ? '#CBA029' : 'white' }}
          >
            services
          </Link>
        </div>

        <div style={{ marginRight: '4rem' }}>
          <Link
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={() => setValue(2)}
            style={{ color: value === 2 ? '#CBA029' : 'white' }}
          >
            a propos
          </Link>
        </div>
        <div style={{ marginRight: '4rem' }}>
          <Link
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={() => setValue(2)}
            style={{ color: value === 2 ? '#CBA029' : 'white' }}
          >
            Telecharger
          </Link>
        </div>
        <div style={{ marginRight: '4rem' }}>
          <Link
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={() => setValue(2)}
            style={{ color: value === 2 ? '#CBA029' : 'white' }}
          >
            contact
          </Link>
        </div>
      </nav>

      <main>
      <Card sx={{ width: '100%', height: '40rem', background: gradientColor, display: 'flex', justifyContent: 'center', alignItems: 'center' ,color:"#fff"}}>
  <div style={{ textAlign: 'center',color:'#f9f9f9' }}>
    <h1>Bienvenue sur KHIDMA </h1>
    <h1> Votre Solution pour les Services Artisanaux de Confiance</h1>
    <div style={{ textAlign: 'center',color:'#425B59' }}>
    <h4>Trouver les artisans parfaits pour vos projets n'a jamais été aussi simple.
      <br/> KHIDMA est une application mobile qui vous offre la possibilité de trouver des services proposés par des artisans qualifiés et fiables, le tout à portée de main.</h4>
  </div>
  </div>
</Card>


<section id="section1">

<Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9', paddingLeft: '4rem' }}>
<Typography variant="h3" sx={{ marginBottom: '2rem',color:"#425B59" }}>Découvrez les avantages de Khidma</Typography>
          <p>Que vous soyez un artisan à la recherche de nouvelles opportunités ou un client à la recherche d'un travail de qualité, l'application Khidma est là pour vous aider à réussir.</p>
          <h1 style={{color:"#CBA029"}}>Pour les artisans</h1>
          <p>Khidma offre un accès à un vaste réseau de clients potentiels,
             ouvrant ainsi de nouvelles opportunités commerciales. En présentant vos
              compétences, votre expérience et vos réalisations passées sur un profil 
              détaillé, vous pouvez vous démarquer de la concurrence. Cette visibilité
               accrue va au-delà des méthodes traditionnelles de gestion des services,
                vous permettant 
            d'étendre votre portée et de croître votre entreprise.</p>
            <h1 style={{color:"#CBA029"}}>Pour les clients</h1>
          <p>Trouver un artisan qualifié et fiable n'a jamais été aussi simple grâce à Khidma. 
            Avec notre fonction de recherche avancée, vous pouvez trouver des artisans qui 
            correspondent parfaitement à vos besoins spécifiques, vous assurant un travail de qualité. 
            L'application Khidma offre une plateforme de communication intégrée, vous permettant d'interagir 
            facilement avec les artisans, de discuter des détails des projets et de suivre les progrès du travail.
             Cela réduit les délais et les malentendus potentiels, assurant une meilleure coordination et 
             une exécution efficace des tâches.</p>
       
</Box>

         
        </section>
<section id="section2">
<Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9', paddingLeft: '4rem' }}>

<Typography variant="h3" sx={{ marginBottom: '2rem',color:"#425B59"  }}>
Nos   services
  </Typography>
  <StyledCarousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={1000}
    sx={{ width: '20%', // Adjust the width as per your needs
    height: '10px'}}
>
    <div>
        <img className="carousel-img" src="https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" />
        <p className="legend"> Couturière</p>
    </div>
    <div>
        <img className="carousel-img" src="https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 2" />
        <p className="legend">Coiffure</p>
    </div>
    <div>
        <img className="carousel-img" src="https://images.pexels.com/photos/4239128/pexels-photo-4239128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 3" />
        <p className="legend">femme de services</p>
    </div>
    <div>
        <img className="carousel-img" src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <p className="legend">maconerie</p>
    </div>
    <div>
        <img className="carousel-img" src="https://images.pexels.com/photos/7414391/pexels-photo-7414391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 4" />
        <p className="legend">Baby sitter</p>
    </div>
    <div>
        <img className="carousel-img" src="https://images.pexels.com/photos/6231593/pexels-photo-6231593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 5" />
        <p className="legend">Légende de l'image 5</p>
    </div>
    <div>
        <img className="carousel-img" src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 6" />
        <p className="legend">Légende de l'image 6</p>
    </div>
    <div>
        <img className="carousel-img" src="https://images.pexels.com/photos/6014516/pexels-photo-6014516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 6" />
        <p className="legend">Légende de l'image 6</p>
    </div>
    <div>
        <img className="carousel-img" src="https://images.pexels.com/photos/6368/art-wall-brush-painting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 6" />
        <p className="legend">Légende de l'image 6</p>
    </div>
</StyledCarousel>
</Box>
        
      </section>
        <section id="section3"  class="services-section">
        <Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9', paddingLeft: '4rem' }}>
          <Typography variant="h3" sx={{ marginBottom: '2rem' ,color:"#425B59" }}>
            Pourquoi choisir KHIDMA ?
          </Typography>

          <Box sx={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
            <Box sx={{ width: '300px' }} className="animate">
              <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                <PeopleAltIcon /> Des artisans qualifiés et fiables
              </Typography>
              <Typography variant="body1">
                Nous avons sélectionné rigoureusement les meilleurs artisans de votre région pour vous garantir des
                services de haute qualité. Chaque artisan est évalué en fonction de son expérience, de ses compétences et
                des avis laissés par d'autres clients. Vous pouvez faire confiance à notre réseau d'artisans de confiance.
              </Typography>
            </Box>

            <Box sx={{ width: '300px' }} className="animate">
              <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                <EventNoteIcon /> Une gestion de la relation fluide
              </Typography>
              <Typography variant="body1">
                KHIDMA facilite la communication entre vous et les artisans. Vous pouvez discuter des détails de votre
                projet, poser des questions, partager des documents pertinents et convenir des délais et des coûts, le
                tout directement depuis l'application. Notre objectif est de vous offrir une expérience transparente et
                efficace à chaque étape.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: '2rem' }}>
            <Box sx={{ width: '300px' }} className="animate">
              <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                <LocalAtmIcon /> Suivi en temps réel
              </Typography>
              <Typography variant="body1">
                Nous comprenons l'importance de rester informé sur l'avancement de vos projets. Avec KHIDMA, vous pouvez
                suivre en temps réel les progrès réalisés par l'artisan choisi. Recevez des mises à jour régulières sur
                l'état d'avancement de votre projet, afin de vous assurer que tout se déroule conformément à vos
                attentes.
              </Typography>
            </Box>

            <Box sx={{ width: '300px' }} className="animate">
              <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                <SecurityIcon /> Paiements sécurisés et traçables
              </Typography>
              <Typography variant="body1">
                Notre application vous offre une gestion simplifiée des paiements. Vous pouvez effectuer des transactions
                sécurisées directement à travers l'application, en utilisant différents modes de paiement disponibles.
                Chaque transaction est enregistrée et traçable, garantissant une transparence et une sécurité supplémentaires.
              </Typography>
            </Box>

            {/* Box with Hello World */}
            <Box sx={{ width: '300px', paddingLeft: '25rem' }} className="animate">
              <ArtisansIllustration />
            </Box>
          </Box>
        </Box>
               </section>

        <section id="section4">
        <Card sx={{  
    backgroundColor: '#f9f9f9',
    padding: "20px",
    margin: "0 auto",
    width: "100%",
}}>
      <Typography variant="h3" sx={{ marginBottom: '2rem',color:"#425B59"  }}>Essayez KHIDMA dès maintenant</Typography>
   
    <div class="card-content" style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{width: "70%", paddingRight: "2rem"}}>
            <img style={{width:"100%"}} src={PHONEImage} alt="Phone" />
        </div>
        <div style={{width: "50%"}}>
        <p  style={{ marginLeft: "4rem",marginTop:"8rem"}}>Téléchargez KHIDMA depuis l'App Store ou le Play Store    </p>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4rem" }}>
         
                <img style={{width:"20%",height:"20%", marginRight: "6rem"}} src={app} alt="App Store Logo" />
                <img style={{width:"20%",height:"20%",marginRight: "8rem"}} src={play} alt="Google Play Logo" />
            </div>
          
        </div>
    </div>
</Card>

       
        </section>

      </main>
      <section id="section5">
      <footer style={footerStyle}>
      <Card>
        <h2 style={headingStyle}>Contact</h2>
        <div>
          <FacebookIcon style={iconStyle} />
          <InstagramIcon style={iconStyle} />
          <PlayArrowIcon style={iconStyle} />
          <AppleIcon style={iconStyle} />
        </div>

        <p style={paragraphStyle}>© 2023 KHIDMA.</p>
      </Card>
    </footer>
    </section>
    </div>
  );
}
const styles = {
  scrollBox: {
    maxHeight: '300px',
    overflowY: 'scroll',
    padding: '10px',
    border: '10px solid #000',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '50px',
    margin: '10px 0',
    padding: '10px',
   
  },
  'carousel-img': {
    width: '50px', // reduce the width from 300px to 150px
    height: 'auto',  // maintain aspect ratio
  },
  carouselContainer: {
    width: '60%', // Adjust the width as per your needs
    height: 'auto', // Adjust the height as per your needs or remove this line for the default height
    margin: '0 auto', // Centers the carousel horizontally
  },
};
export default App;
