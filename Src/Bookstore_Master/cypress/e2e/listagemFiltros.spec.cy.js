describe('Teste de Listagem e Filtros', () => {
    it('Deve exibir a lista completa de livros na tela de listagem', () => {
      cy.visit('/categoria');
      cy.get('.categories .category').should('have.length.greaterThan', 0); // Verifica que há categorias
    });
  
    it('Deve filtrar livros por categoria', () => {
      cy.visit('/categoria');
      cy.get('.sidebar a[href="#romance"]').click(); // Seleciona "Romance"
      cy.get('.categories .livros-categoria').should('contain', 'Romance'); // Verifica que os livros filtrados são de Romance
    });
  
    it('Deve exibir livros relacionados na página de detalhes', () => {
      cy.visit('/livro/1'); // Página de um livro específico
      cy.get('.livros-relacionados').should('be.visible'); // Verifica se a seção de "Livros Relacionados" está visível
    });
  });
  