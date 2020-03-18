/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://localhost:5000', // the running FLASK api server url
  auth0: {
    url: 'coffee-shop-tenant', // the auth0 domain prefix
    audience: 'Coffee-Shope-Identifier', // the audience set for the auth0 app
    clientId: '9uSW4soI876GYVUJDhOKy2F9ozpOSLV0', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
