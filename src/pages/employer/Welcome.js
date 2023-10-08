import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../App.css'; // Import your existing styles

function Welcome() {
  return (
    <Container className="background text-center">
      <Row className="header">
        <Col>
          <h1 className="display-1 my-5">Welcome, Employers</h1>
          <h3 className="slogan">Post your job listings and find top talent.</h3>
        </Col>
      </Row>

      <Row className="why dark-glassy">
        <Col className='my-auto'>
          <h2 >Why Choose zero&deg;?</h2>
          
        </Col>
        <Col>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eleifend turpis in risus bibendum, eu vestibulum lorem feugiat.
            Phasellus quis augue nec odio tincidunt dictum sed ac erat.
          </p>
          <p>
            Integer at libero a neque varius laoreet. Curabitur scelerisque
            lectus a arcu facilisis, non fringilla augue feugiat. Sed vehicula
            risus ut ante feugiat laoreet.
          </p></Col>
      </Row>

      {/* <Row className="content hide">
        <Col>
          <h2>Get Started</h2>
          <Button variant="primary" className="cta-button">
            Post a Job
          </Button>
        </Col>
      </Row> */}

      <footer className="footer">
        {/* Footer content */}
      </footer>
    </Container>
  );
}

export default Welcome;
