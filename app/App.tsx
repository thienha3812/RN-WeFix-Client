import { useObserver } from 'mobx-react-lite';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import './i18n';
import { translate } from './utils/translate';


if (__DEV__) {
  import('./utils/reactotron').then(() => console.log('Reactotron configured'))
}
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Text>{translate('Welcome')}</Text>
    </ApplicationProvider>
  )
};

export default App
