# StudyCore

A collaborative study app for real-time problem-solving, now powered by **PostgreSQL + Prisma** for robust, scalable data management.

---

## 🏗️ Project Architecture (PostgreSQL + Prisma)

![Architecture Diagram](assets/architecture-diagramv2.png)

- **Frontend:** Next.js (React) with Tailwind CSS for UI.
- **Backend:** Next.js API routes using Prisma ORM to query a PostgreSQL database.
- **Database:** PostgreSQL (local or cloud, e.g., Supabase, Railway, Neon).
- **Hosting:** Vercel (serverless deployment).
- **State:** React state for UI, Prisma for DB access, localStorage for persistent user identity.

---

## 🗄️ Data Model (Prisma)

### **Room**
- `id`: UUID (primary key)
- `createdAt`: DateTime
- `question`: String? (optional)
- `revealed`: Boolean
- `hostId`: UUID
- `answers`: One-to-many relation to Answer

### **Answer**
- `id`: UUID (primary key)
- `roomId`: UUID (foreign key to Room)
- `userId`: UUID
- `username`: String
- `text`: String
- `timestamp`: DateTime
- `revealed`: Boolean

---

## 🔄 Data Flow & Real-Time Polling

- **Room Creation:**
  - Frontend calls `/api/room` (POST) → API route uses Prisma to create a new Room in Postgres.
- **Room Fetching:**
  - Frontend calls `/api/room/[roomId]` (GET) → API route uses Prisma to fetch Room data.
- **Answer Submission:**
  - Frontend calls `/api/room/[roomId]/answers` (POST) → API route uses Prisma to create a new Answer.
- **Answer Fetching:**
  - Frontend calls `/api/room/[roomId]/answers` (GET) → API route uses Prisma to fetch all Answers for the room.
- **Reveal Answers:**
  - Host calls `/api/room/[roomId]` (PATCH) to set `revealed: true`.
- **Real-Time Sync:**
  - The frontend uses `setInterval` to poll the API every 3 seconds for room and answer updates, mimicking real-time collaboration.

---

## 📁 Project Structure

```
StudyCore/
├── pages/
│   ├── index.tsx                # Landing page
│   ├── api/
│   │   ├── room.ts              # Create room (POST)
│   │   └── room/
│   │       ├── [roomId].ts      # Get/update room (GET/PATCH)
│   │       └── [roomId]/answers.ts # Get/create answers (GET/POST)
│   └── room/
│       └── [roomId].tsx         # Room page (frontend logic)
├── components/                  # Reusable React components
├── lib/
│   └── prisma.ts                # Prisma client singleton
├── prisma/
│   └── schema.prisma            # Prisma schema (PostgreSQL models)
├── styles/
│   └── globals.css              # Tailwind CSS imports
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── package.json
└── README.md
```

---

## 📝 How It Works (Prisma + Polling)
- All data is stored in PostgreSQL, accessed via Prisma in Next.js API routes.
- The frontend never talks to the database directly—only via API routes.
- Real-time sync is achieved by polling the API every 3 seconds for room and answer updates.
- All business logic (room creation, answer submission, reveal) is handled server-side with Prisma.

---

## Tech Stack
- Next.js (React, API routes)
- Tailwind CSS
- PostgreSQL (Supabase, Railway, Neon, or local)
- Prisma ORM
- Vercel (hosting)

---

