import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonSearchbar } from '@ionic/react';
import './Search.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonSearchbar className="search" placeholder="Search Events" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
    
      </IonContent>
    </IonPage>
  );
};

export default Search;
