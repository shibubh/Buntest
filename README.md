# Admin Dashboard

A modern admin dashboard application built with **Bun**, **Vite**, **React**, and **TypeScript**.

## Features

- 📊 **Dashboard Overview** - View key metrics and statistics at a glance
- 👥 **User Management** - Manage users and their activities
- 📦 **Product Management** - Track and manage products
- 🛒 **Order Tracking** - Monitor orders and transactions
- 📈 **Analytics** - View analytics and insights
- ⚙️ **Settings** - Configure application settings
- 🎨 **Modern UI** - Clean and responsive design
- ⚡ **Fast Development** - Built with Vite for lightning-fast HMR

## Tech Stack

- **Runtime**: Bun 1.3.5 (target version)
- **Build Tool**: Vite 7.3.0
- **Framework**: React 19.2.3
- **Language**: TypeScript 5.9.3
- **Styling**: CSS Modules

## Getting Started

### Prerequisites

- Bun 1.3.5 or higher (recommended)
- Node.js 18+ (fallback for package installation if Bun has compatibility issues)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Buntest
```

2. Install dependencies with Bun (recommended):
```bash
bun install
```

Or use npm as a fallback:
```bash
npm install
```

### Development

Run the development server with Bun:
```bash
bun run dev
```

Or with npm:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production with Bun:
```bash
bun run build
```

Or with npm:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build with Bun:
```bash
bun run preview
```

Or with npm:
```bash
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx     # Header component
│   │   ├── Sidebar.tsx    # Sidebar navigation
│   │   └── Dashboard.tsx  # Main dashboard component
│   ├── styles/           # CSS stylesheets
│   │   ├── index.css     # Global styles
│   │   ├── App.css       # App layout styles
│   │   ├── Header.css    # Header styles
│   │   ├── Sidebar.css   # Sidebar styles
│   │   └── Dashboard.css # Dashboard styles
│   ├── App.tsx           # Root component
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Available Scripts

All scripts can be run with either Bun (recommended) or npm:

- `bun run dev` / `npm run dev` - Start development server
- `bun run build` / `npm run build` - Build for production
- `bun run preview` / `npm run preview` - Preview production build

**Note**: This project is designed to work with Bun 1.3.5. However, due to potential CPU compatibility issues on some systems, npm can be used as a fallback for package management while still benefiting from Vite's fast build times.

## License

MIT