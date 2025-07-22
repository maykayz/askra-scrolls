# 🚀 Askra Scrolls - Chat with PDF Application

A modern React frontend built with [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). This project supports Docker for isolated environments and local setup using `pnpm`, `yarn`, or `npm`.

---

## 📦 Tech Stack

- ⚛️ React
- ⚡ Vite
- ✨ TypeScript
- 🎨 Tailwind CSS
- 🐳 Docker
- 🔄 Zustand
- 🧪 Storybook

---

## 🔧 Project Setup

### 🐳 Docker Setup

**Requirements:** Docker & Docker Compose

```bash
docker compose up --build
```

This will:

- Build the container
- Install dependencies
- Start the app at `http://localhost:3000`

### 💻 Local Setup (Alternative)

Choose one of the following package managers:

#### Using `pnpm`

```bash
pnpm install
pnpm dev
```

#### Using `yarn`

```bash
yarn install
yarn dev
```

#### Using `npm`

```bash
npm install
npm run dev
```

---

## 📁 Folder Structure

```
.
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons, etc.
│   ├── components/       # Reusable components
│   ├── constants/        # Reusable constants
│   ├── features/         # Page-level components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Library related functions
│   ├── pages/            # Page-level components
│   ├── stores/           # State management with Zustand
│   ├── types/            # Type declarations
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Root component
│   ├── layout.tsx          # Main layout
│   └── main.tsx          # Entry point
├── .env.example          # Example environment config
├── Dockerfile            # Docker build file
├── docker-compose.yml    # Docker Compose config
├── vite.config.ts        # Vite configuration
├── .nvmrc                # NVM version
└── README.md             # Project documentation
```

---

## 🛠️ Environment Variables

Create a `.env` file at the root based on `.env.example`.

```bash
cp .env.example .env
```

**Example `.env` contents:**

```env
VITE_API_URL = "http://localhost:8000"
```

> ⚠️ All environment variables must begin with `VITE_` to be available in the frontend.

---

## ▶️ Running the Project

### With Docker:

```bash
docker compose up --build
```

### Locally:

```bash
pnpm dev  # or yarn dev or npm run dev
```

Then go to: [http://localhost:3000](http://localhost:3000)

---

## ✨ Features

- 📄 **PDF Upload** — Upload and parse PDFs using `react-dropzone`
- 💬 **Chat with PDF** — Ask questions related to uploaded PDF documents
- 💾 **Chat Session Management** — Handle multiple sessions via Zustand state management
- ⚙️ **ESLint + Prettier** — Linting and formatting using `eslint`, `eslint-plugin-prettier`, and `prettier`
- 🐶 **Husky Git Hooks** — Enforce code quality via pre-commit hooks with `lint` and `format` scripts
- 📚 **Storybook** — Visual component development with `@storybook/react-vite`
- 🧱 **Radix UI + Lucide Icons** — Accessible UI components and icons
- ❌ **Error Boundary UI** — Robust error handling using `react-error-boundary` with a custom robot fallback UI
- 🌗 **Dark Mode Toggle** — Built-in theme toggle using `react-toggle-dark-mode`
- ⚡ **Tailwind CSS + Animate CSS** — Utility-first styling enhanced with animations
- 🔄 **Vite + SWC** — Fast dev server and optimized builds using Vite and `@vitejs/plugin-react-swc`

---

## ✅ Assumptions

- Memory management is just the state of showing if all chats history are cleared or not.
- Chat conversation is assumed to be interacting with all the uploaded documents
- Build is meant to be frontend-only (no SSR or backend logic inside).

---

## ⚠️ Limitations & Improvements

### Current Limitations

- Minimal error handling and validation
- User cannot delete individual chat
-

### Suggested Improvements

- Allow user to choose which document to interact
- Add unit and integration tests (Jest + RTL)
- Improve accessibility and i18n support
- Share the generated chat or articles as a public URL, or allow the section to be printable
- Speech-to-text integration for user chat box

---
