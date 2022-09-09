// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { collection, addDoc,getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
export async function Exiteusu(){
  const user = await auth.currentUser
  if (user === null) {
    return null
  } else {
    return user.uid
  }
}

export async function LoginUser(Usuario: string,Contrasena:string) {
  const usu = `${Usuario}@ucundinamarca.edu.co`
  
  try{
    const res = await signInWithEmailAndPassword(auth, usu,Contrasena)
    return res
  }catch(error){
    console.log(error)
    return false
  }
  
}
export async function RegisterUser(Usuario: string,Contrasena:string) {
  const usu = `${Usuario}@ucundinamarca.edu.co`
  try{
    const res = await createUserWithEmailAndPassword (auth,usu,Contrasena)
    console.log(res)
    return true
  }catch(error){
    
    console.log(error)
    return false
  }
  
}
export async function RegistroNivel(idUsuario : string, Nivel:number) {
  const d = new Date();
  let time = d.toLocaleString();
  try {
    const docRef = await addDoc(collection(db, "NivelEstres"), {
      IdUso: idUsuario,
      Nivels: Nivel,
      Fecha: time
    });
    return docRef
  } catch (e) {
    return null
  }
}
