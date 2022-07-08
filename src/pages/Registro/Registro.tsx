import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton, IonAvatar, IonChip, IonIcon, IonRow, IonCol } from '@ionic/react';
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
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Nombres</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Apellidos</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Confirmar contraseña</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center ion-margin-top">
            <IonButton expand="block" fill="outline">Registrar</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
    );
};

export default Registro;