import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigations/Navigator';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
