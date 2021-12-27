import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {
  Button,
  Container,
  Box,
  Typography
} from '@mui/material';

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Nav />
          <Typography variant="h4" component="h1">
            Welcome to the homepage!
          </Typography>
          <Typography variant="body1">
            You can do this, I believe in you.
          </Typography>
          <Button variant="contained">Hello World</Button>
          <Footer />
        </Box>
      </Container> 
    </>
  );
}

export default Home;