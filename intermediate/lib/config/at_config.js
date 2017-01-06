AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: false,
    sendVerificationEmail: true,
    lowercaseUsername: false,
    focusFirstInput: true,
    enforceEmailVerification: false,

    // Appearance
    showAddRemoveServices: true,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: true,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          google: "myGoogleIcon",
          "meteor-developer": "fa fa-rocket"
      },
      title: {
        changePwd: "Password Title",
        enrollAccount: "Enroll Title",
        forgotPwd: "Forgot Pwd Title",
        resetPwd: "Reset Pwd Title",
        signIn: "Sign In",
        signUp: "Sign Up",
        verifyEmail: "Verify Email",
      },
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
      }
    },
});

if (Meteor.isServer){
    Meteor.methods({
        "userExists": function(username){
            return !!Meteor.users.findOne({username: username});
        },
    });
}

AccountsTemplates.addField({
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
});

Accounts.config({
    loginExpirationInDays: 0.5 //15 minutes this dont work
});
