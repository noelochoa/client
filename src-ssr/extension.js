/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Note: This file is used for both PRODUCTION & DEVELOPMENT.
 * Note: Changes to this file (but not any file it imports!) are picked up by the
 * development server, but such updates are costly since the dev-server needs a reboot.
 */
var request = require("request");
var rp = require("request-promise");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

const API_URL = process.env.API_URL || "http://localhost:3000";
const prod = process.env.NODE_ENV.trim() === "production";

module.exports.extendApp = function({ app, ssr }) {
  /*
      API ROUTES
    */
  app.use("/api/users/login", bodyParser.json(), function(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ error: "Invalid request" });
    }
    let options = {
      method: "POST",
      uri: API_URL + "/users/login",
      body: {
        email,
        password
      },
      json: true
    };
    rp(options)
      .then(function(body) {
        const { token, cmsuser, xsrf } = body;
        res.cookie("_JWT_CMS", token, {
          maxAge: 60 * 60 * 1000 * 24 * 7, //1 week
          httpOnly: true,
          sameSite: "Strict",
          secure: prod
        });
        return res.status(200).send({ cmsuser, xsrf });
      })
      .catch(function(err) {
        const { response } = err;
        if (response) {
          return res.status(response.statusCode).send(response.body);
        } else {
          return res.status(500).send({
            error: "Unexpected error has occurred."
          });
        }
      });
  });

  app.use("/api", cookieParser(), function(req, res) {
    console.log(req.originalUrl, req.path, req.query);
    const url = API_URL + req.path;

    // Attach Auth
    if (req.cookies._JWT_CMS) {
      req.headers.authorization = "Bearer " + req.cookies._JWT_CMS;
    }
    const proxy = request({
      url: url,
      qs: req.query
    });
    proxy
      .on("error", err => {
        res.status(500).send({
          error: "Unexpected error has occurred."
        });
      })
      .pipe(res);

    req.pipe(proxy);
  });
};
