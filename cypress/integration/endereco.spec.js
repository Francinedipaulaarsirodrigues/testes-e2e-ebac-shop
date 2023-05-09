/// <reference types="cypress" />

import EndereçoPage from "../support/page_objects/Endereço.page";

describe('Funcionalidade endereco -Faturamento e entrega.', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario,dados.senha)
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EndereçoPage.editarEnderecoFaturamento('Flavio', 'Araujo', 'Ebac', 'Brasil','av Brasil',' 3100', 'São Paulo', 'São Paulo', '01000100',',11989898998','flavio@templateSettings.com')
        cy.get('.woocommerce-message').shoud('contain', 'Endereço alterado com sucesso.')

    });
});