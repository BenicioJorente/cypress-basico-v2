Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('benicio')
        cy.get('#lastName').type('jorente')
        cy.get('#email').type('benicio@gmail.com')
        cy.get('#open-text-area').type('teste')
        cy.contains('button', 'Enviar').click()
})
