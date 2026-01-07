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

- **Runtime**: Bun 1.1.38
- **Build Tool**: Vite 7.3.0
- **Framework**: React 19.2.3
- **Language**: TypeScript 5.9.3
- **Styling**: CSS Modules

## Getting Started

### Prerequisites

- Bun 1.1.38 or higher
- Node.js (for npm packages)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Buntest
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:
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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

MIT