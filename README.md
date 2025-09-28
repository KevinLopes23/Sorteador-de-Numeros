# 🎲 Sorteador de Números

Uma aplicação web moderna e intuitiva para sortear números aleatórios com diversas opções de configuração.

## 🌟 Funcionalidades

- **Sorteio Personalizado**: Defina a quantidade de números a sortear (1-100)
- **Intervalo Customizável**: Configure valores mínimo e máximo (1-1000)
- **Números Únicos**: Opção para não repetir números no sorteio
- **Interface Moderna**: Design responsivo com animações suaves
- **Validação em Tempo Real**: Verificação automática dos valores inseridos
- **Experiência Fluida**: Animações e feedback visual durante o sorteio

## 🚀 Demo

[Ver Demo Online](https://number-sorter-app.vercel.app/) 

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização moderna com animações e design responsivo
- **JavaScript (Vanilla)**: Lógica de sorteio e interatividade
- **Google Fonts**: Tipografia (Roboto Flex, Roboto Mono, Sora)

## 📁 Estrutura do Projeto

```
Sorteador-de-Numeros/
├── index.html              # Página principal
├── script.js               # Lógica JavaScript
├── styles/                 # Arquivos de estilo
│   ├── index.css          # Importações principais
│   ├── global.css         # Estilos globais
│   ├── background.css     # Elementos decorativos
│   ├── header.css         # Cabeçalho
│   ├── how.css           # Seção "Como funciona"
│   ├── draw.css          # Área de sorteio
│   ├── animations.css    # Animações
│   └── responsive.css    # Media queries
├── img/                   # Imagens e ícones SVG
│   ├── logo.svg
│   ├── how.svg
│   ├── mensagem.svg
│   ├── replay.svg
│   └── seta.svg
└── README.md             # Documentação
```

## 🎯 Como Usar

1. **Defina a Quantidade**: Escolha quantos números deseja sortear (1-100)
2. **Configure o Intervalo**: Defina os valores mínimo e máximo
3. **Opções Avançadas**: Marque "Não repetir número" se desejar números únicos
4. **Sortear**: Clique no botão "Sortear" e aguarde o resultado
5. **Novo Sorteio**: Use "Sortear novamente" para fazer um novo sorteio

## 🔧 Instalação e Execução Local

### Pré-requisitos
- Navegador web moderno
- Servidor web local (opcional)

### Método 1: Abrir diretamente
```bash
# Clone o repositório
git clone https://github.com/KevinLopes23/Sorteador-de-Numeros.git

# Entre no diretório
cd Sorteador-de-Numeros

# Abra o index.html no navegador
```

### Método 2: Servidor local
```bash
# Com Python
python -m http.server 8000

# Com Node.js (npx)
npx serve .

# Com PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## 🌐 Deploy

Este projeto pode ser facilmente deployado em diversas plataformas:

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
1. Faça upload da pasta do projeto
2. Configure o build: deixe em branco (projeto estático)
3. Publish directory: `/` (raiz)

### GitHub Pages
1. Faça push para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione a branch main
4. Aguarde o deploy automático

## ⚙️ Configurações

### Limites do Sistema
- **Quantidade máxima**: 100 números por sorteio
- **Valor máximo**: 1000 para min/max
- **Validação**: Números únicos não podem exceder o range disponível

### Personalização
Para personalizar cores, fontes ou animações, edite os arquivos CSS na pasta `styles/`.

## 🎨 Design

- **Paleta de Cores**: Gradientes modernos com tons de azul e roxo
- **Tipografia**: Combinação de Roboto Flex, Roboto Mono e Sora
- **Animações**: Transições suaves e efeitos de entrada
- **Responsividade**: Adaptável a diferentes tamanhos de tela

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Kevin Lopes**
- GitHub: [@KevinLopes23](https://github.com/KevinLopes23)
- LinkedIn: [Kevin Lopes](https://www.linkedin.com/in/kevin-lopes-151797221/)

## 🙏 Agradecimentos

- Google Fonts pela tipografia
- Comunidade open source pelas inspirações
- Todos que contribuíram com feedback e sugestões

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!