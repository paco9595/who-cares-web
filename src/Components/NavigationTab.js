import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationTab = props => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/profile">You</Link>
    </div>
  )
}