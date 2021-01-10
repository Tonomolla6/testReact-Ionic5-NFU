import React from 'react';

// Ionic components
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// Self components
import SelectLocation from '../components/SelectLocation';
import Events from '../components/Events';

// Style
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" className="toolbar">
          <IonTitle className="toolbar_title">NOS FALTA UNO</IonTitle>
        </IonToolbar>
        <SelectLocation></SelectLocation>
      </IonHeader>
      <IonContent fullscreen>
        <Events title="Eventos nuevos" filter="new"></Events>
        <Events title="Eventos populares" filter="popular"></Events>
        <Events title="Eventos proximos" filter="near"></Events>
      </IonContent>
    </IonPage>
  );
};

export default Home;