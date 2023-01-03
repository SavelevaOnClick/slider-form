import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './AppNavigator/AppNavigator';
import {persistor, store} from './store';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent={true} />
          <AppNavigator />
      </PersistGate>
    </Provider>
  );
};
