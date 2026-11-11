<div align="center">
  <h1>🎲 Sorteador de Números</h1>
  <p><strong>Sorteie números aleatórios em um intervalo, com ou sem repetição, direto no navegador.</strong></p>
  <p>
    <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white">
    <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white">
    <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black">
    <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white">
    <a href="LICENSE"><img alt="Licença MIT" src="https://img.shields.io/badge/licença-MIT-blue"></a>
    <br>
    <a href="https://number-sorter-app.vercel.app/"><img alt="Ver online" src="https://img.shields.io/badge/Ver_online-Vercel-A86DE8?style=for-the-badge&logo=vercel&logoColor=white"></a>
  </p>
</div>

<p align="center">
  <img src="docs/preview.webp" alt="Sorteador de Números no desktop" width="74%">
  <img src="docs/preview-mobile.webp" alt="Sorteador de Números no celular" width="22%">
</p>

## 💡 Sobre

Aplicação web simples para sorteios: você define quantos números quer, o intervalo (mínimo e máximo) e se pode haver repetição, e o resultado aparece na tela com animação, número por número. Feita com HTML, CSS e JavaScript puros, a partir de um layout no Figma, sem framework e sem build.

## ✨ Funcionalidades

- Quantidade de números por sorteio (até 100)
- Intervalo personalizável de mínimo e máximo (até 1000)
- Opção **"Não repetir número"** para sorteios sem repetição
- Validação dos campos (mínimo menor que máximo, quantidade possível sem repetição)
- Resultado animado, revelado número por número
- Botão "Sortear novamente" para voltar ao início
- Layout responsivo do celular ao desktop

## 🛠️ Tecnologias

- HTML5
- CSS3 (estilos separados por seção em `styles/`, com animações e media queries)
- JavaScript puro
- Google Fonts (Roboto Flex, Roboto Mono e Sora)
- Deploy na Vercel

## 🚀 Como rodar

Não há dependências nem build. Basta abrir o `index.html` no navegador ou servir a pasta:

```bash
git clone https://github.com/KevinLopes23/Sorteador-de-Numeros.git
cd Sorteador-de-Numeros
npm start          # python -m http.server 8000 → http://localhost:8000
# ou
npm run serve      # npx serve .
```

Mais opções de publicação (Vercel, Netlify, GitHub Pages) estão no [DEPLOY.md](DEPLOY.md).

## 📁 Estrutura

```
index.html      página principal
script.js       validação e lógica do sorteio
styles/         global, header, how, draw, animations, responsive...
img/            logo e ícones SVG
```

## 📄 Licença

Distribuído sob a licença [MIT](LICENSE).

## 👤 Autor

Feito por [Kevin Lopes](https://github.com/KevinLopes23).
