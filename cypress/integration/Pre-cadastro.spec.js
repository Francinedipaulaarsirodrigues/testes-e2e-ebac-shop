/// <reference types="cypress" />
var faker = required('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http:lojaebac.ebaconline.art/minha-conta/')
    });

    it('Deve completar o Pré Cadastro com sucesso', () => {
let nomeFaker = faker.name.fistName()
let sobrenomeFaker = faker.name.lastName()
let emailFaker = faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_fist_name').type(faker.name.fistName())
        cy.get('#account_last_name').type(faker.name.lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')

    });

    it('Deve completar o pré-cadastro com sucesso usando comandos custumizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha!@forte','Fabio', 'Araujo')
        
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
        
    });
});