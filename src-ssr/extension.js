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
  app.use("/api/profile/login", bodyParser.json(), function(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ error: "Invalid request" });
    }
    let options = {
      method: "POST",
      uri: API_URL + "/profile/login",
      body: {
        email,
        password
      },
      json: true
    };
    rp(options)
      .then(function(body) {
        const { token, user, xsrf } = body;
        res.cookie("_JWT_WEB", token, {
          maxAge: 60 * 60 * 1000 * 24 * 7, //1 week
          httpOnly: true,
          sameSite: "Strict",
          secure: prod
        });
        return res.status(200).send({ user, xsrf });
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

  app.use("/api/profile/register", bodyParser.json(), function(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ error: "Invalid request" });
    }
    let options = {
      method: "POST",
      uri: API_URL + "/profile/register",
      body: {
        ...req.body
      },
      json: true
    };
    rp(options)
      .then(function(body) {
        const { token, user, xsrf } = body;
        res.cookie("_JWT_WEB", token, {
          maxAge: 60 * 60 * 1000 * 24 * 7, //1 week
          httpOnly: true,
          sameSite: "Strict",
          secure: prod
        });
        return res.status(200).send({ user, xsrf });
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

  app.use("/api/profile/refresh", cookieParser(), function(req, res) {
    console.log(req.originalUrl, req.path, req.query);
    if (!req.cookies._JWT_WEB || !req.headers["x-csrf-token"]) {
      return res.status(403).send({
        error: "Not authorized to access this resource."
      });
    }
    let options = {
      method: "POST",
      uri: API_URL + "/profile/refresh",
      headers: {
        Authorization: "Bearer " + req.cookies._JWT_WEB,
        "x-csrf-token": req.headers["x-csrf-token"]
      },
      json: true
    };
    rp(options)
      .then(function(body) {
        if (!body) return res.status(200).send();
        const { token, xsrf } = body;
        // console.log(token, xsrf);
        res.cookie("_JWT_WEB", token, {
          maxAge: 60 * 60 * 1000 * 24 * 7, //1 week
          httpOnly: true,
          sameSite: "Strict",
          secure: prod
        });

        return res.send({ xsrf });
      })
      .catch(function(err) {
        const { response } = err;
        if (response) {
          return res.status(response.statusCode).send(response.body);
        } else {
          console.log("err", err);
          return res.status(500).send({
            error: "Unexpected error has occurred."
          });
        }
      });
  });

  app.use("/api/basket", cookieParser(), bodyParser.json(), function(req, res) {
    console.log(req.originalUrl, req.path, req.query);

    let headers = {};
    if (req.cookies._JWT_WEB_CART) {
      headers["x-cart"] = req.cookies._JWT_WEB_CART;
    }
    if (req.headers["x-csrf-cart"]) {
      headers["x-csrf-cart"] = req.headers["x-csrf-cart"];
    }
    let options = {
      method: req.method,
      uri: API_URL + "/basket",
      headers: {
        ...headers
      },
      body: {
        ...req.body
      },
      json: true
    };
    rp(options)
      .then(function(body) {
        if (!body) return res.status(200).send();
        const { token, xsrf, count } = body;
        if (token && xsrf && count) {
          res.cookie("_JWT_WEB_CART", token, {
            maxAge: 60 * 60 * 1000 * 24 * 7, //1 week
            httpOnly: true,
            sameSite: "Strict",
            secure: prod
          });
          return res
            .status(201)
            .send({ message: "New basket/card created.", xsrf, count });
        } else {
          return res.status(200).send(body);
        }
      })
      .catch(function(err) {
        const { response } = err;
        if (response) {
          return res.status(response.statusCode).send(response.body);
        } else {
          console.log("err", err);
          return res.status(500).send({
            error: "Unexpected error has occurred."
          });
        }
      });
  });

  app.use("/api", cookieParser(), function(req, res) {
    console.log(req.originalUrl, req.path, req.query);
    // console.log(req.headers);
    const url = API_URL + req.path;

    // Attach Auth
    if (req.cookies._JWT_WEB) {
      req.headers.authorization = "Bearer " + req.cookies._JWT_WEB;
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
