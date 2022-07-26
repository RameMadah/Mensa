export default {
  oidc: {
    clientId: "0oa5p9uwfkVNHh56f5d7",
    issuer: "https://dev-63755581.okta.com/oauth2/default",
    redirectUri: process.env.FRONTEND_BASE_URL + "/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    useInteractionCodeFlow: true,
  },
};
