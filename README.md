# 🛒 Mini SaaS Deal + Wallet API

A simplified backend API system simulating a SaaS deals platform with wallet-based purchases.
Built using **Node.js (Express.js)** and **MongoDB (Mongoose ORM)**.

---

## 🚀 Features

* User creation & wallet initialization
* Add & list SaaS deals
* Claim a deal (deduct wallet balance, validate funds)
* JWT-based authentication (Bonus)
* Filter deals by category (Bonus)
* Track claimed deals per user (Bonus)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT (Bonus)
* **Environment Variables:** dotenv

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/mini-saas-api.git
cd mini-saas-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

---

### 5. Start the Server

```bash
node app.js
```

Or 

```bash
npx nodemon app.js
```

---

## 📑 API Endpoints

### 🔐 **Auth**

| Method | Route        | Description                     |
| ------ | ------------ | ------------------------------- |
| POST   | `/api/login` | Login user & generate JWT token |

---

### 👤 **User**

| Method | Route           | Description                       |
| ------ | --------------- | --------------------------------- |
| POST   | `/api/user`     | Create a new user                 |
| GET    | `/api/user/:id` | Get user details + wallet balance |

Example User JSON:

```json
{
  "id": "u123",
  "name": "Ayush",
  "email": "ayush@example.com"
}
```

---

### 🎁 **Deals**

| Method | Route                            | Description                      |
| ------ | -------------------------------- | -------------------------------- |
| POST   | `/api/deals`                     | Add a new deal                   |
| GET    | `/api/deals`                     | List all deals                   |
| GET    | `/api/deals?category=<category>` | Filter deals by category (Bonus) |
| POST   | `/api/claim/:userId/:dealId`     | Claim a deal (JWT Protected)     |

Example Deal JSON:

```json
{
  "id": "d456",
  "title": "50% Off Notion Pro",
  "price": 20,
  "category": "Productivity",
  "partner": "Notion"
}
```

---

### 🛡️ **JWT Auth**

Add the following header to protected routes (claim route):

```
Authorization: Bearer <token>
```

---

## ✅ Example Claim Flow

1. Create a User → `/api/user`
2. Create a Deal → `/api/deals`
3. Login to get JWT → `/api/login`
4. Claim the deal → `/api/claim/:userId/:dealId` with `Authorization: Bearer <token>`

---


## 📂 Folder Structure

```
mini-saas-api/
├── controllers/        # Business logic
├── models/             # Mongoose schemas
├── routes/             # API route definitions
├── middlewares/        # JWT auth middleware
├── config/             # Database connection
├── app.js              # App entry point
├── .env                # Environment variables
└── package.json
```

