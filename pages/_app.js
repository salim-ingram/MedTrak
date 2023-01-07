import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import { studioTheme } from "../ui-components";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter";
import "../styles/globals.css";

import awsconfig from "../aws-exports";
import React from "react";
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <AmplifyProvider theme={studioTheme}>
        <Component {...pageProps} />
      </AmplifyProvider>
    </React.StrictMode>
  );
}
export default MyApp;
