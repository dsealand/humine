import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App, { Container } from "next/app";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import Cookies from "js-cookie";
import "@shopify/polaris/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import Head from "next/head";

const client = new ApolloClient({
  fetchOptions: {
    credentials: "include",
  },
});
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const shopOrigin = Cookies.get("shopOrigin");
    return (
      <Container>
        <AppProvider i18n={translations}>
          <Provider
            config={{
              apiKey: API_KEY,
              shopOrigin: shopOrigin,
              forceRedirect: true,
            }}
          >
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </Provider>
        </AppProvider>
      </Container>
      // <React.Fragment>
      //   <Head>
      //     <title>Sample App</title>
      //     <meta charSet="utf-8" />
      //   </Head>
      //   <AppProvider i18n={translations}>
      //     <Component {...pageProps} />
      //   </AppProvider>
      // </React.Fragment>
    );
  }
}

export default MyApp;
