import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/Navigation/Routes';

const App = () => {
  return( 
<>

    <StatusBar
    animated={true}
    backgroundColor="#04BEFC"
    barStyle="light-content"
  />
  <Routes />
  </>
  )
};
export default App;
