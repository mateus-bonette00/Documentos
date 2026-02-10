# Para a Lara

Site surpresa, feito com carinho.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de producao

```bash
npm run build
npm run preview
```

## Deploy no Vercel (gratis)

### 1. Versionar no Git

```bash
git init
git add .
git commit -m "initial commit"
```

### 2. Subir pro GitHub

- Crie um repositorio novo no GitHub (pode ser privado).
- Copie a URL do repositorio.

```bash
git remote add origin https://github.com/SEU-USUARIO/site-lara.git
git branch -M main
git push -u origin main
```

### 3. Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com) e faca login com GitHub.
2. Clique em "Add New Project".
3. Importe o repositorio `site-lara`.
4. O Vercel detecta Vite automaticamente. Nao precisa mudar nada.
5. Clique em "Deploy".
6. Pronto. Voce recebe um link tipo `site-lara.vercel.app`.

## Adicionar mais imagens IA de cirurgia

Edite o arquivo `src/data/content.ts`:

1. Coloque a nova imagem em `src/assets/`.
2. Adicione o import no topo do arquivo.
3. Adicione o objeto no array `surgeryIAPhotos`.

```ts
import novaImagem from '../assets/nova-imagem.png'

// no array surgeryIAPhotos:
{ src: novaImagem, alt: 'Descricao', caption: 'Legenda fofa' },
```

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion
