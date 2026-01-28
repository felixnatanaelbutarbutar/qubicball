<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
=======
# Qubicball Frontend

The frontend application for Qubicball, built with Next.js 16 and a modern, responsive UI design.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) (React Query)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/) (Icons)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  Navigate to the frontend directory:
    ```bash
    cd quicball-frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

To start the development server:

```bash
npm run dev
>>>>>>> upstream/main
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<<<<<<< HEAD
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
## Project Structure

```
.
├── src/
│   ├── app/                # Next.js App Router pages
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Core design system
│   │   ├── tasks/          # Task-related components
│   │   └── projects/       # Project-related components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities & API config
│   ├── store/              # Zustand state management
│   └── types/              # TypeScript definitions
├── public/                 # Static assets
└── package.json            # Project dependencies
```

## Features

- **Authentication**: Login and registration flows.
- **Task Management**: Create, edit, and update tasks.
- **Projects**: Manage projects and assign tasks.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Dark Mode**: Built-in support for light and dark themes.
>>>>>>> upstream/main
