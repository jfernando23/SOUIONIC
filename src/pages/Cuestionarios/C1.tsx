import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonItem, IonLabel,IonPage, IonRow,  IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useRef } from 'react'
import { Exiteusu, RegistroNivel} from '../../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';
const C1: React.FC = () => {
  let history = useHistory();
  const [present, dismiss] = useIonToast()
  const p1 = useRef<HTMLIonSelectElement>(null)
  const p2 = useRef<HTMLIonSelectElement>(null)
  const p3 = useRef<HTMLIonSelectElement>(null)
  const p4 = useRef<HTMLIonSelectElement>(null)
  const p5 = useRef<HTMLIonSelectElement>(null)
  const p6 = useRef<HTMLIonSelectElement>(null)
  const p7 = useRef<HTMLIonSelectElement>(null)
  const p8 = useRef<HTMLIonSelectElement>(null)
  const p9 = useRef<HTMLIonSelectElement>(null)
  const p10 = useRef<HTMLIonSelectElement>(null)
  async function Tomarresult(){
    if(p1.current?.value===undefined ||p2.current?.value===undefined || p3.current?.value===undefined || p4.current?.value===undefined || p5.current?.value===undefined || p6.current?.value===undefined || p7.current?.value===undefined || p8.current?.value===undefined || p10.current?.value===undefined){
      present('Por favor, diligencia cada uno de los campos',1000)
    }else{
    const p11 = p1.current?.value
    const p22 = p2.current?.value
    const p33 = p3.current?.value
    const p44 = p4.current?.value
    const p55 = p5.current?.value
    const p66 = p6.current?.value
    const p77 = p7.current?.value
    const p88 = p8.current?.value
    const p99 = p9.current?.value
    const p101 =p10.current?.value
    console.log(p1)
      const resul = parseInt(p11)+parseInt(p22)+parseInt(p33)+parseInt(p44)+parseInt(p55)+parseInt(p66)+parseInt(p77)+parseInt(p88)+parseInt(p99)+parseInt(p101)
    const  credenciales = await Exiteusu();
    if (credenciales===null) {
      console.log("No hay log")
    } else {
      const  res = await RegistroNivel(credenciales,resul)
      if (res===null) {
        present('No se pudo completar el registro.',1000);
      } else {
        present('Registro exitoso',1000);
        history.push("/Estadísticas");
      }
    }
    }
    
    
  }
  return (
    <IonPage>
      <IonContent >
      <IonCard>
          <IonCardHeader >
            <IonCardTitle class="align-text-center">Diagnóstico</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <IonItem color={'secondary'}>
        <IonLabel>1.¿Me siento agotado constantemente por mis responsabilidades académicas?</IonLabel>
        <IonSelect ref={p1}>
          <IonSelectOption value="1">Nunca</IonSelectOption>
          <IonSelectOption value="2">Casi nunca</IonSelectOption>
          <IonSelectOption value="3">Raramente</IonSelectOption>
          <IonSelectOption value="4">A veces</IonSelectOption>
          <IonSelectOption value="5">A menudo</IonSelectOption>
          <IonSelectOption value="6">Muy a menudo</IonSelectOption>
          <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem color={'secondary'}>
        <IonLabel>2.¿Me siento decepcionado por mis resultados académicos?</IonLabel>
        <IonSelect ref={p2}>
          <IonSelectOption value="1">Nunca</IonSelectOption>
          <IonSelectOption value="2">Casi nunca</IonSelectOption>
          <IonSelectOption value="3">Raramente</IonSelectOption>
          <IonSelectOption value="4">A veces</IonSelectOption>
          <IonSelectOption value="5">A menudo</IonSelectOption>
          <IonSelectOption value="6">Muy a menudo</IonSelectOption>
          <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem color={'secondary'}>
      <IonLabel>3.Siento una desesperanza como: ¿Por qué hacer eso? ¿Para qué tantos trabajos?</IonLabel>
        <IonSelect ref={p3}>
            <IonSelectOption value="1">Nunca</IonSelectOption>
            <IonSelectOption value="2">Casi nunca</IonSelectOption>
            <IonSelectOption value="3">Raramente</IonSelectOption>
            <IonSelectOption value="4">A veces</IonSelectOption>
            <IonSelectOption value="5">A menudo</IonSelectOption>
            <IonSelectOption value="6">Muy a menudo</IonSelectOption>
            <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem color={'secondary'}>
        <IonLabel>4.¿Me siento agobiado por parciales y trabajos en exceso?</IonLabel>
        <IonSelect ref={p4} >
          <IonSelectOption value="1">Nunca</IonSelectOption>
          <IonSelectOption value="2">Casi nunca</IonSelectOption>
          <IonSelectOption value="3">Raramente</IonSelectOption>
          <IonSelectOption value="4">A veces</IonSelectOption>
          <IonSelectOption value="5">A menudo</IonSelectOption>
          <IonSelectOption value="6">Muy a menudo</IonSelectOption>
          <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem color={'secondary'}>
        <IonLabel>5.¿Tengo sentimientos frecuentes de inutilidad?</IonLabel>
        <IonSelect ref={p5}>
          <IonSelectOption value="1">Nunca</IonSelectOption>
          <IonSelectOption value="2">Casi nunca</IonSelectOption>
          <IonSelectOption value="3">Raramente</IonSelectOption>
          <IonSelectOption value="4">A veces</IonSelectOption>
          <IonSelectOption value="5">A menudo</IonSelectOption>
          <IonSelectOption value="6">Muy a menudo</IonSelectOption>
          <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem color={'secondary'}>
        <IonLabel>6.¿Soy detallista en exceso?</IonLabel>
        <IonSelect ref={p6}>
          <IonSelectOption value="1">Nunca</IonSelectOption>
          <IonSelectOption value="2">Casi nunca</IonSelectOption>
          <IonSelectOption value="3">Raramente</IonSelectOption>
          <IonSelectOption value="4">A veces</IonSelectOption>
          <IonSelectOption value="5">A menudo</IonSelectOption>
          <IonSelectOption value="6">Muy a menudo</IonSelectOption>
          <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem color={'secondary'}>
        <IonLabel>7.He Cambiado de apetito: ¿Cómo demasiado? ¿Pérdida de apetito?</IonLabel>
        <IonSelect ref={p7}>
          <IonSelectOption value="1">Nunca</IonSelectOption>
          <IonSelectOption value="2">Casi nunca</IonSelectOption>
          <IonSelectOption value="3">Raramente</IonSelectOption>
          <IonSelectOption value="4">A veces</IonSelectOption>
          <IonSelectOption value="5">A menudo</IonSelectOption>
          <IonSelectOption value="6">Muy a menudo</IonSelectOption>
          <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem color={'secondary'}>
        <IonLabel>8.¿He sufrido de pérdida de entusiasmo / placer en el estudio?</IonLabel>
        <IonSelect ref={p8}>
          <IonSelectOption value="1">Nunca</IonSelectOption>
          <IonSelectOption value="2">Casi nunca</IonSelectOption>
          <IonSelectOption value="3">Raramente</IonSelectOption>
          <IonSelectOption value="4">A veces</IonSelectOption>
          <IonSelectOption value="5">A menudo</IonSelectOption>
          <IonSelectOption value="6">Muy a menudo</IonSelectOption>
          <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem color={'secondary'}>
        <IonLabel>9.¿Tengo trastornos regulares del sueño? ¿Vigilia? ¿Nunca duermo lo suficiente?</IonLabel>
        <IonSelect ref={p9}>
          <IonSelectOption value="1">Nunca</IonSelectOption>
          <IonSelectOption value="2">Casi nunca</IonSelectOption>
          <IonSelectOption value="3">Raramente</IonSelectOption>
          <IonSelectOption value="4">A veces</IonSelectOption>
          <IonSelectOption value="5">A menudo</IonSelectOption>
          <IonSelectOption value="6">Muy a menudo</IonSelectOption>
          <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem color={'secondary'}>
        <IonLabel >10.Tengo ganas de gritar: ¡Basta ya! ¡Estoy harto!</IonLabel>
        <IonSelect ref={p10}>
          <IonSelectOption value="1">Nunca</IonSelectOption>
          <IonSelectOption value="2">Casi nunca</IonSelectOption>
          <IonSelectOption value="3">Raramente</IonSelectOption>
          <IonSelectOption value="4">A veces</IonSelectOption>
          <IonSelectOption value="5">A menudo</IonSelectOption>
          <IonSelectOption value="6">Muy a menudo</IonSelectOption>
          <IonSelectOption value="7">Cada día</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonRow>
              <IonCol className="ion-text-center ion-margin-top">
                    <IonButton onClick={Tomarresult} expand="block" fill="outline">Enviar</IonButton>
              </IonCol>
            </IonRow>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonCardContent>
        </IonCard>
       
      </IonContent>
    </IonPage>
  );
};

export default C1;