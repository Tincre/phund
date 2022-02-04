import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { fetcher, clientJwtDecode } from "../lib/utils";
import { useSession } from "next-auth/react";
import { routeSeoContent } from "../siteMetadata.js";
import localforage from "localforage";
import { NextSeo } from "next-seo";
import useSwr, { mutate } from "swr";
import Head from "next/head";
import Footer from "../components/Footer";
import NavigationHero from "../components/Sections/NavigationHero";
import WhyInvest from "../components/Sections/WhyInvest";
import FactCards from "../components/Sections/FactCards";
import Stats from "../components/Sections/Stats";
import FactSnippets from "../components/Sections/FactSnippets";
import InfoBlock from "../components/Sections/InfoBlock";
import Team from "../components/Sections/Team";
import FAQ from "../components/Sections/FAQ";
import SafeTerms from "../components/Sections/SafeTerms";
import {
  entityTitle,
  title,
  description,
  author,
  navigationLinks,
  infoBlockContent,
  navigationHrefs,
  cta,
  logoSrc,
  stats1Data,
  safeTermsContent,
  whyInvestContent,
  factCardsContent,
  factSnippetsCardContent,
  teamCardContent,
  fAQCardContent,
  footerItems,
  socials,
  hostname,
  teamContent,
  factSnippetsContent,
  newsletterContent,
} from "../cms.data";

export default function Funded() {
  const [mobileMenuIsClicked, setMobileMenuIsClicked] = useState(true);
  const [state, setState] = useState(null);
  const [decoded, setDecoded] = useState(null);
  const { data: session, status } = useSession();

  const { data, error } = useSwr(
    "/api/session",
    { data: { sessionId: state?.sessionId } },
    fetcher
  );

  useEffect(() => {
    if (typeof state?.sessionId !== "undefined") {
      mutate("/api/session", { sessionId: state?.sessionId }, true);
    }
  }, [state]);

  // Create a new session
  useEffect(() => {
    // lookup local storage first
    localforage.getItem(hostname).then((stateObj) => {
      if (!stateObj) {
        // create initial state in db using session identifier
        fetch("/api/session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            const token = data?.token;
            if (typeof token !== "undefined") {
              const decoded = clientJwtDecode(token);
              setDecoded(decoded);
              setState({ hostname: decoded });
            }
          })
          .catch((error) => console.error(error.message));
      } else {
        setState(stateObj);
      }
    });
  }, []);
  // Update outer state data
  useEffect(() => {
    if (decoded) {
      setState(decoded);
    }
  }, [decoded]);
  // Set local state on state object changes
  useEffect(() => {
    if (state) {
      localforage
        .setItem(hostname, state)
        .then(() => {})
        .catch((error) => console.error(error.message));
    }
  }, [state]);
  // Update the local state for decoded tokens on change of data from swr
  useEffect(() => {
    if (typeof data !== "undefined") {
      const token = data?.token;
      if (typeof token !== "undefined") {
        setDecoded(clientJwtDecode(token));
      }
    }
  }, [data, error]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <NextSeo {...routeSeoContent["/"]} />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content={entityTitle} />
        <meta name="application-name" content={entityTitle} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div>
        <NavigationHero
          entityTitle={entityTitle}
          navigationLinks={navigationLinks}
          navigationHrefs={navigationHrefs}
          cta={cta}
          logoSrc={logoSrc}
          session={session}
          mobileMenuIsClicked={mobileMenuIsClicked}
          setMobileMenuIsClicked={setMobileMenuIsClicked}
        />
        <Stats data={stats1Data} />
        <WhyInvest {...whyInvestContent} session={session} />
        <SafeTerms {...safeTermsContent} session={session} />
        {!session ? null : (
          <>
            <FactCards factCardsContent={factCardsContent} />
            <Stats data={stats1Data} />
            <FactSnippets
              {...factSnippetsContent}
              factSnippetsCardContent={factSnippetsCardContent}
              session={session}
            />
            <InfoBlock {...infoBlockContent} />
            <Team teamCardContent={teamCardContent} {...teamContent} />
            <FAQ fAQCardContent={fAQCardContent} />
            <InfoBlock {...infoBlockContent} />
          </>
        )}
        <Footer
          entityTitle={entityTitle}
          logoSrc={logoSrc}
          footerItems={footerItems}
          socials={socials}
          {...newsletterContent}
        />
      </div>
    </div>
  );
}
