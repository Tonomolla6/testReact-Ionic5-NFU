import React from 'react';
import { IonGrid, IonRow, IonCol, IonImg, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './Categories.css';
import * as categories from '../assets/data/categories.json';

const Categories: React.FC = () => {
    let count = 0;
    return (
        <div>
            <h3 className="titulo">Categorias</h3>
            <IonGrid>
                <IonRow>
                    <IonCol className="category">
                        <IonImg className="category_image" src="https://www.rfef.es/sites/default/files/erxw5gdw8aa4-er.jpg"></IonImg>
                        <h5 className="category_text">Futbol</h5>
                    </IonCol>
                    <IonCol className="category">
                        <IonImg className="category_image" src="https://www.marketingregistrado.com/img/noticias/basquet-universitario.jpg"></IonImg>
                        <h5 className="category_text">Basquet</h5>
                    </IonCol>
                    <IonCol className="category">
                        <IonImg className="category_image" src="https://media.vandal.net/i/1280x696/87335/tennis-world-tour-2-202074745224_1.jpg"></IonImg>
                        <h5 className="category_text">Tennis</h5>
                    </IonCol>
                </IonRow>
            </IonGrid>

        </div>
    );
};

export default Categories;