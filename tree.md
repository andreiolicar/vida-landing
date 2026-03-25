# Arvore do Projeto

```text
vida-landing/
|-- .git/
|-- .gitignore
|-- eslint.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- README.md
|-- tailwind.config.ts
|-- tree.md
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- dist/
|   `-- ... artefatos de build (omitidos)
|-- node_modules/
|   `-- ... dependencias instaladas pelo npm (omitidas)
|-- public/
|   `-- favicon.svg
`-- src/
    |-- App.tsx
    |-- main.tsx
    |-- assets/
    |   |-- img/
    |   |   |-- computer-app.png
    |   |   |-- google-svg.svg
    |   |   |-- hand-app.png
    |   |   |-- vida-card-1.png
    |   |   |-- vida-card-2.png
    |   |   `-- vida-card-3.png
    |   `-- logo/
    |       |-- complete/
    |       |   |-- full-black.png
    |       |   |-- full-black.svg
    |       |   |-- full-blue.png
    |       |   |-- full-blue.svg
    |       |   |-- full-white.png
    |       |   `-- full-white.svg
    |       |-- favicon/
    |       |   `-- favicon.ico
    |       |-- icon/
    |       |   |-- icon-black.png
    |       |   |-- icon-black.svg
    |       |   |-- icon-blue.png
    |       |   |-- icon-blue.svg
    |       |   |-- icon-white.png
    |       |   `-- icon-white.svg
    |       `-- text/
    |           |-- text-black.png
    |           |-- text-black.svg
    |           |-- text-blue.png
    |           |-- text-blue.svg
    |           |-- text-white.png
    |           `-- text-white.svg
    |-- components/
    |   |-- Container.tsx
    |   |-- FeatureCard.tsx
    |   |-- Header.tsx
    |   |-- LiquidGlassBadge.tsx
    |   |-- Section.tsx
    |   `-- SectionTitle.tsx
    |-- pages/
    |   `-- LandingPage.tsx
    |-- sections/
    |   |-- AppShowCaseSection.tsx
    |   |-- FeaturesSection.tsx
    |   |-- FooterCtaSection.tsx
    |   |-- HeroSection.tsx
    |   |-- LogosSection.tsx
    |   `-- StoreButtonsSection.tsx
    `-- styles/
        `-- global.css
```

## Observacoes

- `.git/`, `node_modules/` e `dist/` aparecem apenas de forma resumida.
- `dist/` e `node_modules/` sao pastas geradas/locales e nao devem ir para o repositorio.
