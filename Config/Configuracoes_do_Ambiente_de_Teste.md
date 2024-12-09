# **Configuração do Ambiente de Teste**

Este documento descreve os requisitos e as etapas para configurar o ambiente necessário para a realização dos testes de usabilidade do sistema **Book Store**.

---

## **1. Equipamentos**

### **1.1. Participante**
Os participantes utilizarão:
- **Dispositivo:** Notebook.
- **Sistema Operacional:**  
  - **Opção 1:** Windows 10 (ou superior).  
  - **Opção 2:** Ubuntu 22.04 LTS (ou superior).  
- **Navegador Web:** Google Chrome (versão 116 ou superior).  
- **Resolução de Tela:**  
  - Mínima: 1366x768 pixels.  
  - Recomendada: 1920x1080 pixels.

### **1.2. Facilitador**
O facilitador utilizará:
- **Dispositivo:** Notebook com webcam e microfone embutidos.
- **Software de Gravação:** Gravador de Tela do Windows.
- **Ferramentas de Registro:**
  - Planilha para coleta de métricas.
  - Cronômetro para medir o tempo das tarefas.
  - Bloco de notas.

---

## **2. Rede**
- **Conexão à Internet:**
  - Velocidade mínima: 10 Mbps para upload e download.
  - Rede Wi-Fi ou cabeada, testada antes do início da sessão.
- **Endereço do Sistema:**  
  - Localhost (para servidores locais): `http://localhost:3000`.  

---

## **3. Ferramentas e Software**

### **3.1. Software Necessário**
- **Para Gravação de Tela:**
  Gravador de Tela do Windows  
- **Para Navegação:**
  - Google Chrome (instale em: [https://www.google.com/chrome](https://www.google.com/chrome)).
- **Para Coleta de Feedback:**
  - Formulários Google.
- **Para Anotações e Métricas:**
  - Microsoft Excel.

---

## **4. Sistema: Book Store**

### **4.1. Requisitos do Sistema**
- **Frontend:**  
  - Framework: React.  
  - Dependências: Node.js (versão 16 ou superior).  
- **Backend:**  
  - Framework: Node.js.  
  - Banco de Dados: MySQL (versão 8 ou superior).  

### **4.2. Comandos para Inicialização**
1. **Para o Backend:**
   ```cmd
   node index.js
   ```

### **4.3. Credenciais de Acesso**
- Usuário já cadastrado:  
  - **E-mail:** teste@bookstore.com  
  - **Senha:** 123456  
- Banco de Dados (configuração local):
  ```env
  DB_HOST=localhost
  DB_USER=
  DB_PASSWORD=
  DB_NAME=bookstore
  ```

---

## **5. Ambiente de Teste**

### **5.1. Configuração da Sala**
- **Iluminação:** Sala bem iluminada, sem reflexos na tela.  
- **Ruído:** Ambiente silencioso para minimizar distrações e garantir gravações claras.  
- **Conforto:**  
  - Cadeiras ajustáveis.  
  - Espaço suficiente para os equipamentos.

### **5.2. Itens Necessários**
- Termo de Consentimento Livre e Esclarecido (TCLE) impresso ou digital.  
- Roteiro de tarefas para o participante (impresso ou digital).  
- Bloco de notas para observações manuais.  

---

## **6. Pré-Teste: Verificação**

### **6.1. Checklist**
- O sistema está acessível no endereço correto http://localhost:3000? ✅  
- O login funciona com as credenciais fornecidas? ✅  
- A barra de busca retorna resultados esperados? ✅  
- Os formulários (cadastro de usuário, adicionar livro) estão funcionando? ✅  

### **6.2. Teste Piloto**
- Realizar um teste piloto para validar:  
  - Clareza do roteiro.  
  - Funcionalidade do sistema.  
  - Configuração correta dos equipamentos.  

---

## **7. Responsáveis**
- **Facilitador Principal:** Wellython Salmo de Souza Sá 
- **Equipe de Apoio:** Carlos Breno, Bruna Miranda e Julia Farias  
