import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../App.css'; // Import your existing styles

function Welcome() {
  return (
    <Container className="mb-5 text-center">
      <Row className="header">
        <Col>
          <h1 className="display-1 my-5">Welcome, Employers!</h1>
          <h3 className="slogan">Unlock the Potential of Diverse Talent</h3>
        </Col>
      </Row>
      <Row className="why dark-glassy p-lg-5">
        <h3 className='mb-4'><span className='name fs-1'>zero&deg;</span> is a job board that connects employers with qualified candidates, regardless of their education.</h3>
        <h3>We put skills before schools to better match dependable candidates to open jobs.</h3>
      </Row>
      <Row className="why dark-glassy">
        <Col className='my-auto text-center' lg={4}>
          <h1 className='my-3'>Why Go <span className='name'><br />zero&deg;</span>?</h1>

        </Col>
        <Col lg={8}>
          <Container fluid>
          <ul className='mb-4 stats'>
            <li>In 2021, The U.S. Census Bureau reported <span className='nunito bold'>55%</span> of adults didn't have a college degree.<sup className='source-link'><a href='https://www.census.gov/data/tables/2021/demo/educational-attainment/cps-detailed-tables.html'>1</a></sup></li>
            <li>Nearly <span className='nunito bold'>70%</span> of all jobs in the U.S. economy require higher education.<sup className='source-link'><a href='https://opportunityatwork.org/thepaperceiling/'>2</a></sup></li>
          </ul>
          </Container>
          <h4 className='fw-bold'>This "<a href="https://opportunityatwork.org/thepaperceiling">paper ceiling</a>" prevents employers from accessing a large pool of qualified workers, leading to hiring challenges and lost productivity.</h4>
        </Col>
      </Row>

      <Row className="why dark-glassy text-center">
        <Col className='my-auto'>
          <h1>Shred the Paper Ceiling</h1>
          {/* TODO: Link login/signup page */}
          <Button className='my-3 fs-3' variant='outline-secondary'>
            Post Your Job
          </Button>
        </Col>
      </Row>

    </Container>
  );
}

export default Welcome;
