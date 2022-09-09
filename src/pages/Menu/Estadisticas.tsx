import React from 'react';
import { IonContent, IonHeader,IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList, IonInput, IonItem, IonLabel } from '@ionic/react';
import { arrowUpCircle,body,calendar, receipt, pieChart, heart } from 'ionicons/icons';

const Estadisticas: React.FC = () => {
  //const ctx = document.getElementById('Mychart')
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Estadísticas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonItem>
      
              <IonLabel position="floating">Confirmar contraseña</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
        <IonFab horizontal="start" vertical="bottom" slot="fixed">
          <IonFabButton color="dark">
            <IonIcon icon={arrowUpCircle} ></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton routerLink='/Estadísticas' color="light">
              <IonIcon icon={pieChart} ></IonIcon>
            </IonFabButton>
            <IonFabButton routerLink='/Agenda' color="light">
              <IonIcon icon={calendar}></IonIcon>
            </IonFabButton>
            <IonFabButton routerLink='/Acondicionamiento' color="light">
              <IonIcon icon={heart}></IonIcon>
            </IonFabButton>
            <IonFabButton routerLink='/Tips' color="light">
              <IonIcon icon={receipt}></IonIcon>
            </IonFabButton>
            <IonFabButton routerLink='/Control-Respiración' color="light">
              <IonIcon icon={body}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
export default Estadisticas;