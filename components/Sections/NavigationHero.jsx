import MobileNavbar from "../MobileNavbar";
import Navbar from "../Navbar";
import Hero from "../Hero";

export default function NavigationHero({
  entityTitle,
  navigationLinks,
  navigationHrefs,
  cta,
  logoSrc,
  session,
  mobileMenuIsClicked,
  setMobileMenuIsClicked,
}) {
  return (
    <section id="navigation-hero">
      <div className="container px-4 mx-auto">
        <Navbar
          entityTitle={entityTitle}
          navigationLinks={navigationLinks}
          navigationHrefs={navigationHrefs}
          cta={cta}
          logoSrc={logoSrc}
          session={session}
          mobileMenuIsClicked={mobileMenuIsClicked}
          setMobileMenuIsClicked={setMobileMenuIsClicked}
        />
        <Hero
          heading="We're a different kind of online business."
          subHeading="We create value across the web via financially performant semi-autonomous brands centered around core technology."
          cta1="Learn about our raise"
          cta2="Sign in or up"
          imageSrc="https://res.cloudinary.com/tincre/image/upload/v1638892843/tincre.com/tincre-brand-indigo-800_uatfej.svg"
          session={session}
        />
      </div>
      <MobileNavbar
        entityTitle={entityTitle}
        navigationLinks={navigationLinks}
        navigationHrefs={navigationHrefs}
        cta={cta}
        session={session}
        mobileMenuIsClicked={mobileMenuIsClicked}
        setMobileMenuIsClicked={setMobileMenuIsClicked}
      />
    </section>
  );
}
