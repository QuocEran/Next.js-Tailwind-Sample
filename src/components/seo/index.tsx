import moment from "moment";
import Head from "next/head";
import { ISeo } from "types/response/base/IBaseResponse";
import Endpoints from "utilities/enums/Endpoint";
import { getImageUrl } from "utilities/function/getImageUrl";

interface Props extends ISeo {}

const Seo = (props: Props) => {
  return (
    <>
      <Head>
        <title>{props.metaTitle}</title>
        <meta name="description" content={props.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content={Endpoints.WEB_DOMAIN + props.url} />
        <meta property="og:type" content={props.type ? props.type : "website"} />
        <meta property="og:title" content={props.metaTitle} />
        <meta property="og:description" content={props.metaDescription} />
        <meta property="og:image" content={getImageUrl(props.metaImage?.data?.attributes?.url)} />
        <meta property="og:image:alt" content={props.metaTitle} />
        <meta property="og:locale" content="vi_VN" />
        {/* <meta property="fb:app_id" content="551516870179582" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mltechsoft.com" />
        <meta name="twitter:title" content={props.metaTitle} />
        <meta name="twitter:description" content={props.metaDescription} />
        <meta name="twitter:image" content={getImageUrl(props.metaImage?.data?.attributes?.url)} />
        {/* <meta property="twitter:player" content={props?.ogProps.video} /> */}

        {props.metaRobots ? (
          <meta name="robots" content={props.metaRobots}></meta>
        ) : (
          <meta name="robots" content="index, follow, noodp"></meta>
        )}
        <meta name="robots" content="max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>

        {props.keywords && <meta name="keywords" content={props.keywords}></meta>}

        {props?.structuredData ? (
          <script async type="application/ld+json">
            {`${JSON.stringify(props.structuredData)}`}
          </script>
        ) : (
          <script async type="application/ld+json">
            {`${JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: props.metaTitle,
              author: {
                "@type": "WebSite",
                name: "MLTECH SOFT",
              },
              datePublished: moment(new Date()).format("YYYY-MM-DD"),
              description: props.metaDescription,
              prepTime: "PT20M",
            })}`}
          </script>
        )}

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG_ID}`}></script> */}
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GG_SITE_VERIFICATION} />
      </Head>
    </>
  );
};
export default Seo;
