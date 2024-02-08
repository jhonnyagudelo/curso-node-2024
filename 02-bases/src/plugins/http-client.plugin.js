const axios = require("axios");

const httpClienPlugin = {
  get: async (url) => {
    const { data } = await axios.get(url);
    return data;
  },
  post: async (url, body) => { },
  put: async (url, body) => { },
  delete: async (id) => { },
};

module.exports = { httpClienPlugin };
