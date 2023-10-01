import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer dark-glassy">
      <Container>
        <p>&copy; {new Date().getFullYear()} zero&deg;. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
