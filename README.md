# Collaborative Study Room

A lightweight study tool for collaborative problem-solving with private answer pads and real-time reveal, built with Next.js, React, Tailwind CSS, and Firebase Firestore.

## MVP Features
- Landing page: Create or join a room with a username
- Room page: Shared problem prompt, private answer pad, reveal answers
- Real-time sync via Firestore (no login/auth for MVP)
- Clean, responsive UI with Tailwind CSS

## Tech Stack
- Next.js (pages router)
- React
- Tailwind CSS
- Firebase Firestore
- Vercel (for hosting)

## File Structure
```
StudyCore/
├── pages/
│   ├── index.tsx                # Landing page
│   └── room/
│       └── [roomId].tsx         # Dynamic room page
├── components/
│   ├── UsernameInput.tsx        # Username input component
│   ├── RoomIdInput.tsx          # Room ID input component
│   ├── QuestionPrompt.tsx       # Shared problem prompt
│   ├── PrivateAnswerPad.tsx     # Private answer textarea
│   ├── RevealButton.tsx         # Reveal answers button
│   ├── Timer.tsx                # Countdown timer (optional)
│   └── AnswerBoard.tsx          # Revealed answers grid/list
├── lib/
│   └── firebase.ts              # Firebase config/init
├── styles/
│   └── globals.css              # Tailwind CSS imports
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── package.json                 # Project dependencies/scripts
├── tsconfig.json                # TypeScript config
└── README.md                    # Project overview
``` 