# Pasta de downloads

Coloque aqui os arquivos reais que o site vai oferecer pra download:

```
downloads/
├── LimpAttack.exe
└── Guia_Mentoria_LimpAttack_PC.pdf
```

Os nomes precisam ser **exatamente esses** (maiúsculas/minúsculas inclusas), porque é isso que está escrito nos links do `index.html`:

```html
<a href="downloads/LimpAttack.exe" download>⬇ Baixar .exe</a>
<a href="downloads/Guia_Mentoria_LimpAttack_PC.pdf" download>⬇ Baixar Mentoria.pdf</a>
```

Se quiser usar outro nome de arquivo, é só editar esses dois `href` no `index.html` pra apontar pro novo nome.

## Atenção ao tamanho no GitHub

O GitHub tem um limite de **100MB por arquivo**. Se o `.exe` do jogo for maior que isso:
- Comprima em `.zip` antes de subir (e ajuste o link pra `LimpAttack.zip`), ou
- Use o **GitHub Releases** (Releases → "Draft a new release" → anexar o `.exe`) e troque o link do botão pra apontar pra URL da release, em vez de manter o arquivo dentro do repositório.
