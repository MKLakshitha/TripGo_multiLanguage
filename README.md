# TripGo - Multi-Language Travel Booking Application

A full-stack travel booking application built with React, Node.js, Express, and MongoDB. 

## 🚀 Features

- Browse and search tours
- User authentication and authorization
- Book tours and manage bookings
- Responsive design
- Docker containerization
- Multi-language support (available in `freelancer-task` branch)

## 📋 Prerequisites

Before running this application, make sure you have:

- **Docker Desktop** installed on your system
  - Download from: https://www.docker.com/products/docker-desktop

## 🛠️ Running the Application

### Main Branch (Standard Version)

1. **Clone the repository**
   ```bash
   git clone https://github.com/MKLakshitha/TripGo_multiLanguage.git
   cd TripGo_multiLanguage
   ```

2. **Start the application**
   ```bash
   docker-compose up -d
   ```

3. **Access the application**
   - Open your browser and navigate to: `http://localhost:3000`

4. **Stop the application**
   ```bash
   docker-compose down
   ```

### Making Changes to the Code

If you make any changes to the code, follow these steps:

1. **Stop the running containers**
   ```bash
   docker-compose down
   ```

2. **Rebuild and start the containers**
   ```bash
   docker-compose up --build
   ```

### Multi-Language Feature

To access the multi-language version of the application:

1. **Stop the main application** (if running)
   ```bash
   docker-compose down
   ```

2. **Switch to the freelancer-task branch**
   ```bash
   git checkout freelancer-task
   ```

3. **Start the multi-language version**
   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   - Open your browser and navigate to: `http://localhost:3000`

> **Important:** Make sure the main application is completely stopped before running the multi-language version to avoid port conflicts.

## 🏗️ Project Structure

```
TripGo_multiLanguage/
├── backend/                 # Node.js/Express backend
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middlewares
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── server.js           # Entry point
├── frontend/               # React frontend
│   ├── public/             # Static assets
│   └── src/                # Source files
│       ├── components/     # React components
│       ├── pages/          # Page components
│       ├── hooks/          # Custom hooks
│       └── context/        # Context providers
└── docker-compose.yml      # Docker compose configuration
```

## 🔧 Technology Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### DevOps
- Docker
- Docker Compose

## 📝 Notes

- The application uses MongoDB as the database, which is included in the Docker Compose setup
- All environment variables are configured in the `.env` files in respective directories
- The frontend runs on port 3000
- The backend API runs on port 5000

## 🐛 Troubleshooting

### Port Already in Use
If you encounter port conflicts, make sure to stop any running instances:
```bash
docker-compose down
```

### Rebuilding Containers
If you face any issues, try rebuilding the containers:
```bash
docker-compose down
docker-compose up --build
```

### Viewing Logs
To view container logs:
```bash
docker-compose logs -f
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Kavindu Lakshitha**
- Email: kavindulakshitha84@gmail.com
- GitHub: [@MKLakshitha](https://github.com/MKLakshitha)
