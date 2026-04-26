# 🎨 ColorPicker — SpecKAI

---

## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Backend:** Node.js + Express (API proxy / custom endpoints)
- **Database:** Supabase (PostgreSQL)

---

## 📁 Project Structure

colorpicker/
├── frontend/          # Next.js app
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── api/       # Next.js API routes (calls Express)
│   ├── components/
│   │   ├── ColorPicker.tsx
│   │   ├── ColorCard.tsx
│   │   ├── ColorHistory.tsx
│   │   ├── FormatToggle.tsx
│   │   └── Navbar.tsx
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── colorUtils.ts
│   │   └── api.ts
│   ├── types/
│   │   └── color.ts
│   ├── public/
│   ├── .env.local
│   ├── tailwind.config.ts
│   ├── next.config.ts
│   └── package.json
├── backend/           # Express API server
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   │   └── colors.ts
│   │   └── middleware/
│   │       └── cors.ts
│   ├── .env
│   └── package.json
├── .env.example
├── package.json       # Root workspace
└── README.md

---

## ⚙️ Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- A [Supabase](https://supabase.com) account and project

---

## 🛠️ Setup Instructions

### 1. Clone the repository

git clone https://github.com/your-org/colorpicker.git
cd colorpicker

### 2. Install all dependencies

npm install

This installs dependencies for both `frontend` and `backend` via npm workspaces.

---

### 3. Configure environment variables

#### Root `.env.example` → copy to both workspaces:

cp .env.example frontend/.env.local
cp .env.example backend/.env

Fill in all values (see `.env.example` for reference).

---

### 4. Set up Supabase

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run:

create table if not exists colors (
  id uuid default gen_random_uuid() primary key,
  hex text not null,
  r integer not null,
  g integer not null,
  b integer not null,
  h integer not null,
  s integer not null,
  l integer not null,
  name text,
  created_at timestamp with time zone default now()
);

3. Copy your **Project URL** and **anon public key** from:
   `Settings → API` into your `.env.local` and `.env` files.

---

### 5. Run the development servers

#### Option A — Run both simultaneously (recommended)

npm run dev

#### Option B — Run separately

**Frontend:**
cd frontend && npm install && npm run dev
> Runs at: http://localhost:3000

**Backend:**
cd backend && npm install && npm run dev
> Runs at: http://localhost:4000

---

## 🧪 Features

- 🎨 Interactive color picker with live preview
- 🔄 Real-time HEX / RGB / HSL format toggle
- 💾 Save colors to your personal palette (Supabase)
- 🗂️ Browse and delete saved color history
- 📋 One-click copy color values to clipboard
- 📱 Fully responsive with Tailwind CSS

---

## 🧰 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start both frontend + backend |
| `npm run dev:frontend` | Start Next.js only |
| `npm run dev:backend` | Start Express only |
| `npm run build` | Build the Next.js app |
| `npm run lint` | Lint all workspaces |

---

## 🔐 Environment Variables

See `.env.example` for all required variables.

---

## 📦 Deployment

- **Frontend:** Deploy to [Vercel](https://vercel.com) — connect your repo and add env vars
- **Backend:** Deploy to [Railway](https://railway.app) or [Render](https://render.com)
- **Database:** Supabase handles hosting automatically

---

## 🤝 Contributing

---

## 📄 License

MIT © SpecKAI