import Document, { Head, Html, Main, NextScript } from "next/document";

class PhundDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" style={{ width: "100%" }}>
        {" "}
        <Head>
          <script
            async
            defer
            src="https://scripts.simpleanalyticscdn.com/latest.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          <noscript>
            <img
              src="https://queue.simpleanalyticscdn.com/noscript.gif"
              alt=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </noscript>
        </body>
      </Html>
    );
  }
}

export default PhundDocument;
