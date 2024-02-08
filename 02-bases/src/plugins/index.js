const { getUUID } = require("./get-id.plugin.js");
const { getAge } = require("./get-age.plugin.js");
const { httpClienPlugin } = require("./http-client.plugin.js");

module.exports = {
  getUUID,
  getAge,
  httpClienPlugin,
};
