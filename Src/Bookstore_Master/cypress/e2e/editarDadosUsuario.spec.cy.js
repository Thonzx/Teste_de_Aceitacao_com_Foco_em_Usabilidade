describe('Teste de Edição de Dados do Usuário', () => {
  // Realiza login antes de cada teste
  beforeEach(() => {
    // Realiza o login antes de cada teste
    cy.visit('/login');
    cy.get('#email').type('wellythonsouza105@gmail.com'); // Preencha com as credenciais válidas
    cy.get('#password').type('novaSenha123');
    cy.contains('Entrar').click(); // Substitua 'Entrar' pelo texto visível no botão
    cy.url().should('include', '/usuario');
    cy.contains('Meu Perfil').should('be.visible'); // Verifica se o login foi bem-sucedido
});

  it('Deve atualizar os dados pessoais do usuário', () => {
    cy.visit('/editar-usuario');
    cy.get('#nome').clear().type('Wellython Atualizado');
    cy.get('#sobrenome').clear().type('Souza Atualizado');
    cy.get('#email').clear().type('wellythonsouza105_atualizado@gmail.com');
    cy.get('#telefone').clear().type('92995338752'); // Novo telefone
    cy.get('#whatsapp').clear().type('92995338752'); // Novo WhatsApp
    cy.get('#button-edit-user').click({ force: true });
    
    // Verifica se a mensagem de sucesso foi exibida
    cy.contains('Dados atualizados com sucesso').should('be.visible');
  });

  it('Deve alterar a senha do usuário', () => {
    cy.visit('/editar-usuario');
    cy.get('#password').type('novaSenha123');
    cy.get('#confirma_password').type('novaSenha123');
    cy.get('#button-edit-user').click({ force: true });
    
    // Verifica se a mensagem de sucesso foi exibida
    cy.contains('Senha alterada com sucesso').should('be.visible');
  });

  it('Deve exibir erro ao tentar alterar com senhas diferentes', () => {
    cy.visit('/editar-usuario');
    cy.get('#password').type('novaSenha123');
    cy.get('#confirma_password').type('senhaErrada');
    cy.get('#button-edit-user').click({ force: true });
    
    // Verifica se a mensagem de erro foi exibida
    cy.contains('As senhas não coincidem').should('be.visible');
  });
});
