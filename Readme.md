# Finance Dashboard Backend API

A backend system for managing financial records with role-based access control, dashboard summaries, and secure authentication.

This project was built as part of a backend internship assignment.

---

# 🚀 Features

## Authentication & User Management

* User Registration
* User Login
* JWT Authentication
* Role Based Access Control

Roles:

* Viewer → View dashboard only
* Analyst → View financial records & dashboard
* Admin → Full access (users + records)

---

# 💰 Financial Records Management

Each financial record includes:

* Amount
* Type (Income / Expense)
* Category
* Date
* Notes
* Created By

Supported Operations:

* Create Record
* View Records
* Update Record
* Delete Record
* Filter Records

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

# 📁 Folder Structure

```
src/
 ├── controllers
 ├── middleware
 ├── models
 ├── routes
 ├── config
 └── index.js
```

---

# ⚙️ Installation

Clone the repository

```
git clone https://github.com/your-username/finance-dashboard-backend.git
```

Install dependencies

```
npm install
```

---

---


# 🔑 Authentication APIs

## Register User

POST `/auth/register`

Request Body:

```
{
  "name": "Admin",
  "email": "admin@test.com",
  "password": "123456",
  "role": "admin"
}
```

---

## Login

POST `/auth/login`

Response:

```
{
  "token": "jwt_token"
}
```

---

# 💰 Financial Records APIs

## Create Record

POST `/records`

Headers

```
Authorization: Bearer token
```

Request Body

```
{
  "amount": 5000,
  "type": "income",
  "category": "Salary",
  "notes": "Monthly salary"
}
```

---

## Get Records

GET `/records`

Filters

```
/records?type=expense
/records?category=food
/records?startDate=2024-01-01&endDate=2024-12-31
```

---

## Update Record

PUT `/records/:id`

---

## Delete Record

DELETE `/records/:id`

---

# 🔐 Role Based Access

| Role    | Access         |
| ------- | -------------- |
| Viewer  | View Dashboard |
| Analyst | View Records   |
| Admin   | Full Access    |

---

# 🧪 Testing

Use Postman or Thunder Client

Steps:

1. Register User
2. Login User
3. Copy Token
4. Use Token in headers
5. Access protected routes



# 👩‍💻 Author

Diksha Sisodia

Backend Internship Assignment

---

# ⭐ Notes

This project demonstrates:

* Backend architecture
* Role based access control
* Secure authentication
* Financial record management

---
