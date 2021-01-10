import React from 'react';
import './SelectLocation.css';
import { IonIcon } from '@ionic/react';
import { locationSharp, chevronDownSharp } from 'ionicons/icons';

const SelectLocation: React.FC = () => {
  return (
    <div color="secundary" className="drop">
      <IonIcon className="drop_location" icon={locationSharp} />
      <p>Ontinyent, Valencia - 46870</p>
      <IonIcon className="drop_arrow" icon={chevronDownSharp} />
    </div>
  );
};

export default SelectLocation;