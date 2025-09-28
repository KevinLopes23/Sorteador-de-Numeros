# 🚀 Guia de Deploy - Sorteador de Números

Este guia contém instruções detalhadas para fazer o deploy da aplicação em diferentes plataformas.

## 📋 Pré-requisitos

- Conta no GitHub (para todas as opções)
- Git instalado localmente
- Projeto versionado no GitHub

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado) ⭐

#### Opção A: Deploy via Interface Web
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe o repositório `sorteador-de-numeros`
5. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (deixe vazio)
   - **Output Directory**: ./
6. Clique em "Deploy"
7. Aguarde o deploy finalizar
8. Acesse a URL fornecida

#### Opção B: Deploy via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para deploy em produção
vercel --prod
```

### 2. Netlify 🌐

#### Opção A: Drag & Drop
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para a área de drop
3. Aguarde o upload e deploy
4. Acesse a URL fornecida

#### Opção B: Deploy via Git
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte com GitHub
4. Selecione o repositório
5. Configure:
   - **Branch**: main
   - **Build command**: (deixe vazio)
   - **Publish directory**: ./
6. Clique em "Deploy site"

### 3. GitHub Pages 📄

1. Vá para o repositório no GitHub
2. Acesse **Settings** > **Pages**
3. Em **Source**, selecione:
   - **Deploy from a branch**
   - **Branch**: main
   - **Folder**: / (root)
4. Clique em **Save**
5. Aguarde alguns minutos
6. Acesse: `https://seu-usuario.github.io/sorteador-de-numeros`

### 4. Surge.sh ⚡

```bash
# Instalar Surge
npm install -g surge

# Deploy
surge

# Seguir as instruções no terminal
```

## 🔧 Configurações Adicionais

### Domínio Personalizado

#### Vercel
1. Vá para o dashboard do projeto
2. Clique em "Settings" > "Domains"
3. Adicione seu domínio personalizado
4. Configure os DNS conforme instruções

#### Netlify
1. Vá para "Site settings" > "Domain management"
2. Clique em "Add custom domain"
3. Configure os DNS conforme instruções

### Variáveis de Ambiente

Caso precise adicionar variáveis de ambiente no futuro:

#### Vercel
1. Dashboard > Settings > Environment Variables
2. Adicione as variáveis necessárias

#### Netlify
1. Site settings > Environment variables
2. Adicione as variáveis necessárias

## 🚨 Troubleshooting

### Problemas Comuns

1. **404 ao acessar a aplicação**
   - Verifique se o arquivo `index.html` está na raiz
   - Confirme as configurações de rota

2. **Imagens não carregam**
   - Verifique os caminhos relativos das imagens
   - Confirme se as imagens estão no repositório

3. **CSS não aplica**
   - Verifique os caminhos dos arquivos CSS
   - Confirme se todos os arquivos estão commitados

### Logs e Debug

#### Vercel
- Acesse o dashboard > Functions > View Function Logs
- Use `vercel logs` no terminal

#### Netlify
- Acesse Site overview > Production deploys
- Clique no deploy para ver os logs

## 📱 Testando o Deploy

1. **Funcionalidade básica**:
   - Teste o sorteio de números
   - Verifique as validações
   - Teste em diferentes dispositivos

2. **Performance**:
   - Use Google PageSpeed Insights
   - Teste o carregamento em diferentes conexões

3. **Compatibilidade**:
   - Teste em diferentes navegadores
   - Verifique responsividade mobile

## 🔄 Deploy Automático

Para configurar deploy automático:

1. **Vercel/Netlify**: Conecte via GitHub
2. **Configuração**: A cada push na branch main
3. **Webhook**: Deploy automático será executado

## 📊 Monitoramento

### Analytics
- **Vercel**: Analytics integrado
- **Netlify**: Analytics disponível
- **Google Analytics**: Adicione o código de tracking

### Uptime Monitoring
- **UptimeRobot**: Monitoramento gratuito
- **Pingdom**: Monitoramento avançado

---

## 🆘 Suporte

Se encontrar problemas:
1. Verifique a documentação oficial da plataforma
2. Consulte os logs de deploy
3. Verifique as configurações do projeto
4. Entre em contato com o suporte da plataforma

**Links Úteis**:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

✅ **Deploy realizado com sucesso!** Sua aplicação está online e pronta para uso.