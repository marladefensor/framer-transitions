import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  Button,
  Container,
  Box,
  Typography
} from '@mui/material';
import { motion } from "framer-motion";
import { letter,word,fade } from '../components/Animations';
import AnimatedText from "../components/AnimatedText";

function animateText(text) {
  return (
    <>
    {text.split("").map((char, index) => (
      <motion.span
        style={{
          display: "inline-block"
        }}
        
        key={char + "-" + index}
        variants={letter}
      >
        {char}
      </motion.span>
    ))}
    </>
  );
}
  



function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          {/* <Nav /> */}
          <Typography
            variant="h1"
            className="welcome"
            component={motion.h1}
            initial="hidden"
            animate="visible"
            variants={word}
            style={{
              overflow: "hidden",
              display: "inline-block"
            }}
          >
            {animateText("hi")}
          </Typography>
          {/* <Typography variant="body1">
            You can do this, I believe in you.
          </Typography> */}
          {/* <Button variant="contained">Hello World</Button> */}
          {/* <Footer /> */}
        </Box>
      </Container> 
    </>
  );
}

export default Home;