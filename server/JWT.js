const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

const createAccessTokens = (user) => {
  const accessToken = sign({ auth: true }, process.env.PASS_SECRET);

  return accessToken;
};

const createCustomerTokens = (user) => {
  const customerToken = sign(
    { pseudonym: user.pseudonym, id: user.id },
    process.env.SESSION_SECRET
  );

  return customerToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken)
    return res.status(400).json({ error: "Passcode Incorrect!" });

  try {
    const validToken = verify(accessToken, process.env.PASS_SECRET);
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res
      .status(400)
      .json({ error: err })
      .send("You Have NOT Been Authenticated");
  }
};

const validateTokens = (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  const customerToken = req.cookies["customer-token"];

  if (!accessToken) {
    return res.status(404).json({ auth: false, passGiven: false });
  } else if (!customerToken) {
    return res.status(404).json({
      auth: false,
      passGiven: true,
    });
  } else {
    try {
      const validAccessToken = verify(accessToken, process.env.PASS_SECRET);
      const validCustomerToken = verify(
        customerToken,
        process.env.SESSION_SECRET,
        (err, decoded) => {
          if (validAccessToken && !err) {
            req.authenticated = true;
            res.status(200).send({
              auth: true,
              customerId: decoded.id,
              customer: decoded.pseudonym,
            });
          }
        }
      );
    } catch (err) {
      return res.status(404).json({ error: err }).send({ auth: false });
    }
  }
};

module.exports = {
  createAccessTokens,
  createCustomerTokens,
  validateToken,
  validateTokens,
};
