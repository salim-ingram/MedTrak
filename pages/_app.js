import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import { studioTheme } from "../ui-components";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import Layout from '../components/Layout'
import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter";
import "../styles/globals.css";

import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

export default function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AmplifyProvider>
  );
}
