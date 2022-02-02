import { useState, useRef } from "react";

export default function Newsletter({
  newsletterTitle,
  newsletterSubtitle,
  newsletterName,
  newsletterHref,
}) {
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
    <div
      className="order-first lg:order-last mb-10 lg:mb-0 w-full lg:w-2/5 lg:text-right"
      id="newsletter-signup"
    >
      <h3 className="mb-4 text-lg font-bold font-heading">
        {newsletterTitle || "Subscribe"}
      </h3>
      <p className="mb-5 text-gray-500">
        {newsletterSubtitle || "Stay informed with updates from our blog "}
        <a
          className="text-gray-700 hover:font-bold hover:underline hover:text-indigo-700"
          href={newsletterHref || "https://slightlysharpe.com"}
        >
          {newsletterName || "Slighly Sharpe"}
        </a>
        .
      </p>
      <form onSubmit={subscribe}>
        <label htmlFor="email-input" className="sr-only">
          Email address
        </label>
        <input
          className="w-2/3 mb-4 pl-4 py-3 mr-4 border border-1 rounded border-indigo-200 hover:border-indigo-500 focus:border-indigo-800"
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
          className={`w-1/4 inline-block px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200 ${
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
  );
}
