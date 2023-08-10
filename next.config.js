const path = require("path");

const enforceModuleResolution = (webpackConfig, moduleName) => {
  webpackConfig.resolve.alias[moduleName] = path.join(
    __dirname,
    "node_modules",
    moduleName
  );
};

module.exports = {
  basePath: "/Arcadia",

  webpack: config => {
    ["react", "react-dom"].forEach(moduleName =>
      enforceModuleResolution(config, moduleName)
    );

    return config;
  }
};
