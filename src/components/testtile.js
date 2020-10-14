import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
const TestTile = props => {
  const { name, status } = props;
  let base = 'outline-';
  let format =
    status === 0
      ? base + 'success'
      : status === 1
      ? base + 'danger'
      : status === -2
      ? base + 'warning'
      : status === -1
      ? base + 'light':'';

  return (
    <Button variant={format} className="p-1 m-1">
      {name}
    </Button>
  );
};

export default TestTile;
