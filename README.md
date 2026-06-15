# 🍽️ The Restaurant

A simple multi-tab restaurant website built with vanilla JavaScript and bundled with Webpack.

## Project Structure

```
restaurant/
├── src/
│   ├── index.js          # Entry point, tab routing logic
│   ├── home.js           # Home tab content
│   ├── menu.js           # Menu tab content
│   ├── contact.js        # Contact tab content
│   ├── styles.css        # Global styles
│   └── template.html     # HTML template for HtmlWebpackPlugin
├── dist/                 # Generated on build (do not edit)
│   └── main.js
├── webpack.config.js
└── package.json
```

## Features

- Single-page app with three tabs: **Home**, **Menu**, and **Contact**
- Dynamic content rendering via DOM manipulation (no frameworks)
- Webpack bundling with CSS support via `style-loader` and `css-loader`
- Auto-generated `index.html` in `dist/` using `HtmlWebpackPlugin`
- Source maps enabled for easier debugging in development

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm

> **Note:** This project uses ES Modules (`"type": "module"` in `package.json` is required for the Webpack config to work correctly).

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Starts the Webpack dev server at [http://localhost:8080](http://localhost:8080). The server watches `./src/template.html` and all bundled source files for live reloading.

### Production Build

```bash
npm run build
```

Outputs the bundled files to the `dist/` folder. The `dist/` directory is cleaned automatically on each build.

## Configuration Notes

| Option | Value |
|--------|-------|
| Entry point | `./src/index.js` |
| Output file | `dist/main.js` |
| HTML template | `./src/template.html` |
| Mode | `development` |
| Source maps | `eval-source-map` |
| CSS handling | `style-loader` + `css-loader` |

## Pages

| Tab | Description |
|-----|-------------|
| Home | Welcome message and restaurant intro |
| Menu | List of dishes with prices |
| Contact | Phone number and email address |

## Tech Stack

- **JavaScript (ES Modules)** — component-based tab loading
- **CSS** — custom styles with hover transitions
- **Webpack 5** — module bundling, dev server, and asset pipeline
- **HtmlWebpackPlugin** — injects the bundle into the HTML template automatically