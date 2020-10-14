import React from 'react';
import Nav from 'react-bootstrap/Nav';
const JobTabs = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Summary</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#link1">StackTrace</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#link2">Snapshots</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#link3">Videos</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default JobTabs;
