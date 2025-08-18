# CT003 - Cadastro de novo usuário com credenciais válidas

**Descrição:**
Validar se o sistema permite o cadastro de um novo usuário utilizando credenciais corretas e campos obrigatórios preenchidos.

**Pré-condições:**
- Acessar a página de registro de usuário no sistema.
- Ter conexão com a internet.

**Passo a passo:**
1. Acessar o site do sistema.
2. Navegar até a página de registro de usuário.
3. Preencher todos os campos obrigatórios com dados válidos:
   - Firstname: `Novo`
   - Lastname: `Usuário`
   - Username: `Usersuccess`
   - Senha: `Senha@123`
   - Confirmação de senha: `Senha@123`
4. Clicar no botão **Sign Up**.

5. Verificar se após a criação do novo usuário válido com será redirecionado para a página de login.


**Resultado esperado:**
- O usuário deve ser redirecionado para a página de login e ser capaz de realizar o login.
- Após realizar o cadastro e o login, deve ser redirecionado para a página de perfil do sistema. 

**Resultado obtido:**
- O usuário foi redirecionado para a página de login após criar o novo usuário com sucesso.
- Após o login bem sucedido foi redirecionado para a página de perfil no sistema.

**Status:**
- Passou

## Evidências
**Tela de registro preenchida:**
![Tela de registro preenchida](./Imagens/cadastro-sucesso.png)

 **Login com novo usuario:**
![Mensagem de sucesso](./Imagens/novo-login.png)
