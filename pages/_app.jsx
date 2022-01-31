import "../styles/global.css";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { defaultSeoContent } from "../siteMetadata";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...defaultSeoContent} />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
