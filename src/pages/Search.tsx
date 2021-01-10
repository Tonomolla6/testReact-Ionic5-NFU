import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonSearchbar } from '@ionic/react';
import Categories from '../components/Categories';
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
        <Categories></Categories>
      </IonContent>
    </IonPage>
  );
};

export default Search;
