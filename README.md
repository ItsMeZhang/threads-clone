
# Threads Clone - Nuxt 3

Merupakan Project yang dibuat untuk keperluan belajar hal baru tentang nuxt 3




## Hal yang dipelajari

Adapun hal yang dipelajari 

1. Mengembangkan aplikasi web dengan lebih efisien dan efektif menggunakan Nuxt 3
2. Struktur Project Development menggunakan Nuxt 3 
3. Integrasi Login Menggunakan Supabase
4. Mengetahui cara penggunaan Prisma untuk berinteraksi dengan database relasional pada Database Supabase dan masih banyak lagi
## Dokumentasi

[Dokumentasi Nuxt 3](https://nuxt.com/docs/getting-started/)

[Supabase](https://supabase.com)
## Instalasi

Berikut merupakan Instalasi package yang diperlukan dalam project ini

```bash
  npm i @nuxtjs/supabase @nuxtjs/tailwindcss @pinia/nuxt @prisma/client @vite-pwa/nuxt nuxt-icon prisma uuid
```

```bash
  npm i pinia -f
```

Inisiasi prisma (Pastikan telah melakukan setup database menggunakan supabase)

```bash
npx prisma init
npx prisma generate
npx prisma migrate dev --name init
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```
## Special thanks to

- [@John-Weeks-Dev](https://github.com/John-Weeks-Dev/)
- [Channel YT](https://youtube.com/@johnweeksdev)
for making this very helpful tutorial video