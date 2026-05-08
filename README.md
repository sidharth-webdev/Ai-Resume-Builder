
# 📄 AI-Powered Resume Builder

A full-stack web application that allows users to create, edit, and download professional resumes with the help of Google Gemini AI. Users can build resumes from scratch or upload an existing PDF and let AI extract and structure the data automatically.

---

## 🚀 Live Demo

- **Frontend:** [resume-builder.vercel.app](https://resume-builder-mu-livid.vercel.app) 
- **Backend:** [resume-builder-server-a58j.onrender.com](https://resume-builder-server-a58j.onrender.com) 

---

## ✨ Features

- 🔐 **User Authentication** — Secure register/login with JWT authentication
- 🤖 **AI Content Enhancement** — Enhance professional summary and job descriptions using Google Gemini AI
- 📄 **PDF Resume Upload** — Upload existing PDF resume and AI automatically extracts and structures the data
- ✏️ **Real-time Resume Editing** — Edit personal info, experience, education, projects, and skills
- 🎨 **Multiple Templates** — Choose from Classic, Modern, Minimal, and Minimal Image templates
- 🎨 **Accent Color Picker** — Customize resume accent color
- 🖼️ **Profile Image Upload** — Upload profile photo with AI background removal via ImageKit
- 🌐 **Public/Private Toggle** — Make resume public and share via link
- 📥 **Download as PDF** — Download resume directly from the browser
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop

## 📸 Screenshots
<img width="1920" height="1080" alt="Screenshot 2026-05-09 005632" src="https://github.com/user-attachments/assets/f62c9a97-bc62-4f29-85e0-64110e69ab83" />
<img width="1920" height="1080" alt="Screenshot 2026-05-09 005400" src="https://github.com/user-attachments/assets/48348ec2-d0f9-40f2-816f-258464dca6b4" />
<img width="1920" height="1080" alt="Screenshot 2026-05-09 005223" src="https://github.com/user-attachments/assets/570ce582-66c9-44ab-86cb-1626c0dfc373" />
<img width="1920" height="1080" alt="Screenshot 2026-05-09 005055" src="https://github.com/user-attachments/assets/0168d77c-0e49-4523-8134-55d94bcc4958" />
<img width="1920" height="1080" alt="Screenshot 2026-05-09 003905" src="https://github.com/user-attachments/assets/1c27907a-9d22-40c2-98be-ac65ad030893" />
<img width="1920" height="1080" alt="Screenshot 2026-05-09 012310" src="https://github.com/user-attachments/assets/def0224d-d61f-4191-8049-a2aa064fb535" />
<img width="1920" height="1080" alt="Screenshot 2026-05-09 012321" src="https://github.com/user-attachments/assets/0257c9b4-693f-41e4-a4a5-0daab7f05e0e" />
<img width="1920" height="1080" alt="Screenshot 2026-05-09 013223" src="https://github.com/user-attachments/assets/906fc3ad-9f3c-4920-92f4-88b6a0ce22dc" />
<img width="1920" height="1080" alt="Screenshot 2026-05-09 013245" src="https://github.com/user-attachments/assets/e4b326d2-6cc0-45a3-9eb2-6e055b5d5c34" />


## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast
- Lucide React Icons
- Vite

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt
- Multer
- ImageKit
- Google Gemini AI (via OpenAI-compatible SDK)

---

## 📁 Project Structure

```
resume-builder/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── features/
│   │   │   │   └── authSlice.js
│   │   │   └── store.js
│   │   ├── components/
│   │   │   ├── PersonalInfoForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   ├── EducationForm.jsx
│   │   │   ├── ProjectForm.jsx
│   │   │   ├── SkillsForm.jsx
│   │   │   ├── ProfessionalSummaryForm.jsx
│   │   │   ├── ResumePreview.jsx
│   │   │   ├── TemplateSelector.jsx
│   │   │   └── ColorPicker.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ResumeBuilder.jsx
│   │   │   └── Preview.jsx
│   │   └── configs/
│   │       └── api.js
│   └── package.json
│
└── server/
    ├── controllers/
    │   ├── userController.js
    │   ├── resumeController.js
    │   └── aiController.js
    ├── models/
    │   ├── User.js
    │   └── Resume.js
    ├── routes/
    │   ├── userRoutes.js
    │   ├── resumeRoutes.js
    │   └── aiRoutes.js
    ├── middlewares/
    │   └── authMiddleware.js
    ├── configs/
    │   ├── ai.js
    │   ├── db.js
    │   ├── imageKit.js
    │   └── multer.js
    └── server.js
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Google Gemini API key
- ImageKit account

### 1. Clone the repository
```bash
git clone https://github.com/sidharth-webdev/Resume-Builder.git
cd resume-builder
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:
```env
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_uri
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
OPENAI_API_KEY=your_gemini_api_key
OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
OPENAI_MODEL=gemini-2.0-flash
```

Start the server:
```bash
npm run server
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder:
```env
VITE_BASE_URL=http://localhost:3000
```

Start the frontend:
```bash
npm run dev
```

---

## 🔌 API Endpoints

### User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register new user |
| POST | `/api/users/login` | Login user |
| GET | `/api/users/data` | Get logged in user data |
| GET | `/api/users/resumes` | Get all user resumes |

### Resume Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/resumes/create` | Create new resume |
| PUT | `/api/resumes/update` | Update resume |
| DELETE | `/api/resumes/delete/:resumeId` | Delete resume |
| GET | `/api/resumes/get/:resumeId` | Get resume by ID |
| GET | `/api/resumes/public/:resumeId` | Get public resume |

### AI Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/enhance-pro-sum` | Enhance professional summary |
| POST | `/api/ai/enhance-job-desc` | Enhance job description |
| POST | `/api/ai/upload-resume` | Upload and parse PDF resume |

---

## 🚢 Deployment

- **Frontend** deployed on [Vercel](https://resume-builder-mu-livid.vercel.app) 
- **Backend** deployed on [Render](https://resume-builder-server-a58j.onrender.com) 


## 👨‍💻 Author

**Sidharth Sankar Pradhan**
- GitHub: [@sidharth-webdev](https://github.com/sidharth-webdev)
- Email: shidharthpradhan999@gmail.com


## 📸 Screenshots

