# GameHub

**GameHub** is a modern web app built with **React**, **TypeScript**, **Vite**, and **Chakra UI** that lets users discover video games, view details, screenshots, release dates, platforms, and ratings using the RAWG video games API.

The app is deployed live at: **[https://game-8ta5v3i5c-fayzhan-ks-projects.vercel.app/](https://game-8ta5v3i5c-fayzhan-ks-projects.vercel.app/)**

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting a RAWG API key](#getting-a-rawg-api-key)
- [Installation and Setup](#installation-and-setup)
- [Environment variables](#environment-variables)
- [Running the project](#running-the-project)
- [Usage](#usage)
- [Building for production](#building-for-production)
- [License](#license)

---

## Features

- Search and browse games
- Game detail pages (description, release date, platforms, rating)
- Responsive design built with **Chakra UI**
- Powered by RAWG API

## Tech stack

- **React (with TypeScript)** – component-based UI
- **Vite** – fast bundler and dev server
- **Chakra UI** – modern, accessible component library
- **RAWG API** – game data source
- **Vercel** – hosting and deployment

## Prerequisites

You’ll need the following installed:

- Git
- Node.js (v16+ recommended)
- npm or yarn

## Getting a RAWG API key

GameHub uses the [RAWG Video Games Database API](https://rawg.io/apidocs) to fetch game data.

Steps to obtain your API key:

1. Go to [https://rawg.io/apidocs](https://rawg.io/apidocs)
2. Sign up or log in to your RAWG account.
3. Scroll to the **Authentication** section.
4. Click **Get API key** and copy your key.
5. Keep your key safe — it’s required for local development and deployment.

> Note: Free keys have limited requests per minute.

## Installation and Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/fayzy123/gamehub.git
cd gamehub
npm install
# or
yarn install
```

## Environment variables

Create a `.env` file in the root of your project and add these:

```
VITE_RAWG_API_KEY=your_rawg_api_key_here
VITE_RAWG_BASE_URL=https://api.rawg.io/api
```

### On Vercel (production)

Add the same variables under **Project Settings → Environment Variables**:

| Name                 | Value                     |
| -------------------- | ------------------------- |
| `VITE_RAWG_API_KEY`  | your RAWG API key         |
| `VITE_RAWG_BASE_URL` | `https://api.rawg.io/api` |

Select **Production**, **Preview**, and **Development** environments → click **Save**, then **Redeploy** your project.

## Running the project

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Then open the link shown in your terminal (usually `http://localhost:5173/`).

For a production build preview:

```bash
npm run build
npm run preview
```

## Usage

- Use the search bar to look up games.
- Click a game card to view detailed information: description, platforms, rating, and release date.
- The interface is built with **Chakra UI** for a clean, responsive design.
- All data is fetched live from the RAWG API.

## Building for production

Create a production build with:

```bash
npm run build
```

Vite outputs your optimized app into the `dist/` folder. You can deploy that to **Vercel**, **Netlify**, or any static host.

Already deployed on **Vercel** → changes pushed to `main` automatically trigger a redeploy.

## License

This project is released under the **MIT License**.

---

**Live Project:** [https://game-8ta5v3i5c-fayzhan-ks-projects.vercel.app/](https://game-8ta5v3i5c-fayzhan-ks-projects.vercel.app/)  
_Created and maintained by Fayzhan K._
