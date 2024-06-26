import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import HyperWebView from 'hyper-sdk-react-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <HyperWebView
        source={{ uri: 'https://reactnative.dev/' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
