# 🧹🎮 LimpAttack — Landing Page

Landing page estática (HTML + CSS + JS puro) do jogo **LimpAttack**. Não precisa de build, framework ou instalação de dependências — é só HTML/CSS/JS. ✨

O site em si fica dentro da pasta `dist/`.

## 🚀 Como rodar localmente

Você tem 3 opções, da mais simples pra mais "correta":

### 1️⃣ Opção 1 — Abrir direto no navegador (mais simples)
Basta dar duplo clique no arquivo:
```
dist/index.html
```
Isso já funciona pra ver o layout, mas alguns navegadores bloqueiam certos recursos (como o vídeo do trailer) quando o site é aberto via `file://`. Se algo não funcionar, use a Opção 2. ⚠️

### 2️⃣ Opção 2 — Servidor local com Python (recomendado) ✅
Se você tem Python instalado:
```bash
cd dist
python3 -m http.server 8000
```
Depois abra no navegador:
```
http://localhost:8000
```

### 3️⃣ Opção 3 — Servidor local com Node.js
Se preferir Node:
```bash
cd dist
npx serve
```
Ele vai mostrar o endereço local (algo como `http://localhost:3000`) pra você abrir no navegador.

## 🌐 Como publicar (colocar no ar)

### GitHub Pages (grátis e simples) 🐙
1. Suba o conteúdo da pasta `dist/` para um repositório no GitHub (pode ser a raiz do repositório ou usar a pasta `dist` como fonte).
2. No repositório, vá em **Settings → Pages**.
3. Em "Source", selecione a branch `main` e a pasta `/ (root)` (ou `/dist`, dependendo de como você organizou).
4. Salve — em alguns minutos o site estará no ar em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`. 🎉

### Outras opções
Qualquer serviço de hospedagem de site estático funciona: Vercel, Netlify, Cloudflare Pages, etc. Basta apontar o serviço para a pasta `dist/`.

## 📁 Estrutura

```
dist/
├── index.html      → marcação (HTML) das seções da página
├── styles.css      → todos os estilos (cores, layout, animações)
├── script.js       → toda a interatividade (navbar, galeria, contadores, FAQ, trailer)
├── assets/         → imagens do jogo e vídeo do trailer
└── downloads/      → LimpAttack.exe e o Guia_Mentoria_LimpAttack_PC.pdf
```

📝 Para detalhes de onde editar textos, cores, downloads e a galeria, veja o README dentro da própria pasta [`dist/README.md`](dist/README.md) — ele já tem tudo isso documentado.