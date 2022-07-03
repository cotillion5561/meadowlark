const env = process.env.NODE_ENV || 'development'
const credentials = require(`./credentials.${env}`)
console.log('credentials >>> ' + JSON.stringify(credentials) )
module.exports = { credentials }

/* use this to use config file in this project */
/* const { credentials } = require('./config') */