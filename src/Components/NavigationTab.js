import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationTab = props => {
  const willRender = () => {
    const pathName = window.location.pathname;
    console.log(pathName)
    return (pathName !== '/' && pathName !== '/registration')
  }

  return willRender() ? (
    <div>
      <Link to="/events">Events</Link>
      <Link to="/profile">You</Link>
    </div>
  ) : null;
}