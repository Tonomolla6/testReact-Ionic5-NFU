import React from 'react';
import './Events.css';

interface props {
    filter: string;
}

const Events: React.FC<props> = ({ filter }) => {
    let filters = {
        "new": {
            "title": "Eventos nuevos",
            "data":[
                {
                    "title": "Partido de futbol sala",
                    "location": "Poliesportiu Municipal Ontinyent",
                    "category": "",
                    "cp": 46870,
                    "date": "20/01/2021",
                    "time": "16:00",
                    "description": "Quedamos fuera en las escaleras, que alguien traiga pelota",
                    "participants": {
                        "max": 10,
                        "registered": 3,
                    }
                },
                {
                    "title": "Partido de futbol 7",
                    "category": "",
                    "location": "Poliesportiu Municipal Ontinyent",
                    "cp": 46870,
                    "date": "20/01/2021",
                    "time": "16:30",
                    "description": "Quedamos fuera en las escaleras, que alguien traiga pelota",
                    "participants": {
                        "max": 14,
                        "registered": 5
                    }
                }
            ]
        },
        "popular": {
            "title": "Eventos polulares",
            "data": {}
        },
        "near": {
            "title": "Eventos cercanos",
            "data": {}
        }
    }
    return (
        <div className="event" >
            <h3 className="event_title">{eval("filters." + filter + ".title")}</h3>
        </div>
    );
};

export default Events;