import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonAvatar, IonChip, IonIcon } from '@ionic/react';
import { pin, heart, closeCircle, close } from 'ionicons/icons';
const Registro: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Nombres</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Apellidos</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Correo</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Repetir Contraseña</IonLabel>
            <IonInput value={text} ></IonInput>
          </IonItem>
        </IonList>
        <IonChip>
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          <IonLabel>Avatar Chip</IonLabel>
          <IonIcon icon={closeCircle} />
        </IonChip>
      </IonContent>
    </IonPage>
    );
};

export default Registro;