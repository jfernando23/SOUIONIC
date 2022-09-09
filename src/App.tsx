import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import C1 from './pages/Cuestionarios/C1';
import Estadisticas from './pages/Menu/Estadisticas';
import Consejos from './pages/Menu/Consejos';
import Respiracion from './pages/Menu/Respiracion';
import Agenda from './pages/Menu/Agenda';
import Acondicionamiento from './pages/Menu/Acondicionamiento';
import { journalSharp } from 'ionicons/icons';
setupIonicReact();

const App: React.FC = () => (
  
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/Inicio-sesión" component={Login} exact/>
        <Route path="/Registro" component={Registro} exact/>
        <Route path="/Cuetionario-Diagnóstico" component={C1} exact/>
        <Route path="/Estadísticas" component={Estadisticas} exact/>
        <Route path="/Tips" component={Consejos} exact/>
        <Route path="/Control-Respiración" component={Respiracion} exact/>
        <Route path="/Agenda" component={Agenda} exact/>
        <Route path="/Acondicionamiento" component={Acondicionamiento} exact/>
        <Redirect to="/Inicio-sesión"/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
