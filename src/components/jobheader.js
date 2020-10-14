import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Badge from 'react-bootstrap/Badge';
const JobHeader = props => {
  const { jobName, date, result, testCount } = props.header;
  const color =
    result === 'passed' ? 'success' : result === 'failed' ? 'danger' : 'info';
  return (
    <Breadcrumb >
      <Breadcrumb.Item href="#">umbrella-testing</Breadcrumb.Item>
      <Breadcrumb.Item href="#">{jobName}</Breadcrumb.Item>
      <Breadcrumb.Item>{date}</Breadcrumb.Item>
      <Breadcrumb.Item active>
        <Badge pill variant={color} className="p-2">
          {result}
          <span>({testCount})</span>
        </Badge>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default JobHeader;
