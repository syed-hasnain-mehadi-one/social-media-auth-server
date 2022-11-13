import passport from "passport";
import FacebookStrategy from "passport-facebook";
import GoogleStrategy from "passport-google-oauth20";

export const googleStrategies = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: "/auth/google/redirect",
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log("data-1", accessToken);
        console.log("data-2", refreshToken);
        console.log("data-3", profile);
        //
        return cb(null, profile);
      }
    )
  );
};

export const facebookStrategies = () => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: "/auth/facebook/redirect",
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log("data", accessToken, refreshToken, profile);
        return cb(numm, profile);
      }
    )
  );
};
