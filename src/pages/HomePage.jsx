import Container from '@mui/material/Container';

const HomePage = () => (
  <main>
    <Container
      sx={{
        my: 14,
        textAlign: 'center',
        color: 'primary.dark',
        fontSize: "28px",
      }}
    >
      <h1 style={{marginBottom:"70px"}}>PhoneBook</h1>
      <img
        src="https://i.ibb.co/0rN6Th4/phone-book.png"
        width={250}
        alt="Phonebook"
      />
    </Container>
  </main>
);

export default HomePage;
