import React, { useState } from 'react';
import { IonContent,IonPage, IonInput, IonItem, IonLabel,IonButton, IonAvatar,IonRow, IonCol, IonCard, IonCardContent, IonCardHeader} from '@ionic/react';
import { RegisterUser } from '../../firebase/firebaseConfig';
const Registro: React.FC = () => {
  const [Email,setEmail] = useState('')
  
  const [ContrasenaR,setContrasenaR] = useState('')
  const [ReContrasenaR,setReContrasenaR] = useState('')
  async function Register(){
    const res = await RegisterUser(Email,ContrasenaR)
    console.log(res)
    if(!res){
      console.log("No")
    }else{
      console.log("Si")
    }
  }
  return (
    <IonPage>
      <IonContent>
      <IonCard>
          <IonCardHeader>
          <IonAvatar class="align-text-center">
          <img src="assets/icon/reg.png" ></img>
          </IonAvatar>
          </IonCardHeader>

          <IonCardContent>
          
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel color={'medium'} position="floating">Email</IonLabel>
              <IonInput onIonChange={(e: any) =>setEmail(e.target.value)} type="email"></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel color={'medium'}  position="floating">Contraseña</IonLabel>
              <IonInput onIonChange={(e: any) =>setContrasenaR(e.target.value)} type="password"></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel color={'medium'}  position="floating">Confirmar contraseña</IonLabel>
              <IonInput onIonChange={(e: any) =>setReContrasenaR(e.target.value)} type="password"></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center ion-margin-top">
            <IonButton expand="block" onClick={Register} fill="outline">Registrar</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center ion-margin-top">
            <IonButton expand="block" routerLink='/Inicio-sesión' fill="outline">Regresar</IonButton>
          </IonCol>
        </IonRow>
          </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
    );
};

export default Registro;