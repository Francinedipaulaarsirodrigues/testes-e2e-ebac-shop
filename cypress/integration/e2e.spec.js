/// <reference types="cypress" />
var faker = require( 'faker');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        //todo
        .contains('Abominable Hoodie')
        .click()

    });

    it.only('Deve adicionar 4 itens ao carrinho', () => {
        var quantidade = 4
        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade +' × “Abominable Hoodie” foram adicionados no seu carrinho.')

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        


});
        

    });


