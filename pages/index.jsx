import { useState, useRef, useEffect } from "react";
import { fetcher, clientJwtDecode } from "../lib/utils";
import { useSession, signIn, signOut } from "next-auth/react";
import localforage from "localforage";
import useSwr, { mutate } from "swr";
import Footer from "../components/Footer";
import NavigationHero from "../components/Sections/NavigationHero";
import WhyInvest from "../components/Sections/WhyInvest";
import FactCards from "../components/Sections/FactCards";
import Stats1 from "../components/Sections/Stats1";
import FactSnippets from "../components/Sections/FactSnippets";
import InfoBlock from "../components/Sections/InfoBlock";
import Team from "../components/Sections/Team";
import FAQ from "../components/Sections/FAQ";
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
} from "../cms.data";

export default function Funded() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, setState] = useState(null);
  const [decoded, setDecoded] = useState(null);

  const inputEl = useRef(null);
  const [inputError, setInputError] = useState(false);
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { data: session, status } = useSession();
  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/convertkit`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setInputError(true);
      setMessage(
        "Your e-mail address is invalid or you are already subscribed!"
      );
      return;
    }

    inputEl.current.value = "";
    setInputError(false);
    setSubscribed(true);
    setMessage("Successfully! 🎉 You are now subscribed.");
  };

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
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />

      <div>
        <NavigationHero
          entityTitle={entityTitle}
          navigationLinks={navigationLinks}
          navigationHrefs={navigationHrefs}
          cta={cta}
          session={session}
        />
        <Stats1 data={stats1Data} />
        <WhyInvest {...whyInvestContent} />
        {!session ? null : (
          <>
            <FactCards factCardsContent={factCardsContent} />
            <Stats1 data={stats1Data} />
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
        />
      </div>
    </div>
  );
}
