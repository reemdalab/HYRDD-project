import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import ar from "../json/ar.json";
import en from "../json/en.json";
import React from 'react';
import styles from '@/styles/page.module.scss'
import {ConfigProvider} from 'antd';
import 'remixicon/fonts/remixicon.css';

const messages = {
  ar,
  en,
};
function getDirection(locale: string) {
  if (locale === "ar") {
    return "rtl";
  }
  return "ltr";
}
function App({ Component, pageProps }: AppProps) {
   const { locale } = useRouter();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7b67fe',
        },
      }}
    >
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <Component {...pageProps} dir={getDirection(locale)} />
      </div>
    </IntlProvider>
    </ConfigProvider>
  )
}
export default App;
