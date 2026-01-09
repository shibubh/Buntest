# Buntest - Simple Todo Vite App

A simple, elegant todo list application built with Vite, React, and TypeScript. This project demonstrates how to use Bun as a package manager alongside Vite for a modern development experience.

## Features

- ✨ Add new todos
- ✅ Mark todos as completed
- 🗑️ Delete todos
- 📊 Track remaining items
- 🎨 Beautiful gradient UI with smooth animations

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- npm or bun package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
bun install
```

### Development

Start the development server:

```bash
npm run dev
# or
bun run dev
```

The app will be available at `http://localhost:5173/`

### Build

Build the application for production:

```bash
npm run build
# or
bun run build
```

### Preview

Preview the production build:

```bash
npm run preview
# or
bun run preview
```

## Tech Stack

- **Vite** - Next generation frontend tooling
- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS3** - Modern styling with gradients and animations

## Project Structure

```
.
├── src/
│   ├── App.tsx       # Main todo application component
│   ├── App.css       # Todo app styles
│   ├── main.tsx      # Application entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies
```

## License

MIT