/* eslint-disable import/no-extraneous-dependencies */
const rewireEslint = require('react-app-rewire-eslint');
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = (config, env) => {
  config = rewireStyledComponents(config, env);
  config = rewireEslint(config, env);
  return config;
};
