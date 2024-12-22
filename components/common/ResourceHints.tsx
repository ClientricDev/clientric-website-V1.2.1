export default function ResourceHints() {
  return (
    <>
      {/* Preconnect to required origins */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://salesiq.zohopublic.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://salesiq.zohopublic.com" />
      
      {/* Preload critical assets */}
      <link 
        rel="preload" 
        href="/images/clientric-logo.png" 
        as="image"
        type="image/png"
      />
    </>
  );
}