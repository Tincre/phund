import Footer from "../components/Footer";
import NavigationHero from "../components/Sections/NavigationHero";
import WhyInvest from "../components/Sections/WhyInvest";
import FactCards from "../components/Sections/FactCards";
import Stats1 from "../components/Sections/Stats1";
import FactSnippets from "../components/Sections/FactSnippets";
import InfoBlock from "../components/Sections/InfoBlock";
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
  const whyInvestContent = {
    subTitle: "Scaling our formula",
    title: "We're seeking investment to release more kick ass brands",
    description:
      "Our formula for success works and we are scaling it by releasing brands in financial services, non-profit fundraising, and fashion.",
    cta: "Learn about our SAFE note",
    whyInvestCardData: [
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
  const factSnippetsCardContent = [
    {
      description:
        "A nice, detailed explanation of something with-respect-to this funding rounding.",
      imageSrc: "/images/indigo-500-avatar.png",
      title: "A Product KPI",
      subTitle: "Performance category",
    },
    {
      description:
        "A nice, detailed explanation of something with-respect-to this funding rounding.",
      imageSrc: "/images/indigo-500-avatar.png",
      title: "A Product KPI",
      subTitle: "Performance category",
    },
    {
      description:
        "A nice, detailed explanation of something with-respect-to this funding rounding.",
      imageSrc: "/images/indigo-500-avatar.png",
      title: "A Product KPI",
      subTitle: "Performance category",
    },
    {
      description:
        "A nice, detailed explanation of something with-respect-to this funding rounding.",
      imageSrc: "/images/indigo-500-avatar.png",
      title: "A Product KPI",
      subTitle: "Performance category",
    },
    {
      description:
        "A nice, detailed explanation of something with-respect-to this funding rounding.",
      imageSrc: "/images/indigo-500-avatar.png",
      title: "A Product KPI",
      subTitle: "Performance category",
    },
    {
      description:
        "A nice, detailed explanation of something with-respect-to this funding rounding.",
      imageSrc: "/images/indigo-500-avatar.png",
      title: "A Product KPI",
      subTitle: "Performance category",
    },
  ];
  const teamCardContent = [
    {
      name: "Philip Muellerschoen",
      position: "CEO, Co-Founder",
      description:
        "Phil guides the firm in all aspects both internally and externally, operating and growing its brands.",
      imageSrc: "/team/phil.webp",
      imageAlt: "Philip Muellerschoen",
    },
    {
      name: "Jason R. Stevens, CFA",
      position: "CTO+CFO, Co-Founder",
      description:
        "Anti-script kiddie crushing the keys to build an entirely new world in which he owns all human-associated items.",
      imageSrc: "/team/jason.webp",
      imageAlt: "Jason R. Stevens, CFA",
    },
    {
      name: "Dan Fratoni",
      position: "Partner, External Brand Relationships",
      description: "Drives entertainment industry representation for the firm.",
      imageSrc: "/team/dan.webp",
      imageAlt: "Dan Fratoni",
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
        <WhyInvest {...whyInvestContent} />
        <FactCards factCardsContent={factCardsContent} />
        <Stats1 data={stats1Data} />
        <FactSnippets
          title="Learn about the most awesome company on the floating rock we all call earth"
          subTitle="Growing Growth"
          description="We're so performant that diversification is just an added cost to you and your portfolio. Displace underperforming assets by writing them down, collecting your tax loss, and reinvesting those proceeds into Tincre."
          cta1="Invest now"
          cta1Href="#invest"
          cta2="Log in"
          cta2Href="#login"
          factSnippetsCardContent={factSnippetsCardContent}
        />
        <InfoBlock
          title="Actually make some money on a new venture, for once."
          description="A short message that will bring potential investors into your company's world. And one that will allow them to become more familiar with your story."
          cta="Invest in Tincre"
          ctaHref="#invest"
        />
        <Team
          title="Superior people build superior businesses"
          subTitle="Better People"
          description="Your investments in half-drunk HYP school morons haven't worked out consistently. So change the pace and stop wasting your resources. Invest in the actual top of the class."
          teamCardContent={teamCardContent}
        />
        <FAQ />
        <Considerations />
        <Footer entityTitle={entityTitle} logoSrc={logoSrc} />
      </div>
    </div>
  );
}
