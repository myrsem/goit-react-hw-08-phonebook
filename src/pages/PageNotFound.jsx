import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

const NotFoundPage = () => {
    return (
        <Container sx={{
            my: 30,
            textAlign: 'center',
            color: 'primary.dark',
            fontSize: "18px",
          }}>
            <h1>404</h1>
            <h3 style={{marginBottom:"30px"}}>Oops! Page not found</h3>
            <Link href="/">Go to Home </Link>
        </Container>
    )
}

export default NotFoundPage