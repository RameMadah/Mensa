import OktaSignIn from "@okta/okta-signin-widget";
import { OktaAuth } from "@okta/okta-auth-js";

const oktaSignIn = new OktaSignIn({
  baseUrl: "https://dev-63755581.okta.com",
  clientId: "0oa5p9uwfkVNHh56f5d7",
  redirectUri: "https://unirest.herokuapp.com/login/callback",
  authParams: {
    pkce: true,
    issuer: "https://dev-63755581.okta.com/oauth2/default",
    display: "page",
    scopes: ["openid", "profile", "email"],
  },
  features: { registration: true },
});

const oktaAuth = new OktaAuth({
  issuer: "https://dev-63755581.okta.com/oauth2/default",
  clientId: "0oa5p9uwfkVNHh56f5d7",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
});

export { oktaAuth, oktaSignIn };
