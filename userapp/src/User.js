import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';
import './styles.css';


const User = ({ user }) => (
 
  <Card className="user-card" style={{ width: '25rem', height: '100%' }}>
 
  <Card.Body>
    <Card.Title className="card-title">
      <h2>Name: {user.name}</h2>
    </Card.Title>
    <Card.Text className="card-text">
      <p>User name: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Adress street: {user.address.street}</p>
      <p>adress geo: {user.address.geo.lat}</p>
  
    </Card.Text>
  </Card.Body>
</Card>
 

);

export default User;
