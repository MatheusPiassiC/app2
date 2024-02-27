# app2
    Este é um app de estudos feito utilizando React-Native e Expo,
    seguindo como base o vídeo do canal Sujeito Programador.

    Em sua versão atual, o app possui uma tela de login funcional,
    onde cada usuário tem seu próprio banco de senhas. O armazenamento 
    das senhas e usuários foi feito usando AsyncStorage (nos arquivos
    useAuth.js, para usuários, e useStorage.js, para as senhas geradas).

    Atualmente estou trabalhando em algumas estilizações do app, sendo
    que o próximo passo será a utilização do Firebase como banco de dados
    para as autenticações.

# funcionalidades
    Na pagina "login", é possível realizar o cadastro do usuário, ou
    entrar nas outras páginas com credenciais já existentes.
    
    Na página "home" pode-se utilizar uo slide para definir o tamanho da 
    senha gerada, e ao clicar em gerar senha abre-se um modal, onde ao
    clicar no espaço da senha é possível copiá-la e em salvar senha 
    pode-se armazená-la localmente.

    Na aba "passwords" ficam as senhas salvas, onde é possível alterar 
    a visibilidade destas, e segurando o clique a senha é 
    apagada definitivamente.

# próximos passos
    -Integração com Firebase;
    -Estilização da página de login;
    -Definição e uma paleta de cores;
    -Inserção de cards selecionáveis (sem motivo exato, só estudo);
    