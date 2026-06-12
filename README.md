# Asset-Management-and-Resource-Allocation-Platform

## Project Overview

The Smart Asset Management and Resource Allocation Platform is a full-stack web application designed to manage organizational assets efficiently.

The platform enables administrators to manage inventory, approve asset requests, issue and return resources, and monitor utilization through analytics dashboards.

Users can browse available assets, create booking requests, track approvals, and view borrowing history.

The system is designed to improve inventory visibility, reduce scheduling conflicts, and maintain accountability for shared resources.

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Role-Based Access Control

### Asset Management
- Add Assets
- Update Assets
- Delete Assets
- View Assets
- Inventory Tracking

### Booking Management
- Create Booking Requests
- View My Bookings
- Borrowing History

### Approval Workflow
- Approve Booking
- Reject Booking

### Asset Lifecycle
- Issue Assets
- Return Assets
- Automatic Inventory Updates

### Analytics Dashboard
- Dashboard Summary
- Most Utilized Assets
- Overdue Assets Tracking

## Technology Stack

### Frontend
- React.js
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### Tools
- Git
- GitHub
- Postman / Thunder Client

## System Architecture
![Architecture](ArchitectureDiagram.png)

## Database Design

The system uses three core collections:

### User
- name
- email
- password
- role

### Asset
- name
- category
- description
- totalQuantity
- availableQuantity
- status

### Booking
- userId
- assetId
- quantity
- startDate
- endDate
- status
- issuedAt
- returnedAt

## Entity Relationship Diagram
![ER Diagram](ERDiagram.png)

## Booking Workflow
![Workflow](WorkflowDiagram.png)

## API Endpoints

### Authentication
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile

### Assets
GET    /api/assets
POST   /api/assets/add
PUT    /api/assets/:id
DELETE /api/assets/:id

### Bookings
POST /api/bookings
GET  /api/bookings/my-bookings
GET  /api/bookings/history

### Admin
GET /api/bookings
PUT /api/bookings/:id/approve
PUT /api/bookings/:id/reject
PUT /api/bookings/:id/issue
PUT /api/bookings/:id/return

### Dashboard
GET /api/dashboard/summary
GET /api/dashboard/most-utilized-assets
GET /api/dashboard/overdue-assets

## Installation


### Clone Repository

git clone <repository-url>

### Backend Setup

cd backend

npm install

Create .env file

PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET

npm run dev

### Frontend Setup

cd frontend

npm install

npm run dev

## Running the Application

Backend:
npm run dev

Frontend:
npm run dev

Backend URL:
http://localhost:5000/api

Frontend URL:
http://localhost:5173

## Future Enhancements

- Email Notifications
- Audit Logs
- QR Code Based Asset Tracking
- Asset Health Monitoring
- Docker Deployment
- Advanced Analytics

## Team Members

Asset Management and Resource Allocation Platform

Team Members:
- Bhavana
- Poojitha
- Soumithri