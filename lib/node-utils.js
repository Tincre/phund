import jwt from "jsonwebtoken";
/**
 * Encode (and sign) a given object as JWT.
 *
 * @param data object to encode in base64 and sign via HMAC and the given
 *     passphrase
 * @param passphrase string secret passphrase for producing the HMAC hash of the
 *     data
 * @returns string JWT token
 */
function encodeJwt(data, passphrase) {
  const token = jwt.sign(data, passphrase);
  return token;
}
/**
 * Log an api func error given the route string and error object.
 *
 * @param route string route e.g. /api/docs
 * @param error Error error object, hopefully including a message to be printed
 *
 * @returns string error message appended with route information
 */
function logApiError(route, error) {
  const msg = `Error in route ${route}, not raising! ${error?.message}`;
  console.error(msg);
  return msg;
}
/*
 * Return a string content security policy for this site given a nonce.
 *
 * @param isProd boolean set to true if production
 *
 * @returns string Content Security Policy
 */
function getCsp(isProd) {
  let imgSrc = "res.cloudinary.com *.tincre.com cdn.sanity.io";
  let csp = ``;
  csp += `base-uri 'self';`;
  csp += `form-action 'self' https://discord.gg https://discord.com/channels/865659205443518534`;
  csp += `default-src 'self';`;
  csp += `script-src 'self' ${isProd ? "" : "'unsafe-eval'"} *.tincre.com;`; // NextJS requires 'unsafe-eval'
  // in dev (faster source maps)
  csp += `style-src 'self' https://fonts.googleapis.com 'unsafe-inline' data:;`; // NextJS requires 'unsafe-inline'
  csp += `img-src 'self' ${imgSrc} data: 'unsafe-inline' blob:;`;
  csp += `font-src 'self' https://fonts.gstatic.com;`; // TODO
  csp += `frame-src *;`; // TODO
  csp += `media-src *;`; // TODO
  csp += `object-src 'self';`;
  csp += `connect-src 'self' https://vitals.vercel-insights.com`;
  return csp;
}

export { getCsp, logApiError, encodeJwt };
