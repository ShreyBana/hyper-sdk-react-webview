import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import HyperWebView from 'hyper-sdk-react-webview';

export default function App() {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(HyperWebView, {
      source: { uri: 'https://reactnative.dev/' },
      style: { flex: 1 },
    })
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
