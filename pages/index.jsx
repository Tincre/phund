import Footer from "../components/Footer";
import NavigationHero from "../components/Sections/NavigationHero";
import WhyInvest1 from "../components/Sections/WhyInvest1";
import FactCards from "../components/Sections/FactCards";
import Stats1 from "../components/Sections/Stats1";
import WhyInvest2 from "../components/Sections/WhyInvest2";
import FactSnippets from "../components/Sections/FactSnippets";
import InfoCarousel from "../components/Sections/InfoCarousel";
import Considerations from "../components/Sections/Considerations";
import Team from "../components/Sections/Team";
import FAQ from "../components/Sections/FAQ";

export default function Funded() {
  const entityTitle = "Tincre";
  const title = `Funded, by ${entityTitle}`;
  const description =
    "A Single Page Application for getting funded, built on Next.js and Tailwindcss, by Tincre.";
  const author = "Tincre Engineering, https://tincre.com";
  const navigationLinks = [`Investing in ${entityTitle}`, "About", "The Team"];
  const navigationHrefs = ["#why-invest-part-1", "#fact-snippets", "#team"];
  const cta = "Invest";
  const logoSrc =
    "https://res.cloudinary.com/tincre/image/upload/v1638892843/tincre.com/tincre-brand-indigo-800_uatfej.svg";
  const stats1Data = [
    {
      icon: "",
      numberStat: "30,000,000",
      text: "A giant achievement",
    },
    {
      icon: "",
      numberStat: "30,000,000",
      text: "A giant achievement",
    },
    {
      icon: "",
      numberStat: "30,000,000",
      text: "A giant achievement",
    },
    {
      icon: "",
      numberStat: "30,000,000",
      text: "A giant achievement",
    },
  ];
  const whyInvest1Content = {
    subTitle: "Scaling our formula",
    title: "We're seeking investment to release more kick ass brands",
    description:
      "Our formula for success works and we are scaling it by releasing brands in financial services, non-profit fundraising, and fashion.",
    cta: "Learn about our SAFE note",
    whyInvest1CardData: [
      "The most epic management team in the business of the web.",
      "Can't stop won't stop.",
      "Hyper-efficient semi-autonomous subsidiaries crafted for corporate accretive acquisitions.",
    ],
  };
  const factCardsContent = [
    {
      title: "This is a bold, awesome fact",
      description:
        "It's like the world is stuck in a car wash and Tincre is the car. Life is now complete.",
    },
    {
      title: "This is a bold, awesome fact",
      description:
        "It's like the world is stuck in a car wash and Tincre is the car. Life is now complete.",
    },
    {
      title: "This is a bold, awesome fact",
      description:
        "It's like the world is stuck in a car wash and Tincre is the car. Life is now complete.",
    },
    {
      title: "This is a bold, awesome fact",
      description:
        "It's like the world is stuck in a car wash and Tincre is the car. Life is now complete.",
    },
    {
      title: "This is a bold, awesome fact",
      description:
        "It's like the world is stuck in a car wash and Tincre is the car. Life is now complete.",
    },
    {
      title: "This is a bold, awesome fact",
      description:
        "It's like the world is stuck in a car wash and Tincre is the car. Life is now complete.",
    },
  ];
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
        />
        <Stats1 data={stats1Data} />
        <WhyInvest1 {...whyInvest1Content} />
        <FactCards factCardsContent={factCardsContent} />
        <Stats1 stats1Data={stats1Data} />
        <WhyInvest2 />
        <FactSnippets />
        <InfoCarousel />
        <Considerations />
        <Team />
        <FAQ />
        <Footer entityTitle={entityTitle} logoSrc={logoSrc} />
      </div>
    </div>
  );
}
