                                                 Chat & Video Calling App

A real-time web app for chatting and video calls, featuring screen sharing, message reactions, recording, and more — built with modern web technologies 
and around 20+ themes.

**Features**

. Real-time 1:1 chat with message replies

.Friend requests & user recommendations

.Auto-translate messages based on user language

.Video calling with:

.Screen sharing

.Recording support

.Emoji reactions

.Random avatars (choose random profile pictures)

.20+ Themes

**Tech Stack**

Frontend: React, Vite, TailwindCSS, StreamChat

Backend: Node.js, Express, Prisma ORM

Database: PostgreSQL

Authentication: JWT

Other: React Query, Socket.IO 

**Setup Instructions**

1. Clone the repo
   git clone https://github.com/yourusername/chat-video-app.git
   cd chat-video-app

2. Environment Variables
Backend (/backend/.env)
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/chatapp
JWT_SECRET=your_jwt_secret
PORT=3000
Frontend (/frontend/.env)
VITE_STREAM_API_KEY=your_stream_key
3. Install & Run
Backend
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm start
Frontend
cd frontend
npm install
npm run dev

**API Endpoints**

**Method**	**Route**                    **Description**

POST	    /api/auth/signup	               User signup
POST	    /api/auth/login	                 User login
POST	    /api/users/onboarding 	         Complete onboarding
GET	      /api/users/me                    Get logged-in user
POST	    /api/users/friend-request/:id	   Send friend request
GET	      /api/avatar/:seed	               Get avatar image

 **Future Scope**
 
Ideas for Future Improvements

. Voice messages

. Push notifications

. Language matching algorithm and auto translation of chats 

. Group chats

. Email authentication


