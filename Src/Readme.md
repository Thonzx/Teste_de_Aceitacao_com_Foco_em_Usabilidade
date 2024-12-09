### **README.md - Pasta `Src`**

---

# **Código-Fonte do Sistema Book Store**

Esta pasta contém todo o código-fonte e os arquivos relacionados ao sistema **Book Store**, incluindo o banco de dados e os arquivos do servidor. Certifique-se de seguir as instruções abaixo para configurar corretamente o ambiente de desenvolvimento e execução.

---

## **Estrutura da Pasta**

- **Banco_de_Dados/**  
  Contém o arquivo SQL necessário para configurar o banco de dados.  
  - **Recomendação:** Utilize o MySQL Workbench para importar e configurar o banco de dados.  

- **Bookstore_Master/**  
  Diretório com o código-fonte principal do sistema.  
  - **Recomendação:** Utilize o Visual Studio Code para abrir e editar o código.  

---

## **Requisitos do Sistema**

- **Servidor Local:**  
  Instale e configure o XAMPP ou outro servidor local compatível com PHP e MySQL.

- **Node.js:**  
  Certifique-se de que o Node.js está instalado em sua máquina.

- **Banco de Dados:**  
  Importe o arquivo disponível em `Banco_de_Dados/` para configurar o banco de dados do sistema no MySQL Workbench.

---

## **Instruções para Execução**

1. **Configurar o Banco de Dados:**
   - Abra o MySQL Workbench.
   - Importe o arquivo SQL da pasta `Banco_de_Dados/`.
   - Certifique-se de que o banco está ativo no servidor.

2. **Configurar o Servidor Local:**
   - Abra o XAMPP e inicie os serviços **Apache** e **MySQL**.
   - Verifique se o MySQL está configurado no mesmo host e porta utilizados pelo sistema.

3. **Iniciar o Sistema:**
   - Navegue até a pasta `Bookstore_Master/` no terminal.
   - Execute o comando `node index.js` para iniciar o servidor no localhost.

4. **Acessar o Sistema:**
   - Abra seu navegador e acesse `http://localhost:3000` para visualizar o sistema funcionando.

---

## **Observações**

- Certifique-se de que todas as dependências do sistema estão instaladas (use `npm install` no diretório `Bookstore_Master/` caso necessário).
- Caso encontre erros ao iniciar o sistema, verifique o arquivo `config.js` para garantir que as configurações do banco de dados estão corretas.
