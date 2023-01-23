import { Amplify } from "aws-amplify";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { PulseSurvey, studioTheme } from './Components/pulseSurvey-ui-components';

import './App.css';
import "@aws-amplify/ui-react/styles.css";


import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);


function App() {
  return (
    <ThemeProvider theme={studioTheme}>

      <PulseSurvey />

    </ThemeProvider>
  );
}

export default App;
