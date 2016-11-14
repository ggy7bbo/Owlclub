AccountsTemplates.addFields([
    {
      _id: 'username',
      type: 'text',
      required: true,
      func: function(value){
          if (Meteor.isClient) {
              console.log("Validating username...");
              var self = this;
              Meteor.call("userExists", value, function(err, userExists){
                  if (!userExists)
                      self.setSuccess();
                  else
                      self.setError(userExists);
                  self.setValidating(false);
              });
              return;
          }
          // Server
          return Meteor.call("userExists", value);
      },
    },
    {
      _id: 'phone',
      type: 'tel',
      displayName: "Phone",
      required: true,
      func: function (number) {
          if (Meteor.isServer){
            if (isValidPhone(number))
                return false; // meaning no error!
            return true; // Validation error!
          }
      },
      errStr: 'Invalid Phone number!',
    }
]);

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/class',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
      navSignIn: "signIn",
      navSignOut: "signOut",
      optionalField: "optional",
      pwdLink_pre: "",
      pwdLink_link: "forgotPassword",
      pwdLink_suff: "",
      resendVerificationEmailLink_pre: "Verification email lost?",
      resendVerificationEmailLink_link: "Send again",
      resendVerificationEmailLink_suff: "",
      sep: "OR",
      signInLink_pre: "ifYouAlreadyHaveAnAccount",
      signInLink_link: "signin",
      signInLink_suff: "",
      signUpLink_pre: "dontHaveAnAccount",
      signUpLink_link: "signUp",
      signUpLink_suff: "",
      socialAdd: "add",
      socialConfigure: "configure",
      socialIcons: {
          "meteor-developer": "fa fa-rocket",
      },
      socialRemove: "remove",
      socialSignIn: "signIn",
      socialSignUp: "signUp",
      socialWith: "with",
      termsPreamble: "clickAgree",
      termsPrivacy: "privacyPolicy",
      termsAnd: "and",
      termsTerms: "terms",
      info: {
          emailSent: "info.emailSent",
          emailVerified: "info.emailVerified",
          pwdChanged: "info.passwordChanged",
          pwdReset: "info.passwordReset",
          pwdSet: "info.passwordReset",
          signUpVerifyEmail: "Successful Registration! Please check your email and follow the instructions.",
          verificationEmailSent: "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.",
      },
      inputIcons: {
          isValidating: "fa fa-spinner fa-spin",
          hasSuccess: "fa fa-check",
          hasError: "fa fa-times",
      },
      errors: {
          accountsCreationDisabled: "Client side accounts creation is disabled!!!",
          cannotRemoveService: "Cannot remove the only active service!",
          captchaVerification: "Captcha verification failed!",
          loginForbidden: "error.accounts.Login forbidden",
          mustBeLoggedIn: "error.accounts.Must be logged in",
          pwdMismatch: "error.pwdsDontMatch",
          validationErrors: "Validation Errors",
          verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",
      },
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});
