import Script from 'next/script';
import { GA_TRACKING_ID } from '../../utils/analytics';

export default function AnalyticsScripts() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />

      {/* Zoho SalesIQ */}
      <Script
        id="zoho-salesiq-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}};`,
        }}
      />
      <Script
        id="zsiqscript"
        strategy="afterInteractive"
        src="https://salesiq.zohopublic.com/widget?wc=siqe73a0741b7bc8e6a1995be1cd13f3eeccfe9a52b97247499b92100b49cdbab10"
        defer
      />
    </>
  );
}