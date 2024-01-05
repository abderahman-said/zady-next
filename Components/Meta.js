import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Script from 'next/script';

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
        <link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
        <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css" />
        <title>{title}</title>
      </Head>

      {/* <Script src="https://cdn.jsdelivr.net/npm/next-sidebar@1/assets/js/next-sidebar.min.js"></Script> */}
      {/* <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script> */}
      {/* <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script> */}
    </>
  );
};

Meta.defaultProps = {
  title: 'WebDev Newz',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev',
};

export default Meta;
