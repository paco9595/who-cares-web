import React from 'react';
import { Link } from 'react-router-dom';

export const Event = ({ match }) => {
  return (
    <div>
      Event pg {match.params.id}
    </div>
  )
}
