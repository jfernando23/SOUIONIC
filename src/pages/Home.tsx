import { IonButton, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SOU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
            <IonRow>
                <IonCol className="ion-text-center">
                    <IonSegment>
                        <IonSegmentButton value="work">
                          <IonLabel>Work</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="rest">
                          <IonLabel>Rest</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="hobby">
                          <IonLabel>Hobby</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput type="text"></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating">Contraseña</IonLabel>
                        <IonInput type="text"></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                    <IonButton expand="block" fill="outline">INICIAR SESIÓN</IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                    <IonButton expand="block" fill="outline">REGISTRARSE</IonButton>
              </IonCol>
            </IonRow>

        </IonGrid>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;