import Footer from "../components/Footer";
import NavigationHero from "../components/Sections/NavigationHero";
import WhyInvest1 from "../components/Sections/WhyInvest1";
import FactCards from "../components/Sections/FactCards";
import Stats1 from "../components/Sections/Stats1";
import Stats2 from "../components/Sections/Stats2";
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
        <NavigationHero entityTitle={entityTitle} />
        <Stats1 />
        <WhyInvest1 />
        <FactCards />
        <Stats2 />
        <WhyInvest2 />
        <FactSnippets />
        <InfoCarousel />
        <Considerations />
        <Team />
        <FAQ />
        <Footer entityTitle={entityTitle} />
      </div>
    </div>
  );
}
