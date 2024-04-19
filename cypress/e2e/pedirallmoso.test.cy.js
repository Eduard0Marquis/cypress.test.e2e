import acesso from '../../cypress.env.json'

describe("acessa o google", () => {
  it("search", () => {
   
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Verifica se a mensagem de erro contém "Bootstrap's JavaScript requires jQuery"
      if (err.message.includes("Bootstrap's JavaScript requires jQuery")) {
        // Retorna false para ignorar o erro
        return false
      }
      // Retorna true para capturar e tratar outros erros
      return true
    })
    
    cy.visit('https://www.agendaextranet.com.br/NovaExtranet/ConfirmarCardapio.aspx') 
    
   
    cy.get('[id="txtID"]').type(acesso.usuario, {log :false})
    cy.get('[id="txtSenha"]').type(acesso.senha, {log:false}) 
    cy.get('[id="lnkLogin"]').click()
    

    Cypress.on('uncaught:exception', (err, runnable) => {
      // Verifica se a mensagem de erro contém "a.widget is not a function"
      if (err.message.includes("a.widget is not a function")) {
        // Retorna false para ignorar o erro
        return false;
      }
      // Retorna true para capturar e tratar outros erros
      return true;
    });

   cy.visit('https://www.agendaextranet.com.br/NovaExtranet/ConfirmarCardapio.aspx')



   //cy.get('ul.list-group').should(($element) => {
    //if ($element.text() === 'class="list-group-item') {
      // Execute uma ação se a condição for verdadeira
   //cy.get('id="rdComplemento_1"').click()
    //} else {
      // Execute uma ação se a condição for falsa
      //cy.get('.outro-seletor-alternativo').click();
   // }
  //});













   cy.get('[id="btnConfirmar"]').click()
    //cy.get('ul#ulMenuTopo .glyphicon.glyphicon-cutlery').click()


    //cy.visit('https://www.agendaextranet.com.br/NovaExtranet/Inicial.aspx')
   // cy.get('[window.openConfirmarCardapio.aspx','_blank').click()
  });
});
