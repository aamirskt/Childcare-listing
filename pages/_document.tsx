import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
 <Script
  // src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA1eL5WysMmFb7if7R2HmUUC5PPva7vkvo&loading=async&v=beta&libraries=marker`}
  src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAWfuNoyVahS2oLLE3AqfP7hSRN8n2ZYAM&loading=async&v=beta&libraries=marker`}
  strategy="beforeInteractive"
/>
        {/* ✅ Inject external script into <head> */}
       <meta name="google-site-verification" content="9xalqc03D1RVzw2sFNQYF5BCrbLa7p0hV4C3Um6J2Sw" />
          <Script
          id="clarity-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r9b6tk4h2s");`,
          }}
        />
         {/* Initialize gtag */}
        <Script
          id="gtag-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XBMJYEFH68');
            `,
          }}
        /> 

         {/* Google Analytics */}
          {/* ✅ GTM Script (head) */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MDSN76HS');
        `}
      </Script>
         <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="RQ1d/6ogPVINNzACLhF/kg"
        strategy="lazyOnload"
      />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XBMJYEFH68"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XBMJYEFH68');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,c,o,a,f){
                e.fbq||(o=e.fbq=function(){o.callMethod ?
                o.callMethod.apply(o,arguments) : o.queue.push(arguments)},
                e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version='2.0',
                o.queue=[],(a=t.createElement(n)).async=!0,
                a.src='https://connect.facebook.net/en_US/fbevents.js',
                (f=t.getElementsByTagName(n)[0])
                .parentNode.insertBefore(a,f))}(window, document,'script');
              fbq('init', '1700519280532377');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Structured Data - Multiple JSON-LD blocks */}
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              "name": "Find Best Daycares in USA | ChildrenKARE",
              "alternateName": "ChildrenKARE",
              "url": "https://www.childrenkare.com/",
              "logo": "https://childrenkare.com/logo.png/",
              "sameAs": [
                "https://www.facebook.com/childrenkareofficial",
                "https://twitter.com/childrenkare",
                "https://www.instagram.com/children.kare/",
                "https://www.youtube.com/@Children_KARE",
                "https://www.pinterest.com/childrenkare/",
                "https://www.childrenkare.com/"
              ]
            }),
          }}
        />

        <Script
          id="ld-author"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Author",
              "name": "ChildrenKare",
              "url": "https://www.childrenkare.com/",
              "image": "https://childrenkare.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/childrenkareofficial",
                "https://twitter.com/childrenkare",
                "https://www.instagram.com/children.kare/",
                "https://www.youtube.com/@Children_KARE",
                "https://www.pinterest.com/childrenkare/"
              ],
              "jobTitle": "Author",
              "worksFor": {
                "@type": "Website",
                "name": "ChildrenKare"
              }
            }),
          }}
        />

        <Script
          id="ld-faq"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Why Daycare is Good for your Child?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Daycare promotes early learning, socialization, and skill development, laying a foundation for a child's future education and well-being."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to Find a Daycare for Your Child with ChildrenKare?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Find the perfect daycare for your child effortlessly with ChildrenKare by entering your location and reviewing the provided information of the daycare centers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are Daycares healthy for kids?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, daycare supports physical, social, and cognitive development, exposure to learning experiences, and the development of social skills."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to find Nearby Daycares?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use ChildrenKare's platform, enter location preferences, and browse a list of local daycares with detailed information and reviews."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do Daycares ensure child safety?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Daycares prioritize safety through staff training, facility inspections, health protocols, secure entry/exit, and emergency response plans. At ChildrenKare, we ensure licensing and accreditation of each center listed on our platform"
                  }
                }
              ]
            }),
          }}
        />

        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Daycares Near Me | ChildrenKARE",
              "image": "https://childrenkare.com/logo.png",
              "@id": "1245-0722-1534-6697-3514",
              "url": "https://childrenkare.com/",
              "telephone": "(720) 316-3294",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6418 Sherman Peak Ct, Castle Pines, CO 80108",
                "addressLocality": "Castle Pines",
                "addressRegion": "CO",
                "postalCode": "80108",
                "addressCountry": "US"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/childrenkareofficial",
                "https://twitter.com/children_kare",
                "https://www.instagram.com/children.kare/",
                "https://www.youtube.com/@Children_KARE",
                "https://www.pinterest.com/childrenkare/",
                "https://childrenkare.com/"
              ]
            }),
          }}
        />
</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
