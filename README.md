# Code Block Beautifier for Joplin

Beautiful code blocks with 6 hand-crafted themes for Joplin notes. Each theme includes a macOS-style header bar with traffic light dots, syntax highlighting, and optional line numbers.

## Themes

| Theme | Style |
|-------|-------|
| **macOS Window** | Dark VS Code-inspired with red/yellow/green dots |
| **GitHub** | Clean light/dark dual-mode, GitHub Primer colors |
| **Carbon** | Sleek dark with purple & teal accents |
| **Notion** | Minimal light, matches Notion's code style |
| **Material Card** | Material Design dark with vibrant accents |
| **Modern Terminal** | Matrix-style green on black |

## Features

- 6 selectable themes, switchable from Joplin settings
- Syntax highlighting via highlight.js (25+ languages)
- Optional header bar with traffic light dots and language label
- Optional line numbers
- All styling is inline — works without external CSS dependencies in exported notes

## Installation

### From Joplin Plugin Marketplace

1. Open Joplin → Settings → Plugins
2. Search for "Code Block Beautifier"
3. Click Install

### Manual Install

1. Download the `.jpl` file from the [latest release](https://github.com/heria/joplin-plugin-code-beautifier/releases)
2. Open Joplin → Settings → Plugins → Install from file
3. Select the downloaded `.jpl` file

## Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| Code block theme | Enum | macOS Window | Choose from 6 themes |
| Show header bar | Toggle | On | Show/hide the traffic light header |
| Show line numbers | Toggle | Off | Display line numbers in code blocks |

## Supported Languages

javascript, typescript, python, css, scss, less, html/xml, json, bash/shell, sql, java, go, rust, c, c++, ruby, php, swift, kotlin, yaml, markdown, dockerfile, lua, makefile, plaintext

## Development

```bash
# Install dependencies
npm install

# Development build (watch mode)
npm run dev

# Production build
npm run build

# Create distributable .jpl file
npm run dist
```

The `.jpl` file will be created in the `publish/` directory.

## License

MIT
