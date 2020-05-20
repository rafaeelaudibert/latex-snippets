Cypress.Commands.add( 'login', () => {
  const getNetlifyIframe = () => {
    return cy
      .get( '#netlify-identity-widget' )
      .its( '0.contentDocument.body' )
      .then( cy.wrap )
  }

  const netlifyIdentityDevelopmentEndpoint = 'https://latex-snippets.netlify.app'
  const netlifyIdentityLogin = Cypress.env( 'USER_LOGIN' )
  const netlifyIdentityPassword = Cypress.env( 'USER_PASSWORD' )

  cy.get( '[data-cy=login-button]' ).click()

  getNetlifyIframe()
    .find( 'input' )
    .then( cy.wrap )
    .type( netlifyIdentityDevelopmentEndpoint )

  getNetlifyIframe()
    .find( '[type=submit]' )
    .then( cy.wrap )
    .click()

  getNetlifyIframe()
    .find( '[type=email]' )
    .then( cy.wrap )
    .type( netlifyIdentityLogin )

  getNetlifyIframe()
    .find( '[type=password]' )
    .then( cy.wrap )
    .type( netlifyIdentityPassword, { force: true } )

  getNetlifyIframe()
    .find( '[type=submit]' )
    .then( cy.wrap )
    .click()

  getNetlifyIframe()
    .find( '.modalContent' )
    .find( '.btn.btnClose' )
    .click()

  cy.get( '[data-cy=logout-button]', { timeout: 10000 } )
} )

Cypress.Commands.add( 'logout', () => {
  cy.get( '[data-cy=logout-button]' ).click()
} )
