import { useState } from "react";
import { signIn } from "next-auth/react";
import Modal from "../Modal";
import SafeNote from "../SafeNote";

export default function SafeTerms({
  title,
  subTitle,
  description,
  safeNoteContent,
  cta,
  session,
}) {
  const [isClicked, setIsClicked] = useState(true);
  const [safeType, setSafeType] = useState(null);
  if (!session) {
    return (
      <div className="mx-4 md:w-2/5 md:mx-auto md:pb-12 lg:w-1/2 lg:mx-auto lg:pb-24">
        <button
          className="w-full md:px-12 block px-5 py-3 text-sm font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
          onClick={() => signIn()}
        >
          Log in to see terms
        </button>
      </div>
    );
  }
  return (
    <section
      id="safe-terms"
      className="bg-gradient-to-b from-white to-indigo-500 pt-4 lg:pt-8"
    >
      {isClicked ? (
        <>
          <div className="px-4 max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
            <span className="text-sm text-indigo-500 font-bold uppercase">
              {subTitle}
            </span>
            <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
              {title}
            </h2>
            <p className="text-lg text-slate-800 leading-loose">
              {description}
            </p>
          </div>
          <div className="max-w-3xl grid md:grid-cols-1 gap-4 mx-auto my-10">
            {safeNoteContent?.map((item, index) => (
              <div className="group" key={`${index + 1}-safe-button`}>
                <button
                  className="block w-2/5 md:w-3/5 lg:w-4/5 mx-auto px-5 py-3 mb-3 md:mb-0 text-sm bg-indigo-500 group-hover:bg-indigo-600 text-white font-semibold border border-indigo-500 group-hover:border-indigo-600 rounded transition duration-200"
                  onClick={() => {
                    setIsClicked(!isClicked);
                    setSafeType(item?.safeTitle);
                  }}
                >
                  {" "}
                  {item?.safeTitle}
                </button>
                <p className="mx-auto text-center text-white group-hover:font-semibold mb-6 mt-1 md:mb-0 mt-4 text-xs italic w-2/5 md:w-3/5 lg:w-4/5">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
          <div className="pb-8 lg:pb-12">
            <div className="mt-8 lg:mt-12 text-center text-white mx-auto text-gray-600">
              {cta}
            </div>
            <a
              href="#fact-cards"
              className="block mx-auto mt-6 lg:mt-8 w-16 h-16 p-5 rounded-full bg-indigo-50 hover:bg-indigo-100"
            >
              <svg
                className="animate-pulse mx-auto text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </>
      ) : (
        <Modal setIsClicked={setIsClicked} safeType={safeType}>
          <SafeNote safeType={safeType} />
        </Modal>
      )}
    </section>
  );
}
