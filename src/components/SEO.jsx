import Head from "next/head";

function SEO() {
  return (
    <Head>
      <title>Mari Vaksin!</title>
      <meta name="title" content="Mari Vaksin!" />
      <meta
        name="description"
        content="Website pengecekan ketersediaan vaksin Kota Semarang"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      <meta name="og:type" content="website" />
      <meta name="og:title" content="Mari Vaksin!" />
      <meta name="og:url" content="https://mari-vaksin.vercel.app" />
      <meta
        name="og:description"
        content="Website pengecekan ketersediaan vaksin Kota Semarang"
      />
      <meta name="og:image" href="/favicon.ico" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@asharimh97" />
      <meta name="twitter:title" content="Mari Vaksin!" />
      <meta
        name="twitter:description"
        content="Website pengecekan ketersediaan Kota Semarang"
      />
      <meta name="twitter:image" href="/favicon.ico" />
    </Head>
  );
}

export default SEO;
