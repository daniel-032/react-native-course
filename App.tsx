import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TabNavigationWrapper } from './wrappers/TabNavigationWrapper';

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView>
      <TabNavigationWrapper/>
    </GestureHandlerRootView>
  );
}

export default App;
