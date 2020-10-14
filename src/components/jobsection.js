import React, { useState } from 'react';
import TestTile from './testtile';
import Card from 'react-bootstrap/Card';
import JobHeader from './jobheader';
import JobTabs from './jobtabs';
import StackTrace from './stacktrace';

function JobSection(props) {
  const testTiles = props.testList.map((testObj, i) => (
    <TestTile key={i} name={testObj.name} status={testObj.status} />
  ));
  return (
    <Card>
      <Card.Header>
        <JobHeader className="p-0 m-0" header={props.header} />
        <JobTabs/>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text> {testTiles} </Card.Text>
        <Card.Link href="#">Retry</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default JobSection;
