# ⚖️ Law Firm Website – Stonebridge Legal Law Firm

![Project Architecture](./path-to-your-image/1905dc89-e847-4488-a1bc-55d0e8a16e2d.png)

## ✨ Overview

A modern, full-stack web application built for a **law firm** to showcase legal services, attorneys, client portal, and communication capabilities.

## 🚀 Tech Stack
| Technology     | Purpose                                      |
|----------------|----------------------------------------------|
| Next.js        | Framework for React apps with SSR            |
| TailwindCSS    | Utility-first CSS for design and layout      |
| Prisma ORM     | Type-safe and efficient database queries     |
| PostgreSQL     | Relational database backend                  |
| Nodemailer     | Email sending via Gmail integration          |

## 🔧 Features
### ✅ General Website
- Firm branding services in detail
- About section describing Office Details
- Contact form for Legal services

### 👨‍⚖️ Attorneys & Partners
- Detailed partner profiles with:
  - Profile image
  - Role/title
  - Years of experience

### 💼 Specialized Practice Areas
- Display of law specialties (Family Law, Corporate Law, etc.)
- Designed for easy access and understanding

### 🗞 News
- Dynamic news section to showcase firm announcements or legal updates
- Rendering to Spearate page for the details of the news along with some sponsored ads and Futher Related news pages.

### 💬 Testimonials
- Carousel system for user reviews
- Includes anonymous client experience with the law firm

### 🔐 Client Dashboard available for Clients Only
- Dedicated route for client portal with all case details
- Placeholder for login-protected features like document access or status updates
- All sample legal documents such as Complaint Document, Evidence Report, Court Summons and Witness Statements downloadable directly from the dashboard.

# Project Installation Details
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Project Started
### 1. Clone the Repo

```bash
git clone https://github.com/your-username/law-firm-project.git
cd law-firm-project
```
### 2. Set Up Environment Variables
Create a .env file:
```bash
# Prisma Database URL
DATABASE_URL=postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME
```
Create a .env.local file:
```bash
# Mail credentials for Gmail (Create an App Password - See Notes Below)
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
```
Details to do so are mentioned in .env or .env.local file in the main directory

### 3. Setup Database
Install Prisma CLI (if not already)
```bash
npm install prisma --save-dev
```
Update prisma/schema.prisma with your models (I have done already for my project so no need)
Push schema to database (I have done already for my project so no need)
```bash
npx prisma db push
npx prisma generate
```
Migrate Database of PostGreSQL in your setup Folder. This will make generated folder in src folder.
```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### 4. Run on DevelopmentIDE
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying from `app/page.tsx`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

