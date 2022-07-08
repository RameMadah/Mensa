<template>
  <Keep-alive>
    <div class="login">
      <div id="okta-signin-container"></div>
    </div>
  </Keep-alive>
</template>

<script>
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import { oktaSignIn } from "@/okta";

export default {
  name: "LogIn",
  mounted: function () {
    this.$nextTick(function () {
      oktaSignIn.showSignInAndRedirect({ el: "#okta-signin-container" });
    });
  },
  unmounted() {
    // Remove the widget from the DOM on path change
    oktaSignIn.remove();
  },
};
</script>

<style scoped>
.login {
  background-color: #56973e;
}
#okta-sign-in input[type="text"]:focus {
  box-shadow: 0 0 8px #56973e !important;
}
#okta-sign-in {
  padding-top: 20px;
  background-color: #f7f7f7;
  backdrop-filter: blur(7px);
  box-shadow: #2a313b;
}
#okta-sign-in.auth-container .button-primary {
  color: #fff;
  background: #3c7328 linear-gradient(#56973e, #8ac774) !important;
  border-color: #3c7328 #56973e #56973e !important;
  box-shadow: 0 1px 0 rgb(0 0 0 / 15%), inset 0 1px 0 0 hsl(0deg 0% 100% / 10%);
}
</style>
