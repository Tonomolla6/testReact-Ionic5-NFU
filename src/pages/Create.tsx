import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem, IonInput, IonLabel, IonCheckbox, IonButton, IonSelect, IonSelectOption, IonDatetime, IonTextarea } from '@ionic/react';
import './Create.css';

const Create: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar" color="primary">
          <IonTitle className="toolbar_title">CREAR EVENTO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Title</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel>Descripcion</IonLabel>
            <IonTextarea value={""}></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">CP</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Ubicacion</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel>Categoria</IonLabel>
            <IonSelect>
              <IonSelectOption value="futbol">Futbol</IonSelectOption>
              <IonSelectOption value="basquet">Basquet</IonSelectOption>
              <IonSelectOption value="tennis">Tennis</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Dia del evento</IonLabel>
            <IonDatetime displayFormat="D MMM YYYY" placeholder="Select Date" value={""}></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel>Hora del evento</IonLabel>
            <IonDatetime displayFormat="HH:ss" placeholder="Select Date" value={""}></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel>Hora del finalización</IonLabel>
            <IonDatetime displayFormat="HH:ss" placeholder="Select Date" value={""}></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Precio</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Maximo participantes</IonLabel>
            <IonInput type="number"/>
          </IonItem>

          <IonItem lines="none">
            <IonLabel>Recuerdame el evento</IonLabel>
            <IonCheckbox defaultChecked={true} slot="start" />
          </IonItem>
          <IonButton className="ion-margin-top" type="submit" expand="block">
            Crear evento
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Create;
