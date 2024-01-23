// StylishUserCard.js
import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const StylishUserCard = ({ name, email, role }) => {
  return (
    <Card className="shadow mb-4" style={{ width: '18rem', backgroundColor: '#f8f9fa' }} >
      <Card.Body>
        <Card.Title className="text-primary">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Text>
          <Badge variant="info">{role}</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StylishUserCard;
