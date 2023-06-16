import React from 'react';
import './Chip.css';
import { Badge } from 'react-bootstrap';

const Chip = ({ label , type}) => (<Badge bg="primary" text="white" className={type}>
{label}
</Badge>)

export default Chip;