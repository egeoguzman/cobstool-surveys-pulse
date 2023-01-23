import { Amplify } from "aws-amplify";
import { PulseSurvey, studioTheme } from './Components/pulseSurvey-ui-components';

import './styles.css';
//import "@aws-amplify/ui-react/styles.css";


import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);


function App() {
  return (
    
  <main>

      <PulseSurvey />

    </main>
  );
}

export default App;
