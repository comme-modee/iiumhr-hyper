import React from 'react'
import { Row, Col } from 'react-bootstrap'
import VisitorTabs from './VisitorTabs'


const Platform = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="page-title">플랫폼(PC, 모바일)</h4>
          </div>
        </Col>
      </Row>
      <VisitorTabs/>
    </>
  )
}

export default Platform