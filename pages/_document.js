import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/* Any additional head elements can be added here */}</Head>
        <body style={{ minHeight: "100vh" }}>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
