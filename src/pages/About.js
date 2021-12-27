import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  Button,
  Container,
  Box,
  Typography
} from '@mui/material';

function About() {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Nav />
          <Typography variant="h4" component="h1">
          Who are we?
          </Typography>
          <Typography variant="body1">
            That feels like an existential question, don't you
            think?
          </Typography>
          <Button variant="contained">About Button</Button>
          <Footer />
        </Box>
      </Container> 
    </>
  );
}

export default About;