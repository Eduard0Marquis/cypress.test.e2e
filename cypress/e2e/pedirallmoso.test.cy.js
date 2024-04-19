describe("acessa o google", () => {
  it("search", () => {
    cy.visit('https://www.agendaassessoria.com.br/')
    cy.get(':nth-child(2) > .btn-nav-line').click()
    cy.visit('https://www.agendaextranet.com.br/NovaExtranet/Login.aspx')
    cy.get('id="txtID"').type('2730')
    cy.get('id="txtSenha"').type('Eduardo2007')




  });
});
