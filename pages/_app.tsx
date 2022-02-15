import '../styles/globals.css'
import "../styles/choose-token.scss";
import "../styles/bond.scss";
import "../styles/bondSettings.scss";
import "../styles/zapin.scss";
import "../styles/drawer-content.scss";
import "../styles/rebasetimer.scss";
import "../styles/wrap.scss";
import "../styles/loader.scss";
import "../styles/wrap-button.scss";
import "../styles/time-menu.scss";
import "../styles/header.scss";
import "../styles/connect-menu.scss";
import "../styles/view-base.scss";

import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { Web3ContextProvider } from "../hooks";
import store from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Web3ContextProvider>
        <Component {...pageProps} />
      </Web3ContextProvider>
    </Provider>
  )
}

export default MyApp
