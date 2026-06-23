# RH International v2 🌍

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Welcome to the **RH International** official website and portal! This project has been fully migrated and refactored from a standard Vite React application to a robust **Next.js App Router** based web application. 

This transformation ensures better SEO, blazing fast performance, server-side rendering, and a scalable architecture supported by MongoDB for database needs.

## ✨ Features

- **Next.js App Router**: Highly optimized routing and server components.
- **Modern UI**: Stunning, premium designs using Tailwind CSS, Shadcn UI, and Framer Motion for micro-animations.
- **Secure Authentication**: Built-in credential-based authentication using **NextAuth.js**.
- **MongoDB Integration**: Robust and scalable database configuration for users, orders, and products via Mongoose.
- **Fully Responsive**: Flawless experience across mobile, tablet, and desktop devices.
- **Global Presence & Services**: Interactive pages showcasing services like Dubai Operations, IT Solutions, and Govt Tenders.
- **E-commerce Capabilities**: Integrated shopping cart with MongoDB order tracking.

## 🚀 Getting Started

To run this project locally, follow these simple steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/mamunaio/rh-international-v2.git
cd rhinternational
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your environment configurations (like MongoDB URI, NextAuth secret, etc.):
```env
MONGODB_URI=mongodb+srv://<your-db-uri>
NEXTAUTH_SECRET=your_super_secret_key_here
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result!

## 📂 Project Structure

- `app/`: Next.js App Router pages and API routes (`/api`).
- `components/`: Reusable UI components (Navbar, Footer, Cards, etc.).
- `hooks/`: Custom React hooks (e.g., `useAuth`, `useProducts`).
- `models/`: Mongoose schemas for MongoDB (`User`, `Product`, `Order`).
- `lib/`: Configuration and utility libraries (like `db.ts` for Mongoose connection).

## 🛠️ Built With

* **[Next.js](https://nextjs.org/)** - React Framework
* **[MongoDB](https://www.mongodb.com/)** - NoSQL Database
* **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
* **[Framer Motion](https://www.framer.com/motion/)** - Animation library
* **[Shadcn UI](https://ui.shadcn.com/)** - Accessible UI components

## 📄 License
This project is proprietary and confidential. Unauthorized copying or distribution of this code is strictly prohibited.
