import FooterColumn from "./FooterColumn";
import Image from "next/image";
import Logo from "./Logo";
import Newsletter from "./Newsletter";

export default function Footer({
  entityTitle,
  logoSrc,
  footerItems,
  socials,
  newsletterTitle,
  newsletterSubtitle,
  newsletterName,
  newsletterHref,
}) {
  return (
    <section id="footer" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/5 flex flex-wrap">
            {footerItems?.map((props, index) => (
              <FooterColumn {...props} key={`${index}-footer-column`} />
            ))}
          </div>
          <Newsletter
            newsletterHref={newsletterHref}
            newsletterTitle={newsletterTitle}
            newsletterSubtitle={newsletterSubtitle}
            newsletterName={newsletterName}
          />
        </div>
      </div>
      <div className="mt-4 lg:mt-16 mb-8 border-b border-indigo-50" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <a className="text-gray-600 text-2xl leading-none" href="#">
              <Logo logoSrc={logoSrc} entityTitle={entityTitle} />
            </a>
            <p className="hidden lg:block mt-3 text-sm text-gray-500">
              {`All rights reserved. © ${entityTitle} 2022`}
            </p>
          </div>
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="mb-4 flex lg:justify-end">
              {socials?.map(({ displayText, href }, index) => (
                <a
                  className="flex leading-loose my-4 block text-sm text-gray-700 transform hover:scale-110 mr-4 lg:ml-4"
                  href={href}
                  key={`${href}-${index}`}
                  rel="noopener noreferrer"
                >
                  <div className="ml-auto md:m-auto text-center relative h-8 w-8">
                    <Image
                      className="hover:text-red-700"
                      layout="fill"
                      alt={displayText}
                      src={`/images/${displayText.toLowerCase()}.svg`}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <p className="lg:hidden text-sm text-gray-500">
            {`All rights reserved. © ${entityTitle} 2022`}
          </p>
        </div>
      </div>
    </section>
  );
}
