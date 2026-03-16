💬 PapoApp (PWA)

Aplicação Web desenvolvida como Progressive Web App (PWA) que funciona como uma plataforma de bate-papo online em tempo real.

O aplicativo permite comunicação entre usuários diretamente pelo navegador e também pode ser instalado no celular como um aplicativo, sem necessidade de loja de aplicativos.

O projeto foi desenvolvido utilizando HTML5, CSS3 e JavaScript puro, com armazenamento e sincronização de dados em tempo real utilizando Supabase.

A aplicação permite envio de texto, imagens, vídeos, áudios e documentos, além de recursos de personalização do perfil e interface do usuário.

🚀 Demonstração

🔗 Acesse a aplicação:

https://marciodom.github.io/Papoapp/

🎯 Funcionalidades

• 💬 Envio de mensagens em tempo real
• 🖼️ Compartilhamento de imagens
• 🎥 Envio de vídeos
• 🎤 Envio de áudios
• 📄 Compartilhamento de documentos
• 📷 Captura de imagem via webcam
• 👤 Alteração de foto de perfil
• 🎨 Personalização da cor de fundo do chat
• 🖼️ Personalização da imagem de fundo
• ⚡ Sincronização de dados em tempo real
• 📲 Instalação como aplicativo (PWA)
• 🌐 Funcionamento diretamente no navegador

🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

• Prática de JavaScript puro (Vanilla JS)
• Integração com banco de dados em tempo real
• Implementação de Progressive Web Apps (PWA)
• Deploy contínuo utilizando GitHub Pages
• Estruturação de aplicações web modernas
• Organização de projetos para portfólio profissional

🛠️ Tecnologias Utilizadas

• HTML5
• CSS3
• JavaScript (Vanilla JS)
• Supabase (Backend em tempo real)
• Web App Manifest
• Service Worker
• Git
• GitHub
• GitHub Pages

📂 Estrutura do Projeto

PapoApp/ 
│ 
├── index.html 
├── manifest.json 
├── sw.js 
│ 
├── icons/ 
│     ├── icon-192.png 
│     └── icon-512.png 
│    
├── uploads/ 
│    └── arquivos enviados pelos usuários 
│
└── README.md 

🔗 Integração com Supabase

O aplicativo utiliza Supabase como backend para fornecer funcionalidades em tempo real.

O Supabase é responsável por:

• armazenamento das mensagens do chat
• sincronização em tempo real entre usuários
• armazenamento de arquivos enviados
• gerenciamento de dados do aplicativo

A conexão é feita através da API JavaScript do Supabase utilizando a URL do projeto e a chave pública fornecida pelo serviço.

Exemplo de inicialização:

const supabase = supabase.createClient( "https://seu-projeto.supabase.co", "sua-anon-key" ); 

📲 Instalação como Aplicativo (PWA)

O aplicativo pode ser instalado diretamente no celular:

Abra o site no navegador

Aguarde o botão Instalar Aplicativo

Toque em Instalar

O app será adicionado à tela inicial

Após instalado, o aplicativo funciona de forma semelhante a um app nativo.

📚 Aprendizados Aplicados

Durante o desenvolvimento foram aplicados conhecimentos em:

• Desenvolvimento de aplicações web modernas
• Integração com banco de dados em tempo real
• Estruturação de Progressive Web Apps
• Configuração de Service Worker e cache offline
• Deploy de aplicações estáticas
• Versionamento de código com Git
• Autenticação SSH no GitHub
• Gerenciamento de projetos via Termux

📌 Status do Projeto

🚧 Projeto funcional e em evolução contínua.

Melhorias futuras incluem:

• melhorias de interface e experiência do usuário
• sistema de autenticação de usuários
• notificações em tempo real
• otimização do carregamento de arquivos
• novas funcionalidades de chat

👤 Autor

Marcio Dom

Profissional em evolução na área de Tecnologia da Informação, com foco em:

• Desenvolvimento Web
• Progressive Web Apps (PWA)
• Aplicações em tempo real
• Estruturação de projetos para portfólio técnico

📄 Licença

Este projeto está disponível para fins de estudo, aprendizado e desenvolvimento pessoal.


