# Hyper SDK React WebView

Custom webview for a hyper-sdk Android webview integration.

 Installation

```sh
npm install --save https://github.com/juspay/hyper-sdk-react-webview#945bd4a3716713762a323b60c153c477f117fb5a

```

 with `yarn`

```sh
yarn add https://github.com/juspay/hyper-sdk-react-webview#945bd4a3716713762a323b60c153c477f117fb5a

```

## Usage

 Add the required intent handling in `MainActivity.kt`

```kotlin
    // ...
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == HyperWebViewManager.UPI_REQUEST_CODE) {
            HyperWebViewManager.onActivityResult(requestCode, resultCode, data)
        }
    }
```

 And then you can just start using it in react.

```js
import HyperWebView from 'hyper-sdk-react-webview';

// ...

const MyWebComponent = () => {
  return <HyperWebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} iframeIntegration={ false } />;
}
```

## How it works

With this package we have basically created a very thin wrapper around the `WebView` component provided by [react-native-webview](https://www.npmjs.com/package/react-native-webview). For `Android`, one can extend their view manager implementation & override the functionality as needed. After which the new class will have to be made available as a react-native component.

For a more detailed walk-through you can visit their docs: [Custom-Android.md](https://github.com/react-native-webview/react-native-webview/blob/v13.10.2/docs/Custom-Android.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
