describe('table', () => {

    beforeEach(() => {
        cy.dev('YopbfABjU')
    })


    it('create a new text-block', () => {
        cy.getLastBlock()
        .click()
        .type('{enter}')
    })
  })