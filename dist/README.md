# LimpAttack — Landing Page

Landing page estática (HTML + CSS + JS puro, sem build necessário) do jogo **LimpAttack**.

## Como usar

Basta abrir o `index.html` no navegador — não precisa de build, servidor ou dependências.

Para publicar no **GitHub Pages**:
1. Suba este conteúdo pra um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
4. Salve — em alguns minutos o site estará no ar em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

## Estrutura

```
index.html      → marcação (HTML) das seções da página
styles.css      → todos os estilos (cores, layout, animações)
script.js       → toda a interatividade (navbar, galeria, contadores, FAQ, trailer)
assets/         → imagens do jogo (hero, capa, screenshots) e o vídeo do trailer
downloads/      → coloque aqui o LimpAttack.exe e o Guia_Mentoria_LimpAttack_PC.pdf (veja downloads/README.md)
```

## Onde editar o quê

- **Textos e conteúdo** (títulos, parágrafos, links de download, e-mails): `index.html`.
- **Cores, espaçamentos, fontes, animações CSS**: `styles.css` — as cores da marca estão centralizadas no topo, em `:root { --navy, --sky, --yellow, --mint, ... }`.
- **Dados dinâmicos** (equipe, perguntas do FAQ, legendas da galeria) e comportamento (menu mobile, scrollspy, lightbox, contadores, trailer): `script.js`.
- **Imagens**: troque os arquivos dentro de `assets/` mantendo o mesmo nome, ou atualize os caminhos `src="assets/..."` no `index.html`.

## Downloads (.exe e mentoria em PDF)

O botão "Baixar .exe" e "Baixar Mentoria.pdf" apontam para a pasta `downloads/`. Basta colocar os arquivos lá com esses nomes exatos:

```
downloads/LimpAttack.exe
downloads/Guia_Mentoria_LimpAttack_PC.pdf
```

Detalhes e alternativas (GitHub Releases para arquivos grandes) em `downloads/README.md`.

## Trailer

O botão "Assistir Trailer" agora abre um player em modal usando o vídeo local em `assets/video/trailer.mp4` (comprimido de 81MB pra ~4,4MB, mantendo qualidade boa pra web). Pra trocar o vídeo, é só substituir esse arquivo mantendo o mesmo nome.

## Galeria

A galeria tem 6 posições: as 4 primeiras já têm screenshots reais, e as 2 últimas estão com uma imagem placeholder (`assets/screen-placeholder.svg`) marcando "Screenshot em breve". Pra adicionar suas próprias fotos:

1. Coloque a imagem em `assets/` (ex: `screen-nova1.jpg`).
2. No `index.html`, troque o `src="assets/screen-placeholder.svg"` correspondente (procure por `data-i="4"` e `data-i="5"`, aparece 2x cada — uma vez no frame grande, outra na miniatura).
3. No `script.js`, no array `GALLERY`, troque o `tag` e `title` dessas duas posições pelo texto real.

## O que tem de diferente da versão anterior

- **Navbar**: pill flutuante com indicador ativo animado (scrollspy) e menu mobile com hambúrguer.
- **Card da Nala (hero)**: agora inclina só no hover, igual ao card da seção "Sobre" (antes seguia o mouse em 3D).
- **Downloads**: card "Versão mobile / em breve" removido; ficaram só os 2 cards reais (exe + mentoria).
- **Galeria**: player estilo "stories" com barra de progresso segmentada, setas de navegação, filmstrip de miniaturas e lightbox — agora com 6 posições (4 fotos reais + 2 placeholders pra você preencher).
- **Trailer**: abre em modal reproduzindo o vídeo local (`assets/video/trailer.mp4`), sem depender do YouTube.
- **Footer**: bloco de CTA final, colunas de navegação/comunidade/contato, redes sociais e wave decorativa separando da seção de contato.
- Mantidos: contadores animados, scroll reveals, cursor glow, etc.

## Créditos

Baseado no projeto original **LimpAttack** (glow-up-gamepage), evoluído com animações e componentes extras.
