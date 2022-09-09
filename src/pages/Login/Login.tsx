import { useIonToast, IonButton, IonCol, IonContent,IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow, IonCard, IonCardContent, IonAvatar } from '@ionic/react';
import { useState } from 'react';
import { LoginUser } from '../../firebase/firebaseConfig';
import { Exiteusu } from '../../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';
import './estilos.css';

const Login: React.FC = () => {
  //watchUserChanges();
  const [Usuario,setUsuario] = useState('')
  const [Contrasena,setContrasena] = useState('')
  const [present, dismiss] = useIonToast()
  let history = useHistory();
 
  async function login(){
    const stateObj = { foo: 'bar' };
    const  res = await LoginUser(Usuario,Contrasena)
    if (!res) {
      console.log("no")
      //toast("No ingreso") 
      present('Credenciales incorrectas',300)
    }else{
      const  credenciales = await Exiteusu();
      if(credenciales === null){
        present('Credenciales incorrectas',300)
      }else{
        history.push("/Cuetionario-Diagnóstico")
      }
      //console.log(res.user.uid);
      //history.push("/Cuetionario-Diagnóstico")
      //console.log("si");
      //toast("Si ingreso")
    }
  }
  return (
    
    <IonPage>
      <IonContent >
      <IonCard>
        <br />
        <br />
        <IonAvatar class="align-text-center">
        <img src="assets/icon/sou3.png" ></img>
        </IonAvatar>
        <br />
        <br />
          <IonCardContent>
          <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel color={'medium'} class='hg' position="floating">Email</IonLabel>
                        <IonInput onIonChange={(e: any) =>setUsuario(e.target.value)} type="text"></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel color={'medium'} position="floating">Contraseña</IonLabel>
                        <IonInput color={'primary'} onIonChange={(e: any) =>setContrasena(e.target.value)} type="password"></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
  
            <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                    <IonButton expand="block" onClick={login}  fill="outline">INICIAR SESIÓN</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                    <IonButton id='hg' routerLink='/Registro' expand="block" fill="outline">REGISTRARSE</IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;