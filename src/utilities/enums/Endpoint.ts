// External link (endpoints api)
const BASE_URL_API = process.env.NEXT_PUBLIC_API_URL;
const WEB_DOMAIN = process.env.WEB_URL;
const Endpoints = {
  BASE_URL: BASE_URL_API,
  WEB_DOMAIN: WEB_DOMAIN,
  AUTH: {
    CHECK_ACCOUNT: BASE_URL_API + "/auth/check-account",
    SIGN_UP: BASE_URL_API + "/auth/sign/up",
    LOG_IN: BASE_URL_API + "/auth/sign/in",
    REFRESH_TOKEN: BASE_URL_API + "/api/v1/token/renew",
  },
};

export default Endpoints;
