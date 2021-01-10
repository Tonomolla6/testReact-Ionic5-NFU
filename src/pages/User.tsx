import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg,IonIcon } from '@ionic/react';
import { personCircleSharp } from 'ionicons/icons';
import './User.css';

const Search: React.FC = () => {
    let user = {
        background: false,
        image: false
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary" className="toolbar">
                    <IonTitle className="toolbar_title">USUARIO</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="profile">
                    <div className="profile_backgraund">
                        {user.background !== false ? <IonImg src=""></IonImg> : ''}
                        {user.image !== false ? <IonImg className="profile_image" src=""></IonImg> : <IonIcon className="profile_image" icon={personCircleSharp}></IonIcon>}
                    </div>
                    <div className="alert">
                        INICIA SESIÓN PARA PODER PARTICIPAR
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Search;
