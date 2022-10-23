var express = require('express');
var router = express.Router();

/* GET home page. */
/**
 * This is the default end-point when someone attempts to access the SaaS application.
 * We show a message to the logged in user.
 * Format of the message: Hello <logon name>; your tenant subdomain is <consumer sub-domain>; your tenant zone id is <consumer tenant id>
 * The logon name will be specific to each user.
 * The tenant zone and sub domain will be the same for all users of one consumer(tenant).
 * Otherwise, if there is no AuthInfo object found, We show the message "Hello World" to users.
 */
 router.get("/", function(req, res, next) {
  try {
      var line1 = "Olá " + req.authInfo.getLogonName();
      var line2 = "seu tenant sub-domain é " + req.authInfo.getSubdomain();
      var line3 = "seu tenant zone id é " + req.authInfo.getZoneId();
      var responseMsg = line1 + "; " + line2 + "; " + line3;
      res.send(responseMsg);
  } catch (e) {
      console.log("Objeto AuthInfo não definido.");
      var responseMsg = "Olá mundo!";
      res.send(responseMsg);
  }
});

module.exports = router;
