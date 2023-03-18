describe('Transações', () => {
    beforeEach(()=>{

        cy.visit('https://devfinance-agilizei.netlify.app/#');
    });

    it('Cadastrar uma entrada', () => {
       
        criarTransacao('Freela', 250)

        cy.get('.description').should('have.text' ,'Freela')
    });

    it('Cadastrar uma Saída', () => {

        criarTransacao('Cinema' , -45)
        cy.get('.description').should('have.text' ,'Cinema')

    });

    it('Excluir transação', () => {
        criarTransacao('Freela 2' , 100)
        criarTransacao('Mesada' , 10)
        cy.contains('.description', 'Freela 2') //td > referencia
        .parent() // tr (linha elemento pai)
        .find('img') //elemento que a gente precisa
        //.siblings() elementos irmãos
        //.children() elementos filhos dos elementos irmãos
        .click()

        cy.get('tbody tr ').should('have.length', 1)

    });
});

function criarTransacao (descricao, valor) {

    cy.contains('Nova Transação').click();
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type('2023-03-01') //yyy-mm-dd
    cy.contains('button', 'Salvar').click()

}