// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('dev', (doc) => {
    if (typeof(doc) === 'undefined'){
        cy.visit(' http://127.0.0.1:4000')
    }else{
        cy.visit(' http://127.0.0.1:4000/?doc='+doc)
    }
 });

 //****************************  block  ****************************

 Cypress.Commands.add('getblockById', (doc) => {
    if (typeof(doc) === 'undefined'){
        cy.visit(' http://127.0.0.1:4000')
    }else{
        cy.visit(' http://127.0.0.1:4000/?doc='+doc)
    }
 });

 Cypress.Commands.add('getBlockById', (bolckId) => {
    return null
 });

 Cypress.Commands.add('getBlocksByType', (doc) => {
    return null
 });

 // index = type number
 Cypress.Commands.add('getBlockByIndex', (index) => {
    return null
 });

 // index = type number
 Cypress.Commands.add('getLastBlock', (index) => {
    cy.get('div[data-type="editor-block"]').last()
 });
  //****************************  block  ****************************