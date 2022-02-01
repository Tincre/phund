import FooterColumn from "./FooterColumn";
import Image from "next/image";
import Logo from "./Logo";
import { useState, useRef } from "react";

export default function Footer({ entityTitle, logoSrc, footerItems, socials }) {
  const inputEl = useRef(null);
  const [inputError, setInputError] = useState(false);
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
            <form onSubmit={subscribe}>
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                className="w-full lg:w-2/3 mb-4 pl-4 py-3 mr-4 border border-2 rounded"
                id="email-input"
                name="email"
                placeholder={
                  subscribed ? "You're subscribed !  🎉" : "Enter your email"
                }
                ref={inputEl}
                required
                type="email"
                disabled={subscribed}
              />
              <button
                className={`inline-block px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200 ${
                  subscribed
                    ? "cursor-default"
                    : "hover:bg-indigo-700 dark:hover:bg-indigo-300"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black`}
                type="submit"
                disabled={subscribed}
              >
                {subscribed ? "Thank you!" : "Sign up"}
              </button>
              {inputError && (
                <div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400">
                  {message}
                </div>
              )}
            </form>
          </div>
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
