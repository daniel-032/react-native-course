import React from 'react';
import { Home } from './src/screens/Home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: "black"}}>
      <Home/>
    </GestureHandlerRootView>
  );
}

export default App;
