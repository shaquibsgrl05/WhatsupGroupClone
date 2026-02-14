📘 Periskope Dashboard – Groups Management

A full-stack dashboard application for managing groups, projects, and labels with a modern responsive UI.

This project includes:

🔹 Frontend – Next.js (App Router) + Tailwind CSS

🔹 Backend – Node.js + Express + TypeScript

🔹 Deployed on Vercel


Frontend:
`https://whatsupgroupclone3-7gbp3ghks-shaquibsgrls-projects.vercel.app/groups`

🔗 [Frontend](https://whatsupgroupclone3-7gbp3ghks-shaquibsgrls-projects.vercel.app/groups)  

Backend:
`https://whatsupgroupclone5-kwivt13du-shaquibsgrls-projects.vercel.app/`

🔗 [Backend API](https://whatsupgroupclone5-kwivt13du-shaquibsgrls-projects.vercel.app/)

Backend Groups json Data :
`https://whatsupgroupclone5-kwivt13du-shaquibsgrls-projects.vercel.app/groups`

🔗 [Backend Groups Data](https://whatsupgroupclone5-kwivt13du-shaquibsgrls-projects.vercel.app/groups)




` 🧱 Tech Stack
Frontend
Next.js 13+ (App Router)
TypeScript
Tailwind CSS
Axios
date-fns
Lucide Icons
Backend
Node.js
Express.js
TypeScript
REST API
CORS enabled `

`✨ Features
📊 Groups Dashboard

List all groups
Search groups
Filter by project
Filter by labels
Scrollable table
Responsive layout
Animated sidebar
Right-side group details panel
Checkbox UI selection (no functionality)
Dynamic group avatar colors

🖥 UI Enhancements

Fully responsive design
Modern SaaS layout
Tailwind-based styling
Reusable components`

```
whatsappgroupclone/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── types/
│   │   ├── config/
│   │   └── server.ts
│   └── api/
│       └── index.ts
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── types/
│   └── ...
```


`🛠️ Running the Project Locally
1️⃣ Clone the repository
git clone `https://github.com/shaquibsgrl05/WhatsupGroupClone.git`
cd your-repo`

`🔹 Backend Setup
Navigate to whatsapp-groups-backend
cd `whatsapp-groups-backend`

Install dependencies
`npm install`

Run development server
`npm run dev`


Server will run on:

`http://localhost:8000`



`🔹 Frontend Setup
Navigate to frontend
cd `whatsapp-groups-frontend`

Install dependencies
npm install

Create environment file

Create .env

NEXT_PUBLIC_API_URL=http://localhost:8000

Run development server
`npm run dev`


Frontend runs on:

`http://localhost:3000/`

and `http://localhost:3000/groups` `

`🌐 Environment Variables
Frontend
NEXT_PUBLIC_API_URL=[http://localhost:8000]

Backend

If needed:

PORT=8000

📡 API Endpoints
Get All Groups
GET /groups

Get Group By ID
GET /groups/:id `


`🚀 Deployment (Vercel)
Backend

Deployed as Node Serverless Function

Uses vercel.json for routing

Frontend

Connected to backend using environment variables

Production build via Vercel`
