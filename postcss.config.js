const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const uncss = require("postcss-uncss");

module.exports = {
  plugins: [
    cssnano({
      preset: "default",
    }),
    autoprefixer({
      browsers: ["last 2 versions", "> 5%"],
    }),
    uncss({
      html: ["./index.html"],
    }),
  ],
};
