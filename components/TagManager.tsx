import Script from 'next/script'

const GA_MEASUREMENT_ID = 'GTM-K9XWCBT8';

function TagManager() {
  const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  const scriptContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA_MEASUREMENT_ID}');
  `;

  return (
    <div className="container">
      <Script src={scriptSrc} />
      <Script id="google-analytics">{scriptContent}</Script>
    </div>
  );
}

export default TagManager