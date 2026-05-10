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
      </Head>
      <Component {...pageProps} />
    </>
  );
}
