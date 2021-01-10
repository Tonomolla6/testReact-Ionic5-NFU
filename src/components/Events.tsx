import React from 'react';
import { IonSlide, IonSlides, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg } from '@ionic/react';
import './Events.css';
import * as events from '../assets/data/events.json';


interface props {
    filter: string;
    title: string;
}

const Events: React.FC<props> = ({ filter,title }) => {
    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        slidesPerView: "1.25"
    };
    return (
        <div className="event" >
            <h3 className="event_title">{title}</h3>
            <IonSlides key={198723} pager={false} options={slideOpts}>
                {events.data.map((event) => (
                    <IonSlide className="event_slide" key={event.id}>
                        {console.log(event)}
                        <IonCard className="event_slide_card">
                            <IonCardHeader className="event_slide_card_header">
                                <IonImg className="event_slide_card_header_img" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg" />
                                <IonCardTitle className="event_slide_card_header_title">{event.title}</IonCardTitle>
                                <IonCardSubtitle className="event_slide_card_header_subtitle">{event.location}</IonCardSubtitle>
                                <p className="event_slide_card_header_people">{event.participants.registered + "/" + event.participants.max}</p>
                                <p className="event_slide_card_header_time">{event.date + " " + event.time}</p>
                                <p className="event_slide_card_header_price">{event.precio  + "€"}</p>
                            </IonCardHeader>
                        </IonCard>
                    </IonSlide>
                ))}
            </IonSlides>
        </div>
    );
};

export default Events;