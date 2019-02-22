import {
    EventsContainer,
    ImgCard,
    TitleCard,
    DescriptionCard,
    EventCard,
    SubtitleCard
} from './styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from './mock';

export const Events = props => {
    return (
        <EventsContainer>
            <div>
                {mockData && mockData.map((event, id) => {
                    return (
                        <Event {...event} key={id} id={id} />
                    )
                })}
            </div>
        </EventsContainer>
    )
}

const Event = (props) => {
    return (
        <Link to={`/event/${props.id}`}>
            <EventCard>
                <ImgCard>
                    <img src={props.images[0]} />
                </ImgCard>
                <TitleCard>
                    {props.name}
                </TitleCard>
                <SubtitleCard>
                    sponsors: {props.sponsors.map(sponsor => <span>{sponsor}</span>)}
                </SubtitleCard>
                <DescriptionCard>
                    Description: {props.description}
                </DescriptionCard>
            </EventCard>
        </Link >
    )
}