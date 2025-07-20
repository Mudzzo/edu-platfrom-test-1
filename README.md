# Educational Platform - Project 1 -


## Features

- 🚀 **React 19** with TypeScript for type safety
- ⚡ **Vite** for fast development and building
- 🎨 **Tailwind CSS** for modern, responsive styling
- 🌍 **Internationalization** with i18next (English & Arabic support)
- 🧭 **React Router** for navigation
- 📱 **Responsive Design** for all devices
- 🔧 **ESLint** for code quality

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AbdullahAymn/edu-platfrom-test-1
   cd edu-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

## Development

### Starting the Development Server

To start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Code Quality

To run ESLint for code quality checks:

```bash
npm run lint
```

## Project Structure

```
edu-platform/
├── public/
│   └── Locale/          # Translation files
│       ├── en/          # English translations
│       └── ar/          # Arabic translations
├── src/
│   ├── components/      # Reusable React components
│   │   └── Layout/      # Layout components
│   ├── pages/           # Page components
│   │   └── Home/        # Home page
│   ├── Hooks/           # Custom React hooks
│   ├── utlis/           # Utility functions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Router** - Client-side routing
- **i18next** - Internationalization
- **ESLint** - Code linting

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
