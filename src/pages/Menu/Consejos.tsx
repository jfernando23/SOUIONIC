import React from 'react';
import { IonContent, IonHeader,IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList, IonInput, IonItem, IonLabel, IonAvatar, IonList, IonListHeader, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { arrowUpCircle,body,calendar, receipt, pieChart, heart } from 'ionicons/icons';

const Consejos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Tips/Consejos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
          <IonCardHeader>
            
          </IonCardHeader>

          <IonCardContent>
          <IonList>
          <IonListHeader> Relajación </IonListHeader>

          <IonItem>
            <IonAvatar className='fg' slot="start">
              <img src="assets/icon/r1.png" />
            </IonAvatar>
            <IonLabel>
              <p>Sé activo. La actividad física libera las</p> 
              <p>endorfinas que te hacen sentir bien y </p> 
              <p>otros químicos neurales naturales</p> 
              <p>que aumentan la sensación de bienestar.</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar className='fg' slot="start">
              <img src="assets/icon/r2.png" />
            </IonAvatar>
            <IonLabel>
              <p>Lleva una dieta saludable, es una </p> 
              <p>parte importante del cuidado personal </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar className='fg' slot="start">
              <img src="assets/icon/r3.png" />
            </IonAvatar>
            <IonLabel>
              <p>Evita los hábitos como tomar demasiada </p> 
              <p>cafeína o alcohol, fumar,comer en exceso </p>
              <p>o consumir sustancias ilegales.</p>
              <p>Estos hábitos pueden dañar  </p>
            </IonLabel>
          </IonItem>
          <IonListHeader> Organización </IonListHeader>
          <IonItem>
            <IonAvatar className='fg' slot="start">
              <img src="assets/icon/o1.png" />
            </IonAvatar>
            <IonLabel>
              <p>Organízate, tener al día los materiales</p> 
              <p>de estudio y llevar una agenda</p>
              <p>ayuda bastante a tener más organizados</p>
              <p> tus horarios y entregas.</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar  className='fg' slot="start">
              <img src="assets/icon/o2.png" />
            </IonAvatar>
            <IonLabel>
              <p>Clasificar las materias de acuerdo con el </p> 
              <p>nivel de dificultad también de acuerdo</p>
              <p>con fechas pautadas para entregas</p>
              <p>y pruebas.</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar className='fg' slot="start">
              <img src="assets/icon/o3.png" />
            </IonAvatar>
            <IonLabel>
              <p>Estudia gradualmente para llegar</p> 
              <p>más preparado a una prueba.</p>
            </IonLabel>
          </IonItem>
          </IonList>
      </IonCardContent>
        </IonCard>
      
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
export default Consejos;