export default function Footer({ entityTitle, logoSrc }) {
  return (
    <section id="footer" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/5 flex flex-wrap">
            <div className="w-1/2 lg:w-1/4 mb-8">
              <h3 className="mb-4 text-lg font-bold font-heading">Company</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Press
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-8">
              <h3 className="mb-4 text-lg font-bold font-heading">Pages</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Login
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Register
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Add list
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-8">
              <h3 className="mb-4 text-lg font-bold font-heading">Legal</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Terms
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-8">
              <h3 className="mb-4 text-lg font-bold font-heading">Resources</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Service
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Product
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-first lg:order-last mb-10 lg:mb-0 w-full lg:w-2/5">
            <h3 className="mb-4 text-lg font-bold font-heading">Subscribe</h3>
            <p className="mb-5 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <input
              className="w-full lg:w-2/3 mb-4 pl-4 py-3 mr-4 border border-2 rounded"
              type="email"
              placeholder="Type your e-mail"
            />
            <button className="inline-block px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200">
              Action
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
              <a className="inline-block mr-8" href="#">
                <img
                  alt="Facebook (Meta) social link icon"
                  src="/socials/facebook.svg"
                />
              </a>
              <a className="inline-block mr-8" href="#">
                <img
                  src="/socials/twitter.svg"
                  alt="Twitter social link icon"
                />
              </a>
              <a className="inline-block mr-8" href="#">
                <img src="/socials/github.svg" alt="Github link icon" />
              </a>
              <a className="inline-block mr-8" href="#">
                <img src="/socials/instagram.svg" alt="Instagram link icon" />
              </a>
              <a className="inline-block" href="#">
                <img src="/socials/linkedin.svg" alt="LinkedIn link icon" />
              </a>
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
