import { createApp } from "vue";
import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import App from "./App.vue";
import router from "./router";
import OktaVue from "@okta/okta-vue";
import { oktaAuth } from "./okta";
//import { OktaAuth } from "@okta/okta-auth-js";
//import sampleConfig from "@/config";
//const oktaAuth = new OktaAuth(sampleConfig.oidc);

createApp(App)
  .use(router)
  .use(OktaVue, {
    oktaAuth,
    onAuthRequired: () => {
      router.push("/login");
    },
    onAuthResume: () => {
      router.push("/login");
    },
  })
  .mount("#app");
//createApp(App).use(router).mount("#app");
