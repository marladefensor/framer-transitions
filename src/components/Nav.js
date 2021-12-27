import { Link } from "react-router-dom";
import {
  Stack
} from '@mui/material';

function Nav() {
  return (
    <>
      <nav>
        <Stack
          justifyContent="center"
          spacing={2}
          direction="row"
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Stack>
      </nav>
    </>
  );
}

export default Nav;