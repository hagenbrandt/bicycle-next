/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {Cypress.PluginConfig}
 */
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor')
// import browserify from '@cypress/browserify-preprocessor'

module.exports = (on) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve('typescript'),
  }
  on('file:preprocessor', cucumber(options))
}
