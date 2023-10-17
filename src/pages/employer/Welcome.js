import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../App.css'; // Import your existing styles

function Welcome() {
  return (
    <Container className="background text-center">
      <Row className="header">
        <Col>
          <h1 className="display-1 my-5">Welcome, Employers!</h1>
          <h3 className="slogan">Unlock the Potential of Diverse Talent</h3>
        </Col>
      </Row>

      <Row className="why dark-glassy">
        <Col className='my-auto' lg={4}>
          <h1>Why Go <span className='nunito fw-light' > <br /> zero&deg;</span>?</h1>

        </Col>
        <Col lg={8}>
          <ul className='my-4 text-start'>
            <li>In 2021, The U.S. Census Bureau reported 62.1% of adults didn't have a college degree.</li>
            <li>According to the Bureau of Labor Statistics, nearly 60% of all jobs in the U.S. economy require higher education.</li>
            <li>50% of adults without degrees want more education, and 53% said they were likely or very likely to enroll in some type of course or training in the next five years.</li>
          </ul>

          <h5 className='my-4'>This means that there is a large and growing pool of talented and motivated workers who are eager to learn and grow!</h5>
        </Col>
      </Row>

      <Row className="why dark-glassy">
        <Col className='my-auto'>
          <h1>Get Started</h1>
          <Button className='my-3 fs-3' variant='outline-secondary'>
            Post a job
          </Button>
        </Col>
      </Row>

      <footer className="footer">
        {/* Footer content */}
      </footer>
    </Container>
  );
}

export default Welcome;
