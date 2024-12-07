const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sax61i',
  e2e: {
    baseUrl: "http://localhost:3000", // Substitua pela URL da sua aplicação
    setupNodeEvents(on, config) {
      // Configurações adicionais, se necessário
    },
  },
});
