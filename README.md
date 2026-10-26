# Raglr Launcher

Launcher modular para Eaglercraft — interface moderna, escura, com módulos de Início, Instâncias e Configurações.

- Redesenhado do zero (`index.html`, `style.css`, `index.js`)
- Sem skin editor (removido completamente)
- Fontes locais (`fonts/` — Inter, MuseoModerno, Space Mono)
- Modo escuro por padrão
- Instalações carregadas diretamente de `assets/json/base.json`
- Botão "Abrir" por versão (abre o respectivo cliente em `mc/`)

## Como usar

1. Abra `index.html` no navegador.
2. Clique em "Início" para iniciar a versão padrão (`26.3-wasm`).
3. Clique em "Instâncias" para ver todas as versões disponíveis.
4. Clique em "Configurações" para preferências.

## Arquivos principais

- `index.html` — interface
- `css/style.css` — tema escuro, fontes locais
- `js/index.js` — navegação e carregamento das versões
- `assets/json/` — dados das versões (`base.json`, `modded.json`, etc.)
