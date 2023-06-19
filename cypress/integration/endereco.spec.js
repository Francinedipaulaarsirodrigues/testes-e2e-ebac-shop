/// <reference types="cypress" />

import EndereçoPage from "../support/page_objects/Endereço.page";
const dadosEndereco = require( '../fixtures/endereco.json')

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

    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados.', () => {
        EndereçoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email

            )
        cy.get('.woocommerce-message').shoud('contain', 'Endereço alterado com sucesso.')

    });
});