 # VIBELY - A CHAT AND VIDEO CALLING WEB APP 💬

A **real-time web app for chatting and video calling**, featuring screen sharing, message reactions, recording, and more — built with modern web technologies.
##  Features

- 🔐 Secure **OTP Email Verification** during sign-up
- 📞 Real-time **Video Calling**
- 💬 Instant **Text Chat** (1:1)
- 🧑‍🤝‍🧑 Friend Request System
- ✅ Onboarding Profile Setup
- 🌐 JWT-based authentication (with HTTP-only cookies)
- 📡 Socket.io/ WebRTC
- 🛡️ Protected Routes with Middleware
- 📬 Email service with Nodemailer & Gmail
---

## 🛠️ Tech Stack

### Frontend
- React.js + Vite
- React Router DOM
- Axios
- TailwindCSS / DaisyUI
- React Query
- Toast Notifications (react-hot-toast)

### Backend
- Express.js
- MongoDB with Mongoose
- JWT (HTTP-only Cookies)
- Nodemailer for Email OTP
- WebRTC / Socket.IO (for real-time features)

---

## 🔐 OTP Authentication Flow

1. User enters their email & clicks "Send OTP".
2. OTP is emailed using **Nodemailer + Gmail App Password**.
3. Backend stores OTP temporarily in MongoDB (`Otp` collection).
4. On form submit, OTP is verified.
5. If valid, user is created and logged in with JWT.

---

 ## Future Scope
 
### Ideas for Future Improvements:

- Voice messages

- Push notifications

- Language matching algorithm and auto translation of chats 

- Group chats




