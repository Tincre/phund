import FooterColumn from "./FooterColumn";
import Image from "next/image";

export default function Footer({ entityTitle, logoSrc, footerItems, socials }) {
  return (
    <section id="footer" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/5 flex flex-wrap">
            {footerItems?.map((props, index) => (
              <FooterColumn {...props} key={`${index}-footer-column`} />
            ))}
          </div>
          <div className="order-first lg:order-last mb-10 lg:mb-0 w-full lg:w-2/5 lg:text-right">
            <h3 className="mb-4 text-lg font-bold font-heading">Subscribe</h3>
            <p className="mb-5 text-gray-500">
              Stay informed with our updates via our blog,{" "}
              <a
                className="text-gray-700 hover:font-bold hover:underline hover:text-indigo-700"
                href="https://slightlysharpe.com"
              >
                Slighly Sharpe
              </a>
              .
            </p>
            <input
              className="w-full lg:w-2/3 mb-4 pl-4 py-3 mr-4 border border-2 rounded"
              type="email"
              placeholder="Type your e-mail"
            />
            <button className="inline-block px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 lg:mt-16 mb-8 border-b border-indigo-50" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <a className="text-gray-600 text-2xl leading-none" href="#">
              <img
                className="h-16"
                src={logoSrc}
                alt={`${entityTitle} logo`}
                width="auto"
                height="4rem"
              />
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
                  key={href}
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
