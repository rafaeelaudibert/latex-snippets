const dotenvPlugin = require( 'cypress-dotenv' )

module.exports = ( _on, config ) => {
  config = dotenvPlugin( config )
  return config
}
