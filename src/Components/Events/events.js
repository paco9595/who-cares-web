import { EventsContainer } from './styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from './mock';

export const Events = props => {
    return (
        <EventsContainer>
            {mockData && mockData.map(event => {
                return (
                    <Event {...event} />
                )
            })}
        </EventsContainer>
    )
}

const Event = (props) => {
    return (
        <div>
            {JSON.stringify(props)}
        </div>
    )
}