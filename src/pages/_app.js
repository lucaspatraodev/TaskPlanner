import "@/styles/globals.css";
import { NavigationProvider } from "@/context/NavigationContext";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <NavigationProvider>
      <Component {...pageProps} />
    </NavigationProvider>
  );
}

export default MyApp;
