import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  View,
  LogBox,
} from 'react-native';
import NativeStack from './src/navigation/stackNavigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import './src/utils/localization/i18n';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <NativeStack />
        </View>
      </GestureHandlerRootView>
    </Provider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
