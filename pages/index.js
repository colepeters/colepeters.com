import React from 'react'

import Document from '../components/Document'
import Header from '../components/Header'
import Container from '../components/grid/Container'
import Row from '../components/grid/Row'
import Col from '../components/grid/Col'

export default () => (
  <Document title='Cole Peters'>
    <Container>
      <Row>
        <Col width='oneWhole' md='twoThirds'>
          <Header />
          <p>
            Hi there.<br />
            I’m Cole. I make photographs, write code (and other text), and record music.
            I was born in Canada, and currently reside in London, England.
          </p>
        </Col>
      </Row>
    </Container>
  </Document>
)
