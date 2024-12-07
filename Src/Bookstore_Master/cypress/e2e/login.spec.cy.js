describe('Teste de Login', () => {
    it('Login com credenciais válidas', () => {
      cy.visit('/login');
      cy.get('#email').type('wellth');
      cy.get('#password').type('110706');
      cy.get('#button-login').click({ force: true });
      cy.url().should('include', '/usuario');
      cy.contains('Meu Perfil').should('be.visible');
    });
  
    it('Login com senha incorreta', () => {
      cy.visit('/login');
      cy.get('#email').type('wellythonsouza105@gmail.com');
      cy.get('#password').type('senhaErrada');
      cy.get('#button-login').click({ force: true });
      cy.contains('Senha incorreta.').should('be.visible');
    });
  
    it('Login com usuário inexistente', () => {
      cy.visit('/login');
      cy.get('#email').type('naoexiste@teste.com');
      cy.get('#password').type('senha123');
      cy.get('#button-login').click({ force: true });
      cy.contains('Usuário não encontrado').should('be.visible');
    });
  });
  