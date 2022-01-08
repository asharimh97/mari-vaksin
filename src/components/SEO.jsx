import Head from "next/head";

function SEO() {
  const meta = {
    title: "💉 Mari Vaksin!",
    description: "Website pengecekan ketersediaan vaksin Kota Semarang",
    color: "#FFF",
    type: "website",
    // TODO: Change it to env variable and import it
    url: "https://mari-vaksin.vercel.app",
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={meta.color} />

      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      <meta name="og:type" content={meta.type} />
      <meta name="og:title" content={meta.title} />
      <meta name="og:site_name" content={meta.title} />
      <meta name="og:url" content={meta.url} />
      <meta name="og:description" content={meta.description} />
      <meta name="og:image" href="/favicon.ico" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@asharimh97" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" href="/favicon.ico" />
      <meta name="twitter:url" content={meta.url} />
    </Head>
  );
}

export default SEO;
