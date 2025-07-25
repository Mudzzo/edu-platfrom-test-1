const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "corevera",
    projectName: "payment", 
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
   
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"], 
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  });
};
