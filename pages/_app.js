import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Happy Mother&apos;s Day, Mom</title>
        <meta
          name="description"
          content="A little list of family adventures, shows, games, and day trips we can do together."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Happy Mother's Day, Mom" />
        <meta
          property="og:description"
          content="A little list of family adventures, shows, games, and day trips we can do together."
        />
        <meta property="og:image" content="https://murphymom.com/images/family.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://murphymom.com" />

        {/* Twitter / iMessage */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Happy Mother's Day, Mom" />
        <meta
          name="twitter:description"
          content="A little list of family adventures, shows, games, and day trips we can do together."
        />
        <meta name="twitter:image" content="https://murphymom.com/images/family.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
